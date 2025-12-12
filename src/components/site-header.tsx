import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-semibold uppercase tracking-[0.2em] text-white"
        >
          Kormos
        </Link>

        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wide text-white/70 sm:flex">
          <Link
            href="/#whitelist"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
          >
            Join waitlist
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <Link
          href="/#whitelist"
          className="sm:hidden rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Waitlist
        </Link>
      </div>
    </header>
  );
}

