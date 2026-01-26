"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMessages } from "../shared/I18nProvider"; // ✅ adjust path if needed

export default function FinalCTA() {
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  return (
    <section className="relative py-10 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,0.06)]
          "
        >
          {/* ✅ subtle classy glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-slate-900/5 blur-[90px]" />
            <div className="absolute -bottom-28 -right-20 h-[320px] w-[320px] rounded-full bg-[#B08D2D]/10 blur-[100px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50/60" />
          </div>

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 text-center">
            {/* ✅ mini badge */}
            <div className="flex justify-center">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-slate-200
                  bg-white/80
                  px-4 py-2
                  text-xs font-semibold
                  text-slate-700
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#B08D2D]" />
                Verified Notary Office
              </div>
            </div>

            <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              {m.finalCta.title}
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {m.finalCta.desc}
            </p>

            {/* ✅ CTA buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`/${locale}/appointment`}
                className="
                  inline-flex items-center justify-center
                  h-[50px]
                  px-8
                  rounded-full
                  bg-slate-900 text-white
                  text-[14px] font-semibold
                  shadow-[0_16px_40px_rgba(15,23,42,0.18)]
                  transition
                  hover:-translate-y-[1px]
                  hover:bg-slate-800
                  active:translate-y-0
                  active:scale-[0.98]
                  w-full sm:w-auto
                  min-w-[220px]
                "
              >
                {m.finalCta.ctaBook}
              </Link>

              <Link
                href={`/${locale}/appointment`}
                className="
                  inline-flex items-center justify-center
                  h-[50px]
                  px-8
                  rounded-full
                  bg-white text-slate-900
                  border border-slate-200
                  text-[14px] font-semibold
                  shadow-[0_10px_26px_rgba(15,23,42,0.06)]
                  transition
                  hover:-translate-y-[1px]
                  hover:bg-slate-50
                  active:translate-y-0
                  active:scale-[0.98]
                  w-full sm:w-auto
                  min-w-[220px]
                "
              >
                {m.finalCta.ctaContact}
              </Link>
            </div>

            {/* ✅ trust line */}
            <p className="mt-5 text-xs sm:text-sm text-slate-500">
              Appointment-based service • Confidential handling • Fast response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
