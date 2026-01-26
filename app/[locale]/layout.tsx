import type { ReactNode } from "react";

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

  const safeLocale: "id" | "en" = locale === "id" ? "id" : "en";

  return (
    <div lang={safeLocale} className="min-h-screen">
      {children}
    </div>
  );
}
