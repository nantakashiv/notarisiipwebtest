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
    <section className="w-full flex flex-col items-center py-5 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-gray-400">
          {m.testimonialsPreview.tag}
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 mt-2">
          {m.testimonialsPreview.title}
        </h2>
        <p className="text-gray-500 mt-1">{m.testimonialsPreview.desc}</p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              p-6
              shadow-[0_5px_20px_rgba(0,0,0,0.05)]
              border border-gray-100
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>

            <div className="text-xs text-gray-400 mt-4">
              {item.time} — {item.date}
            </div>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div
        className="
          mt-16
          max-w-4xl w-full
          rounded-3xl
          p-[1px]
          bg-[linear-gradient(135deg,rgba(15,23,42,0.14),rgba(59,130,246,0.18),rgba(255,255,255,0.10))]
          shadow-[0_20px_80px_rgba(2,6,23,0.10)]
          overflow-hidden
        "
      >
        <div
          className="
            relative
            rounded-3xl
            bg-white/80
            backdrop-blur-xl
            border border-white/40
            py-10 px-6
            flex flex-col md:flex-row
            justify-around
            text-center
          "
        >
          {/* subtle glow accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-14 -left-14 w-[220px] h-[220px] rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-[260px] h-[260px] rounded-full bg-slate-900/10 blur-3xl" />
          </div>

          {testimonialStats.map((s, i) => (
            <div key={i} className="relative mb-6 md:mb-0">
              <p className="text-3xl font-bold text-slate-900 tracking-tight">
                {s.value}
              </p>
              <p className="text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
