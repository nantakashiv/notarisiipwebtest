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

export async function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ keep it safe and strict inside
  const safeLocale: "id" | "en" = locale === "id" ? "id" : "en";

  return (
    <html
      lang={safeLocale}
      className={`${serif.variable} ${sans.variable} ${baskerville.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
