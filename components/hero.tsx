import {
  ArrowRight,
  Award,
  CarFront,
  Check,
  MapPin,
  ShieldCheck,
  Sparkles,
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
    <section className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-b from-zinc-50/60 via-white to-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Host badge pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 bg-white px-3.5 py-1.5 shadow-xs transition-all hover:border-zinc-300">
            <HostAvatar size={24} className="border-white shadow-xs" />
            <span className="text-xs font-semibold text-zinc-900">
              Hosted by {site.hostName}
            </span>
            <span className="h-3 w-px bg-zinc-200" />
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700">
              <Sparkles className="size-3" />
              {site.hostBadge}
            </span>
            <span className="hidden text-xs text-zinc-500 sm:inline">
              • 5.0 ★ ({site.tripsLabel})
            </span>
          </div>

          <p className="mt-6 text-xs font-bold tracking-[0.25em] text-zinc-500 uppercase">
            Seattle & Federal Way car rentals
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Premium cars.
            <br />
            Simple booking.
          </h1>

          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Handpicked fleet of 14 luxury SUVs, sedans, and hybrids.
            Contactless self check-in in Federal Way, spotless cars, and 5-star host
            service on Turo.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/cars"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow-md sm:w-auto"
            >
              Browse the fleet (14 cars)
              <ArrowRight className="size-4" />
            </Link>
            <TuroLink
              href={site.turoHostUrl}
              variant="outline"
              className="h-12 w-full rounded-xl border-zinc-300 px-6 text-sm font-semibold text-zinc-800 transition-all hover:bg-zinc-50 hover:text-zinc-950 sm:w-auto"
            >
              Check availability on Turo
            </TuroLink>
          </div>

          {/* Quick perks checklist */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-600">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-3.5 text-emerald-600" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Trust & Proof Cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                5.0 ★
              </span>
              <div className="flex size-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Star className="size-4.5 fill-violet-600" />
              </div>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-zinc-900">
              Flawless Rating
            </h3>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Over {site.reviewsCount} verified guest reviews on Turo with 5.0 scores for cleanliness and communication.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                All-Star
              </span>
              <div className="flex size-9 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Award className="size-4.5" />
              </div>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-zinc-900">
              Top-Tier Host
            </h3>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Ranked in Turo's highest tier of most dependable and highest-rated hosts.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                {site.tripsCount} trips
              </span>
              <div className="flex size-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800">
                <CarFront className="size-4.5" />
              </div>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-zinc-900">
              3 Years of Hosting
            </h3>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Consistent track record serving travelers across Seattle, Sea-Tac, and Tacoma.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                14 cars
              </span>
              <div className="flex size-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800">
                <MapPin className="size-4.5" />
              </div>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-zinc-900">
              Federal Way, WA
            </h3>
            <p className="mt-1 text-xs leading-5 text-zinc-500">
              Easy contactless pickup near Sea-Tac Airport with 24/7 roadside assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
