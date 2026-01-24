"use client";

import { motion } from "framer-motion";
import { useMessages } from "../shared/I18nProvider"; // ✅ adjust path if needed

export default function Footer() {
  const year = new Date().getFullYear();
  const m = useMessages();

  return (
    <footer className="mt-12 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
            LOGO
          </div>
          <p className="text-sm mt-3">{m.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{m.footer.servicesTitle}</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>{m.footer.services.legalization}</li>
            <li>{m.footer.services.contract}</li>
            <li>{m.footer.services.property}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{m.footer.resourcesTitle}</h4>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>{m.footer.resources.blog}</li>
            <li>{m.footer.resources.faq}</li>
            <li>{m.footer.resources.privacy}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{m.footer.contactTitle}</h4>
          <p className="text-sm text-gray-400">notaryoffice@example.com</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-800 rounded-full" />
            <div className="w-8 h-8 bg-gray-800 rounded-full" />
            <div className="w-8 h-8 bg-gray-800 rounded-full" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/60 py-4 text-center text-sm text-gray-500">
        © {year} {m.footer.copyright}
      </div>
    </footer>
  );
}
