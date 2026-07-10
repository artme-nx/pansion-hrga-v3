import type { Metadata } from "next";
import { Caveat, Lora, Karla } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pansion HRGA — Vodice | Obiteljski pansion, korak od mora",
  description:
    "Pansion HRGA u Vodicama — obiteljski vođena kuća za goste, 350 m od centra i 700 m od plaže. Sobe, apartman, topla dobrodošlica i mir zvjezdanog neba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${caveat.variable} ${lora.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
