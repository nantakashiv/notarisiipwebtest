"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useMessages } from "../../components/shared/I18nProvider";

/* ================= MOTION VARIANTS ================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUpStrong: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleLift: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  return (
    <section id="about" className="pt-20 pb-10 lg:pt-28 lg:pb-12">
      <div className="space-y-20">
        {/* ================= INTRO / POSITIONING ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid lg:grid-cols-[3fr_2fr] gap-10 items-start"
        >
          {/* LEFT — TEXT */}
          <motion.div variants={fadeUpStrong} className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              {m.about.introTitle}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {m.about.introDesc}
            </p>
          </motion.div>

          {/* RIGHT — BADGES */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-4"
          >
            <motion.div
              variants={fadeUpSoft}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 mb-3" />
              <h4 className="font-semibold text-gray-900 text-sm">
                {m.about.badge1Title}
              </h4>
              <p className="mt-1 text-sm text-gray-600">{m.about.badge1Desc}</p>
            </motion.div>

            <motion.div
              variants={fadeUpSoft}
              className="rounded-xl border border-gray-200 bg-gray-50 p-5"
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 mb-3" />
              <h4 className="font-semibold text-gray-900 text-sm">
                {m.about.badge2Title}
              </h4>
              <p className="mt-1 text-sm text-gray-600">{m.about.badge2Desc}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ================= MAIN PROFILE ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT — TEXT STORY */}
          <motion.div
            variants={fadeUpStrong}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              {m.about.aboutTitle}
            </h3>

            <p className="text-gray-600 leading-relaxed">{m.about.aboutP1}</p>
            <p className="text-gray-600 leading-relaxed">{m.about.aboutP2}</p>
            <p className="text-gray-600 leading-relaxed">{m.about.aboutP3}</p>

            <Link
              href={`/${locale}/contact`}
              className="
                inline-block mt-4
                px-7 py-3
                rounded-lg
                bg-gray-900 text-white
                font-medium
                transition hover:bg-gray-800
              "
            >
              {m.about.ctaConsultation}
            </Link>
          </motion.div>

          {/* RIGHT — PROFILE CARD */}
          <motion.div
            variants={scaleLift}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-6 items-center">
              {/* PORTRAIT */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative h-[340px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-100"
              >
                <Image
                  src="/images/bapak.png"
                  alt={m.about.profileAlt}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* INFO */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {m.about.profileName}
                </h4>
                <p className="mt-1 text-gray-600">{m.about.profileRole}</p>
                <p className="mt-1 text-sm text-gray-500">{m.about.profileMeta}</p>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {m.about.profileDesc}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-xl font-semibold text-gray-900">
                      {m.about.statYears}
                    </p>
                    <p className="text-sm text-gray-600">{m.about.statYearsLabel}</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-xl font-semibold text-gray-900">
                      {m.about.statDocs}
                    </p>
                    <p className="text-sm text-gray-600">{m.about.statDocsLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= CREDIBILITY GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { title: m.about.cred1Title, desc: m.about.cred1Desc },
            { title: m.about.cred2Title, desc: m.about.cred2Desc },
            { title: m.about.cred3Title, desc: m.about.cred3Desc },
            { title: m.about.cred4Title, desc: m.about.cred4Desc },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUpSoft}
              className="p-6 rounded-xl border border-gray-200 bg-white"
            >
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ NEW: NOTARY REPRESENTATIVES (3 CARDS) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="pt-2"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
            {/* LEFT: TEAM CARDS */}
            <div>
              <motion.div variants={fadeUpSoft} className="max-w-3xl">
                <h3 className="text-lg font-semibold text-gray-900">
                  {m.about.teamTitle}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {m.about.teamDesc}
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  {
                    name: m.about.rep1Name,
                    role: m.about.rep1Role,
                    photo: "/images/team-1.jpg",
                    alt: m.about.repAlt1,
                  },
                  {
                    name: m.about.rep2Name,
                    role: m.about.rep2Role,
                    photo: "/images/team-2.jpg",
                    alt: m.about.repAlt2,
                  },
                  {
                    name: m.about.rep3Name,
                    role: m.about.rep3Role,
                    photo: "/images/team-3.jpg",
                    alt: m.about.repAlt3,
                  },
                ].map((person, i) => (
                  <motion.article
                    key={i}
                    variants={fadeUpSoft}
                    className="
                      group
                      rounded-2xl border border-gray-200 bg-white
                      overflow-hidden
                      shadow-sm
                      transition
                      hover:shadow-md
                    "
                  >
                    {/* Photo */}
                    <div className="relative h-[130px] bg-gray-100 overflow-hidden">
                      <Image
                        src={person.photo}
                        alt={person.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 100vw"
                      />
                    </div>

                    {/* Text */}
                    <div className="p-4">
                      <p className="text-[14px] font-semibold text-gray-900 leading-snug">
                        {person.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-600">{person.role}</p>

                      <div className="mt-3 h-[1px] w-full bg-gray-100" />
                      <p className="mt-3 text-[11px] text-gray-500">
                        {m.about.repBadge}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: INFO BOX */}
            <motion.aside
              variants={fadeUpSoft}
              className="
                rounded-2xl border border-gray-200 bg-gray-50
                p-6
                shadow-sm
              "
            >
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                {m.about.expectTag}
              </p>

              <h4 className="mt-3 text-base font-semibold text-gray-900">
                {m.about.expectTitle}
              </h4>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {m.about.expectDesc}
              </p>

              <div className="mt-5 space-y-3">
                {[
                  m.about.expectPoint1,
                  m.about.expectPoint2,
                  m.about.expectPoint3,
                  m.about.expectPoint4,
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900/70" />
                    <p className="text-sm text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4">
                <p className="text-sm font-semibold text-gray-900">
                  {m.about.helpTitle}
                </p>
                <p className="mt-1 text-sm text-gray-600">{m.about.helpDesc}</p>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
