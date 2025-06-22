"use client";

import { useCursor } from "./useCursor";
import { motion, useMotionValue, useSpring } from "motion/react";
import React from "react";

export type CursorStyle = {
  height: number;
  width: number;
  backgroundColor: string;
  mixBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity";
  opacity?: number;
};

export type CursorVariants = {
  default: Partial<CursorStyle>;
  link: Partial<CursorStyle>;
  text: Partial<CursorStyle>;
  input: Partial<CursorStyle>;
  [key: string]: Partial<CursorStyle>;
};

export interface CustomVariant extends CursorStyle {
  name: string;
  text: React.ReactNode;
}

export interface CursorProps {
  variants?: CursorVariants;
  customVariant?: CustomVariant;
}

export default function Cursor({
  variants: customVariants,
  customVariant,
}: CursorProps) {
  const { variant } = useCursor();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  React.useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorX, cursorY]);

  const defaultCursorVariants: CursorVariants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    link: {
      height: 64,
      width: 64,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    text: {
      height: 8,
      width: 8,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    input: {
      height: 0,
      width: 0,
      opacity: 0,
    },
  };

  const cursorVariants = { ...defaultCursorVariants, ...customVariants };

  if (customVariant) {
    const { name, ...style } = customVariant;
    cursorVariants[name] = style;
  }

  const textVariants: {
    [key: string]: { opacity: number; transition: { [key: string]: number } };
  } = {
    default: { opacity: 0, transition: { duration: 0.1 } },
    link: { opacity: 0, transition: { duration: 0.1 } },
    text: { opacity: 0, transition: { duration: 0.1 } },
    input: { opacity: 0, transition: { duration: 0.1 } },
  };

  if (customVariant) {
    textVariants[customVariant.name] = {
      opacity: 1,
      transition: { delay: 0.1 },
    };
  }

  return (
    <motion.div
      variants={cursorVariants}
      animate={variant}
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: "-50%",
        y: "-50%",
      }}
      className="flex-center pointer-events-none fixed z-[9999] rounded-full"
    >
      <motion.p
        variants={textVariants}
        animate={variant}
        className="flex flex-col gap-2 font-amsterdam text-base font-bold text-black"
      >
        {customVariant?.text}
      </motion.p>
    </motion.div>
  );
}
