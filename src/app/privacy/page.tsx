import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Zenvanta collects, uses, and protects data for customers of its compliance automation platform.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you request a trial, we collect your name, work email, and the details you share about your compliance needs.",
      "Once you connect an integration, we collect the configuration data required to evaluate the relevant controls — never the underlying customer or production data behind that configuration.",
      "Like most web services, our site logs IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Information is used to operate the platform, generate compliance evidence, and respond to support requests.",
      "We do not sell customer data, and we do not use connected integration data for anything outside the account that authorized it.",
    ],
  },
  {
    heading: "3. Who we share it with",
    body: [
      "Only infrastructure sub-processors required to run the platform, and an auditor you explicitly invite into your portal. We may also share information when legally required to by a regulator or court order.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "Evidence and account data are retained for the duration of your subscription plus the audit window you select, after which they are securely deleted on request.",
    ],
  },
  {
    heading: "5. Your rights",
    body: [
      "You can request a copy of the data we hold, ask us to correct it, or request deletion once it's no longer subject to a retention requirement you've selected. Reach out through the contact details below.",
    ],
  },
  {
    heading: "6. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll notify active customers directly before the change takes effect.",
    ],
  },
  {
    heading: "7. Contact",
    body: [
      "Questions about this policy can be sent to hello@zenvanta.cloud, or by post to Pulchowk, Lalitpur 44700, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <StatusTag>Legal</StatusTag>
          <h1 className="mt-6 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data Zenvanta collects, how it&apos;s used,
            and what you can do about it.
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
