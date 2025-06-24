# @phazr/react-custom-cursor

[![npm version](https://img.shields.io/npm/v/@phazr/react-custom-cursor.svg)](https://www.npmjs.com/package/@phazr/react-custom-cursor)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A lightweight and highly customizable React component for creating unique and interactive cursor experiences with full SSR support.

[GitHub Repo](https://github.com/Phazr-Inc/react-custom-cursor)

## Features

- ✅ **SSR Compatible** - Works seamlessly with Next.js, Remix, Gatsby, and other SSR frameworks
- ✅ **TypeScript Support** - Full type safety out of the box
- ✅ **Customizable** - Define your own cursor variants and styles
- ✅ **Smooth Animations** - Powered by Framer Motion
- ✅ **Zero Config** - Works out of the box with sensible defaults
- ✅ **Accessibility** - Automatically hides on touch devices and respects user preferences
- ✅ **Lightweight** - Minimal bundle size impact

## Installation

```bash
npm install @phazr/react-custom-cursor motion
# or
yarn add @phazr/react-custom-cursor motion
# or
pnpm add @phazr/react-custom-cursor motion
```

## Quick Start

### Basic Usage

```tsx
import { CursorProvider, Cursor } from '@phazr/react-custom-cursor';
// Make sure import css also unless its wont work as expected
import '@phazr/react-custom-cursor/cursor.css';
function App() {
  return (
    <CursorProvider>
      <div>Your app content</div>
      <Cursor />
    </CursorProvider>
  );
}
```

### Next.js App Router Example

```tsx
// app/layout.tsx
import { CursorProvider, Cursor } from '@phazr/react-custom-cursor';
// Make sure import css also unless its wont work as expected
import '@phazr/react-custom-cursor/cursor.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
```

### Next.js Pages Router Example

```tsx
// pages/_app.tsx
import { CursorProvider, Cursor } from '@phazr/react-custom-cursor';
// Make sure import css also unless its wont work as expected
import '@phazr/react-custom-cursor/cursor.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
      <Cursor />
    </CursorProvider>
  );
}
```

## Usage Examples

### Using Built-in Cursor Variants

```tsx
import { useCursor } from '@phazr/react-custom-cursor';

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
```

### Custom Cursor Configuration

```tsx
import { useCursor } from '@phazr/react-custom-cursor';

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
```

### Custom Spring Configuration

```tsx
import { Cursor } from '@phazr/react-custom-cursor';
// Make sure import css also unless its wont work as expected
import '@phazr/react-custom-cursor/cursor.css';
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
```

### Touch Device Configuration

```tsx
import { CursorProvider } from '@phazr/react-custom-cursor';
// Make sure import css also unless its wont work as expected
import '@phazr/react-custom-cursor/cursor.css';
function App() {
  return (
    <CursorProvider enableOnTouch={true}>
      <div>Your app content</div>
      <Cursor />
    </CursorProvider>
  );
}
```

## API Reference

### CursorProvider

The main provider component that should wrap your application.

```tsx
interface CursorProviderProps {
  children: ReactNode;
  className?: string;
  enableOnTouch?: boolean; // Enable cursor on touch devices (default: false)
}
```

### Cursor

The cursor component that renders the actual cursor.

```tsx
interface CursorProps {
  className?: string;
  springConfig?: {
    damping?: number; // Default: 28
    stiffness?: number; // Default: 500
  };
}
```

### useCursor

Hook to control cursor variants and configuration.

```tsx
interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  customConfig?: CustomCursorConfig;
  setCustomConfig?: (config: CustomCursorConfig) => void;
}

const { variant, setVariant, customConfig, setCustomConfig } = useCursor();
```

### Types

```tsx
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
```

## Built-in Variants

- `default` - Standard cursor (16x16px, white, difference blend mode)
- `link` - Larger cursor for links (64x64px, white, difference blend mode)
- `text` - Smaller cursor for text (8x8px, white, difference blend mode)
- `input` - Hidden cursor for inputs (invisible)
- `sayHi` - Special cursor with "Say Hi" text (90x90px)
- `custom` - Fully customizable cursor using `setCustomConfig()`

## Advanced Usage

### Creating Interactive Hover Effects

```tsx
import { useCursor } from '@phazr/react-custom-cursor';

function Portfolio() {
  const { setVariant, setCustomConfig } = useCursor();

  const projects = [
    { id: 1, title: 'Project A', action: 'View' },
    { id: 2, title: 'Project B', action: 'Explore' },
    { id: 3, title: 'Project C', action: 'Discover' },
  ];

  const handleProjectHover = (action: string) => {
    setCustomConfig({
      size: 80,
      backgroundColor: '#000000',
      text: action,
      textColor: '#ffffff',
      fontSize: '16px',
      mixBlendMode: 'normal',
    });
    setVariant('custom');
  };

  return (
    <div className="portfolio">
      {projects.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => handleProjectHover(project.action)}
          onMouseLeave={() => setVariant('default')}
          className="project-card"
        >
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
```

## CSS Customization

The package includes default styles that you can override:

```css
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
```

## Troubleshooting

### Cursor Not Appearing

1. Make sure you've wrapped your app with `CursorProvider`
2. Ensure you've included the `<Cursor />` component
3. Check that you're not on a touch device (cursor is hidden by default)

### Performance Issues

If you experience performance issues:

1. Adjust the spring configuration to reduce stiffness
2. Limit the frequency of variant changes
3. Use `React.memo` for components that frequently change cursor variants

### SSR/Hydration Issues

The package automatically handles SSR by:

- Detecting touch devices server-side and client-side
- Hiding cursor on touch devices by default
- Using proper `useEffect` hooks for client-side only code

### Touch Devices

By default, the cursor is hidden on touch devices. To enable it:

```tsx
<CursorProvider enableOnTouch={true}>
  <YourApp />
</CursorProvider>
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. See [`CONTRIBUTORS.md`](CONTRIBUTORS.md) for a list of contributors.

## License

MIT © Phazr Inc

---

For more information, visit the [GitHub repository](https://github.com/Phazr-Inc/react-custom-cursor).
