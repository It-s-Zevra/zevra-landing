"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const CALENDLY = "/meeting";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center"
      >
        {/* Overline */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
        >
          {t.overline}
        </motion.span>

        {/* Main heading */}
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-near-black sm:text-6xl md:text-8xl">
          {t.heading1}
          <br />
          <span className="text-dark-gray">{t.heading2}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-lg text-base leading-relaxed text-dark-gray md:text-lg">
          {t.subtitle}
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-2 flex flex-col sm:flex-row items-center gap-3"
        >
          <a
            href={CALENDLY}
            className="group inline-flex items-center gap-2 rounded-full bg-near-black px-7 py-3.5 text-sm font-medium text-light-gray transition-all duration-300 hover:bg-charcoal hover:shadow-lg hover:shadow-near-black/20"
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
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-near-black/15 px-7 py-3.5 text-sm font-medium text-near-black transition-all duration-300 hover:border-near-black/30 hover:bg-near-black/4"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
