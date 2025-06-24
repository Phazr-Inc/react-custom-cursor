import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 dark:from-[#18181b] dark:to-[#23272f] text-gray-900 dark:text-white flex flex-col">
      <header className="w-full py-8 flex flex-col items-center gap-2 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={48}
          height={48}
          className="dark:invert"
        />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
          @phazr/react-custom-cursor
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center mt-1">
          A lightweight, customizable React cursor component with SSR support,
          smooth animations, and accessibility out of the box.
        </p>
        <div className="mt-4 flex gap-2">
          <code className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 rounded font-mono text-sm">
            pnpm add @phazr/react-custom-cursor motion
          </code>
        </div>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12 flex flex-col gap-16">
        <div className="mb-8 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 text-blue-900 dark:text-blue-200 flex items-center gap-3">
          <span className="text-2xl">🤝</span>
          <span>
            <b>Open Source:</b> Want to contribute? See our{' '}
            <a
              href="https://github.com/phazr-inc/react-custom-cursor/blob/main/CONTRIBUTING.md"
              className="underline hover:text-blue-600"
            >
              contributing guide
            </a>{' '}
            or{' '}
            <a
              href="https://github.com/phazr-inc/react-custom-cursor"
              className="underline hover:text-blue-600"
            >
              GitHub repo
            </a>
            .
          </span>
        </div>
        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Feature
              icon="🖱️"
              title="SSR Compatible"
              desc="Works with Next.js, Remix, Gatsby, and more."
            />
            <Feature
              icon="⚡"
              title="Smooth Animations"
              desc="Powered by Framer Motion for buttery cursor movement."
            />
            <Feature
              icon="🎨"
              title="Customizable"
              desc="Define your own cursor variants and styles easily."
            />
            <Feature
              icon="🧩"
              title="TypeScript Support"
              desc="Full type safety and autocompletion."
            />
            <Feature
              icon="🦾"
              title="Accessibility"
              desc="Hides on touch devices, respects user preferences."
            />
            <Feature
              icon="📦"
              title="Lightweight"
              desc="Minimal bundle size impact."
            />
          </div>
        </section>
        {/* Quick Start */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Quick Start</h2>
          <ol className="list-decimal list-inside space-y-3 text-base">
            <li>
              <span>Install the package:</span>
              <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-1 font-mono text-sm">
                pnpm add @phazr/react-custom-cursor motion
              </pre>
            </li>
            <li>
              <span>
                Wrap your app with{' '}
                <code className="font-mono">CursorProvider</code> and add{' '}
                <code className="font-mono">&lt;Cursor /&gt;</code>:
              </span>
              <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-1 font-mono text-sm whitespace-pre">{`
import { CursorProvider, Cursor } from '@phazr/react-custom-cursor';
import '@phazr/react-custom-cursor/cursor.css';

function App() {
  return (
    <CursorProvider>
      <div>Your app content</div>
      <Cursor />
    </CursorProvider>
  );
}
`}</pre>
            </li>
          </ol>
        </section>
      </main>
      <footer className="w-full py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md">
        MIT © Phazr Inc &middot;{' '}
        <a
          href="https://github.com/phazr-inc/react-custom-cursor"
          className="underline hover:text-blue-600"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-[#23272f] rounded-lg shadow-sm p-5 border border-gray-100 dark:border-gray-800">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="font-semibold text-lg mb-1 text-center">{title}</span>
      <span className="text-gray-600 dark:text-gray-300 text-center text-sm">
        {desc}
      </span>
    </div>
  );
}
