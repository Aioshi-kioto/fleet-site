import { existsSync } from "node:fs";
import path from "node:path";

const EXTENSIONS = [".avif", ".webp", ".jpg", ".jpeg", ".png"];

export function publicImage(src: string): string {
  if (!src) return "";
  const relative = src.replace(/^\//, "");
  const fullPath = path.join(process.cwd(), "public", relative);
  if (existsSync(fullPath)) {
    return src;
  }

  const parsed = path.parse(relative);
  const baseName = parsed.name;
  const num = parseInt(baseName, 10);

  const candidateNames = isNaN(num)
    ? [baseName]
    : Array.from(new Set([baseName, String(num), String(num).padStart(2, "0")]));

  for (const name of candidateNames) {
    for (const ext of EXTENSIONS) {
      const candidateRel = path.join(/*turbopackIgnore: true*/ parsed.dir, `${name}${ext}`).replace(/\\/g, "/");
      const candidateFile = path.join(process.cwd(), "public", /*turbopackIgnore: true*/ candidateRel);
      if (existsSync(candidateFile)) {
        return `/${candidateRel}`;
      }
    }
  }

  return "";
}
