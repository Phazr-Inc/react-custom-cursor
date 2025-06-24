import PageHeader from '../../components/PageHeader';

export default function GettingStarted() {
  return (
    <div className="min-h-full">
      <PageHeader
        title="Getting Started"
        description="Get up and running with @phazr/react-custom-cursor in your React application."
      />
      <div className="max-w-3xl mx-auto px-4 pb-12">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Installation</h2>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="mb-2">Install the package and its peer dependency:</p>
            <pre className="bg-gray-900 text-white dark:bg-black rounded-md px-4 py-3 font-mono text-sm overflow-x-auto">
              pnpm add @phazr/react-custom-cursor motion
            </pre>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="mb-2">
              Wrap your app with{' '}
              <code className="font-mono bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">
                CursorProvider
              </code>{' '}
              and add{' '}
              <code className="font-mono bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">
                &lt;Cursor /&gt;
              </code>
              :
            </p>
            <pre className="bg-gray-900 text-white dark:bg-black rounded-md px-4 py-3 font-mono text-sm overflow-x-auto mt-2">{`
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
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Next.js Setup</h2>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="mb-2">
              For Next.js App Router, add the provider and cursor in your{' '}
              <code className="font-mono bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm">
                layout.tsx
              </code>
              :
            </p>
            <pre className="bg-gray-900 text-white dark:bg-black rounded-md px-4 py-3 font-mono text-sm overflow-x-auto mt-2">{`
import { CursorProvider, Cursor } from '@phazr/react-custom-cursor';
import '@phazr/react-custom-cursor/cursor.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          {children}
          <Cursor />
        </CursorProvider>
      </body>
    </html>
  );
}
`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
}
