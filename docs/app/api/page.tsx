export default function APIReference() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">API Reference</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CursorProvider</h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
interface CursorProviderProps {
  children: ReactNode;
  className?: string;
  enableOnTouch?: boolean; // Enable cursor on touch devices (default: false)
}
`}</pre>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cursor</h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
interface CursorProps {
  className?: string;
  springConfig?: {
    damping?: number; // Default: 28
    stiffness?: number; // Default: 500
  };
}
`}</pre>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">useCursor</h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  customConfig?: CustomCursorConfig;
  setCustomConfig?: (config: CustomCursorConfig) => void;
}
`}</pre>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Types</h2>
        <pre className="bg-gray-900 text-white rounded px-3 py-2 mt-2 font-mono text-sm whitespace-pre">{`
type CursorVariant = 'default' | 'link' | 'text' | 'input' | 'sayHi' | 'custom';

interface CustomCursorConfig {
  size?: number;
  backgroundColor?: string;
  mixBlendMode?: string;
  text?: string;
  textColor?: string;
  fontSize?: string;
  fontFamily?: string;
}
`}</pre>
      </section>
    </div>
  );
}
