const socials = [
  { label: "GitHub", href: "https://github.com/Lucasle6" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luisleon6" },
  { label: "Email", href: "mailto:j.cleon695@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/5 bg-sage">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          © 2026 José Luis Castañeda León
        </p>
        <ul className="flex gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-navy"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
