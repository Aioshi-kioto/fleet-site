import { ArrowRight } from "lucide-react";

import { PhotoSlot } from "@/components/photo-slot";
import { TuroLink } from "@/components/turo-link";
import { site } from "@/data/site";
import { publicImage } from "@/lib/public-image";

type SeattleBannerProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  href: string;
  action: string;
  script?: string;
};

export function SeattleBanner({
  eyebrow,
  title,
  body,
  href,
  action,
  script = "Seattle Awaits",
}: SeattleBannerProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <PhotoSlot
        src={publicImage(site.ctaImage)}
        alt="Seattle skyline"
        label="Seattle skyline"
        className="absolute inset-0 h-full min-h-[280px]"
        imageClassName="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-zinc-950/55" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-xl text-white">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-[0.22em] text-white/70 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-semibold tracking-tight lg:text-4xl">{title}</h2>
          {body ? <p className="mt-3 text-sm leading-6 text-white/80">{body}</p> : null}
        </div>
        <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:items-end">
          <TuroLink href={href} className="h-11 rounded-lg bg-zinc-950 px-5 hover:bg-zinc-900">
            {action}
            <ArrowRight className="size-4" />
          </TuroLink>
          <p className="font-script text-4xl text-white/90">{script}</p>
        </div>
      </div>
    </section>
  );
}
