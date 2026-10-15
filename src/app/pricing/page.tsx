import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Zenvanta pricing by framework and team size — published plans, no sales call required to see a number.",
  alternates: {
    canonical: "/pricing",
  },
};

const plans = [
  {
    name: "Starter",
    price: "$490",
    period: "/month",
    description: "One framework, one growing engineering team.",
    featured: false,
    features: [
      "1 compliance framework",
      "Up to 20 employees tracked",
      "15 integrations included",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$1,150",
    period: "/month",
    description: "Multiple frameworks, shared control library.",
    featured: true,
    features: [
      "Up to 3 compliance frameworks",
      "Up to 100 employees tracked",
      "Unlimited integrations",
      "Shared Slack channel support",
      "Auditor portal included",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Complex org structures, custom controls.",
    featured: false,
    features: [
      "Unlimited frameworks",
      "Unlimited employees tracked",
      "Custom control mapping",
      "Dedicated onboarding engineer",
      "Uptime & response SLA",
    ],
  },
];

const comparisonRows = [
  { feature: "Automated evidence collection", starter: true, growth: true, enterprise: true },
  { feature: "Auditor portal access", starter: false, growth: true, enterprise: true },
  { feature: "Custom control mapping", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated onboarding engineer", starter: false, growth: false, enterprise: true },
  { feature: "SLA-backed response times", starter: false, growth: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <StatusTag>Pricing</StatusTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Pick your frameworks. See the number.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              As a startup ourselves, we didn&apos;t want to hide pricing
              behind a sales call either. Every plan below is what you&apos;d
              actually pay.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 50}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  p.featured
                    ? "border-[var(--primary)] bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(15,208,130,0.35)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                {p.featured && (
                  <span className="pill pill-success mb-4 w-fit">
                    Most teams start here
                  </span>
                )}
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                  {p.name}
                </h2>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">
                  {p.description}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
                    {p.price}
                  </span>
                  <span className="text-sm text-[var(--fg-faint)]">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-[var(--fg-muted)]"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 flex-none text-[var(--primary-dark)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={p.featured ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {p.price === "Custom" ? "Talk to us" : "Start free trial"}
                </Button>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Compare plans
            </h2>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] text-left">
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Feature
                    </th>
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Starter
                    </th>
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Growth
                    </th>
                    <th className="px-6 py-4 font-medium text-[var(--fg-muted)]">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-6 py-4 text-[var(--ink)]">
                        {row.feature}
                      </td>
                      {[row.starter, row.growth, row.enterprise].map(
                        (included, idx) => (
                          <td key={idx} className="px-6 py-4">
                            {included ? (
                              <IconCheck className="h-4 w-4 text-[var(--primary-dark)]" />
                            ) : (
                              <span className="text-[var(--fg-faint)]">—</span>
                            )}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Container>
      </section>

      <ChecklistCTA
        title="Not sure which plan fits your team?"
        description="Tell us your framework and team size and we'll recommend a plan directly — no need to guess from a feature grid."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
