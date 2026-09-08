"use client";

import { Heart, Share2 } from "lucide-react";
import { useState, useSyncExternalStore } from "react";

import { Button } from "@/components/ui/button";

const storageKey = "roman-fleet-saved";
const changeEvent = "roman-fleet-saved";

function readSaved() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function VehicleActions({ slug, name }: { slug: string; name: string }) {
  const saved = useSyncExternalStore(
    subscribe,
    () => readSaved().includes(slug),
    () => false,
  );
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: name, url });
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  function toggleSave() {
    const next = readSaved();
    const updated = next.includes(slug)
      ? next.filter((item) => item !== slug)
      : [...next, slug];
    window.localStorage.setItem(storageKey, JSON.stringify(updated));
    window.dispatchEvent(new Event(changeEvent));
  }

  return (
    <div className="flex items-center gap-1">
      <Button type="button" variant="ghost" className="h-9 px-3" onClick={() => void share()}>
        <Share2 className="size-4" />
        {copied ? "Copied" : "Share"}
      </Button>
      <Button type="button" variant="ghost" className="h-9 px-3" onClick={toggleSave}>
        <Heart className={saved ? "size-4 fill-zinc-950" : "size-4"} />
        Save
      </Button>
    </div>
  );
}
