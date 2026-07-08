"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";

type MagneticLettersProps = {
  text: string;
  className?: string;
  /** px from the cursor at which a letter stops reacting */
  radius?: number;
  /** max extra scale for the letter right under the cursor */
  strength?: number;
};

/*
  Name effect: each letter scales up as the cursor gets near,
  with a gaussian falloff so neighbours grow progressively less — a
  horizontal macOS-dock. Measured per pointermove (rects stay accurate
  after font loads/resizes); a short CSS transition smooths the motion.
  Screen readers get one aria-label; the letter spans are decoration.
*/
export default function MagneticLetters({
  text,
  className,
  radius = 90,
  strength = 0.22,
}: MagneticLettersProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  function handlePointerMove(e: React.PointerEvent) {
    for (const el of ref.current!.querySelectorAll<HTMLElement>(
      "[data-letter]",
    )) {
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(e.clientX - (rect.left + rect.width / 2));
      const force = Math.exp(-((distance / radius) ** 2));
      el.style.transform = `translateY(${(-0.08 * force).toFixed(3)}em) scale(${(1 + strength * force).toFixed(3)})`;
    }
  }

  function handlePointerLeave() {
    for (const el of ref.current!.querySelectorAll<HTMLElement>(
      "[data-letter]",
    )) {
      el.style.transform = "";
    }
  }

  const words = text.split(" ");
  return (
    <span
      ref={ref}
      aria-label={text}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={className}
    >
      {words.map((word, wi) => (
        <span key={wi} aria-hidden className="inline-block whitespace-pre">
          {[...word].map((char, i) => (
            <span
              key={i}
              data-letter
              className="inline-block origin-bottom transition-transform duration-150 ease-out will-change-transform"
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
