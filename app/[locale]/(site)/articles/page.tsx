import InsightCard from "../../../components/shared/InsightCard";
import { legalInsights } from "../../../data/legalInsights";
import { publications } from "../../../data/publications";
import { getMessages } from "../../../lib/getMessages";

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: "id" | "en" }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  return (
    <section className="min-h-screen bg-white px-6 py-24">
      {/* HEADER */}
      <div className="text-center mb-20">
        <p className="text-gray-500 uppercase tracking-[0.25em] text-sm">
          {m.articlesPage.topTag}
        </p>

        <h1 className="text-4xl md:text-5xl text-[#1E1E1E] font-semibold mt-3">
          {m.articlesPage.title}
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          {m.articlesPage.desc}
        </p>
      </div>

      {/* LEGAL INSIGHTS */}
      <div className="max-w-7xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold text-[#1E1E1E] mb-2">
          {m.articlesPage.insightsTitle}
        </h2>

        <p className="text-gray-500 text-sm mb-10 max-w-3xl">
          {m.articlesPage.insightsDesc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {legalInsights.map((a) => (
            <InsightCard
              key={a.id}
              title={m.legalInsights?.[a.id]?.title ?? a.title}
              date={a.date}
              read={a.read}
              image={a.image}
              desc={m.legalInsights?.[a.id]?.desc ?? a.desc}
              href={`/${locale}/articles/${a.slug}`}
            />
          ))}
        </div>
      </div>

      {/* PUBLICATIONS */}
      <div className="max-w-7xl mx-auto mb-28">
        <h2 className="text-2xl font-semibold text-[#1E1E1E] mb-2">
          {m.articlesPage.publicationsTitle}
        </h2>

        <p className="text-gray-500 text-sm mb-10 max-w-3xl">
          {m.articlesPage.publicationsDesc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {publications.map((p) => (
            <InsightCard
              key={p.id}
              title={m.publications?.[p.id]?.title ?? p.title}
              date={p.date}
              read={p.read}
              image={p.image}
              desc={m.publications?.[p.id]?.desc ?? p.desc}
              href={p.url}
              external
            />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#1E1E1E]">
          {m.articlesPage.footerTitle}
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          {m.articlesPage.footerDesc}
        </p>
      </div>
    </section>
  );
}
