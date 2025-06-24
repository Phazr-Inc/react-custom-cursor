export default function Customization() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Customization</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CSS Customization</h2>
        <p>You can override the default styles using these CSS classes:</p>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
/* Override cursor container styles */
.phazr-cursor-container {
  /* Your custom styles */
}

/* Override cursor text styles */
.phazr-cursor-text {
  /* Your custom styles */
}

/* Override "Say Hi" variant styles */
.phazr-cursor-sayhi {
  /* Your custom styles */
}
`}</pre>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Custom Variants</h2>
        <p>
          Use <code className="font-mono">setCustomConfig</code> and{" "}
          <code className="font-mono">setVariant('custom')</code> to create your
          own cursor styles and behaviors.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Advanced Usage</h2>
        <p>
          See the{" "}
          <a
            href="/examples"
            className="underline text-blue-700 dark:text-blue-300"
          >
            Examples
          </a>{" "}
          page for interactive demos and advanced patterns.
        </p>
      </section>
    </div>
  );
}
