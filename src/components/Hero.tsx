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

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-24 sm:pt-32">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            José Luis Castañeda León — Frontend Developer
          </p>
        </Reveal>

        {/* The two-line statement: line 1 navy, line 2 gray (jocaibe technique) */}
        <Reveal delay={0.1}>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-tight text-navy sm:text-7xl lg:text-8xl">
            I build web interfaces
            <span className="block text-ink-muted/70">
              that feel effortless.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">
            Frontend developer working with TypeScript, React and Next.js —
            focused on fast, accessible products with careful attention to
            detail.
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
