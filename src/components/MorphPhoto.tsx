"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

/*
  The profile photo morphs with scroll, driven by two separate signals
  because it lives inside the sticky bio column:

  - entry (0→1 while the photo travels up from the viewport bottom):
    border-radius goes rounded-square → full circle. Clamps at 1, so
    the photo is a circle for the whole sticky dwell.
  - exit (0→1 only once the sticky releases and the photo is pushed
    above its resting line): color drains (saturate → 0) and it fades.

  Both read the live getBoundingClientRect each scroll frame — the only
  measurement that tells the truth about a sticky element's position.
*/

const STICKY_TOP = 96; // matches the column's lg:top-24

export default function MorphPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const entry = useMotionValue(0);
  const exit = useMotionValue(0);
  const { scrollY } = useScroll();

  function update() {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    // top edge travels from viewport bottom to 1/3 height → morph done
    entry.set(clamp((vh - rect.top) / (vh * 0.66)));
    // once the top passes its sticky resting line, it's on the way out
    exit.set(clamp((STICKY_TOP - rect.top) / (STICKY_TOP + rect.height)));
  }

  useMotionValueEvent(scrollY, "change", update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // same units on both ends — Motion can't interpolate 1rem → 50%.
  // The frame is 160px, so an 80px radius IS the full circle.
  const borderRadius = useTransform(entry, [0.1, 1], ["16px", "80px"]);
  const saturation = useTransform(exit, [0, 1], [1, 0]);
  const filter = useMotionTemplate`saturate(${saturation})`;
  const opacity = useTransform(exit, [0, 1], [1, 0.25]);

  if (reduceMotion) {
    return (
      <div className="relative mb-8 h-40 w-40 -rotate-2 overflow-hidden rounded-2xl border border-ink/10 shadow-lg shadow-navy/10">
        <Image
          src="/profile.png"
          alt="José Luis Castañeda León"
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ borderRadius, filter, opacity }}
      className="relative mb-8 h-40 w-40 -rotate-2 overflow-hidden border border-ink/10 shadow-lg shadow-navy/10"
    >
      <Image
        src="/profile.png"
        alt="José Luis Castañeda León"
        fill
        sizes="160px"
        className="object-cover"
      />
    </motion.div>
  );
}
