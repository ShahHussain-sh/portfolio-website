import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black,transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bracket border border-line bg-panel rounded-xl p-10 sm:p-14 text-center">
          <div className="font-mono text-xs text-amber mb-4">MODULE 06 / contact.open()</div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Let&rsquo;s build something that stays up.
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto leading-relaxed">
            Open to Software Engineer roles &mdash; backend, full-stack, or platform work.
            Based in Karachi, happy to talk remote or on-site.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-amber text-base font-medium px-5 py-2.5 rounded-md hover:bg-amber/90 transition-colors"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border border-line text-ink px-5 py-2.5 rounded-md hover:border-amber/60 transition-colors"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-amber transition-colors"
            >
              <GithubIcon size={18} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-amber transition-colors"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <span className="flex items-center gap-2 text-sm text-faint">
              <MapPin size={18} /> {profile.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
