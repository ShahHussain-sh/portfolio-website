import { stack } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="01"
          label="stack.config"
          title="What I build with"
          blurb="The tools I reach for day to day, grouped the way I actually use them."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stack.map((group, i) => (
            <div
              key={group.group}
              className="bracket border border-line bg-panel rounded-lg p-5 animate-rise"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="font-mono text-[11px] text-faint mb-3 uppercase tracking-wide">
                {group.group}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
