import { IconCheck } from "../icons";

const events = [
  { text: "AWS IAM MFA policy verified", meta: "2m ago" },
  { text: "GitHub branch protection snapshot collected", meta: "14m ago" },
  { text: "Okta SSO enforcement confirmed", meta: "31m ago" },
  { text: "Database encryption-at-rest check passed", meta: "1h ago" },
  { text: "Vendor access review reminder sent", meta: "3h ago" },
];

export function EvidenceFeed() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_-28px_rgba(9,25,34,0.22)]">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
          Live evidence collection
        </span>
        <span className="status-dot" />
      </div>

      <ul className="mt-5 flex flex-col gap-4">
        {events.map((e, i) => (
          <li key={e.text} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full"
              style={{
                background: "var(--primary-soft)",
                opacity: 1 - i * 0.12,
              }}
            >
              <IconCheck className="h-3 w-3 text-[var(--primary-dark)]" />
            </span>
            <div className="flex-1">
              <p className="text-sm leading-5 text-[var(--ink)]">{e.text}</p>
              <p className="mt-0.5 text-xs text-[var(--fg-faint)]">
                {e.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
