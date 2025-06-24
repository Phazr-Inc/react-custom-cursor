"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  CursorContextType,
  CursorVariant,
  CustomCursorConfig,
} from "./types";

interface CursorProviderProps {
  children: ReactNode;
  className?: string;
  enableOnTouch?: boolean;
}

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

export function CursorProvider({
  children,
  className = "",
  enableOnTouch = false,
}: CursorProviderProps) {
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [customConfig, setCustomConfig] = useState<CustomCursorConfig>();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0,
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice && !enableOnTouch) {
      return;
    }

    if (variant !== "input") {
      document.body.classList.add("phazr-cursor-none");
    } else {
      document.body.classList.remove("phazr-cursor-none");
    }

    return () => {
      document.body.classList.remove("phazr-cursor-none");
    };
  }, [variant, isTouchDevice, enableOnTouch]);

  const setVariantCallback = useCallback((newVariant: CursorVariant) => {
    setVariant(newVariant);
  }, []);

  const setCustomConfigCallback = useCallback((config: CustomCursorConfig) => {
    setCustomConfig(config);
  }, []);

  if (isTouchDevice && !enableOnTouch) {
    return <div className={className}>{children}</div>;
  }

  return (
    <CursorContext.Provider
      value={{
        variant,
        setVariant: setVariantCallback,
        customConfig,
        setCustomConfig: setCustomConfigCallback,
      }}
    >
      <div className={className}>{children}</div>
    </CursorContext.Provider>
  );
}
