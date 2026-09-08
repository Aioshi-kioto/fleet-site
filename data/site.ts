export const site = {
  brand: "Roman Fleet",
  city: "Seattle",
  pickup: "Federal Way, WA",
  rating: 5,
  tripsLabel: "249+",
  reviewsCount: 215,
  hostBadge: "All-Star Host",
  turoHostUrl: "https://turo.com/us/en/host/39110544",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://romanfleet.com",
  heroImage: "/brand/hero.jpg",
  ctaImage: "/brand/cta-seattle.jpg",
} as const;

export const navLinks = [
  { href: "/cars", label: "Fleet" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
] as const;
