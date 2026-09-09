"use client";

import { ArrowRight, Menu, Sparkles, Star, X } from "lucide-react";
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
        <HostAvatar size={38} className="border border-zinc-200 shadow-sm" />
        <div className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full bg-amber-500 p-0.5 text-white shadow-sm ring-1 ring-white">
          <Star className="size-2.5 fill-white text-white" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="text-[14px] font-bold tracking-[0.16em] text-zinc-950 uppercase sm:text-[15px]">
            Roman Fleet
          </span>
          <span className="hidden rounded-md bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800 sm:inline-flex items-center gap-0.5">
            <Sparkles className="size-2.5 text-emerald-600" />
            {site.hostBadge}
          </span>
        </div>
        <span className="text-[11px] text-zinc-500">
          <span className="text-amber-500 font-semibold">5.0 ★</span> · {site.tripsLabel} · {site.city}
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

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
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
                  "text-sm text-zinc-600 transition-colors hover:text-zinc-950",
                  active && "text-zinc-950",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden h-10 rounded-lg px-4 lg:inline-flex">
            <Link href="/cars">
              Browse cars
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-zinc-800"
                onClick={(e) => {
                  setOpen(false);
                  handleNavClick(e, link.href);
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 h-11 rounded-lg">
              <Link href="/cars" onClick={() => setOpen(false)}>
                Browse cars
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
