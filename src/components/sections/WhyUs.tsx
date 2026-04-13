"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const CALENDLY = "/meeting";

const icons = [
  <svg key="lightning" className="h-10 w-10 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="scale" className="h-10 w-10 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>,
  <svg key="refresh" className="h-10 w-10 text-medium-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>,
];

export default function WhyUs() {
  const { lang } = useLanguage();
  const t = translations[lang].whyUs;

  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
        >
          {t.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "120px" }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
        >
          {t.subheading}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid gap-5 md:grid-cols-3">
        {t.features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="group rounded-2xl border border-near-black/6 bg-white/50 p-8 transition-all duration-300 hover:border-near-black/10 hover:shadow-lg hover:shadow-near-black/3 md:p-10"
          >
            <div className="mb-8 flex h-20 items-center justify-center transition-colors duration-300 group-hover:text-near-black [&>svg]:group-hover:text-near-black">
              {icons[i]}
            </div>
            <h3 className="mb-3 text-center text-lg font-semibold text-near-black">
              {feature.title}
            </h3>
            <p className="text-center text-sm leading-relaxed text-dark-gray">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "120px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 flex justify-center"
      >
        <a
          href={CALENDLY}
          className="group inline-flex items-center gap-2 rounded-full border border-near-black/15 px-7 py-3.5 text-sm font-medium text-near-black transition-all duration-300 hover:border-near-black/30 hover:bg-near-black/4"
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
    </section>
  );
}
