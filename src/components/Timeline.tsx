"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import type { TimelineItem } from "@/lib/timeline";

/*
  Signature effect: a faint track runs the full height; a glowing
  gradient line scales over it, driven by scroll progress through a
  spring (so the fill trails the scroll with a little inertia).
  Nodes light up once the fill reaches their band of the viewport.
*/
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    // 0 when the top of the list hits 75% down the viewport,
    // 1 when its bottom crosses the 45% line — the fill leads the eye
    offset: ["start 0.75", "end 0.45"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden
        className="absolute bottom-1 left-[7px] top-1 w-0.5 bg-navy/10"
      />
      <motion.div
        aria-hidden
        style={{ scaleY: reduceMotion ? 1 : fill }}
        className="absolute bottom-1 left-[7px] top-1 w-0.5 origin-top bg-gradient-to-b from-navy to-[#3652ff] shadow-[0_0_14px_rgba(2,0,115,0.5)]"
      />
      <ol>
        {items.map((item) => (
          <li key={item.title} className="relative pb-12 pl-10 last:pb-0">
            <motion.span
              aria-hidden
              initial={
                reduceMotion ? false : { scale: 0.6, backgroundColor: "#ffffff" }
              }
              whileInView={{
                scale: 1,
                backgroundColor: "#020073",
                boxShadow: "0 0 12px rgba(54, 82, 255, 0.8)",
              }}
              viewport={{ once: true, margin: "-20% 0px -35% 0px" }}
              transition={{ duration: 0.45 }}
              className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-navy/30 bg-white"
            />
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              {item.period}
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 max-w-md leading-7 text-ink-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
