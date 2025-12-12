import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-xs uppercase tracking-wide text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-[0.7rem] text-white/40">
          © {new Date().getFullYear()} Kormos. Built for Solana yield natives.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://x.com"
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://discord.com"
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
          <Link
            href="/#whitelist"
            className="rounded-full border border-white/20 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-wider text-white hover:bg-white/10"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </footer>
  );
}

