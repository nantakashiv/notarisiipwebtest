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
    <section className="relative overflow-hidden pt-[72px]">
      {/* ✅ wider container */}
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ ONE HERO CARD (Background + Content inside) */}
        <div
          className="
            relative
            rounded-[32px]
            overflow-hidden
            border border-slate-200
            shadow-sm
          "
        >
          {/* ✅ Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/bg-hero7.jpg"
              alt="Hero background"
              fill
              priority
              className="object-cover"
            />

            {/* ✅ overlay for readability */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/55 to-black/25" />
          </div>

          {/* ✅ CONTENT INSIDE BACKGROUND */}
          <div className="relative z-10 pt-4 pb-12">
            <div className="pt-24 sm:pt-28 lg:pt-28 px-6 sm:px-10 lg:px-20">
              <div className="grid lg:grid-cols-2 gap-14 items-center">
                {/* LEFT TEXT */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } },
                  }}
                  className="text-center lg:text-left"
                >
                  {/* LOCATION LINE */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="
                      mb-6
                      flex flex-wrap items-center justify-center lg:justify-start
                      gap-x-3 gap-y-2
                      text-[13px] font-medium
                      text-white/85
                    "
                  >
                    <span className="tracking-[0.16em] uppercase text-white/65">
                      {m.hero.tagOffice}
                    </span>

                    <span className="h-[3px] w-[3px] rounded-full bg-white/50" />

                    <span className="font-semibold text-white">
                      {m.hero.tagLocation}
                    </span>

                    <span className="h-[3px] w-[3px] rounded-full bg-white/50" />

                    <span className="text-white/70">{m.hero.tagSchedule}</span>
                  </motion.div>

                  {/* HEADLINE */}
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="font-baskerville font-bold text-white"
                  >
                    <span className="block text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em]">
                      {m.hero.titleLine1}
                    </span>

                    <span className="block text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em]">
                      {m.hero.titleLine2}
                    </span>

                    <span className="block mt-5 text-lg sm:text-xl lg:text-2xl font-medium text-white/85 leading-[1.55] tracking-[0.01em] font-sans">
                      {m.hero.headline}
                    </span>
                  </motion.h1>

                  {/* DESCRIPTION */}
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-6 text-base sm:text-lg text-white/75 max-w-xl mx-auto lg:mx-0"
                  >
                    {m.hero.desc}
                  </motion.p>

                  {/* ✅ CTA (modern premium) */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    {/* ✅ Primary CTA */}
                    <Link
                      href={`/${locale}/appointment`}
                      className="
                        group relative
                        inline-flex items-center justify-center
                        h-[52px]
                        px-9
                        min-w-[240px] sm:min-w-[260px]
                        rounded-2xl
                        bg-white text-slate-900
                        text-[15px] font-semibold
                        shadow-[0_18px_45px_rgba(0,0,0,0.25)]
                        transition-all duration-200
                        hover:-translate-y-[1px]
                        active:translate-y-0
                        active:scale-[0.98]
                      "
                    >
                      <span
                        className="
                          pointer-events-none absolute inset-0 rounded-2xl
                          ring-1 ring-white/25
                          group-hover:ring-white/40
                          transition
                        "
                      />
                      {m.hero.ctaBook}
                    </Link>

                    {/* ✅ Secondary CTA */}
                    <Link
                      href={`/${locale}/services`}
                      className="
                        group relative
                        inline-flex items-center justify-center
                        h-[52px]
                        px-9
                        min-w-[240px] sm:min-w-[260px]
                        rounded-2xl
                        bg-transparent text-white
                        border border-white/25
                        text-[15px] font-semibold
                        transition-all duration-200
                        hover:bg-white/10
                        hover:border-white/40
                        hover:-translate-y-[1px]
                        active:translate-y-0
                        active:scale-[0.98]
                      "
                    >
                      {m.hero.ctaServices}
                    </Link>
                  </motion.div>

                  {/* NOTE LINE */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="mt-8 text-sm text-white/65 flex items-center justify-center lg:justify-start gap-2"
                  >
                    {m.hero.note}
                  </motion.div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                  className="flex flex-col items-center lg:items-end gap-4"
                >
                  {/* ✅ Modern bapak spotlight (no rectangle box) */}
                  <div className="relative w-full max-w-[560px] lg:max-w-[600px]">
                    <div className="relative h-[260px] sm:h-[320px] lg:h-[340px] flex items-center justify-center">
                      {/* ✅ halo glow */}
                      <div
                        className="
                          absolute
                          w-[260px] h-[260px]
                          sm:w-[300px] sm:h-[300px]
                          lg:w-[340px] lg:h-[340px]
                          rounded-[999px]
                          bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.22),transparent_60%)]
                          blur-[2px]
                        "
                      />

                      {/* ✅ B OPTION: DOUBLE ELLIPSE RINGS (CLASSY) */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Ring 1 */}
                        <div
                          className="
                            absolute
                            w-[340px] h-[340px]
                            rounded-full
                            border border-white/25
                            blur-[0.2px]
                            opacity-80
                          "
                        />

                        {/* Ring 2 (offset + softer) */}
                        <div
                          className="
                            absolute
                            w-[270px] h-[270px]
                            rounded-full
                            border border-white/15
                            opacity-70
                            -translate-x-6 translate-y-8
                          "
                        />

                        {/* Tiny glow dot */}
                        <div
                          className="
                            absolute
                            w-2 h-2 rounded-full
                            bg-white/50
                            -translate-x-20 -translate-y-24
                            blur-[0.5px]
                          "
                        />
                      </div>

                      {/* ✅ bapak image */}
                      <div className="relative w-[220px] h-[240px] sm:w-[260px] sm:h-[300px] lg:w-[300px] lg:h-[330px]">
                        <Image
                          src="/images/bapak.png"
                          alt={m.hero.imageAlt}
                          fill
                          priority
                          className="object-contain drop-shadow-[0_25px_55px_rgba(0,0,0,0.45)]"
                          sizes="(min-width: 1024px) 300px, (min-width: 640px) 260px, 220px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ✅ Modern feature tiles */}
                  <div className="w-full max-w-[560px] lg:max-w-[600px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      className="
                        rounded-2xl
                        border border-white/15
                        bg-white/10
                        backdrop-blur-md
                        shadow-sm
                        px-5 py-4
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {m.hero.cardFast}
                          </p>
                          <p className="mt-1 text-xs text-white/70 leading-relaxed">
                            Efficient processing with appointment-based service
                            flow.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border border-white/15
                        bg-white/10
                        backdrop-blur-md
                        shadow-sm
                        px-5 py-4
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {m.hero.cardSecure}
                          </p>
                          <p className="mt-1 text-xs text-white/70 leading-relaxed">
                            Confidential handling with verified documentation
                            standards.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* END RIGHT */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ small spacing after hero */}
      <div className="h-10" />
    </section>
  );
}
