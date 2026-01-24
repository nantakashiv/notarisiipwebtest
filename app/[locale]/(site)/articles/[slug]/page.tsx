import Link from "next/link";
import Image from "next/image";
import { legalInsights } from "@/app/data/legalInsights";
import { notFound } from "next/navigation";
import { getMessages } from "@/app/lib/getMessages";

export function generateStaticParams() {
  return legalInsights.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: "id" | "en"; slug: string }>;
}) {
  const { slug, locale } = await params;
  const m = await getMessages(locale);

  const article = legalInsights.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  // ✅ related posts (simple)
  const related = legalInsights.filter((x) => x.slug !== article.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* ✅ HERO COVER */}
      <section className="relative">
        <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
          <Image
            src={article.image}
            alt={m.legalInsights?.[article.id]?.title ?? article.title}
            fill
            priority
            className="object-cover"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        {/* ✅ TOP CONTENT */}
        <div className="relative -mt-56 md:-mt-64">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="
                rounded-3xl
                border border-white/15
                bg-white/85
                backdrop-blur-xl
                shadow-[0_20px_80px_rgba(0,0,0,0.18)]
                overflow-hidden
              "
            >
              {/* Top bar */}
              <div className="px-6 md:px-10 pt-8 md:pt-10">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <Link
                    href={`/${locale}/articles`}
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-gray-700
                      hover:text-gray-900
                      transition
                    "
                  >
                    <span className="text-lg">←</span> {m.articleDetail.back}
                  </Link>

                  <div className="flex items-center gap-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 font-medium">
                      {m.articleDetail.badgeInsight}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700 font-medium">
                      {m.articleDetail.badgeVerified}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                  {m.legalInsights?.[article.id]?.title ?? article.title}
                </h1>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 flex-wrap">
                  <span>{article.date}</span>
                  <span className="h-1 w-1 rounded-full bg-gray-400" />
                  <span>{article.read}</span>
                </div>

                {/* Short desc */}
                <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl">
                  {m.legalInsights?.[article.id]?.desc ?? article.desc}
                </p>
              </div>

              {/* ✅ CONTENT + SIDEBAR */}
              <div className="px-6 md:px-10 pb-10 md:pb-12 mt-10 grid lg:grid-cols-[1fr_320px] gap-10 items-start">
                {/* MAIN CONTENT */}
                <div>
                  <div className="prose max-w-none text-gray-900">
                    {article.content
                      .trim()
                      .split("\n")
                      .filter(Boolean)
                      .map((line, i) => (
                        <p key={i}>{line.trim()}</p>
                      ))}
                  </div>

                  {/* ✅ QUICK CTA */}
                  <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {m.articleDetail.ctaTitle}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {m.articleDetail.ctaDesc}
                    </p>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/${locale}/appointment`}
                        className="
                          inline-flex items-center justify-center
                          h-[44px] px-6
                          rounded-xl
                          bg-gray-900 text-white
                          text-sm font-semibold
                          hover:bg-gray-800
                          transition
                        "
                      >
                        {m.articleDetail.ctaBook}
                      </Link>

                      <Link
                        href={`/${locale}/contact`}
                        className="
                          inline-flex items-center justify-center
                          h-[44px] px-6
                          rounded-xl
                          bg-white text-gray-900
                          border border-gray-200
                          text-sm font-semibold
                          hover:bg-gray-50
                          transition
                        "
                      >
                        {m.articleDetail.ctaContact}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* SIDEBAR */}
                <aside className="space-y-4">
                  {/* ✅ summary box */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      {m.articleDetail.summaryTitle}
                    </p>

                    <div className="mt-4 space-y-3">
                      {[m.articleDetail.summary1, m.articleDetail.summary2, m.articleDetail.summary3].map(
                        (x) => (
                          <div key={x} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900/70" />
                            <p className="text-sm text-gray-700">{x}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* ✅ related */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                      {m.articleDetail.relatedTitle}
                    </p>

                    <div className="mt-4 space-y-4">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/${locale}/articles/${r.slug}`}
                          className="
                            group block
                            rounded-xl
                            border border-gray-200
                            bg-white
                            p-4
                            hover:bg-gray-50
                            transition
                          "
                        >
                          <p className="text-sm font-semibold text-gray-900 group-hover:underline underline-offset-4">
                            {m.legalInsights?.[r.id]?.title ?? r.title}
                          </p>
                          <p className="mt-1 text-xs text-gray-500">
                            {r.date} • {r.read}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* ✅ mini disclaimer */}
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <p className="text-sm font-semibold text-gray-900">
                      {m.articleDetail.disclaimerTitle}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {m.articleDetail.disclaimerDesc}
                    </p>
                  </div>
                </aside>
              </div>
            </div>

            {/* ✅ extra spacing */}
            <div className="h-16" />
          </div>
        </div>
      </section>
    </main>
  );
}
