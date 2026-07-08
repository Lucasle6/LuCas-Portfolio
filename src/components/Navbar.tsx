import Link from "next/link";
import MagneticLetters from "@/components/MagneticLetters";
import type { Dictionary, Locale } from "@/lib/dictionary";

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const links = [
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    /*
      sticky + backdrop-blur: the bar stays pinned while content
      scrolls under it through the translucent white.
      z-50 keeps it above anything we stack later.
    */
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-navy"
        >
          <MagneticLetters text="LuCas León" radius={36} strength={0.3} />
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="flex items-center gap-5 sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* language toggle: full navigation to the other locale's route */}
          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
            <Link
              href="/en"
              aria-current={locale === "en" ? "true" : undefined}
              className={
                locale === "en"
                  ? "font-bold text-navy"
                  : "text-ink-muted transition-colors hover:text-navy"
              }
            >
              EN
            </Link>
            <span aria-hidden className="text-ink-muted/50">
              /
            </span>
            <Link
              href="/es"
              aria-current={locale === "es" ? "true" : undefined}
              className={
                locale === "es"
                  ? "font-bold text-navy"
                  : "text-ink-muted transition-colors hover:text-navy"
              }
            >
              ES
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
