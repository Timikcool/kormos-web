import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Droplet, Lock } from "lucide-react";
import { WhitelistForm } from "@/components/whitelist-form";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-black text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url('https://api.builder.io/api/v1/image/assets/TEMP/a4efd30ed54b2184ca524bd6b9dd0753f89ccda4?width=2880')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <div className="flex items-center gap-3">
            <Image
              src="/kormos_logo.png"
              alt="Kormos"
              width={100}
              height={30}
              className="h-5"
              priority
            />
          </div>
          <Link
            href="#whitelist"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90"
          >
            Join waitlist <ArrowUpRight size={16} />
          </Link>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-16 md:px-10">
          <div className="mt-8 space-y-12">
            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
                  The next generation of stablecoin yield on Solana
                </h1>
                <div className="flex items-center gap-3">
 

                </div>
              </div>

              <p className="text-lg text-white/80 md:text-xl">
                Kormos blends liquid and locked depositors into one fractional-reserve
                vault: liquid LPs get instant exits and senior-tranche protection; locked
                LPs choose a bespoke lockup and earn the highest surplus yield.
              </p>

              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-3">
                  <Droplet className="mt-1 h-6 w-6 text-sky-300" />
                  <p className="text-base md:text-lg">
                    Liquid depositors can exit anytime while we route a portion into higher-yield
                    PT and farming strategies to lift APY for everyone
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="mt-1 h-6 w-6 text-sky-300" />
                  <p className="text-base md:text-lg">
                    Locked depositors absorb first-loss and earns boosted yield; FIFO withdrawals
                    keep things calm if exits spike
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#whitelist"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-100"
                >
                  Join the waitlist <ArrowUpRight size={16} />
                </Link>
                <a
                  href="mailto:hello@kormos.finance?subject=Kormos%20overview"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
                >
                  Meet the team
                </a>
              </div>
            </div>

            <div className="space-y-4">

              <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  Two vault lanes
                </p>
                <p className="mt-2 text-white">
                  Liquid LPs stay senior with anytime exits; locked LPs pick a tenor and
                  capture boosted surplus yield.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  Yield surplus, no leverage
                </p>
                <p className="mt-2 text-white">
                  A slice of the liquid sleeve allocates to Kamino, Solstice, and Exponent PTs
                  to lift APY for both tranches.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  FIFO safety net
                </p>
                <p className="mt-2 text-white">
                  If withdrawals surge, FIFO queues release capital as positions mature or
                  new deposits arrive.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                  Shipping in Q1 2026
                </p>
                <p className="mt-2 text-white">
                  MVP vault on Solana with a four-person team of Solana-native builders
                  (ex Morgan Stanley, PE/VC, DeFi exits).
                </p>
              </div>
            </div>
            </div>
          </div>

          <section
            id="whitelist"
            className="relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
          >
            <div className="absolute inset-0">
              <Image
                src="/vault.png"
                alt="Kormos vault illustration"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/30" />
            </div>
            <div className="relative grid gap-6 p-6 md:p-10 lg:grid-cols-[1.1fr]">
              <div className="max-w-2xl space-y-3">
                <WhitelistForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="mx-auto mt-16 max-w-6xl px-6 pb-10 text-center text-sm text-white/50 md:px-10">
          © {new Date().getFullYear()} Kormos. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
