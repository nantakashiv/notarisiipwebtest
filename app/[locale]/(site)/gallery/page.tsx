import Link from "next/link";
import { getMessages } from "../../../lib/getMessages";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: "id" | "en" }>;
}) {
  const { locale } = await params;

  // ✅ load messages directly on server
  const m = await getMessages(locale);

  const employees = m.gallery.employees as {
    name: string;
    role: string;
    photo: string;
  }[];

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-black text-4xl font-bold mb-4">
            {m.gallery.title}
          </h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {m.gallery.desc}
          </p>
        </section>

        {/* ✅ Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {employees.map((emp, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-slate-200
                bg-slate-100
                shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_28px_90px_rgba(15,23,42,0.14)]
              "
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4]">
                <img
                  src={emp.photo}
                  alt={`${m.gallery.itemAlt} ${i + 1}`}
                  className="
                    absolute inset-0 h-full w-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.05]
                  "
                />

                {/* ✅ Bottom smooth blur + gradient (NO hard line) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%]">
                  {/* blur layer (small + subtle) */}
                  <div className="absolute inset-0 bg-black/20 blur-2xl opacity-70" />

                  {/* gradient fade to transparent */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/55
                      via-black/20
                      to-transparent
                    "
                  />
                </div>

                {/* Name & Role */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[14px] font-semibold text-white leading-tight">
                    {emp.name}
                  </p>
                  <p className="mt-1 text-[12px] text-white/85 leading-tight">
                    {emp.role}
                  </p>
                </div>
              </div>

              {/* subtle hover ring */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-[28px]
                  ring-1 ring-black/0 transition-all duration-300
                  group-hover:ring-black/10
                "
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="text-center mt-20">
          <h2 className="text-black text-2xl font-semibold mb-2">
            {m.gallery.ctaTitle}
          </h2>
          <p className="text-neutral-600 mb-6">{m.gallery.ctaDesc}</p>

          <Link
            href={`/${locale}/appointment`}
            className="
              inline-flex items-center justify-center
              px-6 py-3
              bg-black text-white
              rounded-full text-sm font-medium
              transition-all duration-200
              hover:bg-slate-900
              hover:-translate-y-[1px]
              active:translate-y-0
            "
          >
            {m.gallery.ctaButton}
          </Link>
        </section>
      </div>
    </main>
  );
}
