import Reveal from "@/components/Reveal";
import RotatingAccent from "@/components/RotatingAccent";
import type { Dictionary } from "@/lib/dictionary";

export default function ContactSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden bg-mint"
    >
      <RotatingAccent className="absolute -right-10 top-12 h-56 w-56 text-navy/10 sm:right-12 sm:h-72 sm:w-72" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            {"// "}
            {dict.contact.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-6xl font-bold tracking-tight text-navy sm:text-8xl">
            {dict.contact.say}{" "}
            <span className="font-accent font-medium italic">
              {dict.contact.holaWord}
            </span>
            .
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">
            {dict.contact.paragraph}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href="mailto:j.cleon695@gmail.com"
            className="mt-10 inline-block font-display text-2xl font-bold text-navy underline decoration-navy/25 decoration-2 underline-offset-8 transition-colors hover:decoration-navy sm:text-4xl"
          >
            j.cleon695@gmail.com
          </a>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-ink-muted">
            {dict.contact.grabCv}{" "}
            <a
              href="/jose-luis-castaneda-leon-cv.pdf"
              download
              className="text-navy underline decoration-navy/25 underline-offset-4 transition-colors hover:decoration-navy"
            >
              {dict.contact.cvWord}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
