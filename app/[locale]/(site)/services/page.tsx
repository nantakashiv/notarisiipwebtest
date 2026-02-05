import Link from "next/link";
import Image from "next/image";
import { services } from "../../../data/services";
import { getMessages } from "../../../lib/getMessages";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: "id" | "en" }>;
}) {
  const { locale } = await params;
  const m = await getMessages(locale);

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-black text-4xl font-bold mb-4">
            {m.servicesPage.headerTitle}
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {m.servicesPage.headerDesc}
          </p>
        </section>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const item = m.servicesPage.items[service.id];

            return (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={item.title}
                desc={item.desc}
                helpsWith={item.helpsWith} // ✅ new
                commonDocs={item.commonDocs} // ✅ new
                badgeLabel={m.servicesPage.badgeLabel} // ✅ translate-able
                helpsTitle={m.servicesPage.helpsTitle} // ✅ translate-able
                docsTitle={m.servicesPage.docsTitle} // ✅ translate-able
                footerLeft={m.servicesPage.footerLeft} // ✅ translate-able
                footerRight={m.servicesPage.footerRight} // ✅ translate-able
              />
            );
          })}
        </div>

        {/* CTA */}
        <section className="mt-20 text-center">
          <h2 className="text-black text-2xl font-semibold mb-4">
            {m.servicesPage.ctaTitle}
          </h2>
          <p className="text-neutral-600 mb-6">{m.servicesPage.ctaDesc}</p>

          <Link
            href={`/${locale}/appointment`}
            className="inline-block px-6 py-3 bg-black text-white rounded-full text-sm"
          >
            {m.servicesPage.ctaButton}
          </Link>
        </section>
      </div>
    </main>
  );
}

function ServiceCard({
  id,
  title,
  desc,
  helpsWith,
  commonDocs,
  badgeLabel,
  helpsTitle,
  docsTitle,
  footerLeft,
  footerRight,
}: {
  id: string;
  title: string;
  desc: string;
  helpsWith?: string[];
  commonDocs?: string[];
  badgeLabel: string;
  helpsTitle: string;
  docsTitle: string;
  footerLeft: string;
  footerRight: string;
}) {
  return (
    <div
      className="
        group relative
        rounded-3xl
        border border-neutral-200
        bg-white
        p-6
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg
        overflow-hidden

        flex flex-col
        min-h-[560px]
      "
    >
      {/* subtle modern glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_60%)]
        "
      />

      {/* ✅ TOP */}
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 min-w-0">
            {/* ✅ Square Icon */}
            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-neutral-100
                border border-neutral-200
                flex items-center justify-center
                shrink-0
              "
            >
              <Image
                src={`/icons/services/${id}2.png`}
                alt={title}
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title + time */}
            <div className="min-w-0">
              <h3 className="text-black text-lg font-semibold leading-snug">
                {title}
              </h3>

            
            </div>
          </div>

          {/* Badge */}
          <span
            className="
              shrink-0
              rounded-full
              px-3 py-1
              text-[11px]
              font-semibold
              text-neutral-700
              bg-neutral-100
              border border-neutral-200
              whitespace-nowrap
            "
          >
            {badgeLabel}
          </span>
        </div>

        {/* Description (show all) */}
        <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>

      {/* ✅ Middle content */}
      <div className="relative mt-5 space-y-5">
        {/* Helps With */}
        {helpsWith?.length ? (
          <div>
            <p className="text-xs font-semibold text-neutral-900 tracking-wide">
              {helpsTitle}
            </p>

            <ul className="mt-3 space-y-2">
              {helpsWith.map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-neutral-900/70 shrink-0" />
                  <p className="text-sm text-neutral-700 leading-snug">{x}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Common Documents */}
        {commonDocs?.length ? (
          <div className="mb-3">
            <p className="text-xs font-semibold text-neutral-900 tracking-wide">
              {docsTitle}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {commonDocs.map((x) => (
                <span
                  key={x}
                  className="
                    rounded-full
                    px-3 py-1
                    text-xs
                    bg-neutral-50 text-neutral-700
                    border border-neutral-200
                    leading-none
                  "
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* ✅ FOOTER pinned to bottom ALWAYS */}
      <div className="relative mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
        <span>{footerLeft}</span>
        <span className="text-neutral-700 font-medium group-hover:text-neutral-900 transition">
          {footerRight}
        </span>
      </div>
    </div>
  );
}
