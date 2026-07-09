export const locales = ["en", "es", "de", "tr"] as const;
export type Locale = (typeof locales)[number];

/*
  Every UI string lives here, once per locale. `en` defines the shape;
  `es` is typed against it, so a missing translation is a build error.
*/
const en = {
  meta: {
    title: "LuCas León — Frontend Developer",
    description:
      "Portfolio of José Luis Castañeda León frontend developer with 7+ years of React, Angular and TypeScript, from Guadalajara to Berlin.",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Frontend Developer · Berlin — Portfolio 2026",
    paragraph:
      "I build web interfaces that feel effortless. Seven years of TypeScript, React and Angular, from Bosch's factory floors to Karl Storz's clinical tools in Berlin.",
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
    bio1: "I'm José Luis Castañeda León, a frontend developer with 7+ years of experience, from Guadalajara to Berlin.",
    bio2: "I've shipped React, Angular and TypeScript for Bosch and Karl Storz interfaces thousands of people use daily with enough backend (Node, Python, Go) to take a product from idea to deployed. I care most about the details users feel but never name: motion, speed, accessibility.",
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
    errorBody: "Something went wrong please email me directly at",
  },
  fab: {
    label: "Contact say hola",
    bubble: "Say hola",
  },
};

const es: typeof en = {
  meta: {
    title: "LuCas León - Desarrollador Frontend",
    description:
      "Portfolio de José Luis Castañeda León desarrollador frontend con más de 7 años de React, Angular y TypeScript, de Guadalajara a Berlín.",
  },
  nav: {
    work: "Trabajo",
    about: "Sobre mí",
    contact: "Contacto",
  },
  hero: {
    eyebrow: "Desarrollador Frontend · Berlín — Portfolio 2026",
    paragraph:
      "Construyo interfaces web que se sienten sin esfuerzo, Siete años de TypeScript, React y Angular, de las plantas de Bosch a las herramientas clínicas de Karl Storz en Berlín.",
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
    bio1: "Soy José Luis Castañeda León , desarrollador frontend con más de 7 años de experiencia, de Guadalajara a Berlín.",
    bio2: "He construido con React, Angular y TypeScript para Bosch y Karl Storz interfaces que miles de personas usan a diario con suficiente backend (Node, Python, Go) para llevar un producto de la idea al deploy. Lo que más me importa son los detalles que los usuarios sienten pero no nombran: movimiento, velocidad, accesibilidad.",
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

const de: typeof en = {
  meta: {
    title: "LuCas León — Frontend-Entwickler",
    description:
      "Portfolio von José Luis Castañeda León, Frontend-Entwickler mit über 7 Jahren React, Angular und TypeScript, von Guadalajara nach Berlin.",
  },
  nav: {
    work: "Arbeiten",
    about: "Über mich",
    contact: "Kontakt",
  },
  hero: {
    eyebrow: "Frontend-Entwickler · Berlin — Portfolio 2026",
    paragraph:
      "Ich baue Web-Interfaces, die sich mühelos anfühlen. Sieben Jahre TypeScript, React und Angular, von den Werkshallen bei Bosch bis zu den klinischen Tools von Karl Storz in Berlin.",
    ctaWork: "Meine Arbeit ansehen",
    ctaContact: "Kontakt aufnehmen",
    ctaCv: "Lebenslauf ↓",
  },
  work: {
    eyebrow: "Ausgewählte Arbeiten",
    headline1: "Projekte, die es",
    headline2: "aus dem localhost geschafft haben.",
    liveSite: "Live-Seite",
    code: "Code",
  },
  tech: {
    eyebrow: "Technologien",
    headline1: "Der Werkzeugkasten",
    headline2: "in sieben Jahren gewachsen.",
  },
  about: {
    eyebrow: "Über mich",
    headline1: "Von der ersten Website",
    headline2: "zu Full-Stack-Produkten.",
    bio1: "Ich bin José Luis Castañeda León, Frontend-Entwickler mit über 7 Jahren Erfahrung, von Guadalajara nach Berlin.",
    bio2: "Ich habe mit React, Angular und TypeScript für Bosch und Karl Storz gearbeitet, an Interfaces, die täglich Tausende nutzen, mit genug Backend (Node, Python, Go), um ein Produkt von der Idee bis zum Deployment zu bringen. Am wichtigsten sind mir die Details, die Nutzer spüren, aber nie benennen: Bewegung, Geschwindigkeit, Barrierefreiheit.",
  },
  contact: {
    eyebrow: "Kontakt",
    say: "Sag",
    // the wink greets in Spanish (his roots) on the non-Spanish pages
    holaWord: "hola",
    paragraph:
      "Ein Projekt, eine Stelle oder einfach eine Frage zu etwas, das ich gebaut habe? Mein Postfach ist offen.",
    grabCv: "oder schnapp dir den",
    cvWord: "CV ↓",
  },
  form: {
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    send: "Senden ↗",
    sending: "Wird gesendet…",
    close: "Schließen",
    sentTitle: "Nachricht gesendet ✓",
    sentBody: "Danke — ich melde mich bald.",
    errorBody: "Etwas ist schiefgelaufen — schreib mir direkt an",
  },
  fab: {
    label: "Kontakt — sag hola",
    bubble: "Sag hola",
  },
};

const tr: typeof en = {
  meta: {
    title: "LuCas León — Frontend Geliştirici",
    description:
      "José Luis Castañeda León'un portfolyosu — 7+ yıllık React, Angular ve TypeScript deneyimiyle frontend geliştirici, Guadalajara'dan Berlin'e.",
  },
  nav: {
    work: "Çalışmalar",
    about: "Hakkımda",
    contact: "İletişim",
  },
  hero: {
    eyebrow: "Frontend Geliştirici · Berlin — Portfolyo 2026",
    paragraph:
      "Zahmetsiz hissettiren web arayüzleri geliştiriyorum. Yedi yıllık TypeScript, React ve Angular; Bosch'un fabrika sahalarından Berlin'deki Karl Storz'un klinik araçlarına kadar.",
    ctaWork: "Çalışmalarımı gör",
    ctaContact: "İletişime geç",
    ctaCv: "CV indir ↓",
  },
  work: {
    eyebrow: "Seçilmiş çalışmalar",
    headline1: "localhost'un dışına",
    headline2: "çıkan projeler.",
    liveSite: "Canlı site",
    code: "Kod",
  },
  tech: {
    eyebrow: "Teknolojiler",
    headline1: "Her günkü araç kutusu",
    headline2: "yedi yılda şekillendi.",
  },
  about: {
    eyebrow: "Hakkımda",
    headline1: "İlk web sitesinden",
    headline2: "full-stack ürünlere.",
    bio1: "Ben José Luis Castañeda León — Guadalajara'dan Berlin'e, 7+ yıl deneyimli bir frontend geliştiricisiyim.",
    bio2: "Bosch ve Karl Storz için React, Angular ve TypeScript ile her gün binlerce kişinin kullandığı arayüzler geliştirdim; bir ürünü fikirden yayına taşıyacak kadar da backend (Node, Python, Go) bilgisiyle. En çok, kullanıcıların hissettiği ama adını koymadığı detaylara önem veriyorum: hareket, hız, erişilebilirlik.",
  },
  contact: {
    eyebrow: "İletişim",
    say: "De",
    // the wink greets in Spanish (his roots) on the non-Spanish pages
    holaWord: "hola",
    paragraph:
      "Bir proje, bir pozisyon ya da geliştirdiğim bir şey hakkında bir soru mu var? Kutum her zaman açık.",
    grabCv: "ya da",
    cvWord: "CV'yi indir ↓",
  },
  form: {
    name: "Ad",
    email: "E-posta",
    message: "Mesaj",
    send: "Gönder ↗",
    sending: "Gönderiliyor…",
    close: "Kapat",
    sentTitle: "Mesaj gönderildi ✓",
    sentBody: "Teşekkürler — en kısa sürede döneceğim.",
    errorBody: "Bir şeyler ters gitti — bana doğrudan şu adresten yaz:",
  },
  fab: {
    label: "İletişim — de hola",
    bubble: "De hola",
  },
};

export type Dictionary = typeof en;
export const dictionaries: Record<Locale, Dictionary> = { en, es, de, tr };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
