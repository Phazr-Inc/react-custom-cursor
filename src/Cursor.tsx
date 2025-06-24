'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useCursor } from './CursorProvider';

interface CursorProps {
  className?: string;
  springConfig?: {
    damping?: number;
    stiffness?: number;
  };
}

export default function Cursor({
  className = '',
  springConfig = { damping: 28, stiffness: 500 },
}: CursorProps) {
  const { variant, customConfig } = useCursor();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  const cursorVariants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: '#fff',
      mixBlendMode: 'difference' as const,
    },
    link: {
      height: 64,
      width: 64,
      backgroundColor: '#fff',
      mixBlendMode: 'difference' as const,
    },
    text: {
      height: 8,
      width: 8,
      backgroundColor: '#fff',
      mixBlendMode: 'difference' as const,
    },
    input: {
      height: 0,
      width: 0,
      opacity: 0,
    },
    sayHi: {
      height: 90,
      width: 90,
      backgroundColor: '#fff',
      mixBlendMode: 'difference' as const,
    },
    custom: {
      height: customConfig?.size || 32,
      width: customConfig?.size || 32,
      backgroundColor: customConfig?.backgroundColor || '#fff',
      mixBlendMode: customConfig?.mixBlendMode || 'difference',
    },
  };

  const textVariants = {
    default: { opacity: 0, transition: { duration: 0.1 } },
    link: { opacity: 0, transition: { duration: 0.1 } },
    text: { opacity: 0, transition: { duration: 0.1 } },
    input: { opacity: 0, transition: { duration: 0.1 } },
    sayHi: { opacity: 1, transition: { delay: 0.1 } },
    custom: {
      opacity: customConfig?.text ? 1 : 0,
      transition: { delay: customConfig?.text ? 0.1 : 0 },
    },
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate={variant}
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: '-50%',
        y: '-50%',
      }}
      className={`phazr-cursor-container ${className}`}
    >
      <motion.div
        variants={textVariants}
        animate={variant}
        className='phazr-cursor-text'
        style={{
          color: customConfig?.textColor || '#000',
          fontSize: customConfig?.fontSize || '16px',
          fontFamily: customConfig?.fontFamily || 'inherit',
        }}
      >
        {variant === 'sayHi' && (
          <div className='phazr-cursor-sayhi'>
            <span>Say</span>
            <span>Hi</span>
          </div>
        )}
        {variant === 'custom' && customConfig?.text && (
          <span>{customConfig.text}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
