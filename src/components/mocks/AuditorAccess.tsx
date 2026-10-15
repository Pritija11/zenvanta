import { IconLock, IconUsers } from "../icons";

export function AuditorAccess() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(9,25,34,0.22)]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
          <IconUsers className="h-5 w-5 text-[var(--primary-dark)]" />
        </span>
        <div>
          <p className="text-sm font-medium text-[var(--ink)]">
            Auditor portal access
          </p>
          <p className="text-xs text-[var(--fg-faint)]">
            Read-only, scoped to active frameworks
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-[var(--surface-tint)] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <IconLock className="h-4 w-4 text-[var(--fg-muted)]" />
          <span className="text-sm text-[var(--ink)]">
            portal.zenvanta.cloud/audit-q4
          </span>
        </div>
        <span className="pill pill-success">Active</span>
      </div>

      <p className="mt-4 text-xs leading-5 text-[var(--fg-muted)]">
        Auditors see exactly the evidence tied to the framework they&apos;re
        reviewing — nothing else in your account.
      </p>
    </div>
  );
}
