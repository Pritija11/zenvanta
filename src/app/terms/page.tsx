import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Zenvanta compliance automation platform.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. The service",
    body: [
      "These terms describe the general relationship between Zenvanta and prospective or current customers. The specific terms of any paid subscription are set out in a separate order form or subscription agreement.",
    ],
  },
  {
    heading: "2. Not a guarantee of certification",
    body: [
      "Zenvanta automates evidence collection and control monitoring. We do not issue SOC 2 reports or ISO 27001 certificates — those are issued by independent, licensed auditors and certification bodies.",
    ],
  },
  {
    heading: "3. Integration access",
    body: [
      "Integrations you connect use read-only, scoped credentials. Zenvanta does not take write or administrative access to connected systems unless explicitly configured otherwise by you.",
    ],
  },
  {
    heading: "4. Fees",
    body: [
      "Subscription fees are charged according to the plan selected at signup, as confirmed in your order form. Fees are billed monthly or annually in advance unless otherwise agreed.",
    ],
  },
  {
    heading: "5. Platform access",
    body: [
      "Access to the Zenvanta dashboard and auditor portal is provided as part of an active subscription. Credentials are personal to each user and may not be shared.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "The platform is provided to help manage compliance posture but does not constitute legal advice. To the extent permitted by law, liability for indirect or consequential damages is limited as set out in your subscription agreement.",
    ],
  },
  {
    heading: "7. Termination",
    body: [
      "Either party may terminate the subscription as described in the subscription agreement. Access to historical evidence exports remains available for a reasonable transition period after termination.",
    ],
  },
  {
    heading: "8. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of this website or the platform will be handled in the courts of Kathmandu, Nepal, except as otherwise specified in an individual subscription agreement.",
    ],
  },
  {
    heading: "9. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active customers by email before the change takes effect.",
    ],
  },
  {
    heading: "10. Contact",
    body: [
      "Questions about these terms can be sent to hello@zenvanta.cloud, or by post to Pulchowk, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <StatusTag>Legal</StatusTag>
          <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the Zenvanta website and the
            compliance automation platform it introduces.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
