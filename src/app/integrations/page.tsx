import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import {
  IconCloud,
  IconIdentity,
  IconLayers,
  IconChat,
  IconDatabase,
  IconUsers,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Zenvanta to the cloud infrastructure, identity, version control and communication tools your team already runs on.",
  alternates: {
    canonical: "/integrations",
  },
};

const categories = [
  {
    icon: IconCloud,
    name: "Cloud infrastructure",
    items: ["AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean"],
  },
  {
    icon: IconIdentity,
    name: "Identity & access",
    items: ["Okta", "Google Workspace", "Microsoft Entra ID", "JumpCloud"],
  },
  {
    icon: IconLayers,
    name: "Version control & CI/CD",
    items: ["GitHub", "GitLab", "Bitbucket", "CircleCI"],
  },
  {
    icon: IconChat,
    name: "Communication",
    items: ["Slack", "Microsoft Teams", "Zoom", "Notion"],
  },
  {
    icon: IconDatabase,
    name: "Data & infrastructure",
    items: ["PostgreSQL", "MongoDB Atlas", "Datadog", "PagerDuty"],
  },
  {
    icon: IconUsers,
    name: "HR & people",
    items: ["Rippling", "BambooHR", "Deel", "Gusto"],
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <StatusTag>Integrations</StatusTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              Connect what you already run. We&apos;ll watch the rest.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Every integration is read-only and scoped to configuration
              data — Zenvanta never writes to your infrastructure or holds
              standing production access.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 40}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--surface-tint)]">
                  <c.icon className="h-5 w-5 text-[var(--ink)]" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-[var(--ink)]">
                  {c.name}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between text-sm text-[var(--fg-muted)]"
                    >
                      {item}
                      <span className="pill pill-neutral">Read-only</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <ChecklistCTA
        title="Don't see a tool you rely on?"
        description="We add new integrations most sprints — tell us what's in your stack and we'll let you know how soon it's supported."
        buttonLabel="Request an integration"
        buttonHref="/contact"
      />
    </>
  );
}
