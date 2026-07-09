"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** resting rotation in degrees — a small per-card value gives the
      grid a controlled, scattered asymmetry; straightens on hover */
  tilt?: number;
};

/*
  Hover physics for the project cards, three layers deep:
  1. 3D tilt — pointer position maps to rotateX/rotateY around a
     900px perspective, smoothed through springs so the card glides
     instead of snapping.
  2. Cursor spotlight — a radial navy tint that tracks the pointer
     via useMotionTemplate (a MotionValue-interpolated CSS string).
  3. Lift on hover, squash on tap.
  On top of that, each card rests at a slight `tilt` and straightens
  as you hover, so the four cards sit in a deliberate asymmetry.
  All of it collapses to a plain (still slightly tilted) div under
  prefers-reduced-motion.
*/
export default function TiltCard({
  children,
  className,
  tilt = 0,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // pointer position normalized to 0..1 inside the card
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 22 });
  const sy = useSpring(py, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(sy, [0, 1], [5, -5]);
  const rotateY = useTransform(sx, [0, 1], [-5, 5]);

  const glareX = useTransform(sx, [0, 1], ["15%", "85%"]);
  const glareY = useTransform(sy, [0, 1], ["15%", "85%"]);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(2, 0, 115, 0.08), transparent 65%)`;

  if (reduceMotion) {
    // keep the resting asymmetry (a static transform isn't "motion"),
    // just drop the pointer physics
    return (
      <div className={className} style={{ transform: `rotate(${tilt}deg)` }}>
        {children}
      </div>
    );
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotate: tilt, rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -8, rotate: 0 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative h-full ${className ?? ""}`}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
}
