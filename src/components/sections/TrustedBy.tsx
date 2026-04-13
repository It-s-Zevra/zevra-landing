"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const brands = [
  "Favorcito",
  "Seiff",
  "Guil Mobility Ventures",
  "Linkia",
  "Menti Academy",
];

export default function TrustedBy() {
  const { lang } = useLanguage();
  const t = translations[lang].trustedBy;

  return (
    <section id="portfolio" className="border-t border-near-black/5 py-16 md:py-20">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "120px" }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
      >
        {t.label}
      </motion.p>

      <div className="marquee-container relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-light-gray to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-light-gray to-transparent md:w-32" />

        <div className="marquee-track flex w-max animate-marquee">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="cursor-default shrink-0 px-8 text-lg font-semibold text-medium-gray/30 transition-colors duration-300 hover:text-near-black md:px-14 md:text-xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
