import { ArrowRight, CarFront, Gauge, Users, Waypoints } from "lucide-react";
import Link from "next/link";

import { PhotoSlot } from "@/components/photo-slot";
import { type Car } from "@/data/cars";
import { carTitle } from "@/lib/fleet";
import { publicImage } from "@/lib/public-image";
import { cn } from "@/lib/utils";

type CarCardProps = {
  car: Car;
  className?: string;
};

export function CarCard({ car, className }: CarCardProps) {
  const spec = [
    { icon: CarFront, label: car.category },
    { icon: Users, label: `${car.seats} seats` },
    { icon: Waypoints, label: car.drivetrain ?? car.fuel },
    { icon: Gauge, label: car.transmission },
  ];

  return (
    <article
      className={cn(
        "group flex overflow-hidden rounded-xl border border-zinc-200 bg-white",
        "flex-row gap-3 p-2 lg:flex-col lg:gap-0 lg:p-0",
        className,
      )}
    >
      <PhotoSlot
        src={publicImage(car.images[0] ?? "")}
        alt={carTitle(car)}
        label={carTitle(car)}
        className="size-28 shrink-0 rounded-lg lg:aspect-[16/10] lg:h-auto lg:w-full lg:rounded-none lg:rounded-t-xl"
        sizes="(max-width: 1023px) 7rem, 33vw"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-center py-1 pr-1 lg:p-4">
        <h3 className="text-[15px] font-semibold tracking-tight text-zinc-950 lg:text-lg">
          {carTitle(car)} {car.year}
        </h3>
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-zinc-500 lg:text-xs">
          {spec.map((item) => (
            <li key={item.label} className="inline-flex items-center gap-1">
              <item.icon className="size-3" />
              {item.label}
            </li>
          ))}
        </ul>
        <p className="mt-2 hidden text-sm leading-6 text-zinc-600 lg:line-clamp-2 lg:block">
          {car.summary}
        </p>
        <Link
          href={`/cars/${car.slug}`}
          className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-zinc-950 lg:mt-4"
        >
          View details
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
