export default function SectionHeader({ index, label, title, blurb }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs text-amber mb-3">
        <span className="border border-amberDim/60 rounded px-1.5 py-0.5">
          MODULE {index}
        </span>
        <span className="text-faint">/</span>
        <span className="text-muted">{label}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
        {title}
      </h2>
      {blurb && <p className="mt-3 text-muted leading-relaxed">{blurb}</p>}
    </div>
  );
}
