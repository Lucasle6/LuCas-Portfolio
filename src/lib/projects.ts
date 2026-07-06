export type Project = {
  title: string;
  description: string;
  tech: string[];
  /** omit while a demo is down — the card then only shows the repo link */
  liveUrl?: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "eddyson Partner Landing",
    description:
      "Pixel-perfect partner landing page from Figma — CMS-driven with Prismic slices, fully responsive.",
    tech: ["Next.js", "Prismic", "Tailwind v4"],
    liveUrl: "https://eddyson-landing-assessment.vercel.app",
    repoUrl: "https://github.com/Lucasle6/eddyson_landing_assessment",
  },
  {
    title: "Autohaus Royal",
    description:
      "Full-stack car dealership platform — vehicle catalog with filters, test-drive booking and an admin panel.",
    tech: ["React", "NestJS", "MySQL"],
    liveUrl: "https://cas-auto-real-web.vercel.app",
    repoUrl: "https://github.com/Lucasle6/CasAuto-Real",
  },
  {
    title: "Mesa para Luis",
    description:
      "Multilingual cooking journal (es/en/tr/de) — from street food to the Michelin pass, with a Supabase-backed CMS.",
    tech: ["Next.js", "Framer Motion", "Supabase"],
    liveUrl: "https://mesa-para-luis.vercel.app",
    repoUrl: "https://github.com/Lucasle6/mesa-para-luis",
  },
  {
    title: "Agnostic Filter Challenge",
    description:
      "Framework-agnostic product filtering engine written in plain TypeScript — no UI library underneath.",
    tech: ["TypeScript"],
    // liveUrl pending: the GitHub Pages deploy is down (404) — restore once fixed
    repoUrl: "https://github.com/Lucasle6/AgnosticFilterChallenge_Wallr",
  },
];
