import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.brand}. Learn how we protect your privacy and our relationship with the Turo car sharing marketplace.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
      >
        <ArrowLeft className="size-4" />
        Back to home
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
          <Shield className="size-5" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-500">Last updated: September 2026</p>
        </div>
      </div>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-600">
        <section>
          <h2 className="text-base font-semibold text-zinc-900">1. Overview</h2>
          <p className="mt-2">
            Welcome to <strong className="text-zinc-900">{site.brand}</strong> ({site.url}).
            This website is an informational marketing showcase and vehicle catalog representing the fleet hosted by {site.hostName} in {site.city} and {site.pickup}.
          </p>
          <p className="mt-2">
            We are dedicated to respecting your privacy. This Privacy Policy explains our practices regarding any information that may be collected when you browse this website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            2. Reservations, Payments & Turo Integration
          </h2>
          <p className="mt-2">
            <strong className="text-zinc-900">We do not process bookings, credit card payments, or sensitive personal identification on this website.</strong>
          </p>
          <p className="mt-2">
            All vehicle reservations, driver verifications, identity checks, payments, deposits, insurance coverage choices, and cancellations are conducted directly and securely on the official{" "}
            <a
              href="https://turo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              Turo marketplace
            </a>.
            When you click &ldquo;Check availability on Turo&rdquo; or any link to book a car, you are directed to Turo&apos;s platform and are subject to{" "}
            <a
              href="https://turo.com/us/en/policies/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              Turo&apos;s Privacy Policy
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            3. Information We May Collect
          </h2>
          <p className="mt-2">
            Because this site is a public showcase, you can browse without creating an account or providing your name or email. However, we may collect standard anonymous usage data, including:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong>Device & Browser Information:</strong> Browser type, operating system, language preferences, and screen resolution.
            </li>
            <li>
              <strong>Analytics & Usage Metrics:</strong> Pages visited, time spent, referral sources, and button clicks (such as interactions with vehicle cards or outbound Turo links).
            </li>
            <li>
              <strong>IP Addresses:</strong> Collected in anonymized server logs or analytics providers for geographical performance analysis and security.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            4. Cookies and Tracking Technologies
          </h2>
          <p className="mt-2">
            We may use cookies, pixels, or similar measurement tools (e.g., Google Analytics or Meta Pixel) to analyze website traffic, optimize ad campaigns, and improve user experience.
          </p>
          <p className="mt-2">
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Disabling cookies will not affect your ability to view vehicles or access Turo links on our site.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            5. Third-Party Services
          </h2>
          <p className="mt-2">
            Our website includes links to third-party services, primarily Turo. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We encourage you to review the privacy statement of any external service you visit.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            6. Children&apos;s Privacy
          </h2>
          <p className="mt-2">
            Our service is directed at licensed drivers seeking vehicle rental services. We do not knowingly collect personal information from individuals under the age of 18.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            7. Contact Information
          </h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy or Roman Fleet vehicles, you can reach host {site.hostName} directly through the official{" "}
            <a
              href={site.turoHostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              Turo Host Profile
            </a>.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 hover:text-zinc-700"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
}
