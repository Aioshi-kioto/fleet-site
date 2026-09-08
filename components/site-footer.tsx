import Link from "next/link";

import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-[13px] tracking-[0.18em] text-zinc-950 uppercase">
          <span className="font-bold">Roman</span>{" "}
          <span className="font-medium">Fleet</span>
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-zinc-950">
              {link.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-zinc-950">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-zinc-950">
            Terms
          </Link>
        </nav>
        <p className="text-sm text-zinc-500">
          {site.city} car rentals · Booked on Turo
        </p>
      </div>
    </footer>
  );
}
