import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CarCard } from "@/components/car-card";
import { type Car } from "@/data/cars";

export function FeaturedVehicles({ cars }: { cars: Car[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 lg:text-3xl">
          Featured vehicles
        </h2>
        <Link
          href="/cars"
          className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950"
        >
          View all vehicles
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-6 flex flex-col gap-3 lg:mt-8 lg:grid lg:grid-cols-3 lg:gap-6">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>
    </section>
  );
}
