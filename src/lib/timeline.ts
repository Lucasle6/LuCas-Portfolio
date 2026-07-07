export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

// Grounded in the CV (CV_Developer_JLCL.pdf) — real career history.
export const timeline: TimelineItem[] = [
  {
    period: "2013 – 2017",
    title: "Engineering roots",
    description:
      "B.Eng. in Mechatronics at Tecnológico de Monterrey — where building things (and debugging them) became a habit.",
  },
  {
    period: "2017 – 2018",
    title: "First dev role",
    description:
      "Junior frontend at Flex in Guadalajara — ES6, HTML5 and CSS3 on supply-chain tools, and first hands-on React.",
  },
  {
    period: "2018 – 2023",
    title: "Scale at Bosch",
    description:
      "React and Angular SPAs for manufacturing platforms serving 5,000+ daily users — Redux, NgRx, a real testing culture, and mentoring juniors.",
  },
  {
    period: "2023 – 2024",
    title: "Berlin, new chapter",
    description:
      "Moved to Germany for an M.Sc. in Software Engineering at the University of Europe for Applied Sciences.",
  },
  {
    period: "2024 – 2026",
    title: "Karl Storz",
    description:
      "Frontend & fullstack on clinical internal tools — React, TypeScript, Clean Architecture, and GitLab CI/CD with 80%+ test coverage.",
  },
  {
    period: "Now",
    title: "Open to what's next",
    description:
      "Berlin-based and available immediately — building in public and looking for a team where craft and detail matter.",
  },
];
