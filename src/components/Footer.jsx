import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-faint">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Built with React &amp; Tailwind &middot; deployed on Vercel</span>
      </div>
    </footer>
  );
}
