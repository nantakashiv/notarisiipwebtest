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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="
                group relative
                rounded-3xl
                overflow-hidden
                bg-neutral-950
                shadow-[0_15px_60px_rgba(0,0,0,0.25)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Neon frame border */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-3xl
                  border border-white/10
                  before:content-['']
                  before:absolute before:inset-0 before:rounded-3xl
                  before:bg-[linear-gradient(120deg,rgba(59,130,246,0.35),rgba(14,165,233,0.15),transparent)]
                  before:opacity-0
                  before:transition-opacity before:duration-500
                  group-hover:before:opacity-100
                "
              />

              {/* Photo */}
              <div className="relative w-full h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px]">
                <img
                  src={src}
                  alt={`${m.gallery.itemAlt} ${i + 1}`}
                  className="
                    absolute inset-0 h-full w-full object-cover
                    opacity-90
                    transition-all duration-700 ease-out
                    group-hover:opacity-100 group-hover:scale-[1.06]
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/70 via-black/10 to-transparent
                  "
                />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div
                  className="
                    flex items-center justify-between
                    rounded-2xl
                    bg-white/10 backdrop-blur-xl
                    border border-white/15
                    px-3 py-2.5
                    transition-all duration-300
                    group-hover:bg-white/14
                  "
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                      {m.gallery.captionTop}
                    </p>
                    <p className="text-[12px] font-semibold text-white">
                      {m.gallery.captionBottom} {i + 1}
                    </p>
                  </div>
                </div>
              </div>
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
            href={`/${locale}/contact`}
            className="px-6 py-3 bg-black text-white rounded-full text-sm"
          >
            {m.gallery.ctaButton}
          </Link>
        </section>
      </div>
    </main>
  );
}

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
];
