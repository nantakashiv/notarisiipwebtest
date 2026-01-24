"use client";

import { services } from "../../data/services";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useMessages } from "../shared/I18nProvider";
import { motion, Variants } from "framer-motion";

/* ================= MOTION VARIANTS ================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesPreview() {
  const { locale } = useParams() as { locale: string };
  const m = useMessages();

  const previewServices = services;

  return (
    <section id="services" className="py-5 lg:py-32">
      {/* HEADER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="text-center max-w-3xl mx-auto mb-8"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold">
          {m.servicesPreview.title}
        </motion.h2>

        <motion.p variants={fadeUp} className="text-gray-600 mt-2">
          {m.servicesPreview.desc}
        </motion.p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {previewServices.map((s) => (
          <motion.article
            key={s.id}
            variants={card}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.99 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
          >
            {/* ✅ ICON BOX (same size, now PNG) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-14 h-14 bg-gray-100 rounded-lg mb-4 flex items-center justify-center"
            >
              <Image
                src={`/icons/services/${s.id}.png`}
                alt={m.servicesPreview.items[s.id].title}
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h3 className="font-semibold mb-2">
              {m.servicesPreview.items[s.id].title}
            </h3>

            <p className="text-gray-600 text-sm">
              {m.servicesPreview.items[s.id].description}
            </p>
          </motion.article>
        ))}
      </motion.div>

      {/* FOOTER LINK */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="text-center mt-10"
      >
        <Link
          href={`/${locale}/services`}
          className="inline-block text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
        >
          {m.servicesPreview.more}
        </Link>
      </motion.div>
    </section>
  );
}
