import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import TechSection from "@/components/TechSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <TechSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
