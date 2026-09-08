import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
      <p className="mt-4 text-sm leading-7 text-zinc-600">
        This website is a public catalog of the Roman Fleet vehicles. Booking,
        payments, and guest accounts are handled by Turo. Replace this page with
        the final privacy policy before launch.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-medium">
        Back to home
      </Link>
    </div>
  );
}
