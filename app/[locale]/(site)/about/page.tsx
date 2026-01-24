import Link from "next/link";
import { getMessages } from "../../../lib/getMessages";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: "id" | "en" }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  return (
    <section className="min-h-screen bg-white">
      {/* ===================== HERO ===================== */}
      <div
        className="relative w-full h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-semibold text-white">
            {m.aboutPage.heroTitle1}{" "}
            <span className="text-yellow-400">{m.aboutPage.heroTitle2}</span>
          </h1>
          <p className="text-gray-200 mt-4 text-lg max-w-xl">
            {m.aboutPage.heroDesc}
          </p>
        </div>
      </div>

      {/* ===================== SECTION 1 ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-semibold text-[#1E1E1E] mb-6">
            {m.aboutPage.section1Title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-5">
            {m.aboutPage.section1P1}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            {m.aboutPage.section1P2}
          </p>
          <div className="mt-8 w-24 h-[3px] bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full" />
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <img
            src="/a.jpg"
            alt={m.aboutPage.section1ImageAlt}
            className="w-full h-[360px] object-cover"
          />
        </div>
      </div>

      {/* ===================== SECTION 2 — STATISTICS ===================== */}
      <div className="bg-white py-20 border-t border-gray-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-12 px-6">
          <div>
            <h3 className="text-5xl font-bold text-[#1E1E1E]">15+</h3>
            <p className="text-gray-600 mt-2 text-lg">{m.aboutPage.stat1Label}</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#1E1E1E]">4,000+</h3>
            <p className="text-gray-600 mt-2 text-lg">{m.aboutPage.stat2Label}</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#1E1E1E]">98%</h3>
            <p className="text-gray-600 mt-2 text-lg">{m.aboutPage.stat3Label}</p>
          </div>
        </div>
      </div>

      {/* ===================== SECTION 3 — OUR VALUES ===================== */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold text-[#1E1E1E] text-center">
          {m.aboutPage.valuesTitle}
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-center mb-16">
          {m.aboutPage.valuesDesc}
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-[#1E1E1E]">
              {m.aboutPage.value1Title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {m.aboutPage.value1Desc}
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-[#1E1E1E]">
              {m.aboutPage.value2Title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {m.aboutPage.value2Desc}
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200 hover:-translate-y-2 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-[#1E1E1E]">
              {m.aboutPage.value3Title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {m.aboutPage.value3Desc}
            </p>
          </div>
        </div>
      </div>

      {/* ===================== SECTION 4 — MISSION ===================== */}
      <div className="bg-[#1E1E1E] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            {m.aboutPage.missionTitle}
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            {m.aboutPage.missionDesc}
          </p>

          <div className="mt-10 w-32 h-[3px] bg-yellow-500 rounded-full"></div>
        </div>
      </div>

      {/* ===================== CTA ===================== */}
      <div className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] mb-4">
          {m.aboutPage.ctaTitle}
        </h2>
        <p className="text-gray-600 mb-8">{m.aboutPage.ctaDesc}</p>

        <Link
          href={`/${locale}/appointment`}
          className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-600 transition"
        >
          {m.aboutPage.ctaButton}
        </Link>
      </div>
    </section>
  );
}
