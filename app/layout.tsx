import "./globals.css";
import type { ReactNode } from "react";
import { Playfair_Display, Inter, Libre_Baskerville } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-baskerville",
  weight: ["400", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={`${serif.variable} ${sans.variable} ${baskerville.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
