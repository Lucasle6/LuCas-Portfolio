"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import RotatingAccent from "@/components/RotatingAccent";

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
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const contact = document.getElementById("contact");
    const contactInView = contact
      ? contact.getBoundingClientRect().top < window.innerHeight * 0.7
      : false;
    setShow(y > 500 && !contactInView);
  });

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
      <AnimatePresence>
        {(show || reduceMotion) && (
          <motion.button
            type="button"
            onClick={openDialog}
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="fixed bottom-6 right-6 z-[9990] flex items-center gap-2.5 rounded-full bg-navy py-3 pl-4 pr-6 font-display text-sm font-bold text-white shadow-lg shadow-navy/30 transition-colors hover:bg-navy/90"
          >
            <RotatingAccent className="h-4 w-4 text-white/80" />
            Say hola
          </motion.button>
        )}
      </AnimatePresence>

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
