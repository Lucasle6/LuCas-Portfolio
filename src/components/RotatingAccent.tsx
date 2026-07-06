"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/*
  Signature effect #3: a decorative asterisk whose rotation is bound to
  overall page progress — useScroll() with no target tracks the whole
  document. By the time the visitor reaches the contact section it has
  already turned most of a revolution.
*/
export default function RotatingAccent({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 270]);
  const spring = useSpring(rotate, { stiffness: 60, damping: 20 });

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 100 100"
      fill="none"
      style={{ rotate: reduceMotion ? 0 : spring }}
      className={className}
    >
      {[0, 30, 60, 90, 120, 150].map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="6"
          x2="50"
          y2="94"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </motion.svg>
  );
}
