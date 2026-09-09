import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  count?: number;
  className?: string;
};

export function StarRating({ count = 5, className }: StarRatingProps) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-amber-400", className)}>
      {Array.from({ length: count }, (_, index) => (
        <Star
          key={index}
          className="size-3.5 fill-amber-400"
        />
      ))}
    </span>
  );
}
