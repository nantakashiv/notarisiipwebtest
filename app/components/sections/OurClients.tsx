"use client";

import Image from "next/image";
import { clients } from "../../data/clients";
import { useMessages } from "../shared/I18nProvider";
import { motion } from "framer-motion";

export default function OurClients() {
  const m = useMessages();

  return (
    <section className="py-5 lg:py-16 pb-24 lg:pb-32">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl font-semibold text-gray-900">
          {m.ourClients.title}
        </h2>
        <p className="text-gray-500 mt-3 text-sm">{m.ourClients.desc}</p>
      </motion.div>

      {/* LOGO GRID */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-10 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`
                flex items-center justify-center
                lg:${index % 2 === 0 ? "translate-y-6" : "-translate-y-6"}
              `}
            >
              <div className="transition-transform duration-300 hover:scale-[1.05]">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
