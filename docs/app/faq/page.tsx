export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cursor Not Appearing?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Make sure you've wrapped your app with{' '}
            <code className="font-mono">CursorProvider</code>.
          </li>
          <li>
            Ensure you've included the{' '}
            <code className="font-mono">&lt;Cursor /&gt;</code> component.
          </li>
          <li>
            Check that you're not on a touch device (cursor is hidden by
            default).
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Performance Issues?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Adjust the spring configuration to reduce stiffness.</li>
          <li>Limit the frequency of variant changes.</li>
          <li>
            Use <code className="font-mono">React.memo</code> for components
            that frequently change cursor variants.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SSR/Hydration Issues?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            The package automatically handles SSR by detecting touch devices
            server-side and client-side.
          </li>
          <li>Cursor is hidden on touch devices by default.</li>
          <li>
            Uses proper <code className="font-mono">useEffect</code> hooks for
            client-side only code.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Touch Devices</h2>
        <p>By default, the cursor is hidden on touch devices. To enable it:</p>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`<CursorProvider enableOnTouch={true}>
  <YourApp />
</CursorProvider>`}</pre>
      </section>
    </div>
  );
}
