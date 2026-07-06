"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  /** seconds before the animation starts — lets siblings stagger */
  delay?: number;
  className?: string;
};

/*
  Reusable scroll reveal: fades + rises content the first time it
  enters the viewport. Server components can wrap their JSX in it —
  the children stay server-rendered; only this thin wrapper hydrates.
*/
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  // Same contract as SmoothScroll: reduced motion → content just shows.
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
