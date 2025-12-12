import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kormos Finance | Fractional Reserve Yield Vaults",
  description:
    "Kormos unlocks higher on-chain yields without leverage through fractional reserve vaults that keep users liquid.",
  openGraph: {
    title: "Kormos Finance",
    description:
      "Higher yields without leverage unlocked through fractional reserve vaults.",
    url: "https://kormos.finance",
    siteName: "Kormos Finance",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kormos Finance",
    description:
      "Higher yields without leverage unlocked through fractional reserve vaults.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(33,150,243,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,210,255,0.2),_transparent_45%)]"
          />
          <div className="relative z-10 flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
