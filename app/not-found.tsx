import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-xs tracking-[0.22em] text-zinc-500 uppercase">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-zinc-600">That page is not in the Roman Fleet catalog.</p>
      <Link
        href="/cars"
        className="mt-8 inline-flex h-11 items-center rounded-lg bg-zinc-950 px-5 text-sm font-medium text-white"
      >
        Browse the fleet
      </Link>
    </div>
  );
}
