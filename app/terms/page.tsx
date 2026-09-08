import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
      <p className="mt-4 text-sm leading-7 text-zinc-600">
        Vehicle reservations are made on Turo and follow Turo&apos;s terms. This
        site does not process payments or booking requests. Replace this page
        with the final terms before launch.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium">
        Back to home
      </Link>
    </div>
  );
}
