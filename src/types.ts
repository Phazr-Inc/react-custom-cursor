import type { ReactNode } from 'react';

export type CursorVariant =
  | 'default'
  | 'link'
  | 'text'
  | 'input'
  | 'sayHi'
  | 'custom';

export interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  customConfig?: CustomCursorConfig;
  setCustomConfig?: (config: CustomCursorConfig) => void;
}

export interface CustomCursorConfig {
  size?: number;
  backgroundColor?: string;
  mixBlendMode?: string;
  text?: string;
  textColor?: string;
  fontSize?: string;
  fontFamily?: string;
}

export interface CursorProviderProps {
  children: ReactNode;
  className?: string;
  enableOnTouch?: boolean;
}

export interface CursorProps {
  className?: string;
  springConfig?: {
    damping?: number;
    stiffness?: number;
  };
}
