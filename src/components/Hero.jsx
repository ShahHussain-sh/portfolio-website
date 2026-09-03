import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

function useUptime() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function Hero() {
  const uptime = useUptime();

  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="animate-rise">
          <div className="flex items-center gap-2 mb-6 font-mono text-xs text-teal">
            <span className="relative flex h-2 w-2">
              <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-teal" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
            </span>
            STATUS: OPEN TO OPPORTUNITIES
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink leading-[1.05]">
            Shah Hussain
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-muted font-display">
            Software Engineer &mdash; {profile.focus}
          </p>

          <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-amber text-base font-medium px-5 py-2.5 rounded-md hover:bg-amber/90 transition-colors"
            >
              View work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-line text-ink px-5 py-2.5 rounded-md hover:border-amber/60 transition-colors"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-amber transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-amber transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-muted hover:text-amber transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms] justify-self-center">
          <div className="bracket relative w-64 sm:w-72 rounded-lg overflow-hidden border border-line bg-panel">
            <img
              src="/profile.jpg"
              alt="Portrait of Shah Hussain"
              className="w-full aspect-[4/5] object-cover grayscale-[15%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-3 font-mono text-[11px] text-teal flex items-center justify-between">
              <span>uptime</span>
              <span>{uptime}</span>
            </div>
          </div>
          <div className="mt-3 font-mono text-[11px] text-faint text-center">
            {profile.location}
          </div>
        </div>
      </div>
    </section>
  );
}
