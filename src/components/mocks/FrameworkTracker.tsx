const frameworks = [
  { name: "SOC 2 Type II", progress: 96, status: "Ready for audit", tone: "success" as const },
  { name: "ISO 27001", progress: 82, status: "In progress", tone: "warning" as const },
  { name: "GDPR", progress: 100, status: "Complete", tone: "success" as const },
  { name: "HIPAA", progress: 41, status: "In progress", tone: "warning" as const },
];

const pillClass: Record<"success" | "warning", string> = {
  success: "pill-success",
  warning: "pill-warning",
};

export function FrameworkTracker() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(9,25,34,0.22)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Framework coverage
        </span>
        <span className="text-[11px] text-[var(--fg-faint)]">4 active</span>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        {frameworks.map((f) => (
          <div key={f.name}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[var(--ink)]">
                {f.name}
              </span>
              <span className={`pill ${pillClass[f.tone]}`}>{f.status}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-tint)]">
              <div
                className="h-full rounded-full bg-[var(--primary)]"
                style={{ width: `${f.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
