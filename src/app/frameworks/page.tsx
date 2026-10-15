import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { IconShieldCheck, IconGlobe, IconLock, IconDatabase } from "@/components/icons";

export const metadata: Metadata = {
  title: "Frameworks",
  description:
    "The compliance frameworks Zenvanta automates evidence collection for — SOC 2, ISO 27001, GDPR, HIPAA and PCI DSS.",
  alternates: {
    canonical: "/frameworks",
  },
};

const frameworks = [
  {
    icon: IconShieldCheck,
    name: "SOC 2 Type I & II",
    summary:
      "The most requested framework for B2B SaaS selling into enterprise buyers.",
    controls: "118 controls",
    timeline: "Type II in 6–10 weeks",
    tone: "chip-green",
  },
  {
    icon: IconLock,
    name: "ISO 27001",
    summary:
      "An internationally recognized information security management standard.",
    controls: "93 controls",
    timeline: "Certification in 8–14 weeks",
    tone: "chip-blue",
  },
  {
    icon: IconGlobe,
    name: "GDPR",
    summary:
      "Data protection and privacy requirements for teams handling EU resident data.",
    controls: "61 controls",
    timeline: "Readiness in 3–5 weeks",
    tone: "chip-sky",
  },
  {
    icon: IconDatabase,
    name: "HIPAA",
    summary:
      "Safeguards for teams handling protected health information in the US.",
    controls: "76 controls",
    timeline: "Readiness in 5–8 weeks",
    tone: "chip-lavender",
  },
];

const steps = [
  {
    step: "01",
    title: "Connect your stack",
    body: "Link AWS, GCP, Azure, GitHub, Okta, Google Workspace and the rest of your tooling through scoped, read-only integrations.",
  },
  {
    step: "02",
    title: "We map controls automatically",
    body: "Zenvanta maps your existing configuration against every control in the frameworks you select, flagging gaps as findings.",
  },
  {
    step: "03",
    title: "Evidence refreshes on a schedule",
    body: "No more point-in-time screenshots — each control is re-verified automatically, with a timestamped history your auditor can review.",
  },
  {
    step: "04",
    title: "Hand the portal to your auditor",
    body: "Invite your auditor into a scoped, read-only portal instead of exporting spreadsheets or emailing screenshots back and forth.",
  },
];

export default function FrameworksPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <StatusTag>Frameworks</StatusTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              One platform, every framework your buyers ask for.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a compliance automation startup, we built Zenvanta around a
              single shared control library — so adding a second or third
              framework doesn&apos;t mean starting from zero.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {frameworks.map((f, i) => (
            <Reveal key={f.name} delay={i * 50}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface-tint)]">
                  <f.icon className="h-5 w-5 text-[var(--ink)]" />
                </span>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                  {f.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                  {f.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className={`pill border ${f.tone}`}>
                    {f.controls}
                  </span>
                  <span className="pill pill-neutral">{f.timeline}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <StatusTag>How it works</StatusTag>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              From first integration to audit-ready
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 50}>
                <div className="flex gap-5">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--primary-dark)]">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ChecklistCTA
        title="Not sure which framework to start with?"
        description="Tell us what your buyers are asking for and we'll help you sequence SOC 2, ISO 27001, GDPR or HIPAA in the order that unblocks deals fastest."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
