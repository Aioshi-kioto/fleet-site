import {
  Award,
  Briefcase,
  CarFront,
  Fuel,
  Gauge,
  MapPin,
  Mountain,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

import { BookingCard } from "@/components/booking-card";
import { FeatureRow } from "@/components/feature-icon";
import { HostProfileCard } from "@/components/host-card";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { ReviewCard } from "@/components/reviews-section";
import { SeattleBanner } from "@/components/seattle-banner";
import { VehicleActions } from "@/components/vehicle-actions";
import { VehicleGallery } from "@/components/vehicle-gallery";
import { type Car } from "@/data/cars";
import { type Review } from "@/data/reviews";
import { site } from "@/data/site";
import { carEyebrow, carTitle } from "@/lib/fleet";
import { publicImage } from "@/lib/public-image";

export function VehiclePage({ car, reviews }: { car: Car; reviews: Review[] }) {
  const chips = [
    { icon: CarFront, label: car.category },
    { icon: Users, label: `${car.seats} seats` },
    { icon: Fuel, label: car.fuel },
    car.mpg ? { icon: Gauge, label: `${car.mpg} MPG` } : null,
    { icon: Gauge, label: car.transmission },
  ].filter((item): item is { icon: typeof CarFront; label: string } => item !== null);

  return (
    <article className="pb-24 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <nav className="text-sm text-zinc-500">
            <Link href="/" className="hover:text-zinc-950">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link href="/cars" className="hover:text-zinc-950">
              Fleet
            </Link>
            <span className="px-2">/</span>
            <span className="text-zinc-800">{carTitle(car)}</span>
          </nav>
          <VehicleActions slug={car.slug} name={carTitle(car)} />
        </div>

        <div className="mt-4">
          <VehicleGallery
            car={{
              ...car,
              images: car.images.map((src) => publicImage(src)),
            }}
          />
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(20rem,0.8fr)] lg:items-start">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 lg:text-4xl">
              {carTitle(car)}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
              <span>{carEyebrow(car)}</span>
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5 fill-amber-400 text-amber-500" />
                {car.rating.toFixed(1)} rating
              </span>
              <span className="inline-flex items-center gap-1">
                <Briefcase className="size-3.5" />
                {car.trips} trips
              </span>
              <span className="inline-flex items-center gap-1">
                <Award className="size-3.5" />
                {site.hostBadge}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700"
                >
                  <chip.icon className="size-3.5" />
                  {chip.label}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3 rounded-xl bg-zinc-100 p-4">
              <Mountain className="mt-0.5 size-5 shrink-0 text-zinc-500" />
              <p className="text-sm leading-6 text-zinc-700">{car.highlight}</p>
            </div>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-zinc-950">About this vehicle</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-600">
                {car.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-zinc-950">Features</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {car.features.map((feature) => (
                  <FeatureRow key={feature} id={feature} />
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50/70 p-5">
              <h2 className="text-base font-semibold text-zinc-950">Included with every rental</h2>
              <div className="mt-4 grid gap-3.5 sm:grid-cols-2">
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Skip the rental counter</p>
                    <p className="text-xs text-zinc-500">Contactless pickup & return via the Turo app</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Free additional drivers</p>
                    <p className="text-xs text-zinc-500">Add verified drivers at no extra charge</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">30-minute return grace period</p>
                    <p className="text-xs text-zinc-500">Flexible buffer without automatic extension fees</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 size-1.5 rounded-full bg-emerald-600 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">24/7 Roadside support</p>
                    <p className="text-xs text-zinc-500">Full roadside assistance throughout your trip</p>
                  </div>
                </div>
              </div>
            </section>

            <HostProfileCard className="mt-8" />

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-zinc-950">Host quality breakdown</h2>
              <p className="mt-1 text-xs text-zinc-500">Based on verified guest ratings on Turo</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-lg border border-zinc-200 bg-white p-3 text-center">
                  <span className="text-lg font-bold text-zinc-900">5.0 ★</span>
                  <p className="mt-0.5 text-xs text-zinc-500">Cleanliness</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-3 text-center">
                  <span className="text-lg font-bold text-zinc-900">5.0 ★</span>
                  <p className="mt-0.5 text-xs text-zinc-500">Maintenance</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-3 text-center">
                  <span className="text-lg font-bold text-zinc-900">5.0 ★</span>
                  <p className="mt-0.5 text-xs text-zinc-500">Communication</p>
                </div>
                <div className="rounded-lg border border-zinc-200 bg-white p-3 text-center">
                  <span className="text-lg font-bold text-zinc-900">5.0 ★</span>
                  <p className="mt-0.5 text-xs text-zinc-500">Convenience</p>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-zinc-950">Pickup & Location</h2>
              <p className="mt-3 inline-flex items-center gap-2 font-medium text-zinc-950">
                <MapPin className="size-4 text-zinc-500" />
                {site.pickup} (Federal Way, WA 98023)
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Easy pickup near Seattle-Tacoma. Exact street address, lockbox code, and step-by-step directions are unlocked immediately upon booking on Turo.
              </p>
            </section>
          </div>

          <div className="hidden space-y-4 lg:sticky lg:top-24 lg:block">
            <BookingCard car={car} />
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-zinc-950">Guest reviews</h2>
                <a
                  href={site.turoHostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-950"
                >
                  View all reviews →
                </a>
              </div>
              <div className="mt-4 space-y-4">
                {reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <h2 className="mb-4 text-lg font-semibold text-zinc-950">Guest reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SeattleBanner
          eyebrow="Explore more"
          title={`Ready to book this ${car.model}?`}
          body="Check availability and complete your reservation on Turo."
          href={car.turoUrl}
          action="Continue on Turo"
          script="Same great car."
        />
      </div>

      <MobileCtaBar
        href={car.turoUrl}
        caption={`${carTitle(car)} · ${car.year}`}
        label="Check availability on Turo"
      />
    </article>
  );
}
