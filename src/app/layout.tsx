import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://zenvanta.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zenvanta — Continuous Compliance Automation",
    template: "%s · Zenvanta",
  },
  description:
    "Zenvanta is an early-stage cloud compliance automation startup based in Lalitpur, Nepal, helping SaaS teams reach SOC 2, ISO 27001, GDPR and HIPAA without the audit scramble.",
  keywords: [
    "Zenvanta",
    "compliance automation",
    "compliance automation startup",
    "SOC 2 automation",
    "ISO 27001",
    "GDPR compliance software",
    "security compliance platform",
    "cloud startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zenvanta — Continuous Compliance Automation",
    description:
      "Reach SOC 2, ISO 27001, GDPR and HIPAA without the audit scramble — compliance evidence collected automatically from your cloud stack.",
    siteName: "Zenvanta",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenvanta — Continuous Compliance Automation",
    description:
      "Reach SOC 2, ISO 27001, GDPR and HIPAA without the audit scramble — compliance evidence collected automatically from your cloud stack.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zenvanta",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Zenvanta is an early-stage cloud compliance automation startup based in Lalitpur, Nepal, helping SaaS teams reach SOC 2, ISO 27001, GDPR and HIPAA without the audit scramble.",
  email: "hello@zenvanta.cloud",
  telephone: "+977-970-4455667",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pulchowk",
    addressLocality: "Lalitpur",
    postalCode: "44700",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
