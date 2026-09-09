import {
  ArrowRight,
  Award,
  CarFront,
  Check,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";

import { HostAvatar } from "@/components/host-card";
import { TuroLink } from "@/components/turo-link";
import { site } from "@/data/site";

const highlights = [
  "Contactless lockbox check-in",
  "Free additional drivers",
  "30-min return grace period",
  "24/7 Roadside assistance",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-zinc-50/60 via-white to-white pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Host badge pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-3 py-1 shadow-2xs transition-all hover:border-zinc-300">
            <HostAvatar size={22} className="border-white shadow-2xs" />
            <span className="text-xs font-semibold text-zinc-900">
              Hosted by {site.hostName}
            </span>
            <span className="h-3 w-px bg-zinc-200" />
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900 px-2 py-0.5 text-[11px] font-semibold text-white shadow-2xs">
              <Star className="size-2.5 fill-amber-400 text-amber-400" />
              {site.hostBadge}
            </span>
            <span className="hidden text-xs text-zinc-500 sm:inline">
              • <span className="font-semibold text-amber-500">5.0 ★</span> ({site.tripsLabel})
            </span>
          </div>

          <p className="mt-3 text-[11px] font-bold tracking-[0.22em] text-zinc-500 uppercase">
            Seattle & Federal Way car rentals
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl leading-[1.12]">
            Premium cars. Simple booking.
          </h1>

          <p className="mt-2.5 mx-auto max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
            Handpicked fleet of 14 luxury SUVs, sedans, and hybrids.
            Contactless self check-in in Federal Way, spotless cars, and 5-star host
            service on Turo.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link
              href="/cars"
              className="inline-flex h-10.5 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 hover:shadow-md sm:w-auto"
            >
              Browse the fleet (14 cars)
              <ArrowRight className="size-4" />
            </Link>
            <TuroLink
              href={site.turoHostUrl}
              variant="outline"
              className="h-10.5 w-full rounded-xl border-zinc-300 px-5 text-sm font-semibold text-zinc-800 transition-all hover:bg-zinc-50 hover:text-zinc-950 sm:w-auto"
            >
              Check availability on Turo
            </TuroLink>
          </div>

          {/* Quick perks checklist */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-zinc-600">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-emerald-800" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Trust & Proof Cards */}
        <div className="mt-8 sm:mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                5.0 ★
              </span>
              <div className="flex size-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                <Star className="size-4 fill-amber-400 text-amber-500" />
              </div>
            </div>
            <h3 className="mt-2 text-xs sm:text-sm font-semibold text-zinc-900">
              Flawless Rating
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs leading-5 text-zinc-500">
              Over {site.reviewsCount} verified reviews with 5.0 scores for cleanliness and communication.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                All-Star
              </span>
              <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-900 text-white">
                <Award className="size-4 text-emerald-100" />
              </div>
            </div>
            <h3 className="mt-2 text-xs sm:text-sm font-semibold text-zinc-900">
              Top-Tier Host
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs leading-5 text-zinc-500">
              Ranked in Turo&apos;s highest tier of most dependable and highest-rated hosts.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                {site.tripsCount} trips
              </span>
              <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800">
                <CarFront className="size-4" />
              </div>
            </div>
            <h3 className="mt-2 text-xs sm:text-sm font-semibold text-zinc-900">
              3 Years of Hosting
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs leading-5 text-zinc-500">
              Consistent track record serving travelers across Seattle, Sea-Tac, and Tacoma.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200/80 bg-white p-4 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
                14 cars
              </span>
              <div className="flex size-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-800">
                <MapPin className="size-4" />
              </div>
            </div>
            <h3 className="mt-2 text-xs sm:text-sm font-semibold text-zinc-900">
              Federal Way, WA
            </h3>
            <p className="mt-1 text-[11px] sm:text-xs leading-5 text-zinc-500">
              Easy contactless pickup near Sea-Tac Airport with 24/7 roadside assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
