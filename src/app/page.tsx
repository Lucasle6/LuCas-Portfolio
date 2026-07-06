import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import WorkSection from "@/components/WorkSection";

/*
  Placeholder sections: they exist so the navbar anchors already land
  somewhere and the section rhythm (white / mint alternation) is visible.
  Each one gets replaced by a real section in a later lesson.
*/
const placeholders = [{ id: "contact", label: "Contact", tinted: true }];

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <AboutSection />

      {placeholders.map((section) => (
        <section
          key={section.id}
          id={section.id}
          // scroll-mt-16: anchor targets stop below the h-16 sticky navbar
          className={`scroll-mt-16 ${section.tinted ? "bg-mint" : "bg-white"}`}
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-32">
            <Reveal>
              <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
                {"// "}
                {section.label} — coming soon
              </p>
            </Reveal>
          </div>
        </section>
      ))}
    </main>
  );
}
