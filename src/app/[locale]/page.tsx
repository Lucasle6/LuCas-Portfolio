import { notFound } from "next/navigation";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import TechSection from "@/components/TechSection";
import WorkSection from "@/components/WorkSection";
import { dictionaries, isLocale } from "@/lib/dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = dictionaries[locale];

  return (
    <main>
      <Hero dict={dict} />
      <WorkSection locale={locale} dict={dict} />
      <TechSection dict={dict} />
      <AboutSection locale={locale} dict={dict} />
      <ContactSection dict={dict} />
    </main>
  );
}
