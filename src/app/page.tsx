import Link from "next/link";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { ComplianceScoreRing } from "@/components/mocks/ComplianceScoreRing";
import { FrameworkTracker } from "@/components/mocks/FrameworkTracker";
import { EvidenceFeed } from "@/components/mocks/EvidenceFeed";
import { AuditorAccess } from "@/components/mocks/AuditorAccess";
import {
  IconArrowRight,
  IconCloud,
  IconActivity,
  IconUsers,
  IconCheck,
} from "@/components/icons";

const stats = [
  { value: "4", label: "Frameworks supported" },
  { value: "120+", label: "Automated checks" },
  { value: "6 wks", label: "Avg. time to audit-ready" },
];

const services = [
  {
    icon: IconCloud,
    title: "Connect your stack, not your calendar",
    description:
      "Link AWS, GCP, GitHub, Okta and the rest of your stack once. Zenvanta pulls the configuration evidence your auditor actually asks for, automatically.",
    mock: <FrameworkTracker />,
  },
  {
    icon: IconActivity,
    title: "Evidence collected continuously",
    description:
      "No more screenshotting settings pages before an audit. Every control is re-checked on a schedule, with a timestamped trail you can hand straight to a reviewer.",
    mock: <EvidenceFeed />,
  },
  {
    icon: IconUsers,
    title: "A portal built for your auditor too",
    description:
      "Give your auditor scoped, read-only access to exactly the evidence tied to the framework in review — no spreadsheet exports, no email threads.",
    mock: <AuditorAccess />,
  },
];

const principles = [
  "Real-time control monitoring, not a quarterly checklist",
  "Every integration read-only — we never touch production",
  "Built for engineers first, with an auditor-friendly layer on top",
  "Transparent pricing, no \"contact sales\" wall for core plans",
];

const testimonialQuote =
  "We went from a shared folder of screenshots to an actual audit-ready evidence trail in under two months. Our auditor noticed the difference immediately.";

const faqs = [
  {
    q: "Is Zenvanta a new company?",
    a: "Yes — we're an early-stage compliance automation startup based in Lalitpur, Nepal, working closely with our first group of design-partner teams to shape the product.",
  },
  {
    q: "Which frameworks does Zenvanta support?",
    a: "SOC 2 Type I and II, ISO 27001, GDPR, and HIPAA today, with PCI DSS in active development. Each framework maps to the same underlying set of automated checks.",
  },
  {
    q: "Do you require production access?",
    a: "No. Every integration is read-only and scoped to the configuration data needed for evidence collection — Zenvanta never has write access to your infrastructure.",
  },
  {
    q: "Can we bring our own auditor?",
    a: "Yes. We're auditor-agnostic — invite any licensed CPA firm into the portal, or ask us for a referral from firms familiar with the platform.",
  },
  {
    q: "What does it cost?",
    a: "Plans are priced by framework and team size, published on our Pricing page with no sales call required to see a number.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="dot-field" aria-hidden />
        <div className="spring-glow" aria-hidden />
        <Container className="relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <StatusTag>Startup · Design partners welcome</StatusTag>
              <h1 className="mt-7 max-w-lg font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.12] tracking-tight text-[var(--ink)] md:text-6xl">
                Compliance that keeps itself up to date.
              </h1>
              <p className="mt-7 max-w-md text-base leading-7 text-[var(--fg-muted)]">
                Zenvanta connects to the cloud services you already use and
                continuously collects the evidence SOC 2, ISO 27001, GDPR and
                HIPAA auditors ask for — so your team stops scrambling before
                every review.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="/contact">Start free trial</Button>
                <Link
                  href="/frameworks"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--ink)]"
                >
                  See supported frameworks
                  <IconArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[var(--border)] pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--fg-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100} className="flex justify-center lg:justify-end">
              <ComplianceScoreRing />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-24 md:py-28">
        <Container className="flex flex-col gap-24">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                    <s.icon className="h-5 w-5 text-[var(--primary-dark)]" />
                  </span>
                  <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
                    {s.description}
                  </p>
                </div>
                <div
                  className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {s.mock}
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Principles */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <StatusTag>How we build</StatusTag>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Compliance software engineers actually want to use
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Most compliance tools are built for the auditor first and the
              engineering team second. We built Zenvanta the other way
              around.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="flex flex-col gap-4">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-dark)]" />
                  <span className="text-sm leading-6 text-[var(--fg-muted)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl font-medium leading-[1.5] tracking-tight text-[var(--ink)] md:text-3xl">
              &ldquo;{testimonialQuote}&rdquo;
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--primary-soft)]" />
              <div className="text-left">
                <p className="text-sm text-[var(--ink)]">
                  Head of Engineering, design-partner team
                </p>
                <p className="text-xs text-[var(--fg-faint)]">
                  Early Zenvanta customer
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <StatusTag>Pricing</StatusTag>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Priced by framework. Published, not negotiated.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
              No sales call required to see what a plan costs — pick your
              frameworks and team size, and the number is right there.
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-dark)] hover:underline"
            >
              See pricing
              <IconArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <Container>
          <Reveal>
            <StatusTag>Questions</StatusTag>
            <h2 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)] md:text-4xl">
              Before you connect your stack
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base text-[var(--ink)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-[var(--border-strong)] text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ChecklistCTA
        title="See your compliance score in the first fifteen minutes."
        description="Connect your first integration and watch Zenvanta start collecting evidence — no implementation call required to get going."
        buttonLabel="Start free trial"
        buttonHref="/contact"
      />
    </>
  );
}
