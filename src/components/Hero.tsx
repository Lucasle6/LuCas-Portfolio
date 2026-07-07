import DotGrid from "@/components/DotGrid";
import MagneticLetters from "@/components/MagneticLetters";
import Reveal from "@/components/Reveal";

const techTags = ["TypeScript", "React", "Next.js", "Tailwind CSS"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/*
        Decorative gradient blob — pure ornament, so aria-hidden keeps
        screen readers from announcing it. overflow-hidden on the parent
        clips the part that bleeds off-canvas.
      */}
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-gradient-to-b from-navy/10 to-mint blur-3xl"
      />

      {/* ghost monogram — blurred under the dot grid, so the cursor
          reveals the dots right on top of it */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-1/2 hidden -translate-y-1/2 select-none font-display text-[24rem] font-bold leading-none tracking-tighter text-navy/[0.06] blur-md lg:block"
      >
        LC
      </span>

      {/* cursor-revealed dot grid (jocaibe technique, navy on light) */}
      <DotGrid />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-24 sm:pt-32">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            Frontend Developer · Berlin — Portfolio 2026
          </p>
        </Reveal>

        {/* The name IS the headline now (jocaibe pattern), letter-magnetic */}
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-navy sm:text-7xl lg:text-8xl">
            <MagneticLetters text="José Luis" />
            <span className="block text-ink-muted/70">
              <MagneticLetters text="Castañeda León." />
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">
            I build web interfaces that feel effortless — seven years of
            TypeScript, React and Angular, from Bosch&apos;s factory floors to
            Karl Storz&apos;s clinical tools in Berlin.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {techTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-navy/20 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-navy"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-navy px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-navy/90"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-navy/20 px-7 py-3 text-sm font-medium text-navy transition-colors hover:border-navy"
            >
              Get in touch
            </a>
            <a
              href="/jose-luis-castaneda-leon-cv.pdf"
              download
              className="inline-flex items-center px-2 py-3 text-sm font-medium text-ink-muted underline decoration-ink/20 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy"
            >
              Download CV ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
