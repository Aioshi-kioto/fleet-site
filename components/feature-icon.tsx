import {
  Bluetooth,
  Camera,
  Compass,
  Eye,
  Flame,
  Headphones,
  KeyRound,
  Luggage,
  Shield,
  ShieldCheck,
  Smartphone,
  SunMedium,
  Usb,
  Volume2,
  type LucideIcon,
} from "lucide-react";

import { type FeatureId } from "@/data/cars";

const features: Record<
  FeatureId,
  { label: string; icon: LucideIcon }
> = {
  bluetooth: { label: "Bluetooth", icon: Bluetooth },
  "backup-camera": { label: "Backup camera", icon: Camera },
  "apple-carplay": { label: "Apple CarPlay", icon: Smartphone },
  "android-auto": { label: "Android Auto", icon: Smartphone },
  "heated-seats": { label: "Heated seats", icon: Flame },
  "usb-charging": { label: "USB charger & ports", icon: Usb },
  "spacious-cargo": { label: "Spacious cargo room", icon: Luggage },
  "keyless-entry": { label: "Keyless entry", icon: KeyRound },
  "premium-sound": { label: "Premium sound system", icon: Volume2 },
  "all-wheel-drive": { label: "All-Wheel Drive (AWD)", icon: ShieldCheck },
  "blind-spot-warning": { label: "Blind spot warning", icon: Eye },
  sunroof: { label: "Panoramic Sunroof", icon: SunMedium },
  navigation: { label: "GPS Navigation", icon: Compass },
  "brake-assist": { label: "Brake assist", icon: Shield },
  "aux-input": { label: "AUX input", icon: Headphones },
  "adaptive-cruise-control": { label: "Adaptive Cruise Control", icon: ShieldCheck },
  "lane-keep-assist": { label: "Lane Keeping Assist", icon: ShieldCheck },
};

export function featureLabel(id: FeatureId) {
  return features[id].label;
}

export function FeatureIcon({
  id,
  className,
}: {
  id: FeatureId;
  className?: string;
}) {
  const Icon = features[id].icon;
  return <Icon className={className} />;
}

export function FeatureRow({ id }: { id: FeatureId }) {
  const { label, icon: Icon } = features[id];

  return (
    <div className="flex items-center gap-3 text-sm text-zinc-700">
      <Icon className="size-4 shrink-0 text-zinc-500" />
      <span>{label}</span>
    </div>
  );
}
