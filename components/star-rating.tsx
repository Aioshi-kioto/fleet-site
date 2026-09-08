import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type StarRatingProps = {
  className?: string;
  size?: "sm" | "md";
};

export function StarRating({ className, size = "sm" }: StarRatingProps) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-violet-600", className)}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={size === "sm" ? "size-3.5 fill-current" : "size-4 fill-current"}
        />
      ))}
    </span>
  );
}
