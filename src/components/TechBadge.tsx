"use client";

import { motion, useReducedMotion } from "motion/react";

type TechBadgeProps = {
  label: string;
  color: string;
  index: number;
  children: React.ReactNode;
};

/*
  One tile of the technologies curtain (effect inherited from the old
  Portffolio repo, elevated):
  - slides in from the left with a per-index delay, so the row sweeps
    closed like a curtain as it enters the viewport
  - arrives desaturated and gains its brand color on the way in
  - then bobs forever, each icon at a different tempo (index-seeded)
*/
export default function TechBadge({
  label,
  color,
  index,
  children,
}: TechBadgeProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <li className="flex flex-col items-center gap-3">
        <div className="text-6xl" style={{ color }}>
          {children}
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
          {label}
        </span>
      </li>
    );
  }

  return (
    <motion.li
      initial={{ opacity: 0, x: -80, filter: "grayscale(1)" }}
      whileInView={{ opacity: 1, x: 0, filter: "grayscale(0)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="flex flex-col items-center gap-3"
    >
      <motion.div
        animate={{ y: [7, -7] }}
        transition={{
          duration: 2 + (index % 5) * 0.7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="text-6xl"
        style={{ color }}
      >
        {children}
      </motion.div>
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
        {label}
      </span>
    </motion.li>
  );
}
