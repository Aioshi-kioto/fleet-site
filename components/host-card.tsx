"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { site } from "@/data/site";
import { publicImage } from "@/lib/public-image";
import { cn } from "@/lib/utils";

export function HostAvatar({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  const [hasError, setHasError] = useState(false);
  const imageSrc = publicImage(site.hostAvatar);

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center font-bold text-zinc-700 select-none",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {imageSrc && !hasError ? (
        <Image
          src={imageSrc}
          alt={`${site.hostName} - Turo ${site.hostBadge}`}
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span style={{ fontSize: `${Math.max(12, Math.round(size * 0.42))}px` }}>
          {site.hostName.charAt(0)}
        </span>
      )}
    </div>
  );
}

export function HostProfileCard({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-zinc-200/90 bg-white p-5 sm:p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <HostAvatar size={64} className="border-2 border-white shadow-md" />
            <div className="absolute -bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-0.5 rounded-full bg-zinc-950 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              <span>{site.rating}</span>
              <Star className="size-2.5 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base font-bold text-zinc-950 sm:text-lg">
                {site.hostSubtitle}
              </h2>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900 px-2.5 py-0.5 text-xs font-semibold text-white shadow-2xs">
                <Star className="size-3 fill-amber-400 text-amber-400" />
                {site.hostBadge}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-zinc-500">
              {site.hostBadgeDescription}
            </p>
            <p className="mt-1.5 text-xs text-zinc-600">
              <span className="font-semibold text-zinc-900">{site.tripsLabel}</span>
              <span className="mx-1.5 text-zinc-400">•</span>
              <span>{site.yearsHosting}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:self-center">
          <a
            href={site.turoHostUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-zinc-300 bg-white px-3.5 text-xs font-medium text-zinc-800 transition-colors hover:bg-zinc-50 hover:text-zinc-950"
          >
            View profile on Turo →
          </a>
        </div>
      </div>
    </section>
  );
}
