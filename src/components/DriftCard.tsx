"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

type DriftCardProps = {
  children: React.ReactNode;
  /** px travelled while crossing the viewport — vary it to vary speed */
  drift?: number;
  className?: string;
};

/*
  Signature effect: the card slides `drift` px as it crosses the
  viewport, so neighbouring cards with different values move at
  different speeds. scrollYProgress goes 0 → 1 between "card's top
  enters the bottom edge" and "card's bottom leaves the top edge";
  useTransform maps that progress to a y offset, no listeners needed.
*/
export default function DriftCard({
  children,
  drift = 32,
  className,
}: DriftCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);

  return (
    <motion.div
      ref={ref}
      style={{ y: reduceMotion ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
