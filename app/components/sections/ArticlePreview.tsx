"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { legalInsights } from "../../data/legalInsights";
import { publications } from "../../data/publications";
import { useMessages } from "../shared/I18nProvider";

export default function ArticlePreview() {
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  return (
    <section id="blog" className="bg-white">
      {/* INNER CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold">
            {m.articlesPreview.headerTitle}
          </h2>
          <p className="text-gray-600 mt-2">{m.articlesPreview.headerDesc}</p>
        </div>

        {/* LEGAL INSIGHTS */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-6">
            {m.articlesPreview.legalInsightsTitle}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalInsights.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="rounded-2xl border border-slate-200 p-6 bg-white"
              >
                <h4 className="font-semibold">
                  {m.legalInsights?.[article.id]?.title ?? article.title}
                </h4>

                <p className="text-sm text-gray-600 mt-2">
                  {m.legalInsights?.[article.id]?.desc ?? article.desc}
                </p>

                <Link
                  href={`/${locale}/articles/${article.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900"
                >
                  {m.articlesPreview.readMore}
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* PUBLICATIONS */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            {m.articlesPreview.publicationsTitle}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.slice(0, 2).map((pub) => (
              <a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-slate-200 p-6 bg-white block"
              >
                <h4 className="font-semibold">
                  {m.publications?.[pub.id]?.title ?? pub.title}
                </h4>

                <p className="text-sm text-gray-600 mt-2">
                  {m.publications?.[pub.id]?.desc ?? pub.desc}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900">
                  {m.articlesPreview.viewPublication}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-16">
          <Link
            href={`/${locale}/articles`}
            className="inline-block text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            {m.articlesPreview.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
