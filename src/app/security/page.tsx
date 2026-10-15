import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { RiskRegister } from "@/components/mocks/RiskRegister";
import {
  IconLock,
  IconKey,
  IconServer,
  IconActivity,
  IconUsers,
  IconDatabase,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How Zenvanta protects the compliance evidence and account data it collects on behalf of its customers.",
  alternates: {
    canonical: "/security",
  },
};

const safeguards = [
  {
    icon: IconLock,
    title: "Encryption everywhere",
    body: "Data is encrypted in transit with TLS 1.2+ and at rest with AES-256. Evidence snapshots are encrypted per-tenant.",
  },
  {
    icon: IconKey,
    title: "Scoped, read-only access",
    body: "Every cloud integration uses the narrowest IAM policy that still collects the required evidence — never write or admin scopes.",
  },
  {
    icon: IconUsers,
    title: "Role-based internal access",
    body: "Employee access to customer data is role-gated, logged, and reviewed quarterly as part of our own SOC 2 program.",
  },
  {
    icon: IconServer,
    title: "Isolated infrastructure",
    body: "Each customer's evidence store is logically isolated, hosted on infrastructure that is itself continuously monitored by Zenvanta.",
  },
  {
    icon: IconActivity,
    title: "Continuous internal monitoring",
    body: "We run the same control-monitoring engine we sell against our own infrastructure — we don't ask customers to trust what we don't verify ourselves.",
  },
  {
    icon: IconDatabase,
    title: "Data retention controls",
    body: "Evidence and account data are retained only as long as needed for an active relationship plus your chosen audit window, then deleted on request.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <StatusTag>Security</StatusTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              A compliance company has to earn its own trust first.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup asking teams to connect their cloud accounts to
              us, we hold ourselves to the same standard we help customers
              reach.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {safeguards.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary-soft)]">
                  <s.icon className="h-5 w-5 text-[var(--primary-dark)]" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-[var(--ink)]">
                  {s.title}
                </h2>
                <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <StatusTag>Our own risk register</StatusTag>
            <h2 className="mt-5 max-w-sm font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--ink)]">
              We track our own risk the same way we ask you to track yours
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
              Every finding against Zenvanta&apos;s own infrastructure is
              logged, owned, and tracked to resolution in the same register
              model we build for customers.
            </p>
          </Reveal>
          <Reveal delay={80} className="flex justify-center">
            <RiskRegister />
          </Reveal>
        </Container>
      </section>

      <ChecklistCTA
        title="Want our own security documentation?"
        description="We share our architecture overview, sub-processor list and own SOC 2 report status under NDA during onboarding."
        buttonLabel="Request documentation"
        buttonHref="/contact"
      />
    </>
  );
}
