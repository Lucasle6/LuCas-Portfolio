import Hero from "@/components/Hero";

/*
  Placeholder sections: they exist so the navbar anchors already land
  somewhere and the section rhythm (white / mint alternation) is visible.
  Each one gets replaced by a real section in a later lesson.
*/
const placeholders = [
  { id: "work", label: "Selected work", tinted: true },
  { id: "about", label: "About", tinted: false },
  { id: "contact", label: "Contact", tinted: true },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {placeholders.map((section) => (
        <section
          key={section.id}
          id={section.id}
          // scroll-mt-16: anchor targets stop below the h-16 sticky navbar
          className={`scroll-mt-16 ${section.tinted ? "bg-mint" : "bg-white"}`}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-32">
            <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
              {"// "}
              {section.label} — coming soon
            </p>
          </div>
        </section>
      ))}
    </main>
  );
}
