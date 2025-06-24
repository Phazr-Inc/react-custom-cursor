"use client";
export { CursorProvider, useCursor } from "./client";
export { Cursor } from "./client";
export type {
  CursorVariant,
  CursorContextType,
  CustomCursorConfig,
  CursorProviderProps,
  CursorProps,
} from "./types";

// Import CSS for side effects
import "./cursor.css";
