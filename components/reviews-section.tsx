import { ExternalLink, ShieldCheck } from "lucide-react";

import { StarRating } from "@/components/star-rating";
import { type Review } from "@/data/reviews";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .replace(".", "")
    .toUpperCase();
}

export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex flex-col justify-between rounded-xl sm:rounded-2xl border border-zinc-200/90 bg-white p-3.5 sm:p-4.5 shadow-xs transition-all hover:border-zinc-300 hover:shadow-md",
        className,
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-2.5">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 text-xs font-bold text-zinc-800 sm:size-9">
              {initials(review.name)}
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-950 sm:text-sm">
                {review.name}
              </p>
              <div className="mt-0.5 flex items-center gap-1.5">
                <StarRating />
                <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-700">
                  <ShieldCheck className="size-2.5" />
                  Verified
                </span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-zinc-400 sm:text-xs shrink-0">
            {review.date}
          </span>
        </div>

        <p className="mt-2.5 text-xs leading-5 text-zinc-700 line-clamp-3 sm:mt-3 sm:text-[13px] sm:leading-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2 text-[10px] text-zinc-400 sm:mt-3.5 sm:pt-2.5 sm:text-[11px]">
        <span>Turo 5-Star Rental</span>
        <span>Federal Way, WA</span>
      </div>
    </article>
  );
}

export function ReviewsSection({
  items,
  heading = "What guests are saying",
}: {
  items: Review[];
  heading?: string;
}) {
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  const doubleRow1 = [...row1, ...row1];
  const doubleRow2 = [...row2, ...row2];

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50/50 py-12 sm:py-16 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-7 sm:mb-9">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/60 px-2.5 py-1 text-xs font-semibold text-amber-800">
              <span className="font-bold">5.0 ★</span>
              <span>{site.reviewsCount}+ verified reviews</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="mt-1.5 text-xs text-zinc-600 sm:text-sm">
              Real feedback from travelers who booked Roman&apos;s fleet across Greater Seattle.
            </p>
          </div>

          <a
            href={site.turoHostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors sm:text-sm"
          >
            View all on Turo
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>

      {/* Two-Row Animated Marquee */}
      <div className="relative w-full overflow-hidden space-y-3 sm:space-y-4">
        {/* Gradient edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-28 bg-gradient-to-r from-zinc-50/95 via-zinc-50/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-28 bg-gradient-to-l from-zinc-50/95 via-zinc-50/70 to-transparent" />

        {/* Row 1: Scrolling Left */}
        <div className="animate-marquee-left flex gap-3 sm:gap-4 px-2">
          {doubleRow1.map((review, i) => (
            <div
              key={`r1-${review.id}-${i}`}
              className="w-[260px] sm:w-[310px] md:w-[340px] shrink-0"
            >
              <ReviewCard review={review} className="h-full" />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="animate-marquee-right flex gap-3 sm:gap-4 px-2">
          {doubleRow2.map((review, i) => (
            <div
              key={`r2-${review.id}-${i}`}
              className="w-[260px] sm:w-[310px] md:w-[340px] shrink-0"
            >
              <ReviewCard review={review} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
