import { education, certificates } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <SectionHeader index="04" label="education.log" title="Education" />
          <div className="space-y-6 -mt-4">
            {education.map((e) => (
              <div key={e.school} className="border-l-2 border-line pl-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <h3 className="font-display text-base font-semibold text-ink">{e.school}</h3>
                  <span className="font-mono text-xs text-teal">{e.period}</span>
                </div>
                <div className="text-sm text-muted mt-1">{e.degree}</div>
                {e.detail && (
                  <p className="text-sm text-faint mt-2 leading-relaxed">{e.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader index="05" label="certificates.log" title="Certificates" />
          <div className="space-y-3 -mt-4">
            {certificates.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between border border-line bg-panel rounded-lg px-4 py-3"
              >
                <span className="text-sm text-ink">{c.name}</span>
                <span className="font-mono text-[11px] text-faint whitespace-nowrap ml-4">
                  {c.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
