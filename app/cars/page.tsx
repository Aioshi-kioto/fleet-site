import type { Metadata } from "next";
import Link from "next/link";

import { CarCard } from "@/components/car-card";
import { carCategories } from "@/data/cars";
import { carsByCategory, parseCategory } from "@/lib/fleet";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Fleet",
  description: "Browse the Roman Fleet car catalog in Seattle, then book on Turo.",
};

type CarsPageProps = {
  searchParams: Promise<{ type?: string | string[] }>;
};

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const params = await searchParams;
  const category = parseCategory(params.type);
  const list = carsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium tracking-[0.22em] text-zinc-500 uppercase">
        Seattle fleet
      </p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950">
        All vehicles
      </h1>
      <p className="mt-2 max-w-2xl text-zinc-600">
        Choose a car, review the details, then check live availability on Turo.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/cars"
          className={cn(
            "rounded-full px-3 py-1.5 text-sm",
            !category ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-700",
          )}
        >
          All
        </Link>
        {carCategories.map((item) => (
          <Link
            key={item}
            href={`/cars?type=${item.toLowerCase()}`}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm",
              category === item ? "bg-zinc-950 text-white" : "bg-zinc-100 text-zinc-700",
            )}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((car) => (
          <CarCard key={car.slug} car={car} />
        ))}
      </div>
    </div>
  );
}
