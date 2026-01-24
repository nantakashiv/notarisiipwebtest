"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMessages } from "../shared/I18nProvider"; // ✅ adjust path if needed

export default function FinalCTA() {
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  return (
    <section className="py-5 lg:py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8 text-center">
        <h3 className="text-2xl font-bold">{m.finalCta.title}</h3>

        <p className="text-gray-600 mt-2">{m.finalCta.desc}</p>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            href={`/${locale}/appointment`}
            className="px-6 py-3 rounded-lg bg-black text-white"
          >
            {m.finalCta.ctaBook}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="px-6 py-3 rounded-lg border"
          >
            {m.finalCta.ctaContact}
          </Link>
        </div>
      </div>
    </section>
  );
}
