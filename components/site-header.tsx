"use client";

import {
  ArrowRight,
  CarFront,
  CircleHelp,
  Menu,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { HostAvatar } from "@/components/host-card";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const headerNav = [
  { href: "/cars", label: "Fleet", icon: CarFront },
  { href: "/#reviews", label: "Reviews", icon: Star },
  { href: "/#faq", label: "FAQ", icon: CircleHelp },
] as const;

function BrandMark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <div className="relative">
        <HostAvatar size={42} className="border border-zinc-200 shadow-sm" />
        <div className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full bg-amber-500 p-0.5 text-white shadow-sm ring-2 ring-white">
          <Star className="size-2.5 fill-white text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-bold tracking-[0.16em] text-zinc-950 uppercase sm:text-[16px]">
            Roman Fleet
          </span>
          <span className="hidden rounded-md bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 sm:inline-flex items-center gap-1">
            <Sparkles className="size-2.5 text-emerald-600" />
            {site.hostBadge}
          </span>
        </div>
        <span className="text-[12px] text-zinc-500 font-medium">
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
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <BrandMark />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {headerNav.map((link) => {
            const Icon = link.icon;
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
                  "group flex items-center gap-2 rounded-xl px-4 py-2.5 text-[15px] font-medium transition-all",
                  active
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-xs"
                    : "text-zinc-600 hover:bg-zinc-100/80 hover:text-zinc-950",
                )}
              >
                <Icon
                  className={cn(
                    "size-4.5 transition-colors",
                    link.href === "/#reviews"
                      ? "text-amber-500 fill-amber-400/20 group-hover:fill-amber-400/40"
                      : active
                      ? "text-zinc-950"
                      : "text-zinc-400 group-hover:text-zinc-950",
                  )}
                />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            asChild
            className="group hidden h-11 rounded-xl px-5 text-[14px] sm:text-[15px] font-semibold shadow-xs hover:shadow-md transition-all sm:inline-flex"
          >
            <Link href="/cars" className="flex items-center gap-2">
              <CarFront className="size-4.5" />
              <span>Browse cars</span>
              <ArrowRight className="size-4 text-zinc-400 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden size-11 rounded-xl"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1.5">
            {headerNav.map((link) => {
              const Icon = link.icon;
              const active =
                link.href === "/cars"
                  ? pathname.startsWith("/cars")
                  : false;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                    active
                      ? "bg-zinc-100 text-zinc-950 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950",
                  )}
                  onClick={(e) => {
                    setOpen(false);
                    handleNavClick(e, link.href);
                  }}
                >
                  <Icon
                    className={cn(
                      "size-5",
                      link.href === "/#reviews"
                        ? "text-amber-500 fill-amber-400/20"
                        : "text-zinc-500",
                    )}
                  />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Button asChild className="mt-2 h-12 rounded-xl text-base font-semibold">
              <Link
                href="/cars"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <CarFront className="size-5" />
                <span>Browse cars</span>
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
