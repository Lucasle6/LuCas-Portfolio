"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export default function DotGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // start far off-canvas so the grid is invisible until the first move
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 260, damping: 30 });
  const sy = useSpring(my, { stiffness: 260, damping: 30 });
  const mask = useMotionTemplate`radial-gradient(280px circle at ${sx}px ${sy}px, black 0%, transparent 75%)`;

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent || reduceMotion) return;

    const move = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      mx.set(e.clientX - rect.left);
      my.set(e.clientY - rect.top);
    };
    const leave = () => {
      mx.set(-600);
      my.set(-600);
    };
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
    };
  }, [mx, my, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        backgroundImage:
          "radial-gradient(rgba(2, 0, 115, 0.35) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
      }}
      className="pointer-events-none absolute inset-0"
    />
  );
}
