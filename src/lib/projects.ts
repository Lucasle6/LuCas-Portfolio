import type { Locale } from "@/lib/dictionary";

export type Project = {
  title: string;
  description: Record<Locale, string>;
  tech: string[];
  /** omit while a demo is down — the card then only shows the repo link */
  liveUrl?: string;
  repoUrl: string;
  /** screenshot under public/ — cards without one stay typographic */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "eddyson Partner Landing",
    description: {
      en: "Pixel-perfect partner landing page from Figma, CMS-driven with Prismic slices, fully responsive.",
      es: "Landing de partners pixel-perfect desde Figma, contenido gestionado con Prismic slices, totalmente responsive.",
      de: "Pixelgenaue Partner-Landingpage aus Figma, CMS-gesteuert mit Prismic-Slices, voll responsiv.",
      tr: "Figma'dan piksel mükemmelliğinde partner açılış sayfası; Prismic slice'larla CMS tabanlı, tamamen responsive.",
    },
    tech: ["Next.js", "Prismic", "Tailwind v4"],
    liveUrl: "https://eddyson-landing-assessment.vercel.app",
    repoUrl: "https://github.com/Lucasle6/eddyson_landing_assessment",
    image: "/projects/eddyson.png",
  },
  {
    title: "CasAuto Real",
    description: {
      en: "Full-stack car dealership platform, vehicle catalog with filters, test-drive booking and an admin panel.",
      es: "Plataforma full-stack para una concesionaria, catálogo de vehículos con filtros, reserva de test-drive y panel de administración.",
      de: "Full-Stack-Plattform für ein Autohaus, Fahrzeugkatalog mit Filtern, Probefahrt-Buchung und Admin-Panel.",
      tr: "Full-stack araç galerisi platformu; filtreli araç kataloğu, test sürüşü rezervasyonu ve yönetim paneli.",
    },
    tech: ["React", "NestJS", "MySQL"],
    liveUrl: "https://cas-auto-real-web.vercel.app",
    repoUrl: "https://github.com/Lucasle6/CasAuto-Real",
    image: "/projects/autohaus.png",
  },
  {
    title: "Mesa para Luis",
    description: {
      en: "Multilingual cooking journal (es/en/tr/de), from street food to the Michelin pass, with a Supabase-backed CMS.",
      es: "Diario de cocina multilingüe (es/en/tr/de), del street food al pase Michelin, con un CMS respaldado por Supabase.",
      de: "Mehrsprachiges Koch-Journal (es/en/tr/de), vom Streetfood bis zum Michelin-Pass, mit einem Supabase-CMS.",
      tr: "Çok dilli yemek günlüğü (es/en/tr/de); sokak lezzetlerinden Michelin mutfağına, Supabase tabanlı bir CMS ile.",
    },
    tech: ["Next.js", "Framer Motion", "Supabase"],
    liveUrl: "https://mesa-para-luis.vercel.app",
    repoUrl: "https://github.com/Lucasle6/mesa-para-luis",
    image: "/projects/mesa.png",
  },
  {
    title: "Deymar Arquitectura",
    description: {
      en: "Where it started, my first website, a marketing site for an architecture & interior design studio, with a full-screen project carousel.",
      es: "Donde empezó todo, mi primera web, un sitio para un estudio de arquitectura e interiorismo, con un carrusel de proyectos a pantalla completa.",
      de: "Wo alles begann, meine erste Website, ein Auftritt für ein Architektur- und Innenarchitekturbüro, mit einem Vollbild-Projektkarussell.",
      tr: "Her şeyin başladığı yer — ilk web sitem; bir mimarlık ve iç mimarlık stüdyosu için tam ekran proje karüzeline sahip tanıtım sitesi.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://lucasle6.github.io/Deymar/",
    repoUrl: "https://github.com/Lucasle6/Deymar",
    image: "/projects/deymar.png",
  },
];
