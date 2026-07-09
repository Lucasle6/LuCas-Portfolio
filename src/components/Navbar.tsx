import { Fragment } from "react";
import Link from "next/link";
import MagneticLetters from "@/components/MagneticLetters";
import { locales, type Dictionary, type Locale } from "@/lib/dictionary";

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
          {/* language toggle: one link per locale, full navigation to
              that locale's route — maps over `locales` so a new language
              shows up here automatically */}
          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
            {locales.map((loc, i) => (
              <Fragment key={loc}>
                {i > 0 && (
                  <span aria-hidden className="text-ink-muted/50">
                    /
                  </span>
                )}
                <Link
                  href={`/${loc}`}
                  aria-current={locale === loc ? "true" : undefined}
                  className={
                    locale === loc
                      ? "font-bold text-navy"
                      : "text-ink-muted transition-colors hover:text-navy"
                  }
                >
                  {loc}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
