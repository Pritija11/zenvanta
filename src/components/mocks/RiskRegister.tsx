const risks = [
  { item: "Legacy S3 bucket without lifecycle policy", severity: "Medium", owner: "Infra" },
  { item: "Third-party analytics vendor review overdue", severity: "Low", owner: "Vendor" },
  { item: "Shared admin credential on staging", severity: "High", owner: "Security" },
];

const severityClass: Record<string, string> = {
  High: "pill-danger",
  Medium: "pill-warning",
  Low: "pill-neutral",
};

export function RiskRegister() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(9,25,34,0.22)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Risk register
        </span>
        <span className="text-[11px] text-[var(--fg-faint)]">
          3 open items
        </span>
      </div>
      <div className="flex flex-col divide-y divide-[var(--border)]">
        {risks.map((r) => (
          <div
            key={r.item}
            className="flex items-center justify-between gap-4 px-6 py-4"
          >
            <div>
              <p className="text-sm text-[var(--ink)]">{r.item}</p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                Owner — {r.owner}
              </p>
            </div>
            <span className={`pill ${severityClass[r.severity]} flex-none`}>
              {r.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
