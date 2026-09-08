import { cars, type Car, type CarCategory, carCategories } from "@/data/cars";
import { reviews, type Review } from "@/data/reviews";

export function carTitle(car: Car) {
  return `${car.make} ${car.model}`;
}

export function carEyebrow(car: Car) {
  return car.trim ? `${car.year} ${car.trim}` : String(car.year);
}

export function carFullName(car: Car) {
  return `${car.make} ${car.model} ${car.year}`;
}

export function getCar(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export function featuredCars() {
  return cars.filter((car) => car.featured);
}

export function parseCategory(
  value: string | string[] | undefined,
): CarCategory | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) {
    return undefined;
  }

  const match = carCategories.find(
    (category) => category.toLowerCase() === raw.toLowerCase(),
  );
  return match;
}

export function carsByCategory(category?: CarCategory) {
  if (!category) {
    return cars;
  }
  return cars.filter((car) => car.category === category);
}

export function hostReviews() {
  return reviews.slice(0, 6);
}

export function reviewsForCar(slug: string): Review[] {
  const forCar = reviews.filter((review) => review.carSlug === slug);
  return forCar.length > 0 ? forCar : reviews.slice(0, 2);
}
