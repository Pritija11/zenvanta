import Link from "next/link";
import { Container } from "./Container";
import { IconLogo, IconMail, IconPhone, IconMapPin } from "./icons";

const productLinks = [
  { href: "/frameworks", label: "Frameworks" },
  { href: "/integrations", label: "Integrations" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[#9fb0ba]">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/8">
              <IconLogo className="h-4.5 w-4.5 text-[var(--primary)]" />
            </span>
            <span className="font-[family-name:var(--font-display)] text-base font-semibold text-[var(--on-dark)]">
              Zenvanta
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            Continuous compliance automation for cloud-native startups —
            SOC 2, ISO 27001, GDPR and HIPAA, without the audit scramble.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b7e89]">
            Product
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {productLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--on-dark)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b7e89]">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--on-dark)]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6b7e89]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a
                href="mailto:hello@zenvanta.cloud"
                className="hover:text-[var(--on-dark)]"
              >
                hello@zenvanta.cloud
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a
                href="tel:+9779704455667"
                className="hover:text-[var(--on-dark)]"
              >
                +977 970-4455667
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Pulchowk, Lalitpur 44700, Nepal</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/8">
        <Container className="flex flex-col gap-4 py-6 text-[11px] text-[#6b7e89] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} Zenvanta. All rights reserved.</p>
          <p>Compliance automation, built from Lalitpur, Nepal.</p>
        </Container>
      </div>
    </footer>
  );
}
