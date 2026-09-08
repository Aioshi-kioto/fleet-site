"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type PhotoSlotProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  label?: string;
};

export function PhotoSlot({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "100vw",
  label,
}: PhotoSlotProps) {
  const [ready, setReady] = useState(false);

  return (
    <div className={cn("relative isolate overflow-hidden bg-zinc-200", className)}>
      {!ready ? (
        <div className="absolute inset-0 flex items-end bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />
          <p className="relative z-10 p-4 text-xs font-medium tracking-wide text-zinc-600 uppercase">
            {label ?? alt}
          </p>
        </div>
      ) : null}
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "object-cover transition-opacity duration-300",
            ready ? "opacity-100" : "opacity-0",
            imageClassName,
          )}
          onLoad={() => setReady(true)}
          onError={() => setReady(false)}
        />
      ) : null}
    </div>
  );
}
