"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useMessages } from "../../components/shared/I18nProvider";

export default function Hero() {
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  return (
    <section className="relative overflow-hidden pt-[88px] sm:pt-[92px] lg:pt-[72px] bg-white">
      {/* ✅ Background only BELOW navbar */}
      <div className="absolute inset-x-0 top-[72px] bottom-0 z-0">
        <Image
          src="/images/bg-hero4.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* ✅ soften background (clean / premium) */}
        <div className="absolute inset-0 bg-white/15" />
      </div>

      <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-72px)] flex items-center pb-6 sm:pb-8">
          {/* ✅ HERO CARD */}
          <div
            className="
              relative w-full rounded-[32px]
              overflow-hidden
              border border-[#E6E8EE]
              bg-white/85
              backdrop-blur-md
              shadow-[0_30px_90px_rgba(15,23,42,0.10)]
            "
          >
            {/* ✅ inside glow */}
            <div className="pointer-events-none absolute inset-0">
              {/* top highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/40 to-white/75" />

              {/* soft corner glows */}
              <div className="absolute -top-44 -left-44 h-[520px] w-[520px] rounded-full bg-[#0B1220]/[0.04] blur-[180px]" />
              <div className="absolute -bottom-52 -right-44 h-[520px] w-[520px] rounded-full bg-[#002f71]/[0.07] blur-[200px]" />
            </div>

            {/* ✅ CONTENT */}
            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
                {/* LEFT */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } },
                  }}
                  className="text-center lg:text-left"
                >
                  {/* Location */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="mb-5"
                  >
                    {/* MOBILE */}
                    <div className="grid gap-2 text-center lg:hidden">
                      <div className="text-[12px] font-medium tracking-[0.18em] uppercase text-slate-500">
                        {m.hero.tagOffice}{" "}
                        <span className="mx-2 text-slate-400">•</span>
                      </div>

                      <div className="text-[13px] font-medium text-slate-600">
                        <span className="font-semibold text-slate-900">
                          {m.hero.tagLocation}
                        </span>
                        <span className="mx-2 text-slate-400">•</span>
                        <span className="text-slate-500">
                          {m.hero.tagSchedule}
                        </span>
                      </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:flex items-center justify-start gap-x-4 text-[12px] font-medium text-slate-600 whitespace-nowrap">
                      <span className="tracking-[0.18em] uppercase text-slate-500">
                        {m.hero.tagOffice}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="font-semibold text-slate-900">
                        {m.hero.tagLocation}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{m.hero.tagSchedule}</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="font-baskerville font-bold text-slate-900"
                  >
                    <span className="block text-4xl sm:text-5xl lg:text-[46px] leading-[1.06] tracking-[-0.02em]">
                      {m.hero.titleLine1}
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-[46px] leading-[1.06] tracking-[-0.02em]">
                      {m.hero.titleLine2}
                    </span>

                    <span className="block mt-4 text-base sm:text-lg font-medium text-slate-700 leading-[1.65] tracking-[0.01em] font-sans">
                      {m.hero.headline}
                    </span>
                  </motion.h1>

                  {/* Desc */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-5 text-sm sm:text-base text-slate-600 max-w-[520px] mx-auto lg:mx-0 leading-relaxed"
                  >
                    {m.hero.desc}
                  </motion.p>

                  {/* CTA */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                  >
                    <Link
                      href={`/${locale}/appointment`}
                      className="
                        inline-flex items-center justify-center
                        h-[52px] px-8
                        min-w-[220px] sm:min-w-[240px]
                        rounded-2xl
                        bg-[#0B1220] text-white
                        text-[14px] font-semibold
                        shadow-[0_16px_40px_rgba(15,23,42,0.22)]
                        transition-all duration-200
                        hover:-translate-y-[1px]
                        hover:bg-[#121c33]
                        active:translate-y-0
                        active:scale-[0.98]
                      "
                    >
                      {m.hero.ctaBook}
                    </Link>

                    <Link
                      href={`/${locale}/services`}
                      className="
                        inline-flex items-center justify-center
                        h-[52px] px-8
                        min-w-[220px] sm:min-w-[240px]
                        rounded-2xl
                        bg-white text-slate-900
                        border border-[#E6E8EE]
                        text-[14px] font-semibold
                        shadow-[0_10px_26px_rgba(15,23,42,0.06)]
                        transition-all duration-200
                        hover:-translate-y-[1px]
                        hover:bg-slate-50
                        active:translate-y-0
                        active:scale-[0.98]
                      "
                    >
                      {m.hero.ctaServices}
                    </Link>
                  </motion.div>

                  {/* Note */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="mt-6 text-sm text-slate-500"
                  >
                    {m.hero.note}
                  </motion.div>
                </motion.div>

                {/* MIDDLE IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] lg:w-[360px] lg:h-[420px]">
                    <Image
                      src="/images/bapak1.png"
                      alt={m.hero.imageAlt}
                      fill
                      priority
                      className="object-contain drop-shadow-[0_26px_65px_rgba(15,23,42,0.18)]"
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 280px"
                    />
                  </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  className="flex flex-col items-center lg:items-end gap-4"
                >
                  {/* Verified card */}
                  <div className="w-full max-w-[520px]">
                    <div
                      className="
                        rounded-3xl
                        border border-[#E6E8EE]
                        bg-white
                        shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                        px-6 py-6
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs tracking-[0.22em] uppercase text-slate-500">
                            {m.hero.verifiedTag}
                          </p>

                          <p className="mt-3 text-lg font-semibold text-slate-900">
                            {m.hero.verifiedTitle}
                          </p>

                          <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                            {m.hero.verifiedDesc}
                          </p>
                        </div>

                        <div
                          className="
                            shrink-0
                            rounded-full
                            border border-slate-200
                            bg-slate-900
                            px-4 py-2
                            text-xs font-semibold
                            text-white
                            shadow-sm
                          "
                        >
                          {m.hero.badgeTrusted}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#002f71]" />
                          {m.hero.point1}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#002f71]" />
                          {m.hero.point2}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature tiles */}
                  <div className="w-full max-w-[520px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-[#E6E8EE] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                      <p className="text-sm font-semibold text-slate-900">
                        {m.hero.cardFast}
                      </p>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {m.hero.cardFastDesc}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#E6E8EE] bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
                      <p className="text-sm font-semibold text-slate-900">
                        {m.hero.cardSecure}
                      </p>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {m.hero.cardSecureDesc}
                      </p>
                    </div>
                  </div>
                </motion.div>
                {/* END RIGHT */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
