import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { IconCheck } from "./icons";

const items = [
  "Connect your cloud stack in minutes",
  "Evidence collected automatically, every day",
  "Framework-ready reports for your auditor",
];

export function ChecklistCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-[var(--fg-muted)]">
            {description}
          </p>
          <Button href={buttonHref} className="mt-8">
            {buttonLabel}
          </Button>
        </Reveal>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[0_24px_60px_-28px_rgba(9,25,34,0.22)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Onboarding checklist
          </p>
          <div className="mt-5 flex flex-col gap-4">
            {items.map((item, i) => (
              <Reveal key={item} delay={i * 140}>
                <div className="flex items-center gap-3">
                  <span className="checklist-box">
                    <IconCheck className="h-3 w-3 text-[var(--on-primary)]" />
                  </span>
                  <span className="text-sm text-[var(--ink)]">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
