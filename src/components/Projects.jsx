import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="03"
          label="repositories"
          title="Things I've shipped"
          blurb="A mix of coursework, self-teaching, and early full-stack builds — pulled straight from GitHub."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group bracket border border-line bg-panel rounded-lg p-6 flex flex-col hover:border-amber/50 transition-colors animate-rise"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-lg font-semibold text-ink leading-snug">
                  {p.name}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="text-faint group-hover:text-amber transition-colors shrink-0 mt-1"
                />
              </div>
              <p className="text-sm text-muted leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-teal border border-line rounded px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
