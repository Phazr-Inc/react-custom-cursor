import * as React from "react";

export const CursorContext = React.createContext<
  | {
      variant: string;
      setVariant: (variant: string) => void;
    }
  | undefined
>(undefined);
