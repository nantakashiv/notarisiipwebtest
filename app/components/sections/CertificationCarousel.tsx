"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useMessages } from "../shared/I18nProvider"; // ✅ adjust path if needed

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CertificationsC() {
  const m = useMessages();
  const certifications = m.certifications.items;

  return (
    <section className="pt-8 pb-24 lg:pt-12 lg:pb-28 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight">
            {m.certifications.title}
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            {m.certifications.desc}
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              variants={item}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="
                group relative
                rounded-2xl
                border border-gray-200
                bg-white
                px-6 py-8
                overflow-hidden
              "
            >
              {/* LEFT ACCENT */}
              <div className="absolute left-0 top-0 h-full w-[3px] bg-gray-900/70" />

              {/* CONTENT */}
              <div className="relative flex flex-col h-full">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {m.certifications.label}
                </p>

                <h4 className="mt-4 text-[15px] font-semibold text-gray-900 leading-snug">
                  {cert.title}
                </h4>

                <p className="mt-2 text-sm text-gray-600">{cert.authority}</p>

                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <span>{m.certifications.established}</span>
                  <span className="font-medium text-gray-800">{cert.year}</span>
                </div>

                {/* CERT IMAGE PREVIEW */}
                <div
                  className="
                    mt-6
                    relative
                    w-full
                    aspect-[4/3] sm:aspect-[3/2]
                    rounded-lg
                    border border-gray-200
                    bg-gray-50
                    overflow-hidden
                  "
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="
                      object-contain
                      transition-transform duration-500
                      group-hover:scale-[1.03]
                    "
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gray-900 transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
