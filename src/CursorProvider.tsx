"use client";

import * as React from "react";
import { CursorContext } from "./CursorContext";

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = React.useState("default");

  React.useEffect(() => {
    if (variant !== "input") {
      document.body.classList.add("!cursor-none");
    } else {
      document.body.classList.remove("!cursor-none");
    }
  }, [variant]);

  const setVariantCallback = React.useCallback((newVariant: string) => {
    setVariant(newVariant);
  }, []);

  return (
    <CursorContext.Provider value={{ variant, setVariant: setVariantCallback }}>
      {children}
    </CursorContext.Provider>
  );
}
