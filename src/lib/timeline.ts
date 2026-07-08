import type { Locale } from "@/lib/dictionary";

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

// Grounded in the CV (CV_Developer_JLCL.pdf) — real career history.
export const timeline: Record<Locale, TimelineItem[]> = {
  en: [
    {
      period: "2013 – 2017",
      title: "Engineering roots",
      description:
        "B.Eng. in Mechatronics at Tecnológico de Monterrey where building things (and debugging them) became a habit.",
    },
    {
      period: "2017 – 2018",
      title: "First dev role",
      description:
        "Junior frontend at Flex in Guadalajara, ES6, HTML5 and CSS3 on supply-chain tools, and first hands-on React.",
    },
    {
      period: "2018 – 2023",
      title: "Scale at Bosch",
      description:
        "React and Angular SPAs for manufacturing platforms serving 5,000+ daily users, Redux, NgRx, a real testing culture, and mentoring juniors.",
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
        "Frontend & fullstack on clinical internal tools, React, TypeScript, Clean Architecture, and GitLab CI/CD with 80%+ test coverage.",
    },
    {
      period: "Now",
      title: "Open to what's next",
      description:
        "Berlin-based and available immediately, building in public and looking for a team where craft and detail matter.",
    },
  ],
  es: [
    {
      period: "2013 – 2017",
      title: "Raíces de ingeniería",
      description:
        "Ingeniería en Mecatrónica en el Tecnológico de Monterrey, donde construir cosas (y debuggearlas) se volvió costumbre.",
    },
    {
      period: "2017 – 2018",
      title: "Primer rol dev",
      description:
        "Frontend junior en Flex, Guadalajara, ES6, HTML5 y CSS3 en herramientas de cadena de suministro, y primer React en serio.",
    },
    {
      period: "2018 – 2023",
      title: "Escala en Bosch",
      description:
        "SPAs en React y Angular para plataformas de manufactura con 5,000+ usuarios diarios, Redux, NgRx, cultura de testing real y mentoría a juniors.",
    },
    {
      period: "2023 – 2024",
      title: "Berlín, nuevo capítulo",
      description:
        "Mudanza a Alemania para la maestría en Ingeniería de Software en la University of Europe for Applied Sciences.",
    },
    {
      period: "2024 – 2026",
      title: "Karl Storz",
      description:
        "Frontend y fullstack en herramientas clínicas internas, React, TypeScript, Clean Architecture y GitLab CI/CD con 80%+ de cobertura.",
    },
    {
      period: "Ahora",
      title: "Abierto a lo que sigue",
      description:
        "En Berlín y disponible de inmediato, construyendo en público y buscando un equipo donde el oficio y el detalle importen.",
    },
  ],
};
