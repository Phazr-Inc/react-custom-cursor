# react-custom-cursor

A lightweight and customizable React component that replaces the default cursor with a stylish, animated cursor.

[![npm](https://img.shields.io/npm/v/react-custom-cursor)](https://www.npmjs.com/package/react-custom-cursor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-custom-cursor)](https://bundlephobia.com/package/react-custom-cursor)
[![npm downloads](https://img.shields.io/npm/dt/react-custom-cursor)](https://www.npmjs.com/package/react-custom-cursor)

## Installation

You can install the package using npm, pnpm, or yarn:

```bash
npm install react-custom-cursor
```

```bash
pnpm add react-custom-cursor
```

```bash
yarn add react-custom-cursor
```

## Usage

To use the custom cursor in your application, you need to wrap your root component with the `CursorProvider` and include the `Cursor` component. You also need to import the stylesheet.

Here's an example of how to set it up in a Next.js `layout.tsx` file:

```jsx
// app/layout.tsx
import { CursorProvider, Cursor } from "react-custom-cursor";
import "react-custom-cursor/dist/cursor.css";

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
} from "react-custom-cursor";
import "react-custom-cursor/dist/cursor.css";

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
import { useCursor } from "react-custom-cursor";

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

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

For more information, see our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
