import { experience } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          index="02"
          label="pipeline.log"
          title="Where I've worked"
          blurb="Three roles, each one further from the feature and closer to how the system behaves once it's live."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className="relative sm:pl-10 animate-rise"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="hidden sm:flex absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-base border-2 border-amber items-center justify-center" />

                <div className="bracket border border-line bg-panel rounded-lg p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {job.role} <span className="text-muted font-normal">&middot; {job.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-teal whitespace-nowrap">{job.period}</span>
                  </div>
                  <div className="font-mono text-xs text-faint mb-4">
                    {job.team} &middot; {job.location}
                  </div>
                  <ul className="space-y-2.5">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-muted leading-relaxed flex gap-2.5">
                        <span className="text-amber mt-1.5 shrink-0">&#9656;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
