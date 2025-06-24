export default function Examples() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Examples</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Using Built-in Cursor Variants
        </h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
import { useCursor } from '@phazr/custom-cursor';

function InteractiveElements() {
  const { setVariant } = useCursor();

  return (
    <div>
      <a
        href="#"
        onMouseEnter={() => setVariant('link')}
        onMouseLeave={() => setVariant('default')}
      >
        Hover me for link cursor!
      </a>

      <p
        onMouseEnter={() => setVariant('text')}
        onMouseLeave={() => setVariant('default')}
      >
        Hover me for text cursor!
      </p>

      <input
        type="text"
        onFocus={() => setVariant('input')}
        onBlur={() => setVariant('default')}
        placeholder="Input field"
      />

      <button
        onMouseEnter={() => setVariant('sayHi')}
        onMouseLeave={() => setVariant('default')}
      >
        Say Hi Button
      </button>
    </div>
  );
}
`}</pre>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Custom Cursor Configuration
        </h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
import { useCursor } from '@phazr/custom-cursor';

function CustomCursorExample() {
  const { setVariant, setCustomConfig } = useCursor();

  const handleCustomCursor = () => {
    setCustomConfig({
      size: 60,
      backgroundColor: '#ff0000',
      mixBlendMode: 'normal',
      text: 'Click',
      textColor: '#ffffff',
      fontSize: '14px',
      fontFamily: 'Arial, sans-serif',
    });
    setVariant('custom');
  };

  return (
    <div
      onMouseEnter={handleCustomCursor}
      onMouseLeave={() => setVariant('default')}
      style={{ padding: '20px', backgroundColor: '#f0f0f0' }}
    >
      Hover for custom cursor with text!
    </div>
  );
}
`}</pre>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Custom Spring Configuration
        </h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
import { Cursor } from '@phazr/custom-cursor';
import '@phazr/custom-cursor/cursor.css';
function App() {
  return (
    <CursorProvider>
      <div>Your app content</div>
      <Cursor
        springConfig={{
          damping: 20,
          stiffness: 300,
        }}
      />
    </CursorProvider>
  );
}
`}</pre>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Touch Device Configuration
        </h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
import { CursorProvider } from '@phazr/custom-cursor';
import '@phazr/custom-cursor/cursor.css';
function App() {
  return (
    <CursorProvider enableOnTouch={true}>
      <div>Your app content</div>
      <Cursor />
    </CursorProvider>
  );
}
`}</pre>
      </section>
    </div>
  );
}
