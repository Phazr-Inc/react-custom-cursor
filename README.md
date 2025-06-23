# @phazr/react-custom-cursor

A lightweight and customizable React component that replaces the default cursor with a stylish, animated cursor.

[![npm](https://img.shields.io/npm/v/@phazr/react-custom-cursor)](https://www.npmjs.com/package/@phazr/react-custom-cursor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@phazr/react-custom-cursor)](https://bundlephobia.com/package/@phazr/react-custom-cursor)
[![npm downloads](https://img.shields.io/npm/dt/@phazr/react-custom-cursor)](https://www.npmjs.com/package/@phazr/react-custom-cursor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Open Issues](https://img.shields.io/github/issues-raw/phazrinc/react-custom-cursor)](https://github.com/phazrinc/react-custom-cursor/issues)

## Installation

You can install the package using npm, pnpm, or yarn:

```bash
npm install @phazr/react-custom-cursor
```

```bash
pnpm add @phazr/react-custom-cursor
```

```bash
yarn add @phazr/react-custom-cursor
```

## Usage

To use the custom cursor in your application, you need to wrap your root component with the `CursorProvider` and include the `Cursor` component. **You no longer need to import the CSS file separately; styles are included automatically.**

**Note:** All components must be imported as named imports. Default imports are not supported.

Here's an example of how to set it up in a Next.js `layout.tsx` file:

```jsx
// app/layout.tsx
import { CursorProvider, Cursor } from "@phazr/react-custom-cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          <Cursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
```

## API

> **Note:** All exports from this package are named. Please use named imports as shown in the examples.

### `CursorProvider`

The `CursorProvider` is a component that wraps your application to provide the context for the custom cursor. It should be placed at the root of your component tree.

### `Cursor`

The `Cursor` component renders the custom cursor. It accepts the following props:

- `variants`: An object to customize the styles of the default cursor variants (`default`, `link`, `text`, `input`).
- `customVariant`: An object to define a new, custom variant with its own styles and text content.

Here's an example of how to customize the cursor:

```jsx
// app/layout.tsx
import {
  CursorProvider,
  Cursor,
  CursorVariants,
  CustomVariant,
} from "@phazr/react-custom-cursor";

const customVariants: CursorVariants = {
  default: {
    backgroundColor: "#ff0000",
  },
  link: {
    backgroundColor: "#0000ff",
    mixBlendMode: "screen",
  },
};

const customVariant: CustomVariant = {
  name: "sayHi",
  text: (
    <>
      <span>Say</span>
      <span>Hi</span>
    </>
  ),
  height: 90,
  width: 90,
  backgroundColor: "#fff",
  mixBlendMode: "difference",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          <Cursor variants={customVariants} customVariant={customVariant} />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
```

### `useCursor()`

The `useCursor` hook allows you to change the cursor's appearance from any component within the `CursorProvider`.

```jsx
import { useCursor } from "@phazr/react-custom-cursor";

function MyComponent() {
  const { setVariant, setText } = useCursor();

  return (
    <div
      onMouseEnter={() => setVariant("link")}
      onMouseLeave={() => setVariant("default")}
    >
      Hover over me!
    </div>
  );
}
```

#### `setVariant(variant: string)`

A function to change the visual style of the cursor. The available variants are:

- `default`: The standard cursor style.
- `link`: A style for hoverable elements, like links or buttons.

#### `setText(text: string | null)`

A function to display text within the cursor. For example, you can use this to show "View" or "Drag" inside the cursor when hovering over certain elements. Set to `null` or an empty string to remove the text.

---

## FAQ

### Why am I getting `Module not found: Can't resolve '@phazr/react-custom-cursor/cursor.css'`?

You no longer need to import the CSS file separately. The styles are included automatically when you import from `@phazr/react-custom-cursor`.

### Why do I get `Module has no exported member 'Cursor'`?

Make sure you are using **named imports**:

```js
import { Cursor } from "@phazr/react-custom-cursor";
```

Default imports are not supported.

### Is this package compatible with React 18, 19 and Next.js 14, 15?

Yes! The package is tested and works with React 18, 19 and Next.js 14, 15.

### Can I use this in a TypeScript project?

Yes, full TypeScript support is provided.

---

## Troubleshooting

- **Cursor not appearing:**

  - Make sure you have wrapped your app with `CursorProvider` and included the `Cursor` component.
  - Ensure you are not overriding the cursor styles elsewhere in your app.

- **TypeScript errors about missing exports:**

  - Use only named imports for all components.

- **Styles not applied:**

  - You do not need to import any CSS manually. If you are using a custom build setup, ensure it supports CSS imports in JS/TS files.

- **Still having issues?**
  - Check the [open issues](https://github.com/phazrinc/react-custom-cursor/issues) or open a new one for help.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

For more information, see our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## More Advanced Examples

### Animated Cursor Transitions with motion/react

You can use motion/react's `animate` prop or variants for more complex cursor animations:

```jsx
import { CursorProvider, Cursor } from "@phazr/react-custom-cursor";
import { motion } from "motion/react";

const animatedVariants = {
  default: { scale: 1, backgroundColor: "#fff" },
  link: { scale: 2, backgroundColor: "#0af" },
  special: { scale: 1.5, backgroundColor: "#fa0" },
};

function AnimatedCursor() {
  return <Cursor variants={animatedVariants} />;
}

export default function App({ children }) {
  return (
    <CursorProvider>
      <AnimatedCursor />
      {children}
    </CursorProvider>
  );
}
```

### Theming Support (Dark/Light Mode)

You can dynamically change cursor styles based on your app's theme:

```jsx
import { CursorProvider, Cursor, CursorVariants } from "@phazr/react-custom-cursor";
import { useTheme } from "next-themes";

function ThemedCursor() {
  const { theme } = useTheme();
  const variants: CursorVariants = theme === "dark"
    ? { default: { backgroundColor: "#fff" } }
    : { default: { backgroundColor: "#222" } };
  return <Cursor variants={variants} />;
}

export default function App({ children }) {
  return (
    <CursorProvider>
      <ThemedCursor />
      {children}
    </CursorProvider>
  );
}
```

### Integration with Next.js Dynamic Routes

You can use the cursor in dynamic layouts or pages in Next.js:

```jsx
// app/layout.tsx or app/[...slug]/layout.tsx
import { CursorProvider, Cursor } from "@phazr/react-custom-cursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          <Cursor />
          {children}
        </CursorProvider>
      </body>
    </html>
  );
}
```
