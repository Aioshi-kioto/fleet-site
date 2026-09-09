import {
  ArrowRight,
  ExternalLink,
  Fuel,
  Star,
  Users,
  Waypoints,
} from "lucide-react";
import Link from "next/link";

import { PhotoSlot } from "@/components/photo-slot";
import { type Car } from "@/data/cars";
import { carEyebrow, carTitle } from "@/lib/fleet";
import { publicImage } from "@/lib/public-image";
import { cn } from "@/lib/utils";

type CarCardProps = {
  car: Car;
  className?: string;
};

export function CarCard({ car, className }: CarCardProps) {
  const spec = [
    { icon: Users, label: `${car.seats} seats` },
    { icon: Fuel, label: car.mpg ? `${car.mpg} MPG` : car.fuel },
    { icon: Waypoints, label: car.drivetrain ?? car.transmission },
  ];

  const detailUrl = `/cars/${car.slug}`;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg",
        className,
      )}
    >
      {/* Clickable Image Container */}
      <Link
        href={detailUrl}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-zinc-100"
        aria-label={`View details for ${carTitle(car)}`}
      >
        <PhotoSlot
          src={publicImage(car.images[0] ?? "")}
          alt={carTitle(car)}
          label={carTitle(car)}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
          <span className="rounded-full bg-zinc-950/85 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
            {car.category}
          </span>
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-xs backdrop-blur-xs">
            {car.year}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-zinc-900 shadow-xs backdrop-blur-xs">
          <Star className="size-3 fill-amber-400 text-amber-500" />
          <span>{car.rating.toFixed(1)}</span>
          <span className="text-[10px] font-normal text-zinc-500">
            ({car.trips})
          </span>
        </div>
      </Link>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex-1">
          <p className="text-xs font-medium text-zinc-500">
            {carEyebrow(car)}
          </p>
          <h3 className="mt-0.5 text-lg font-bold tracking-tight text-zinc-950">
            <Link href={detailUrl} className="hover:text-zinc-700 transition-colors">
              {carTitle(car)}
            </Link>
          </h3>

          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-600">
            {spec.map((item) => (
              <li
                key={item.label}
                className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700"
              >
                <item.icon className="size-3 text-zinc-500" />
                {item.label}
              </li>
            ))}
          </ul>

          <p className="mt-3 text-xs leading-5 text-zinc-500 line-clamp-2">
            {car.highlight}
          </p>
        </div>

        {/* Two Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 border-t border-zinc-100 pt-4">
          <Link
            href={detailUrl}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-xs font-semibold text-zinc-900 transition-all hover:bg-zinc-100 hover:border-zinc-300"
          >
            View details
            <ArrowRight className="size-3.5 text-zinc-500" />
          </Link>
          <a
            href={car.turoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-3 text-xs font-semibold text-white shadow-xs transition-all hover:bg-zinc-800 hover:shadow-sm"
          >
            Book on Turo
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
