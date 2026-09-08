export function publicImage(src: string): string {
  if (!src) return "";
  return src.startsWith("/") ? src : `/${src}`;
}
