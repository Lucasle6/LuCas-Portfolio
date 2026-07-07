"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/*
  jocaibe's floating companion button: fixed bottom-right, appears
  once you've scrolled past the hero, hides again when the real
  contact section is on screen (it would be redundant there).
  Opens a dialog whose submit composes an email via mailto: —
  no backend needed on a static site.
*/
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactFab() {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const { scrollY } = useScroll();

  // unbounded: every scrolled pixel adds degrees, so the star never
  // stops turning — smoothed through a spring
  const rawRotate = useTransform(scrollY, (y) => y * 0.25);
  const scrollRotate = useSpring(rawRotate, { stiffness: 80, damping: 20 });

  // close on Escape; keep the page from scrolling behind the dialog
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          company: data.get("company"), // honeypot
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setTimeout(() => {
        setOpen(false);
        setStatus("idle");
      }, 2200);
    } catch {
      setStatus("error");
    }
  }

  function openDialog() {
    setStatus("idle");
    setOpen(true);
  }

  const field =
    "w-full border-b border-ink/15 bg-transparent py-2 text-ink outline-none transition-colors focus:border-navy";

  return (
    <>
      <motion.button
        type="button"
        onClick={openDialog}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        aria-label="Contact — say hola"
        initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="fixed right-6 top-20 z-[9990] flex items-center rounded-full bg-navy text-white shadow-lg shadow-navy/30 transition-colors hover:bg-navy/90"
      >
        {/* the bubble sits before the icon: anchored right, it unfolds leftward */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="overflow-hidden whitespace-nowrap font-display text-sm font-bold"
            >
              <span className="block pl-5">Say hola</span>
            </motion.span>
          )}
        </AnimatePresence>

        {/* outer span: endless scroll-driven rotation · inner svg: hover spin */}
        <motion.span
          style={{ rotate: reduceMotion ? 0 : scrollRotate }}
          className="grid h-12 w-12 shrink-0 place-items-center"
        >
          <motion.svg
            viewBox="0 0 100 100"
            fill="none"
            animate={hovered && !reduceMotion ? { rotate: 360 } : { rotate: 0 }}
            transition={
              hovered && !reduceMotion
                ? { duration: 1.1, ease: "linear", repeat: Infinity }
                : { duration: 0.5 }
            }
            className="h-5 w-5"
          >
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <line
                key={deg}
                x1="50"
                y1="6"
                x2="50"
                y2="94"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="round"
                transform={`rotate(${deg} 50 50)`}
              />
            ))}
          </motion.svg>
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink/25 p-6 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contact form"
              data-lenis-prevent
              onClick={(e) => e.stopPropagation()}
              initial={
                reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="w-full max-w-md rounded-2xl border border-ink/5 bg-white p-8 shadow-2xl shadow-navy/20"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {"// "}Contact
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy">
                Say <span className="font-accent font-medium italic">hola</span>.
              </h2>

              {status === "sent" ? (
                <div className="mt-6 rounded-xl bg-mint p-6">
                  <p className="font-display text-lg font-bold text-navy">
                    Message sent ✓
                  </p>
                  <p className="mt-1 text-sm leading-6 text-ink-muted">
                    Thanks — I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* honeypot — hidden from humans, irresistible to bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    autoFocus
                    autoComplete="name"
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                    Message
                  </span>
                  <textarea name="message" required rows={4} className={field} />
                </label>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full bg-navy px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send ↗"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-ink-muted transition-colors hover:text-navy"
                  >
                    Close
                  </button>
                </div>
                {status === "error" && (
                  <p className="pt-1 text-xs leading-5 text-[#BF3B2B]">
                    Something went wrong — please email me directly at{" "}
                    <a
                      href="mailto:j.cleon695@gmail.com"
                      className="underline underline-offset-2"
                    >
                      j.cleon695@gmail.com
                    </a>
                  </p>
                )}
              </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
