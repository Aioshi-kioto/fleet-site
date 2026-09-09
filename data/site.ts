export const site = {
  brand: "Roman Fleet",
  hostName: "Roman",
  hostSubtitle: "Hosted by Roman",
  hostBadge: "All-Star Host",
  hostBadgeDescription: "Turo's highest-rated and most dependable hosts",
  tripsCount: 249,
  tripsLabel: "249 trips",
  yearsHosting: "3 years of hosting",
  rating: "5.0",
  reviewsCount: 215,
  city: "Seattle",
  pickup: "Federal Way, WA",
  hostAvatar: "/brand/roman.jpg",
  turoHostUrl: "https://turo.com/us/en/host/39110544",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://romanfleet.com",
  heroImage: "/brand/hero.jpg",
  ctaImage: "/brand/cta-seattle.jpg",
} as const;

export const navLinks = [
  { href: "/cars", label: "Fleet" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
] as const;
