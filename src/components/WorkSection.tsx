import Image from "next/image";
import DriftCard from "@/components/DriftCard";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/lib/projects";

export default function WorkSection() {
  return (
    <section id="work" className="scroll-mt-16 bg-mint">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            {"// "}Selected work
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Projects that made it
            <span className="block text-ink-muted/70">out of localhost.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <DriftCard
              key={project.title}
              // odd cards drift faster and start lower: columns fall out of sync
              drift={i % 2 === 0 ? 24 : 56}
              className={i % 2 === 1 ? "sm:mt-12" : undefined}
            >
              <TiltCard>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white p-8 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-navy/10">
                  {project.image && (
                    // -mx-8/-mt-8 bleed the shot to the card edges past the padding
                    <div className="relative -mx-8 -mt-8 mb-6 aspect-[16/10] overflow-hidden border-b border-ink/5">
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        priority={i === 0}
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <p className="font-mono text-xs text-ink-muted transition-colors duration-300 group-hover:text-navy">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-navy">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-ink-muted">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-navy/15 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-5 pt-6 text-sm font-medium">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link text-navy transition-colors hover:text-ink"
                      >
                        Live site{" "}
                        <span
                          aria-hidden
                          className="inline-block transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link text-ink-muted transition-colors hover:text-navy"
                    >
                      Code{" "}
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              </TiltCard>
            </DriftCard>
          ))}
        </div>
      </div>
    </section>
  );
}
