import { ArrowRight, Award, CarFront, MapPin, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

import { PhotoSlot } from "@/components/photo-slot";
import { TuroLink } from "@/components/turo-link";
import { site } from "@/data/site";
import { publicImage } from "@/lib/public-image";

const stats = [
  { icon: Star, value: "5.0", label: "Turo rating", filled: true },
  { icon: CarFront, value: site.tripsLabel, label: "Trips completed", filled: false },
  {
    icon: MessageCircle,
    value: String(site.reviewsCount),
    label: "Verified reviews",
    filled: false,
  },
  { icon: Award, value: site.hostBadge, label: "Host status", filled: false },
] as const;

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:py-14">
      <div>
        <p className="text-xs font-medium tracking-[0.22em] text-zinc-500 uppercase">
          Seattle car rentals
        </p>
        <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Premium cars.
          <br />
          Simple booking.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-zinc-600">
          Reliable, clean, and premium vehicles for your Seattle trip. Backed by{" "}
          {site.tripsLabel} trips, {site.reviewsCount} reviews, and a 5.0 rating on
          Turo.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/cars"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Browse the fleet
            <ArrowRight className="ml-1.5 size-4" />
          </Link>
          <TuroLink
            href={site.turoHostUrl}
            variant="outline"
            className="h-11 rounded-lg px-5"
          >
            Check availability on Turo
          </TuroLink>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex gap-2.5">
              <stat.icon
                className={
                  stat.filled
                    ? "mt-0.5 size-4 shrink-0 fill-violet-600 text-violet-600"
                    : "mt-0.5 size-4 shrink-0 text-zinc-500"
                }
              />
              <div>
                <dt className="text-sm font-semibold text-zinc-950">{stat.value}</dt>
                <dd className="text-xs text-zinc-500">{stat.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <PhotoSlot
          src={publicImage(site.heroImage)}
          alt="Seattle skyline with a Roman Fleet SUV"
          label="Hero photo"
          priority
          className="aspect-[4/5] rounded-2xl sm:aspect-[5/4] lg:aspect-[4/3] lg:min-h-[420px]"
          sizes="(max-width: 1023px) 100vw, 50vw"
        />
        <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-sm text-zinc-800 shadow-sm">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-zinc-500" />
            Explore Seattle in comfort
          </span>
        </div>
      </div>
    </section>
  );
}
