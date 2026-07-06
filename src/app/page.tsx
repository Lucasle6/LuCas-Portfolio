import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
