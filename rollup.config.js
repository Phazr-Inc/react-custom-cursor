import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import { visualizer } from "rollup-plugin-visualizer";

// Custom plugin to copy CSS
const copyCSS = () => ({
  name: "copy-css",
  generateBundle() {
    // Ensure dist directory exists
    if (!existsSync("dist")) {
      mkdirSync("dist", { recursive: true });
    }

    // Copy CSS file
    if (existsSync("src/cursor.css")) {
      copyFileSync("src/cursor.css", "dist/cursor.css");
      console.log("✅ CSS file copied to dist/cursor.css");
    }
  },
});

// Custom plugin to preserve 'use client' directive
const preserveUseClient = () => ({
  name: "preserve-use-client",
  renderChunk(code, chunk) {
    // Check if any of the modules in this chunk had 'use client'
    const hasUseClient = Object.keys(chunk.modules).some((id) => {
      const moduleInfo = this.getModuleInfo(id);
      return (
        moduleInfo &&
        moduleInfo.code &&
        moduleInfo.code.includes("'use client'")
      );
    });

    if (hasUseClient) {
      return {
        code: `'use client';\n${code}`,
        map: null, // disables sourcemap for this chunk, avoids the warning
      };
    }
    return code;
  },
});

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.mjs",
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      rootDir: "src",
      exclude: ["**/*.test.*", "**/*.spec.*", "playground/**/*"],
      // Preserve directives
      compilerOptions: {
        verbatimModuleSyntax: true,
      },
    }),
    postcss({
      extract: false,
      inject: false,
      minimize: true,
    }),
    preserveUseClient(), // Add the custom plugin
    copyCSS(),
    visualizer({ open: true }),
  ],
  external: ["react", "react-dom", "motion", "react/jsx-runtime"],
};
