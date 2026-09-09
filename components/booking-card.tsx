import { Clock, ShieldCheck } from "lucide-react";

import { TuroLink } from "@/components/turo-link";
import { type Car } from "@/data/cars";
import { carEyebrow, carTitle } from "@/lib/fleet";

export function BookingCard({ car }: { car: Car }) {
  return (
    <aside className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-zinc-950">Check current availability</h2>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        Pricing, calendar, trip dates, and reservation are handled securely on Turo.
      </p>
      <div className="mt-5 flex flex-col gap-2">
        <TuroLink href={car.turoUrl} className="h-11 rounded-lg">
          Check availability on Turo
        </TuroLink>
        <TuroLink href={car.turoUrl} variant="secondary" className="h-11 rounded-lg">
          Book on Turo
        </TuroLink>
      </div>
      <div className="mt-5 flex flex-col gap-2.5 text-xs text-zinc-600">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
          <span>Free cancellation within 24h of booking</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-3.5 text-zinc-500 shrink-0" />
          <span>Insurance & protection via Travelers</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-3.5 text-zinc-500 shrink-0" />
          <span>Instant booking & real-time calendar on Turo</span>
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-zinc-400">
        You&apos;ll be redirected to the official Turo listing for {carTitle(car)}{" "}
        {carEyebrow(car)} to select trip dates.
      </p>
    </aside>
  );
}
