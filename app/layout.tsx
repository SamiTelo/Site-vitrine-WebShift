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

{/* ---------------------------
      SEO minimal (Global)
  ---------------------------- */}
export const metadata: Metadata = {
  title: {
    default: "WebShift — Agence de Marketing Digital & Stratégies de Croissance",
    template: "%s | WebShift",
  },
  description:
    "WebShift est une agence de marketing digital spécialisée en SEO, publicité en ligne et stratégies digitales performantes en Afrique.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-white
          text-black
          min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
