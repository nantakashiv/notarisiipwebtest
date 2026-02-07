import type { ReactNode } from "react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params; // ✅ wajib await di Next 16

  if (locale === "en") {
    return {
      title: "Notary & Land Deed Official Iip Affadin – Brebes, Central Java",
      description:
        "Official Notary & Land Deed Office in Brebes, Central Java. Providing authentic deeds, land matters, legal entities, and mediation services.",
    };
  }

  return {
    title: "Notaris & PPAT Iip Affadin – Brebes, Jawa Tengah",
    description:
      "Kantor Notaris & PPAT resmi di Brebes, Jawa Tengah. Melayani akta autentik, hak atas tanah, badan hukum, dan mediasi secara profesional.",
  };
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // ✅ juga wajib await

  const safeLocale = locale === "id" ? "id" : "en";

  return (
    <div lang={safeLocale} className="min-h-screen">
      {children}
    </div>
  );
}
