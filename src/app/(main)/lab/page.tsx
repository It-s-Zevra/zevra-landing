"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY = "/meeting";

const copy = {
  es: {
    hero: {
      label: "· ZEVRA BUSINESS LAB ·",
      title1: "6 formas de",
      title2: "profesionalizar",
      title3: "tu negocio.",
      subtitle:
        "Un laboratorio donde diagnosticamos, diseñamos y construimos los cimientos de tu empresa. Estrategia, estructura y tecnología en un solo lugar — sin consultorías eternas, con resultados medibles.",
      ctaPrimary: "Agenda una sesión",
      ctaSecondary: "Ver los 6 servicios",
    },
    modulesLabel: "Nuestros módulos",
    servicesOverline: "Servicios",
    servicesHeading: "Elige dónde te duele más hoy.",
    servicesSub:
      "Cada módulo resuelve un problema concreto. Tómalo solo, combínalos o déjanos ayudarte a priorizarlos.",
    labels: {
      module: "MÓDULO",
      whatIs: "Qué es",
      includes: "Qué incluye",
      result: "Resultado",
      cta: "Solicitar este módulo",
    },
    services: [
      {
        number: "01",
        tag: "Customer Insight Engine",
        title: "Cliente & Mercado",
        whatIs:
          "Entendemos con precisión quién es tu cliente, qué problema realmente tiene y qué está dispuesto a pagar.",
        includes: [
          "Entrevistas y análisis de clientes reales",
          "Validación de hipótesis de problema/solución",
          "Segmentación clara de usuarios",
          "Identificación de oportunidades de mercado",
        ],
        result:
          "Dejas de suponer y sabes exactamente a quién vender y por qué te comprarían.",
        trigger: "\"Quiero claridad sobre mi cliente\"",
      },
      {
        number: "02",
        tag: "Go-To-Market",
        title: "Modelo de Negocio",
        whatIs:
          "Diseñamos cómo tu negocio gana dinero y cómo va a conseguir clientes de forma consistente.",
        includes: [
          "Propuesta de valor clara y diferenciada",
          "Diseño del modelo de ingresos",
          "Estructura del modelo de negocio",
          "Estrategia go-to-market + canales de adquisición",
        ],
        result:
          "Pasas de vender «como puedes» a vender con estrategia, escala y foco.",
        trigger: "\"Quiero un modelo de negocio que funcione\"",
      },
      {
        number: "03",
        tag: "Org Design",
        title: "Diseño Organizacional",
        whatIs:
          "Estructuramos tu negocio para que funcione sin depender completamente de ti.",
        includes: [
          "Definición de roles y responsabilidades",
          "Diseño de estructura organizacional",
          "Matriz RACI (quién hace qué y decide)",
          "Identificación de cuellos de botella operativos",
        ],
        result:
          "Un negocio ordenado, con responsabilidades claras. Menos caos, más ejecución.",
        trigger: "\"Quiero que mi negocio deje de depender de mí\"",
      },
      {
        number: "04",
        tag: "Valuation",
        title: "Valor de tu empresa",
        whatIs:
          "Estimamos el valor de tu empresa y entendemos qué variables lo hacen subir o bajar.",
        includes: [
          "Análisis de ingresos, crecimiento y estructura",
          "Evaluación de drivers de valor (múltiplos, riesgo)",
          "Rango de valorización de la compañía",
          "Identificación de palancas para aumentar el valor",
        ],
        result:
          "Sabes cuánto vale tu empresa hoy y qué mejorar para que valga más.",
        trigger: "\"Quiero saber cuánto vale mi empresa\"",
      },
      {
        number: "05",
        tag: "Due Diligence",
        title: "Venta o Inversión",
        whatIs:
          "Preparamos y analizamos tu empresa para procesos de venta, inversión o entrada de socios.",
        includes: [
          "Revisión estructurada (financiera, comercial, operativa)",
          "Identificación de riesgos críticos",
          "Orden y preparación de información clave",
          "Apoyo en procesos de evaluación por terceros",
        ],
        result:
          "Estás listo para vender, levantar capital o negociar con confianza.",
        trigger: "\"Quiero preparar mi empresa para inversión o venta\"",
      },
      {
        number: "06",
        tag: "CTO as a Service",
        title: "Dirección Tecnológica",
        whatIs:
          "Actuamos como tu líder tecnológico para definir qué construir, cómo hacerlo y en qué orden.",
        includes: [
          "Definición de roadmap tecnológico",
          "Selección de herramientas y arquitectura",
          "Priorización de iniciativas",
          "Evaluación de proveedores y desarrollos",
        ],
        result:
          "Tomas las decisiones tecnológicas correctas. Evitas errores caros y avanzas más rápido.",
        trigger: "\"Necesito dirección tecnológica para crecer\"",
      },
    ],
    finalCta: {
      overline: "¿No sabes cuál elegir?",
      heading1: "Agenda una llamada",
      heading2: "y lo vemos juntos.",
      subtitle:
        "30 minutos. Te hacemos un diagnóstico en vivo y salimos con los módulos priorizados para tu caso. Sin costo, sin compromiso.",
      cta: "Agendar diagnóstico gratis",
    },
  },
  en: {
    hero: {
      label: "· ZEVRA BUSINESS LAB ·",
      title1: "6 ways to",
      title2: "professionalize",
      title3: "your business.",
      subtitle:
        "A lab where we diagnose, design and build the foundations of your company. Strategy, structure and technology in one place — no endless consulting, measurable results.",
      ctaPrimary: "Book a session",
      ctaSecondary: "See all 6 services",
    },
    modulesLabel: "Our modules",
    servicesOverline: "Services",
    servicesHeading: "Pick where it hurts most.",
    servicesSub:
      "Each module solves a specific problem. Take one, combine them, or let us help you prioritize.",
    labels: {
      module: "MODULE",
      whatIs: "What it is",
      includes: "What's included",
      result: "Result",
      cta: "Request this module",
    },
    services: [
      {
        number: "01",
        tag: "Customer Insight Engine",
        title: "Customer & Market",
        whatIs:
          "We figure out exactly who your customer is, what problem they really have and what they're willing to pay for.",
        includes: [
          "Real customer interviews and analysis",
          "Problem/solution hypothesis validation",
          "Clear user segmentation",
          "Real market opportunity identification",
        ],
        result:
          "You stop guessing and know exactly who to sell to and why they'd buy.",
        trigger: "\"I want clarity on my customer\"",
      },
      {
        number: "02",
        tag: "Go-To-Market",
        title: "Business Model",
        whatIs:
          "We design how your business makes money and acquires customers consistently.",
        includes: [
          "Clear, differentiated value proposition",
          "Revenue model design",
          "Business model structure",
          "Go-to-market strategy + acquisition channels",
        ],
        result:
          "You move from \"selling however you can\" to selling with strategy, scale and focus.",
        trigger: "\"I want a business model that works\"",
      },
      {
        number: "03",
        tag: "Org Design",
        title: "Organizational Design",
        whatIs:
          "We structure your business so it works without depending entirely on you.",
        includes: [
          "Role and responsibility definition",
          "Organizational structure design",
          "RACI matrix (who does what, who decides)",
          "Operational bottleneck identification",
        ],
        result:
          "A structured business with clear responsibilities. Less chaos, more execution.",
        trigger: "\"I want my business to stop depending on me\"",
      },
      {
        number: "04",
        tag: "Valuation",
        title: "Company Value",
        whatIs:
          "We estimate your company's value and the variables that move it up or down.",
        includes: [
          "Revenue, growth and structure analysis",
          "Value drivers evaluation (multiples, risk)",
          "Company valuation range",
          "Levers to increase value",
        ],
        result:
          "You know what your company is worth today and what to improve to make it worth more.",
        trigger: "\"I want to know my company's value\"",
      },
      {
        number: "05",
        tag: "Due Diligence",
        title: "Sale or Investment",
        whatIs:
          "We prepare and analyze your company for sale, investment or new partners.",
        includes: [
          "Structured review (financial, commercial, operational)",
          "Critical risk identification",
          "Key information preparation",
          "Support through third-party evaluation",
        ],
        result:
          "You're ready to sell, raise capital or negotiate with confidence.",
        trigger: "\"I want to prepare for investment or sale\"",
      },
      {
        number: "06",
        tag: "CTO as a Service",
        title: "Tech Leadership",
        whatIs:
          "We act as your tech leader to define what to build, how to build it and in what order.",
        includes: [
          "Technology roadmap definition",
          "Tool and architecture selection",
          "Initiative prioritization",
          "Vendor and development evaluation",
        ],
        result:
          "You make the right tech decisions. You avoid costly mistakes and move faster.",
        trigger: "\"I need tech leadership to grow\"",
      },
    ],
    finalCta: {
      overline: "Don't know which one?",
      heading1: "Book a call",
      heading2: "and we'll figure it out.",
      subtitle:
        "30 minutes. Live diagnosis, prioritized modules for your case. Free, no commitment.",
      cta: "Book free diagnosis",
    },
  },
} as const;

