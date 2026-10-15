const SCORE = 94;
const RADIUS = 72;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const OFFSET = CIRCUMFERENCE - (SCORE / 100) * CIRCUMFERENCE;

const checks = [
  { label: "Access reviews", value: "Up to date" },
  { label: "Encryption at rest", value: "Enforced" },
  { label: "Open findings", value: "2 low" },
];

export function ComplianceScoreRing() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_24px_60px_-28px_rgba(9,25,34,0.22)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Compliance score
        </span>
        <span className="pill pill-success">Trending up</span>
      </div>

      <div className="relative mx-auto mt-6 flex h-44 w-44 items-center justify-center">
        <svg viewBox="0 0 168 168" className="h-44 w-44 -rotate-90">
          <circle
            cx="84"
            cy="84"
            r={RADIUS}
            fill="none"
            stroke="var(--border)"
            strokeWidth="12"
          />
          <circle
            cx="84"
            cy="84"
            r={RADIUS}
            fill="none"
            stroke="var(--primary)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={OFFSET}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[var(--ink)]">
            {SCORE}%
          </span>
          <span className="mt-0.5 text-xs text-[var(--fg-muted)]">
            across 4 frameworks
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-5">
        {checks.map((c) => (
          <div key={c.label} className="flex items-center justify-between">
            <span className="text-sm text-[var(--fg-muted)]">{c.label}</span>
            <span className="text-sm font-medium text-[var(--ink)]">
              {c.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
