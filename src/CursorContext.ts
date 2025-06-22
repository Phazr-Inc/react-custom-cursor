import { createContext } from "react";

export const CursorContext = createContext<
  | {
      variant: string;
      setVariant: (variant: string) => void;
    }
  | undefined
>(undefined);
