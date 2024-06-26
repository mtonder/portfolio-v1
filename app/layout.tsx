import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marek Tonder - Portfolio",
  description: "Marek Tonder - Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Toaster position="top-right" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
