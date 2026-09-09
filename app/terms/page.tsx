import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.brand}. Review terms governing the use of this website and vehicle rentals via Turo.`,
};

export default function TermsPage() {
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
          <FileText className="size-5" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-xs text-zinc-500">Last updated: September 2026</p>
        </div>
      </div>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-600">
        <section>
          <h2 className="text-base font-semibold text-zinc-900">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By accessing or browsing <strong className="text-zinc-900">{site.brand}</strong> ({site.url}), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            2. Nature of the Showcase & Independent Host Status
          </h2>
          <p className="mt-2">
            {site.brand} is an independent marketing showcase of vehicles managed by All-Star host {site.hostName} in {site.city} and {site.pickup}.
          </p>
          <p className="mt-2">
            <strong className="text-zinc-900">Platform Relationship:</strong> Roman Fleet operates independently on the Turo car-sharing marketplace. This website is not endorsed by, sponsored by, directly affiliated with, or maintained by Turo, Inc. All Turo trademarks, badges, and brand assets are the property of Turo, Inc.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            3. Vehicle Reservations and Rental Agreements
          </h2>
          <p className="mt-2">
            <strong className="text-zinc-900">This website does not execute vehicle rental contracts, take security deposits, or process transactions.</strong>
          </p>
          <p className="mt-2">
            All rentals are booked and fulfilled exclusively through{" "}
            <a
              href="https://turo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              Turo
            </a>.
            Every reservation is subject to Turo&apos;s guest eligibility verification (valid driver&apos;s license, age requirements, insurance coverage) and is strictly governed by{" "}
            <a
              href="https://turo.com/us/en/policies/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 underline underline-offset-4 hover:text-zinc-700"
            >
              Turo&apos;s Terms of Service
            </a>{" "}
            and cancellation policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            4. Vehicle Information, Pricing and Availability
          </h2>
          <p className="mt-2">
            We endeavor to keep vehicle photos, specifications, and descriptions up to date. However:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Live calendar availability, trip fees, daily rates, and discounts are determined dynamically and finalized solely on Turo.</li>
            <li>Vehicle specifications and features may be updated or replaced over time.</li>
            <li>In case of any discrepancy between this marketing showcase and the live Turo listing, the official Turo listing shall govern.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            5. Intellectual Property
          </h2>
          <p className="mt-2">
            The design, text, photography, and brand identity displayed on this site are owned by or licensed to {site.brand}. Unauthorized reproduction, extraction, or distribution of this material without prior written permission is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            6. Limitation of Liability
          </h2>
          <p className="mt-2">
            This showcase is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. {site.brand} shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site or reliance on any presented material.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            7. Governing Law
          </h2>
          <p className="mt-2">
            These Terms of Service are governed by and construed in accordance with the laws of the State of Washington, United States, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-zinc-900">
            8. Contact Information
          </h2>
          <p className="mt-2">
            For any inquiries regarding vehicle bookings, availability, or these terms, please contact host {site.hostName} directly through the official{" "}
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
