"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type Variant = "default" | "link" | "big";

/*
  Two-piece cursor: a dot glued to the pointer and a ring that chases
  it through a spring. The ring reads the page under the pointer:

  - over any link/button it grows and shows a glyph for the action
    (↗ external, ↓ download, @ mailto)
  - over the hero name it becomes a big soft navy wash that plays
    with the magnetic letters
  - it squashes while pressing

  Renders nothing on touch devices or under prefers-reduced-motion,
  and only then does html.has-custom-cursor hide the native cursor.
*/
export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [glyph, setGlyph] = useState("");

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  // the dot is glued; the ring trails on a looser spring
  const rx = useSpring(mx, { stiffness: 480, damping: 38 });
  const ry = useSpring(my, { stiffness: 480, damping: 38 });

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
    };
    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("h1")) {
        setVariant("big");
        setGlyph("");
        return;
      }
      const link = target.closest<HTMLAnchorElement>("a, button");
      if (link) {
        setVariant("link");
        setGlyph(
          link.hasAttribute("download")
            ? "↓"
            : link.href?.startsWith("mailto:")
              ? "@"
              : link.target === "_blank"
                ? "↗"
                : "",
        );
        return;
      }
      setVariant("default");
      setGlyph("");
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const hide = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, [reduceMotion, mx, my]);

  if (!enabled) return null;

  const ring = {
    default: { size: 36, background: "rgba(2, 0, 115, 0)", borderColor: "rgba(2, 0, 115, 0.4)" },
    link: { size: 56, background: "rgba(2, 0, 115, 0.06)", borderColor: "rgba(2, 0, 115, 0.9)" },
    big: { size: 100, background: "rgba(2, 0, 115, 0.12)", borderColor: "rgba(2, 0, 115, 0)" },
  }[variant];

  return (
    <>
      {/* trailing ring */}
      <motion.div
        aria-hidden
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-[10001] mix-blend-multiply"
      >
        <motion.div
          animate={{
            width: ring.size,
            height: ring.size,
            marginLeft: -ring.size / 2,
            marginTop: -ring.size / 2,
            backgroundColor: ring.background,
            borderColor: ring.borderColor,
            scale: pressed ? 0.85 : 1,
            opacity: visible ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="flex items-center justify-center rounded-full border-[1.5px]"
        >
          <motion.span
            animate={{ opacity: glyph ? 1 : 0, scale: glyph ? 1 : 0.4 }}
            transition={{ duration: 0.18 }}
            className="font-mono text-sm font-medium text-navy"
          >
            {glyph}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* dot glued to the pointer */}
      <motion.div
        aria-hidden
        style={{ x: mx, y: my }}
        className="pointer-events-none fixed left-0 top-0 z-[10002]"
      >
        <motion.div
          animate={{
            scale: pressed ? 0.5 : variant === "big" ? 0 : 1,
            opacity: visible ? 1 : 0,
          }}
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-navy"
        />
      </motion.div>
    </>
  );
}