export default function LabPage() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <main className="overflow-hidden">
      {/* ====== HERO ====== */}
      <section className="relative w-full overflow-hidden bg-near-black pt-32 pb-24 md:pt-44 md:pb-32">
        {/* Blueprint grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#F0F1F2 1px, transparent 1px), linear-gradient(90deg, #F0F1F2 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(152,162,166,0.12), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.hero.label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-5xl font-bold leading-[0.95] tracking-tight text-light-gray sm:text-6xl md:text-7xl lg:text-[96px]"
          >
            {t.hero.title1}
            <br />
            <span className="italic text-medium-gray">{t.hero.title2}</span>
            <br />
            {t.hero.title3}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-medium-gray md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={CALENDLY}
              className="group inline-flex items-center gap-2 rounded-full bg-light-gray px-7 py-3.5 text-sm font-semibold text-near-black transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-light-gray/10"
            >
              {t.hero.ctaPrimary}
              <Arrow />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-light-gray/20 bg-light-gray/5 px-7 py-3.5 text-sm font-medium text-light-gray backdrop-blur-sm transition-all duration-300 hover:border-light-gray/40 hover:bg-light-gray/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* ==== MODULE PREVIEW BAND ==== */}
        <div className="relative z-10 mx-auto mt-20 max-w-6xl px-6 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-medium-gray"
          >
            <span className="flex items-center gap-2">
              <span className="h-px w-6 bg-medium-gray/40" />
              {t.modulesLabel} / 6
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Scroll ↓
            </span>
          </motion.div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {t.services.map((s, i) => (
              <motion.a
                key={s.number}
                href={`#service-${s.number}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.06 }}
                className="group relative overflow-hidden rounded-xl border border-light-gray/10 bg-light-gray/[0.03] p-4 transition-all duration-300 hover:border-light-gray/25 hover:bg-light-gray/[0.06]"
              >
                <div className="font-mono text-[10px] text-medium-gray">
                  {s.number}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <ModuleIcon index={i} small />
                </div>
                <p className="mt-3 text-[12px] font-semibold leading-tight text-light-gray">
                  {s.title}
                </p>
                <span className="mt-1 block truncate font-mono text-[9px] uppercase tracking-wider text-medium-gray/70">
                  {s.tag}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section
        id="services"
        className="relative w-full bg-light-gray py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center md:mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-medium-gray"
            >
              · {t.servicesOverline} / 6
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-near-black md:text-5xl lg:text-6xl"
            >
              {t.servicesHeading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.servicesSub}
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, i) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={i}
                labels={t.labels}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="relative w-full overflow-hidden bg-near-black py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#F0F1F2 1px, transparent 1px), linear-gradient(90deg, #F0F1F2 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0D0D0D_85%)]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-medium-gray"
          >
            · {t.finalCta.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-light-gray sm:text-5xl md:text-7xl"
          >
            {t.finalCta.heading1}
            <br />
            <span className="italic text-medium-gray">
              {t.finalCta.heading2}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.finalCta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={CALENDLY}
              className="group inline-flex items-center gap-2.5 rounded-full bg-light-gray px-8 py-4 text-sm font-semibold text-near-black transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-light-gray/10"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {t.finalCta.cta}
              <Arrow />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Service card ---------- */
type Service = {
  number: string;
  tag: string;
  title: string;
  whatIs: string;
  includes: readonly string[];
  result: string;
  trigger: string;
};

type Labels = {
  module: string;
  whatIs: string;
  includes: string;
  result: string;
  cta: string;
};

function ServiceCard({
  service,
  index,
  labels,
}: {
  service: Service;
  index: number;
  labels: Labels;
}) {
  return (
    <motion.article
      id={`service-${service.number}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-near-black/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-near-black/15 hover:shadow-xl hover:shadow-near-black/5"
    >
      {/* Top row: number + icon */}
      <div className="mb-6 flex items-start justify-between">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-medium-gray">
            {labels.module}
          </span>
          <span className="mt-1 font-mono text-4xl font-bold leading-none text-near-black">
            {service.number}
          </span>
        </div>
        <ModuleIcon index={index} />
      </div>

      {/* Tag */}
      <span className="inline-block self-start rounded-full border border-near-black/10 bg-near-black/[0.03] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-dark-gray">
        {service.tag}
      </span>

      {/* Title */}
      <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-near-black md:text-[28px]">
        {service.title}
      </h3>

      {/* What is */}
      <p className="mt-3 text-sm leading-relaxed text-dark-gray">
        {service.whatIs}
      </p>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-near-black/10" />
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-medium-gray">
          {labels.includes}
        </span>
        <div className="h-px flex-1 bg-near-black/10" />
      </div>

      {/* Includes */}
      <ul className="space-y-2.5">
        {service.includes.map((item, i) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-dark-gray"
          >
            <span className="mt-0.5 font-mono text-[9px] font-semibold text-medium-gray">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Result callout */}
      <div className="mt-6 rounded-2xl border-l-2 border-emerald-500 bg-emerald-500/[0.04] p-4">
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
          → {labels.result}
        </p>
        <p className="mt-2 text-[13px] font-medium leading-relaxed text-near-black">
          {service.result}
        </p>
      </div>

      {/* Trigger quote + CTA */}
      <div className="mt-auto pt-6">
        <p className="mb-3 font-mono text-[11px] italic leading-relaxed text-medium-gray">
          {service.trigger}
        </p>
        <a
          href={CALENDLY}
          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-near-black px-5 py-3 text-[12px] font-semibold text-light-gray transition-all duration-300 hover:bg-charcoal hover:shadow-lg hover:shadow-near-black/20"
        >
          {labels.cta}
          <svg
            className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      {/* Corner decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-near-black/[0.02] blur-3xl transition-all duration-700 group-hover:bg-near-black/[0.05]"
      />
    </motion.article>
  );
}

/* ---------- Helpers ---------- */
function Arrow() {
  return (
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
  );
}

/* ---------- Module icons (6 unique) ---------- */
function ModuleIcon({
  index,
  small = false,
}: {
  index: number;
  small?: boolean;
}) {
  const size = small ? "h-4 w-4" : "h-6 w-6";
  const box = small
    ? "h-8 w-8 rounded-lg"
    : "h-14 w-14 rounded-2xl";
  const icons = [
    // 01 Customer — target
    <svg key="0" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>,
    // 02 Go-to-market — up arrows
    <svg key="1" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 19l4-4m0 0l4 4m-4-4v-8m4-4l4 4m0 0l-4 4m4-4H3" />
    </svg>,
    // 03 Org design — org chart
    <svg key="2" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="6" height="5" rx="1" />
      <rect x="15" y="16" width="6" height="5" rx="1" />
      <path d="M12 8v4M6 16v-2h12v2" strokeLinecap="round" />
    </svg>,
    // 04 Valuation — trending coin
    <svg key="3" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.7 0-3 .9-3 2s1.3 2 3 2 3 .9 3 2-1.3 2-3 2m0-8V6m0 10v2" />
    </svg>,
    // 05 Due diligence — shield check
    <svg key="4" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // 06 CTO — code brackets
    <svg key="5" className={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </svg>,
  ];
  return (
    <div
      className={`${box} flex shrink-0 items-center justify-center border border-near-black/10 bg-near-black/[0.03] text-near-black group-hover:border-near-black/20 [.bg-near-black_&]:border-light-gray/10 [.bg-near-black_&]:bg-light-gray/[0.03] [.bg-near-black_&]:text-light-gray`}
    >
      {icons[index]}
    </div>
  );
}
