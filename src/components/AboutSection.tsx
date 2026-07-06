import Image from "next/image";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import { timeline } from "@/lib/timeline";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            {"// "}About
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            From a first website
            <span className="block text-ink-muted/70">
              to full-stack products.
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* sticky: the bio holds still while the timeline scrolls past */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <div className="relative mb-8 h-40 w-40 -rotate-2 overflow-hidden rounded-2xl border border-ink/10 shadow-lg shadow-navy/10">
                <Image
                  src="/profile.png"
                  alt="José Luis Castañeda León"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <p className="text-lg leading-8 text-ink-muted">
                I&apos;m José Luis Castañeda León — a frontend developer who
                found the craft building a website for an architecture studio,
                and never stopped.
              </p>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                Today I work in TypeScript, React and Next.js, with enough
                backend — NestJS, Supabase, MySQL — to take a product from
                idea to deployed. I care most about the details users feel but
                never name: motion, speed, accessibility.
              </p>
            </Reveal>
          </div>

          <Timeline items={timeline} />
        </div>
      </div>
    </section>
  );
}
