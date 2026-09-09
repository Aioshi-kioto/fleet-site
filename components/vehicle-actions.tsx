"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function VehicleActions({
  name,
}: {
  slug?: string;
  name: string;
}) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: name, url });
        return;
      } catch {
        // user cancelled or share failed, fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="h-9 gap-1.5 rounded-lg px-3 text-xs font-medium text-zinc-700 hover:text-zinc-950"
      onClick={() => void share()}
    >
      {copied ? (
        <>
          <Check className="size-3.5 text-emerald-600" />
          Link copied!
        </>
      ) : (
        <>
          <Share2 className="size-3.5" />
          Share
        </>
      )}
    </Button>
  );
}
