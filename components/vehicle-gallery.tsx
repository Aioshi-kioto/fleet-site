"use client";

import { LayoutGrid, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

import { PhotoSlot } from "@/components/photo-slot";
import { Button } from "@/components/ui/button";
import { type Car } from "@/data/cars";
import { carTitle } from "@/lib/fleet";

export function VehicleGallery({ car }: { car: Car }) {
  const [open, setOpen] = useState(false);
  const cover = car.images[0] ?? "";
  const side = car.images.slice(1, 3);

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-3">
        <div className="relative">
          <PhotoSlot
            src={cover}
            alt={`${carTitle(car)} main photo`}
            label={`${carTitle(car)} · 01`}
            priority
            className="aspect-[16/10] rounded-xl lg:aspect-[16/11] lg:min-h-[340px]"
            sizes="(max-width: 1023px) 100vw, 65vw"
          />
          <Button
            type="button"
            variant="secondary"
            className="absolute bottom-3 left-3 h-9 rounded-full bg-white px-3 text-zinc-900 shadow-sm"
            onClick={() => setOpen(true)}
          >
            <LayoutGrid className="size-3.5" />
            View all {car.images.length} photos
          </Button>
        </div>
        <div className="hidden grid-rows-2 gap-3 lg:grid">
          {side.map((src, index) => (
            <button
              key={`side-${index}`}
              type="button"
              className="relative overflow-hidden rounded-xl"
              onClick={() => setOpen(true)}
            >
              <PhotoSlot
                src={src}
                alt={`${carTitle(car)} photo ${index + 2}`}
                label={`${carTitle(car)} · 0${index + 2}`}
                className="h-full min-h-[164px]"
                sizes="30vw"
              />
            </button>
          ))}
        </div>
      </div>

      {open
        ? createPortal(
            <div className="fixed inset-0 z-[200] overflow-y-auto bg-zinc-950/80 p-4">
              <div className="mx-auto max-w-5xl rounded-2xl bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-medium text-zinc-950">{carTitle(car)} photos</p>
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
                    <PhotoSlot
                      key={`photo-${index}`}
                      src={src}
                      alt={`${carTitle(car)} photo ${index + 1}`}
                      label={`${carTitle(car)} · ${String(index + 1).padStart(2, "0")}`}
                      className="aspect-[16/10] rounded-xl"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
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
