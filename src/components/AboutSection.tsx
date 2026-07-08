import MorphPhoto from "@/components/MorphPhoto";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import type { Dictionary, Locale } from "@/lib/dictionary";
import { timeline } from "@/lib/timeline";

export default function AboutSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section id="about" className="scroll-mt-16 bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            {"// "}
            {dict.about.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {dict.about.headline1}
            <span className="block text-ink-muted/70">
              {dict.about.headline2}
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* sticky: the bio holds still while the timeline scrolls past */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <MorphPhoto />
              <p className="text-lg leading-8 text-ink-muted">
                {dict.about.bio1}
              </p>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                {dict.about.bio2}
              </p>
            </Reveal>
          </div>

          <Timeline items={timeline[locale]} />
        </div>
      </div>
    </section>
  );
}
