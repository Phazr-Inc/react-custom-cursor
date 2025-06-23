import * as React from "react";
import { CursorContext } from "./CursorContext";

export function useCursor() {
  const context = React.useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
