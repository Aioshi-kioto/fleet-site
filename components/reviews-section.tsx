"use client";

import { ChevronLeft, ChevronRight, ExternalLink, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
        "flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-xs transition-all hover:border-zinc-300 hover:shadow-md",
        className,
      )}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-zinc-100 to-zinc-200 text-xs font-bold text-zinc-800">
              {initials(review.name)}
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-950">{review.name}</p>
              <div className="mt-0.5 flex items-center gap-2">
                <StarRating />
                <span className="inline-flex items-center gap-0.5 text-[11px] font-medium text-emerald-700">
                  <ShieldCheck className="size-3" />
                  Verified
                </span>
              </div>
            </div>
          </div>
          <span className="text-xs text-zinc-500">{review.date}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-zinc-700">&ldquo;{review.quote}&rdquo;</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-3 text-[11px] text-zinc-500">
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  function checkScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const cardWidth = el.querySelector("article")?.clientWidth ?? 380;
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(items.length - 1, Math.max(0, index)));
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [items.length]);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.querySelector("article")?.clientWidth ?? 380) + 20;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  }

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = (el.querySelector("article")?.clientWidth ?? 380) + 20;
    el.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-zinc-100 bg-zinc-50/50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header with Title and Carousel Controls */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200/60 px-2.5 py-1 text-xs font-semibold text-amber-800">
              <span className="font-bold">5.0 ★</span>
              <span>{site.reviewsCount}+ verified reviews</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="mt-1.5 text-sm text-zinc-600">
              Real feedback from travelers who booked Roman&apos;s fleet across Greater Seattle.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={site.turoHostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 text-xs font-semibold text-zinc-700 hover:text-zinc-950 sm:inline-flex"
            >
              All reviews on Turo
              <ExternalLink className="size-3.5" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous review"
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-xs transition-all hover:bg-zinc-100 disabled:opacity-30 disabled:pointer-events-none",
                )}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next review"
                className={cn(
                  "flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-800 shadow-xs transition-all hover:bg-zinc-100 disabled:opacity-30 disabled:pointer-events-none",
                )}
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((review) => (
            <div
              key={review.id}
              className="w-[85vw] shrink-0 snap-start sm:w-[380px] lg:w-[420px]"
            >
              <ReviewCard review={review} className="h-full" />
            </div>
          ))}
        </div>

        {/* Indicator dots */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeIndex === i ? "w-6 bg-zinc-950" : "w-1.5 bg-zinc-300 hover:bg-zinc-400",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
