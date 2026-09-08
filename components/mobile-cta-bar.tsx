import { TuroLink } from "@/components/turo-link";

type MobileCtaBarProps = {
  href: string;
  label: string;
  caption?: string;
};

export function MobileCtaBar({ href, label, caption }: MobileCtaBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
      {caption ? (
        <p className="mb-2 text-center text-xs font-medium text-zinc-600">{caption}</p>
      ) : null}
      <TuroLink href={href} className="h-11 w-full rounded-lg">
        {label}
      </TuroLink>
    </div>
  );
}
