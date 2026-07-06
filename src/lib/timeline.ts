export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

// Grounded in real repo history — edit copy freely, keep it honest.
export const timeline: TimelineItem[] = [
  {
    period: "2023",
    title: "First lines on the web",
    description:
      "Built Deymar, a site for an architecture & design studio — HTML, CSS, and the discovery that interfaces are my thing.",
  },
  {
    period: "2024",
    title: "Getting serious",
    description:
      "First portfolio plus small tools for the job hunt — learning React and the modern JavaScript ecosystem by shipping.",
  },
  {
    period: "2025",
    title: "TypeScript first",
    description:
      "A framework-agnostic product filtering engine in plain TypeScript — pure logic, no UI library to lean on.",
  },
  {
    period: "2026",
    title: "Full-stack range",
    description:
      "Shipped Autohaus Royal (React, NestJS, MySQL) and Mesa para Luis, a multilingual cooking journal with a Supabase-backed CMS.",
  },
  {
    period: "Now",
    title: "This site — and what comes next",
    description:
      "Building in public with Next.js 16, and looking for a team where craft and detail matter.",
  },
];
