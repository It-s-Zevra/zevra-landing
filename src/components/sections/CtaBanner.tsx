"use client";

import { motion } from "motion/react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const CALENDLY = "/meeting";

export default function CtaBanner() {
  const { lang } = useLanguage();
  const t = translations[lang].ctaBanner;

  return (
    <section id="careers" className="relative w-full overflow-hidden bg-near-black py-28 md:py-36">
      {/* Dotted animated background */}
      <DottedGlowBackground
        gap={16}
        radius={1.4}
        dotColor="rgba(86, 89, 89, 0.5)"
        glowColor="rgba(152, 162, 166, 0.5)"
        opacity={0.8}
        speedMin={0.2}
        speedMax={1.2}
      />

      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0D0D0D_80%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
        >
          {t.overline}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-light-gray sm:text-5xl md:text-7xl"
        >
          {t.heading1}
          <br />
          <span className="text-medium-gray">{t.heading2}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={CALENDLY}
            className="group inline-flex items-center gap-2.5 rounded-full border border-light-gray/20 bg-light-gray px-7 py-3.5 text-sm font-medium text-near-black transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-light-gray/10"
          >
            {t.cta}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
