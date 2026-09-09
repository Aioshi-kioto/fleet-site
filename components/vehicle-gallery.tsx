"use client";

import { ChevronLeft, ChevronRight, LayoutGrid, X } from "lucide-react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { PhotoSlot } from "@/components/photo-slot";
import { Button } from "@/components/ui/button";
import { type Car } from "@/data/cars";
import { carTitle } from "@/lib/fleet";
import { cn } from "@/lib/utils";

export function VehicleGallery({ car }: { car: Car }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = car.images.length;
  const currentPhoto = car.images[currentIndex] ?? car.images[0] ?? "";
  const side = car.images.slice(1, 3);

  function nextPhoto(e?: React.MouseEvent | React.TouchEvent) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }

  function prevPhoto(e?: React.MouseEvent | React.TouchEvent) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-3">
        {/* Main interactive photo slot */}
        <div
          className="relative select-none overflow-hidden rounded-xl"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 35) {
              if (diff > 0) {
                nextPhoto(e);
              } else {
                prevPhoto(e);
              }
            }
            touchStartX.current = null;
          }}
        >
          <PhotoSlot
            src={currentPhoto}
            alt={`${carTitle(car)} photo ${currentIndex + 1}`}
            label={`${carTitle(car)} · ${String(currentIndex + 1).padStart(2, "0")}`}
            priority
            className="aspect-[16/10] w-full rounded-xl lg:aspect-[16/11] lg:min-h-[340px]"
            sizes="(max-width: 1023px) 100vw, 65vw"
          />

          {/* Photo count indicator */}
          <div className="pointer-events-none absolute top-3 right-3 z-10 rounded-full bg-zinc-950/75 px-2.5 py-1 text-xs font-medium text-white shadow-xs backdrop-blur-xs">
            {currentIndex + 1} / {total}
          </div>

          {/* Previous / Next Arrow Buttons */}
          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={prevPhoto}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md backdrop-blur-xs transition-all hover:bg-white hover:scale-105 active:scale-95 sm:size-9"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-md backdrop-blur-xs transition-all hover:bg-white hover:scale-105 active:scale-95 sm:size-9"
              >
                <ChevronRight className="size-5" />
              </button>

              {/* Bottom indicators */}
              <div className="pointer-events-none absolute bottom-3.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                {car.images.map((_, idx) => (
                  <span
                    key={idx}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-200 shadow-xs",
                      currentIndex === idx ? "w-4 bg-white" : "w-1.5 bg-white/60",
                    )}
                  />
                ))}
              </div>
            </>
          ) : null}

          {/* View all photos button */}
          <Button
            type="button"
            variant="secondary"
            className="absolute bottom-3 left-3 z-20 h-9 rounded-full bg-white/95 px-3 text-xs font-semibold text-zinc-900 shadow-md backdrop-blur-xs transition-colors hover:bg-white sm:text-sm"
            onClick={() => setOpen(true)}
          >
            <LayoutGrid className="size-3.5" />
            View all {total} photos
          </Button>
        </div>

        {/* Side thumbnail previews on desktop */}
        <div className="hidden grid-rows-2 gap-3 lg:grid">
          {side.map((src, index) => {
            const photoIdx = index + 1;
            const isActive = currentIndex === photoIdx;
            return (
              <button
                key={`side-${index}`}
                type="button"
                className={cn(
                  "relative overflow-hidden rounded-xl transition-all",
                  isActive ? "ring-2 ring-zinc-950 ring-offset-2" : "opacity-90 hover:opacity-100",
                )}
                onClick={() => setCurrentIndex(photoIdx)}
              >
                <PhotoSlot
                  src={src}
                  alt={`${carTitle(car)} photo ${index + 2}`}
                  label={`${carTitle(car)} · 0${index + 2}`}
                  className="h-full min-h-[164px]"
                  sizes="30vw"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Full Modal Gallery */}
      {open
        ? createPortal(
            <div className="fixed inset-0 z-[200] overflow-y-auto bg-zinc-950/80 p-4">
              <div className="mx-auto max-w-5xl rounded-2xl bg-white p-4 sm:p-6">
                <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3">
                  <p className="font-semibold text-zinc-950 sm:text-lg">
                    {carTitle(car)} — all {total} photos
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Close gallery"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </Button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {car.images.map((src, index) => (
                    <div
                      key={`photo-${index}`}
                      className="cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => {
                        setCurrentIndex(index);
                        setOpen(false);
                      }}
                    >
                      <PhotoSlot
                        src={src}
                        alt={`${carTitle(car)} photo ${index + 1}`}
                        label={`${carTitle(car)} · ${String(index + 1).padStart(2, "0")}`}
                        className="aspect-[16/10] rounded-xl transition-transform hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, 40vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
