import { ArrowRight } from "lucide-react";

import { TuroLink } from "@/components/turo-link";

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
    <section className="relative isolate overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-xl">
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.25em] text-zinc-400 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {body ? (
            <p className="mt-3 text-base leading-7 text-zinc-300">
              {body}
            </p>
          ) : null}
        </div>

        <div className="flex w-full flex-col items-start gap-5 sm:w-auto sm:items-end">
          <TuroLink
            href={href}
            className="h-12 rounded-xl bg-white px-6 text-sm font-semibold text-zinc-950 shadow-xl transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98]"
            showIcon={false}
          >
            {action}
            <ArrowRight className="ml-2 size-4 text-zinc-950" />
          </TuroLink>
          <p className="font-script text-4xl text-white/95 sm:text-5xl tracking-wide select-none">
            {script}
          </p>
        </div>
      </div>
    </section>
  );
}
