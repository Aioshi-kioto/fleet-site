"use client";

import { ArrowRight, Menu, Star, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { HostAvatar } from "@/components/host-card";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

function BrandMark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <div className="relative">
        <HostAvatar size={36} className="border border-zinc-200 shadow-xs" />
        <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full bg-amber-500 p-0.5 text-white shadow-xs ring-1 ring-white">
          <Star className="size-2 fill-white text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-[14px] font-bold tracking-[0.16em] text-zinc-950 uppercase sm:text-[15px]">
            Roman Fleet
          </span>
          <span className="hidden rounded-full bg-emerald-900 px-2 py-0.5 text-[10px] font-semibold text-white shadow-2xs sm:inline-flex items-center gap-1">
            <Star className="size-2.5 fill-amber-400 text-amber-400" />
            {site.hostBadge}
          </span>
        </div>
        <span className="text-[11px] text-zinc-500">
          <span className="text-amber-500 font-bold">5.0 ★</span> · {site.tripsLabel} · {site.city}
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandMark />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/cars"
                ? pathname.startsWith("/cars")
                : false;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-zinc-100 text-zinc-950 font-semibold"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-9.5 rounded-lg px-4 text-xs font-semibold sm:inline-flex"
          >
            <Link href="/cars" className="flex items-center gap-1.5">
              <span>Browse cars</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden size-10 rounded-lg"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/cars"
                  ? pathname.startsWith("/cars")
                  : false;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-zinc-100 text-zinc-950 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950",
                  )}
                  onClick={(e) => {
                    setOpen(false);
                    handleNavClick(e, link.href);
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-2 h-10 rounded-lg text-sm font-semibold">
              <Link
                href="/cars"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5"
              >
                <span>Browse cars</span>
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
