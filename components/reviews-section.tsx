import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { StarRating } from "@/components/star-rating";
import { type Review } from "@/data/reviews";
import { site } from "@/data/site";

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

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700">
            {initials(review.name)}
          </div>
          <div>
            <StarRating />
            <p className="mt-1 text-sm font-medium text-zinc-950">{review.name}</p>
          </div>
        </div>
        <p className="text-xs text-zinc-500">{review.date}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-600">&ldquo;{review.quote}&rdquo;</p>
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
  return (
    <section id="reviews" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 lg:text-3xl">
          {heading}
        </h2>
        <Link
          href={site.turoHostUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 sm:inline-flex"
        >
          View all reviews
          <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {items.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
