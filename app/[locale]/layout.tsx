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
  children: React.ReactNode;
  params: Promise<{ locale: "id" | "en" }>;
}) {
  const { locale } = await params; // ✅ unwrap Promise

  return (
    <div
      lang={locale}
      className={`${serif.variable} ${sans.variable} ${baskerville.variable}`}
    >
      {children}
    </div>
  );
}
