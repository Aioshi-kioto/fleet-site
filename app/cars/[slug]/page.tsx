import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { VehiclePage } from "@/components/vehicle-page";
import { cars } from "@/data/cars";
import { carFullName, getCar, reviewsForCar } from "@/lib/fleet";

type CarPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: CarPageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) {
    return { title: "Vehicle" };
  }

  const title = `${carFullName(car)} Rental in Seattle`;
  const description = car.summary;
  const image = car.images[0] || "/brand/hero.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          alt: carFullName(car),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CarDetailsPage({ params }: CarPageProps) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) {
    notFound();
  }

  return <VehiclePage car={car} reviews={reviewsForCar(car.slug)} />;
}
