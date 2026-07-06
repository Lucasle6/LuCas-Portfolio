const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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
          LuCas León
        </a>
        <ul className="flex items-center gap-6 sm:gap-8">
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
      </nav>
    </header>
  );
}
