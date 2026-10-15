import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StatusTag } from "@/components/StatusTag";
import { Reveal } from "@/components/Reveal";
import { ChecklistCTA } from "@/components/ChecklistCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zenvanta is an early-stage compliance automation startup based in Lalitpur, Nepal, building continuous evidence collection for cloud-native teams.",
  alternates: {
    canonical: "/about",
  },
};

const snapshot = [
  { value: "Pre-seed", label: "Current stage" },
  { value: "4", label: "People on the team" },
  { value: "Lalitpur", label: "Where we're based" },
];

const values = [
  {
    title: "Evidence over assurances",
    body: "We'd rather show you the exact control check that passed than ask you to trust a dashboard.",
  },
  {
    title: "Engineers are the real users",
    body: "The person connecting the integration and the person in the audit meeting are rarely the same — we design for both.",
  },
  {
    title: "Small team, direct access",
    body: "As a startup, every customer talks directly to the people building the product — no tiered support queue yet, by design.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <StatusTag>About</StatusTag>
            <h1 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
              We got tired of compliance being a once-a-year fire drill.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              Zenvanta is a compliance automation startup building out of
              Lalitpur, Nepal — small team, early days, and still shaped
              directly by the teams using it.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Why we started Zenvanta
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm leading-7 text-[var(--fg-muted)]">
              <p>
                We kept running into the same story: an engineering team
                closes a deal that hinges on SOC 2, then loses a sprint a
                quarter to the same screenshots and the same spreadsheet,
                for the same auditor, every single review.
              </p>
              <p>
                That busywork doesn&apos;t make anyone more secure — it just
                proves, once a quarter, that a control that was already true
                is still true. We started Zenvanta to make that proof
                continuous instead of manual, so the evidence is already
                there by the time anyone asks for it.
              </p>
              <p>
                We&apos;re a few months in, pre-seed, and still writing the
                playbook alongside the first teams who&apos;ve trusted us
                with their stack. Nothing about that is figured out yet —
                that&apos;s the point of building it with design partners
                instead of in a vacuum.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-tint)] p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                Where we stand today
              </p>
              <div className="mt-6 flex flex-col gap-6">
                {snapshot.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-baseline justify-between border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm text-[var(--fg-muted)]">
                      {s.label}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)]">
              What we optimize for right now
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                  <h3 className="text-base font-semibold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-6 text-[var(--fg-muted)]">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ChecklistCTA
        title="Want to be a design partner?"
        description="We're onboarding a small number of early-stage teams directly with the founders — tell us about your stack and your next audit deadline."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
