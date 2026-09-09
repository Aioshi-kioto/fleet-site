import { Hero } from "@/components/hero";
import { FeaturedVehicles } from "@/components/featured-vehicles";
import { HowItWorks } from "@/components/how-it-works";
import { ReviewsSection } from "@/components/reviews-section";
import { FaqSection } from "@/components/faq-section";
import { SeattleBanner } from "@/components/seattle-banner";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { site } from "@/data/site";
import { featuredCars, hostReviews } from "@/lib/fleet";

export default function Home() {
  return (
    <div className="pb-20 lg:pb-0">
      <Hero />
      <FeaturedVehicles cars={featuredCars()} />
      <ReviewsSection items={hostReviews()} />
      <HowItWorks />
      <FaqSection />
      <SeattleBanner
        title="Ready for your Seattle adventure?"
        href={site.turoHostUrl}
        action="View the full fleet on Turo"
      />
      <MobileCtaBar href={site.turoHostUrl} label="Browse cars on Turo" />
    </div>
  );
}
