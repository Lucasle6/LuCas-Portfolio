export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

/*
  Every UI string lives here, once per locale. `en` defines the shape;
  `es` is typed against it, so a missing translation is a build error.
*/
const en = {
  meta: {
    title: "LuCas León — Frontend Developer",
    description:
      "Portfolio of José Luis Castañeda León — frontend developer with 7+ years of React, Angular and TypeScript, from Guadalajara to Berlin.",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Frontend Developer · Berlin — Portfolio 2026",
    paragraph:
      "I build web interfaces that feel effortless — seven years of TypeScript, React and Angular, from Bosch's factory floors to Karl Storz's clinical tools in Berlin.",
    ctaWork: "See my work",
    ctaContact: "Get in touch",
    ctaCv: "Download CV ↓",
  },
  work: {
    eyebrow: "Selected work",
    headline1: "Projects that made it",
    headline2: "out of localhost.",
    liveSite: "Live site",
    code: "Code",
  },
  tech: {
    eyebrow: "Technologies",
    headline1: "The everyday toolbox",
    headline2: "seven years in the making.",
  },
  about: {
    eyebrow: "About",
    headline1: "From a first website",
    headline2: "to full-stack products.",
    bio1: "I'm José Luis Castañeda León — a frontend developer with 7+ years of experience, from Guadalajara to Berlin.",
    bio2: "I've shipped React, Angular and TypeScript for Bosch and Karl Storz — interfaces thousands of people use daily — with enough backend (Node, Python, Go) to take a product from idea to deployed. I care most about the details users feel but never name: motion, speed, accessibility.",
  },
  contact: {
    eyebrow: "Contact",
    say: "Say",
    holaWord: "hola",
    paragraph:
      "Have a project, a role, or just a question about something I built? My inbox is open.",
    grabCv: "or grab the",
    cvWord: "CV ↓",
  },
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send ↗",
    sending: "Sending…",
    close: "Close",
    sentTitle: "Message sent ✓",
    sentBody: "Thanks — I'll get back to you soon.",
    errorBody: "Something went wrong — please email me directly at",
  },
  fab: {
    label: "Contact — say hola",
    bubble: "Say hola",
  },
};

const es: typeof en = {
  meta: {
    title: "LuCas León — Desarrollador Frontend",
    description:
      "Portfolio de José Luis Castañeda León — desarrollador frontend con más de 7 años de React, Angular y TypeScript, de Guadalajara a Berlín.",
  },
  nav: {
    work: "Trabajo",
    about: "Sobre mí",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Desarrollador Frontend · Berlín — Portfolio 2026",
    paragraph:
      "Construyo interfaces web que se sienten sin esfuerzo — siete años de TypeScript, React y Angular, de las plantas de Bosch a las herramientas clínicas de Karl Storz en Berlín.",
    ctaWork: "Ver mi trabajo",
    ctaContact: "Hablemos",
    ctaCv: "Descargar CV ↓",
  },
  work: {
    eyebrow: "Trabajo seleccionado",
    headline1: "Proyectos que salieron",
    headline2: "de localhost.",
    liveSite: "Ver sitio",
    code: "Código",
  },
  tech: {
    eyebrow: "Tecnologías",
    headline1: "La caja de herramientas",
    headline2: "siete años en construcción.",
  },
  about: {
    eyebrow: "Sobre mí",
    headline1: "De una primera web",
    headline2: "a productos full-stack.",
    bio1: "Soy José Luis Castañeda León — desarrollador frontend con más de 7 años de experiencia, de Guadalajara a Berlín.",
    bio2: "He construido con React, Angular y TypeScript para Bosch y Karl Storz — interfaces que miles de personas usan a diario — con suficiente backend (Node, Python, Go) para llevar un producto de la idea al deploy. Lo que más me importa son los detalles que los usuarios sienten pero no nombran: movimiento, velocidad, accesibilidad.",
  },
  contact: {
    eyebrow: "Contacto",
    say: "Di",
    // the wink flips with the language: English page says "hola",
    // Spanish page says "hello"
    holaWord: "hello",
    paragraph:
      "¿Un proyecto, una vacante o solo una pregunta sobre algo que construí? Mi bandeja está abierta.",
    grabCv: "o llévate el",
    cvWord: "CV ↓",
  },
  form: {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar ↗",
    sending: "Enviando…",
    close: "Cerrar",
    sentTitle: "Mensaje enviado ✓",
    sentBody: "Gracias — te respondo pronto.",
    errorBody: "Algo salió mal — escríbeme directo a",
  },
  fab: {
    label: "Contacto — di hello",
    bubble: "Di hello",
  },
};

export type Dictionary = typeof en;
export const dictionaries: Record<Locale, Dictionary> = { en, es };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
