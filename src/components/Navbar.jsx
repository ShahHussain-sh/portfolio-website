import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#profile", label: "Profile" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-base/90 backdrop-blur border-line" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight text-ink">
          <span className="w-7 h-7 rounded border border-line flex items-center justify-center text-amber font-mono text-xs">
            SH
          </span>
          <span className="hidden sm:inline text-sm text-muted font-mono">shah-hussain.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors font-mono tracking-tight"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 text-sm border border-line hover:border-amber/60 text-ink px-3.5 py-1.5 rounded-md transition-colors font-mono"
          >
            <Download size={14} className="text-amber" />
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-base border-t border-line px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-ink font-mono"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 text-sm border border-line text-ink px-3.5 py-2 rounded-md w-fit font-mono"
          >
            <Download size={14} className="text-amber" />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
