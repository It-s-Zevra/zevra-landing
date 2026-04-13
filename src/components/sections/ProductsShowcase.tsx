"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  es: {
    overline: "Lo que hacemos",
    heading: "Tres formas de hacer crecer tu negocio.",
    subheading:
      "Cada servicio está diseñado para resolver un problema concreto. Elige por dónde empezar — o conversemos y lo decidimos juntos.",
    products: [
      {
        href: "/landing",
        tag: "01 · Landings",
        title: "Landing pages que venden.",
        description:
          "Páginas rápidas, bonitas y pensadas para convertir visitas en clientes desde el día 1.",
        cta: "Ver producto",
      },
      {
        href: "/automations",
        tag: "02 · Automatizaciones",
        title: "Menos tareas, más resultados.",
        description:
          "Conectamos tus herramientas y automatizamos lo repetitivo. Tu equipo deja de perder horas.",
        cta: "Ver producto",
      },
      {
        href: "/agents",
        tag: "03 · Agentes IA",
        title: "Un vendedor de IA, 24/7.",
        description:
          "Entrena un agente que conoce tu negocio, responde en segundos y agenda reuniones mientras duermes.",
        cta: "Ver producto",
      },
    ],
  },
  en: {
    overline: "What we do",
    heading: "Three ways to grow your business.",
    subheading:
      "Each service solves a specific problem. Pick where to start — or let's talk and decide together.",
    products: [
      {
        href: "/landing",
        tag: "01 · Landings",
        title: "Landing pages that sell.",
        description:
          "Fast, beautiful pages built to convert visitors into customers from day 1.",
        cta: "See product",
      },
      {
        href: "/automations",
        tag: "02 · Automations",
        title: "Less busywork, more output.",
        description:
          "We connect your tools and automate the repetitive. Your team stops losing hours.",
        cta: "See product",
      },
      {
        href: "/agents",
        tag: "03 · AI Agents",
        title: "An AI salesperson, 24/7.",
        description:
          "Train an agent that knows your business, replies in seconds and books meetings while you sleep.",
        cta: "See product",
      },
    ],
  },
} as const;

export default function ProductsShowcase() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
        >
          {t.overline}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
        >
          {t.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
        >
          {t.subheading}
        </motion.p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {t.products.map((product, i) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * i }}
          >
            <Link
              href={product.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-near-black/6 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-near-black/15 hover:bg-white hover:shadow-xl hover:shadow-near-black/5"
            >
              {/* Decorative visual */}
              <ProductVisual index={i} />

              <span className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-medium-gray">
                {product.tag}
              </span>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-near-black md:text-3xl">
                {product.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-dark-gray">
                {product.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-near-black">
                {product.cta}
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
              </div>

              {/* Corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-near-black/[0.03] blur-3xl transition-all duration-700 group-hover:bg-near-black/[0.08]"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Product visual (mini preview per card) ---------- */
function ProductVisual({ index }: { index: number }) {
  return (
    <div className="relative h-36 w-full overflow-hidden rounded-2xl border border-near-black/8 bg-near-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F0F1F2 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(152,162,166,0.2), transparent 60%)",
        }}
      />

      {index === 0 && <LandingMini />}
      {index === 1 && <AutomationMini />}
      {index === 2 && <AgentMini />}
    </div>
  );
}

function LandingMini() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-4">
      <div className="h-1 w-10 rounded-full bg-light-gray/40" />
      <div className="h-2 w-[70%] rounded-md bg-light-gray/80" />
      <div className="h-2 w-[50%] rounded-md bg-light-gray/60" />
      <div className="mt-1 flex gap-1.5">
        <div className="h-3 w-14 rounded-full bg-light-gray" />
        <div className="h-3 w-14 rounded-full border border-light-gray/30" />
      </div>
    </div>
  );
}

function AutomationMini() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 200 80" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <path
          d="M 30 40 C 60 40, 80 40, 100 40"
          stroke="#565959"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
        <path
          d="M 100 40 C 130 40, 140 20, 170 20"
          stroke="#565959"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
        <path
          d="M 100 40 C 130 40, 140 60, 170 60"
          stroke="#565959"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 3"
        />
        {/* Nodes */}
        <rect x="16" y="30" width="20" height="20" rx="4" fill="#F0F1F2" fillOpacity="0.1" stroke="#F0F1F2" strokeOpacity="0.3" />
        <circle cx="26" cy="40" r="3" fill="#F0F1F2" />
        <rect x="86" y="30" width="24" height="20" rx="4" fill="#F0F1F2" fillOpacity="0.15" stroke="#F0F1F2" strokeOpacity="0.4" />
        <circle cx="98" cy="40" r="3" fill="#F0F1F2" />
        <rect x="160" y="10" width="20" height="20" rx="4" fill="#F0F1F2" fillOpacity="0.1" stroke="#F0F1F2" strokeOpacity="0.3" />
        <circle cx="170" cy="20" r="3" fill="#F0F1F2" />
        <rect x="160" y="50" width="20" height="20" rx="4" fill="#F0F1F2" fillOpacity="0.1" stroke="#F0F1F2" strokeOpacity="0.3" />
        <circle cx="170" cy="60" r="3" fill="#F0F1F2" />
        {/* Animated beam */}
        <motion.circle
          r="2"
          fill="#F0F1F2"
          animate={{ cx: [30, 100, 170], cy: [40, 40, 20], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function AgentMini() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-1.5 p-4">
      <div className="flex justify-end">
        <div className="h-2.5 w-20 rounded-full rounded-br-sm bg-light-gray" />
      </div>
      <div className="flex justify-start">
        <div className="h-2.5 w-24 rounded-full rounded-bl-sm bg-light-gray/15" />
      </div>
      <div className="flex justify-end">
        <div className="h-2.5 w-16 rounded-full rounded-br-sm bg-light-gray" />
      </div>
      <div className="flex justify-start">
        <div className="flex gap-0.5 rounded-full rounded-bl-sm bg-light-gray/15 px-2 py-1">
          <motion.span
            className="h-1 w-1 rounded-full bg-light-gray/70"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
          />
          <motion.span
            className="h-1 w-1 rounded-full bg-light-gray/70"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
          />
          <motion.span
            className="h-1 w-1 rounded-full bg-light-gray/70"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}

