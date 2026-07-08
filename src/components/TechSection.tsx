import {
  SiAngular,
  SiDocker,
  SiGitlab,
  SiGo,
  SiJavascript,
  SiJest,
  SiCypress,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Reveal from "@/components/Reveal";
import TechBadge from "@/components/TechBadge";
import type { Dictionary } from "@/lib/dictionary";

// stack straight from the CV, each with its brand color
const tech = [
  { label: "React", color: "#61DAFB", Icon: SiReact },
  { label: "TypeScript", color: "#3178C6", Icon: SiTypescript },
  { label: "JavaScript", color: "#F7DF1E", Icon: SiJavascript },
  { label: "Angular", color: "#DD0031", Icon: SiAngular },
  { label: "Next.js", color: "#16161A", Icon: SiNextdotjs },
  { label: "Tailwind", color: "#06B6D4", Icon: SiTailwindcss },
  { label: "Redux", color: "#764ABC", Icon: SiRedux },
  { label: "Node.js", color: "#5FA04E", Icon: SiNodedotjs },
  { label: "Python", color: "#3776AB", Icon: SiPython },
  { label: "Go", color: "#00ADD8", Icon: SiGo },
  { label: "Jest", color: "#C21325", Icon: SiJest },
  { label: "Cypress", color: "#69D3A7", Icon: SiCypress },
  { label: "Docker", color: "#2496ED", Icon: SiDocker },
  { label: "GitLab CI", color: "#FC6D26", Icon: SiGitlab },
];

export default function TechSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="tech" className="scroll-mt-16 bg-sage">
      <div className="mx-auto w-full max-w-6xl px-6 py-28">
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
            {"// "}
            {dict.tech.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {dict.tech.headline1}
            <span className="block text-ink-muted/70">
              {dict.tech.headline2}
            </span>
          </h2>
        </Reveal>

        <ul className="mt-16 flex flex-wrap items-start justify-center gap-x-10 gap-y-12 sm:gap-x-14">
          {tech.map(({ label, color, Icon }, i) => (
            <TechBadge key={label} label={label} color={color} index={i}>
              <Icon aria-hidden />
            </TechBadge>
          ))}
        </ul>
      </div>
    </section>
  );
}
