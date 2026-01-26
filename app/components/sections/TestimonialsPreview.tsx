"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useMessages } from "../shared/I18nProvider";
import { getTestimonials, getTestimonialStats } from "../../data/testimonials";

export default function TestimonialsPreview() {
  const { locale } = useParams() as { locale: "en" | "id" };
  const m = useMessages();

  const testimonials = getTestimonials(locale);
  const testimonialStats = getTestimonialStats(locale);

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-slate-500">
            {m.testimonialsPreview.tag}
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
            {m.testimonialsPreview.title}
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {m.testimonialsPreview.desc}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="
                rounded-2xl
                border border-slate-200
                bg-white
                p-6
                shadow-[0_14px_45px_rgba(15,23,42,0.06)]
                transition
                hover:-translate-y-[2px]
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              "
            >
              {/* Top Row */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{item.role}</p>
                </div>
              </div>

              {/* Text */}
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                “{item.text}”
              </p>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                <span>{item.time}</span>
                <span>{item.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Stats bar (compact + modern gradient) */}
        <div
          className="
            mt-12
            max-w-3xl mx-auto w-full
            rounded-2xl
            p-[1px]
            bg-[linear-gradient(135deg,rgba(15,23,42,0.16),rgba(59,130,246,0.18),rgba(255,255,255,0.12))]
            shadow-[0_18px_60px_rgba(2,6,23,0.10)]
            overflow-hidden
          "
        >
          <div
            className="
              rounded-2xl
              bg-white/85
              backdrop-blur-xl
              border border-white/40
              px-6 py-6
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center">
              {testimonialStats.map((s, i) => (
                <div
                  key={i}
                  className={`
                    py-2
                    ${i !== 0 ? "sm:border-l sm:border-slate-200/70" : ""}
                  `}
                >
                  <p className="text-2xl font-semibold text-slate-900 tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
