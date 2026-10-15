export function StatusTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-3.5 py-1.5">
      <span className="status-dot" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--fg-muted)]">
        {children}
      </span>
    </div>
  );
}
