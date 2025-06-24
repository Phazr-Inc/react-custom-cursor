export default function Contributing() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contributing</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How to Contribute</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Fork the repository and create a new branch for your changes.</li>
          <li>
            Install dependencies with{' '}
            <code className="font-mono">pnpm install</code>.
          </li>
          <li>
            Run the docs site locally with{' '}
            <code className="font-mono">pnpm dev</code>.
          </li>
          <li>Make your changes and ensure the site builds and runs.</li>
          <li>Open a Pull Request with a clear description of your changes.</li>
        </ol>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Code Style</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use Prettier and ESLint for formatting and linting.</li>
          <li>Use Tailwind CSS utility classes for styling.</li>
          <li>Prefer functional, composable React components.</li>
          <li>Ensure all colors and UI elements are accessible.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Questions?</h2>
        <p>
          Open an issue or start a discussion on{' '}
          <a
            href="https://github.com/phazr-xyz/react-custom-cursor"
            className="underline text-blue-700 dark:text-blue-300"
          >
            GitHub
          </a>
          !
        </p>
      </section>
    </div>
  );
}
