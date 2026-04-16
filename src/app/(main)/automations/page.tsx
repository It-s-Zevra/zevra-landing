"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY = "/meeting";

const copy = {
  es: {
    hero: {
      overline: "Automatizaciones que trabajan por ti",
      title1: "Menos tareas.",
      title2: "Más resultados.",
      subtitle:
        "Conectamos tus herramientas y automatizamos lo repetitivo. Tu equipo deja de perder horas y empieza a enfocarse en lo que importa.",
      ctaPrimary: "Quiero automatizar",
      ctaSecondary: "Ver planes",
    },
    advantages: {
      overline: "Ventajas",
      heading: "Tu operación funcionando sola, 24/7.",
      subheading:
        "No vendemos tecnología. Vendemos tiempo, precisión y escalabilidad. Esto es lo que ganas cuando automatizamos tu negocio.",
      items: [
        {
          title: "Recuperas horas cada semana",
          description:
            "Lo que tu equipo hace manualmente en 3 horas, un flujo automatizado lo hace en segundos. Literalmente.",
        },
        {
          title: "Cero errores humanos",
          description:
            "Se acabaron los correos mal copiados, las planillas desactualizadas y los datos perdidos entre sistemas.",
        },
        {
          title: "Tus sistemas se hablan",
          description:
            "CRM, ERP, facturación, Sheets, WhatsApp. Todo conectado. La información fluye sin intervención manual.",
        },
        {
          title: "Escalas sin contratar más",
          description:
            "Crece 2x, 3x, 5x sin sumar headcount. Los procesos automáticos no piden aumento ni vacaciones.",
        },
        {
          title: "Alertas inteligentes",
          description:
            "Cuando algo falla, tu equipo se entera antes que el cliente. Escalamiento automático ante problemas críticos.",
        },
        {
          title: "Datos en tiempo real",
          description:
            "Dashboards operativos para ver qué pasa, qué funciona y dónde actuar. Decisiones con información real.",
        },
      ],
    },
    features: {
      overline: "Qué automatizamos",
      heading: "Desde lo simple hasta lo crítico.",
      subheading:
        "Mapeamos tus procesos, identificamos dónde se pierde tiempo y construimos flujos a tu medida.",
      items: [
        {
          title: "Onboarding de clientes",
          description:
            "Altas, emails de bienvenida, creación de accesos, asignación de owner. Todo disparado por un solo formulario.",
        },
        {
          title: "Cotizaciones y facturación",
          description:
            "Genera, envía y hace seguimiento de cotizaciones y facturas conectadas a tu CRM y sistema contable.",
        },
        {
          title: "Reportes automáticos",
          description:
            "Reportería semanal por email con los KPIs que importan. Sin que nadie arme planillas a mano.",
        },
        {
          title: "Seguimiento por WhatsApp",
          description:
            "Mensajes automáticos a leads, clientes y equipo interno. Sin copiar-pegar, sin tareas olvidadas.",
        },
      ],
    },
    integrations: {
      overline: "Integraciones",
      heading: "Conectamos con más de 500 herramientas.",
      subheading:
        "Usamos nodos prediseñados para apps comunes y conexiones API personalizadas para todo lo demás.",
    },
    pricing: {
      overline: "Planes",
      heading: "Elige el nivel de automatización que necesitas.",
      subheading:
        "Desde liberar horas del equipo hasta montar operaciones autónomas. Todos los planes incluyen diagnóstico, implementación y capacitación.",
      plans: [
        {
          tag: "Básico",
          tagline: "Libera tu equipo",
          audience:
            "Para empresas donde el equipo pierde horas en tareas repetitivas como copiar datos, enviar correos manuales o actualizar planillas.",
          features: [
            "Diagnóstico de procesos que más tiempo consumen",
            "1 flujo automatizado (onboarding, cotizaciones, etc.)",
            "Integración con herramientas que ya usas (email, CRM, Sheets)",
            "Capacitación básica para tu equipo",
            "Soporte los primeros 30 días",
          ],
          result:
            "Eliminas tareas manuales repetitivas y reduces errores desde la primera semana.",
          cta: "Quiero empezar",
          highlight: false,
        },
        {
          tag: "Pro",
          tagline: "Sistemas conectados",
          audience:
            "Para empresas que usan varias herramientas (CRM, facturación, ERP) pero nada está conectado y la información se pierde entre sistemas.",
          features: [
            "Todo lo del plan Básico",
            "Hasta 3 flujos automatizados conectados entre sí",
            "Integración entre plataformas (CRM, ERP, facturación)",
            "Dashboard operativo en tiempo real",
            "Reportería automática semanal por email",
          ],
          result:
            "Los sistemas se hablan entre sí, la información fluye sola y tomas mejores decisiones con datos reales.",
          cta: "Lo quiero",
          highlight: true,
        },
        {
          tag: "Avanzado",
          tagline: "Operación autónoma",
          audience:
            "Para empresas que necesitan escalar operaciones sin contratar más gente, automatizando procesos críticos del negocio.",
          features: [
            "Todo lo del plan Pro",
            "5 o más flujos automatizados conectados",
            "Automatización de facturación, cobranza o logística",
            "Integración completa CRM + ERP + facturación",
            "Alertas inteligentes y escalamiento automático",
          ],
          result:
            "Tu operación funciona sola mientras el equipo se enfoca en crecer el negocio.",
          cta: "Hablar con un experto",
          highlight: false,
        },
      ],
    },
    finalCta: {
      overline: "Próximo paso",
      heading1: "Dile adiós",
      heading2: "al trabajo manual.",
      subtitle:
        "Agenda una llamada de 15 minutos. Detectamos oportunidades de automatización en tu negocio y te mostramos cómo implementarlas.",
      cta: "Agenda tu diagnóstico gratis",
    },
  },
  en: {
    hero: {
      overline: "Automations that work for you",
      title1: "Less busywork.",
      title2: "More output.",
      subtitle:
        "We connect your tools and automate the repetitive. Your team stops losing hours and starts focusing on what matters.",
      ctaPrimary: "I want to automate",
      ctaSecondary: "See plans",
    },
    advantages: {
      overline: "Advantages",
      heading: "Your ops running on autopilot, 24/7.",
      subheading:
        "We don't sell tech. We sell time, precision and scalability. Here's what you get when we automate your business.",
      items: [
        {
          title: "Reclaim hours every week",
          description:
            "What your team does manually in 3 hours, an automated flow does in seconds. Literally.",
        },
        {
          title: "Zero human errors",
          description:
            "No more badly-copied emails, stale spreadsheets, or data lost between systems.",
        },
        {
          title: "Your systems talk",
          description:
            "CRM, ERP, billing, Sheets, WhatsApp. All connected. Information flows without manual work.",
        },
        {
          title: "Scale without hiring",
          description:
            "Grow 2x, 3x, 5x without adding headcount. Automated processes don't ask for raises.",
        },
        {
          title: "Smart alerts",
          description:
            "When something fails, your team knows before the customer does. Auto-escalation for critical issues.",
        },
        {
          title: "Real-time data",
          description:
            "Operational dashboards to see what's happening and where to act. Decisions based on real data.",
        },
      ],
    },
    features: {
      overline: "What we automate",
      heading: "From simple to mission-critical.",
      subheading:
        "We map your processes, identify where time is lost, and build flows tailored to your business.",
      items: [
        {
          title: "Customer onboarding",
          description:
            "Signups, welcome emails, access creation, owner assignment. All from a single form submission.",
        },
        {
          title: "Quotes and billing",
          description:
            "Generate, send and track quotes and invoices connected to your CRM and accounting system.",
        },
        {
          title: "Automatic reporting",
          description:
            "Weekly KPI reports by email. Without anyone building spreadsheets by hand.",
        },
        {
          title: "WhatsApp follow-ups",
          description:
            "Automated messages to leads, customers and internal team. No copy-pasting, no forgotten tasks.",
        },
      ],
    },
    integrations: {
      overline: "Integrations",
      heading: "We connect to 500+ tools.",
      subheading:
        "Pre-built nodes for common apps, custom API connections for everything else.",
    },
    pricing: {
      overline: "Plans",
      heading: "Pick the automation level you need.",
      subheading:
        "From freeing up hours to building autonomous operations. Every plan includes diagnosis, implementation and training.",
      plans: [
        {
          tag: "Basic",
          tagline: "Free your team",
          audience:
            "For companies where the team loses hours on repetitive tasks like copying data, sending manual emails or updating spreadsheets.",
          features: [
            "Process diagnosis for biggest time sinks",
            "1 automated flow (onboarding, quotes, etc.)",
            "Integration with tools you already use (email, CRM, Sheets)",
            "Basic team training",
            "First 30 days of support",
          ],
          result:
            "Eliminate repetitive manual tasks and reduce errors from week one.",
          cta: "Get started",
          highlight: false,
        },
        {
          tag: "Pro",
          tagline: "Connected systems",
          audience:
            "For companies using multiple tools (CRM, billing, ERP) but nothing is connected and information gets lost between systems.",
          features: [
            "Everything in Basic",
            "Up to 3 automated flows connected to each other",
            "Cross-platform integration (CRM, ERP, billing)",
            "Real-time operational dashboard",
            "Automatic weekly reports by email",
          ],
          result:
            "Your systems talk, information flows on its own and you make better decisions with real data.",
          cta: "I want this",
          highlight: true,
        },
        {
          tag: "Advanced",
          tagline: "Autonomous operations",
          audience:
            "For companies that need to scale operations without hiring more people, automating critical business processes.",
          features: [
            "Everything in Pro",
            "5+ connected automated flows",
            "Billing, collections or logistics automation",
            "Full CRM + ERP + billing integration",
            "Smart alerts and automatic escalation",
          ],
          result:
            "Your operation runs itself while the team focuses on growing the business.",
          cta: "Talk to an expert",
          highlight: false,
        },
      ],
    },
    finalCta: {
      overline: "Next step",
      heading1: "Say goodbye",
      heading2: "to manual work.",
      subtitle:
        "Book a 15-minute call. We'll detect automation opportunities in your business and show you how to implement them.",
      cta: "Book your free diagnosis",
    },
  },
} as const;

export default function AutomationsPage() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <main className="overflow-hidden">
      {/* ====== HERO ====== */}
      <section className="relative w-full overflow-hidden bg-light-gray">
        {/* Ambient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(152,162,166,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 0%, rgba(176,190,197,0.22), transparent 65%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 pt-36 pb-8 text-center md:pt-44">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-near-black/10 bg-white/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-dark-gray backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-near-black opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-near-black" />
            </span>
            {t.hero.overline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-near-black sm:text-6xl md:text-7xl lg:text-[96px]"
          >
            {t.hero.title1}
            <br />
            <span className="text-dark-gray">{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-2 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href={CALENDLY}
              className="group inline-flex items-center gap-2 rounded-full bg-near-black px-7 py-3.5 text-sm font-medium text-light-gray transition-all duration-300 hover:bg-charcoal hover:shadow-lg hover:shadow-near-black/20"
            >
              {t.hero.ctaPrimary}
              <Arrow />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-near-black/15 bg-white/40 px-7 py-3.5 text-sm font-medium text-near-black backdrop-blur-sm transition-all duration-300 hover:border-near-black/30 hover:bg-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Automation graph */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 md:pb-32">
          <AutomationGraph />
        </div>
      </section>

      {/* ====== ADVANTAGES ====== */}
      <section className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.advantages.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
          >
            {t.advantages.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.advantages.subheading}
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.advantages.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5, delay: 0.04 * i }}
              className="group rounded-2xl border border-near-black/6 bg-white/60 p-8 transition-all duration-300 hover:border-near-black/12 hover:bg-white hover:shadow-lg hover:shadow-near-black/5"
            >
              <AdvantageIcon index={i} />
              <h3 className="mt-6 text-lg font-semibold text-near-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section className="relative w-full bg-white/40 py-28 md:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.features.overline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.features.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.features.subheading}
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {t.features.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ duration: 0.5, delay: 0.04 * i }}
                className="group relative overflow-hidden rounded-2xl border border-near-black/6 bg-light-gray p-8 transition-all duration-300 hover:border-near-black/12 hover:shadow-lg hover:shadow-near-black/5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-near-black/[0.03] blur-2xl transition-all duration-500 group-hover:bg-near-black/[0.06]"
                />
                <FeatureIcon index={i} />
                <h3 className="mt-6 text-xl font-semibold text-near-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INTEGRATIONS ====== */}
      <section className="relative w-full overflow-hidden bg-near-black py-28 md:py-36">
        {/* Dot grid background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #F0F1F2 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0D0D0D_90%)]" />

        <div className="relative z-10 mx-auto mb-14 max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.integrations.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold tracking-tight text-light-gray md:text-5xl"
          >
            {t.integrations.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.integrations.subheading}
          </motion.p>
        </div>

        <IntegrationsMarquee />

        <div className="relative z-10 mt-14 flex justify-center">
          <a
            href={CALENDLY}
            className="group inline-flex items-center gap-2 rounded-full border border-light-gray/20 bg-light-gray px-7 py-3.5 text-sm font-medium text-near-black transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-light-gray/10"
          >
            Ver todas las integraciones
            <Arrow />
          </a>
        </div>
      </section>

      {/* ====== PRICING ====== */}
      <section
        id="pricing"
        className="relative w-full bg-white/40 py-28 md:py-36"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.pricing.overline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.pricing.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.pricing.subheading}
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.pricing.plans.map((plan, i) => (
              <motion.div
                key={plan.tag}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "border border-near-black/10 bg-near-black text-light-gray shadow-xl shadow-near-black/10 md:-translate-y-3"
                    : "border border-near-black/8 bg-light-gray hover:border-near-black/15 hover:shadow-lg hover:shadow-near-black/5"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-light-gray px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-near-black">
                    Más elegido
                  </span>
                )}

                <div className="mb-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-medium-gray">
                    {plan.tag}
                  </p>
                  <h3
                    className={`mt-2 text-2xl font-bold tracking-tight ${
                      plan.highlight ? "text-light-gray" : "text-near-black"
                    }`}
                  >
                    {plan.tagline}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      plan.highlight ? "text-medium-gray" : "text-dark-gray"
                    }`}
                  >
                    {plan.audience}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          plan.highlight ? "text-light-gray" : "text-near-black"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed ${
                          plan.highlight
                            ? "text-light-gray/90"
                            : "text-dark-gray"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`mb-6 rounded-2xl border p-4 ${
                    plan.highlight
                      ? "border-light-gray/15 bg-white/5"
                      : "border-near-black/8 bg-white/60"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-medium-gray">
                    Resultado
                  </p>
                  <p
                    className={`mt-1 text-sm font-medium leading-relaxed ${
                      plan.highlight ? "text-light-gray" : "text-near-black"
                    }`}
                  >
                    {plan.result}
                  </p>
                </div>

                <a
                  href={CALENDLY}
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 ${
                    plan.highlight
                      ? "bg-light-gray text-near-black hover:bg-white hover:shadow-lg hover:shadow-light-gray/20"
                      : "bg-near-black text-light-gray hover:bg-charcoal hover:shadow-lg hover:shadow-near-black/20"
                  }`}
                >
                  {plan.cta}
                  <Arrow />
                </a>
              </motion.div>
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
              "radial-gradient(circle at 1px 1px, #F0F1F2 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0D0D0D_85%)]" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.finalCta.overline}
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
            <span className="text-medium-gray">{t.finalCta.heading2}</span>
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
            className="mt-10 flex flex-col items-center gap-4"
          >
            <a
              href={CALENDLY}
              className="group inline-flex items-center gap-2.5 rounded-full bg-light-gray px-8 py-4 text-sm font-semibold text-near-black transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-light-gray/10"
            >
              {t.finalCta.cta}
              <Arrow />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
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

function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ---------- Automation graph (hero visual) ---------- */
function AutomationGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-near-black/8 bg-near-black shadow-2xl shadow-near-black/20"
    >
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F0F1F2 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(152,162,166,0.18), transparent 60%)",
        }}
      />

      {/* Window chrome */}
      <div className="relative flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-400/80">
            Running
          </span>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-medium-gray">
          Flow · onboarding_v2
        </span>
      </div>

      {/* Graph */}
      <div className="relative px-6 py-10 md:px-12 md:py-16">
        {/* SVG connector lines */}
        <svg
          viewBox="0 0 800 360"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F0F1F2" stopOpacity="0" />
              <stop offset="50%" stopColor="#F0F1F2" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F0F1F2" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Trigger → Agent */}
          <path
            d="M 150 180 C 220 180, 260 180, 330 180"
            stroke="#565959"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          {/* Agent → Branch1 (Slack) */}
          <path
            d="M 470 180 C 550 180, 580 90, 660 90"
            stroke="#565959"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          {/* Agent → Branch2 (Email) */}
          <path
            d="M 470 180 C 550 180, 580 180, 660 180"
            stroke="#565959"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />
          {/* Agent → Branch3 (DB) */}
          <path
            d="M 470 180 C 550 180, 580 270, 660 270"
            stroke="#565959"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
          />

          {/* Animated beams (gradient pulses) */}
          <Beam path="M 150 180 C 220 180, 260 180, 330 180" delay={0} />
          <Beam
            path="M 470 180 C 550 180, 580 90, 660 90"
            delay={1}
          />
          <Beam
            path="M 470 180 C 550 180, 580 180, 660 180"
            delay={1.5}
          />
          <Beam
            path="M 470 180 C 550 180, 580 270, 660 270"
            delay={2}
          />
        </svg>

        {/* Nodes */}
        <div className="relative grid min-h-[340px] grid-cols-[1fr_1.2fr_1fr] items-center gap-6">
          {/* Left: Trigger */}
          <div className="flex flex-col items-center">
            <Node label="Trigger" sublabel="Form submit" icon={<IconBolt />} pulse />
            <NodeMeta text="on:create_user" />
          </div>

          {/* Center: Agent */}
          <div className="flex flex-col items-center">
            <Node
              label="AI Agent"
              sublabel="Decision node"
              icon={<IconBot />}
              highlight
            />
            <NodeMeta text="analyze · route" />
          </div>

          {/* Right: Actions stacked */}
          <div className="flex flex-col gap-4">
            <Node
              label="Slack"
              sublabel="#new-users"
              icon={<IconSlack />}
              compact
            />
            <Node
              label="Email"
              sublabel="welcome kit"
              icon={<IconMail />}
              compact
            />
            <Node
              label="Database"
              sublabel="insert row"
              icon={<IconDb />}
              compact
            />
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="relative flex items-center justify-between border-t border-white/5 px-4 py-3 text-[10px] font-medium text-medium-gray">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            4 nodes · 3 active
          </span>
          <span className="hidden md:inline">Last run: 2s ago</span>
        </div>
        <span className="hidden md:inline">Executions: 1,284 / día</span>
      </div>
    </motion.div>
  );
}

function Beam({ path, delay }: { path: string; delay: number }) {
  return (
    <motion.circle
      r="4"
      fill="#F0F1F2"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      style={{
        offsetPath: `path('${path}')`,
        offsetRotate: "auto",
        filter: "drop-shadow(0 0 4px #F0F1F2)",
      }}
    >
      <animate
        attributeName="offset-distance"
        from="0%"
        to="100%"
        dur="2.4s"
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </motion.circle>
  );
}

function Node({
  label,
  sublabel,
  icon,
  highlight,
  pulse,
  compact,
}: {
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  highlight?: boolean;
  pulse?: boolean;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center gap-3 rounded-xl border px-3 py-2.5 backdrop-blur-sm transition-all duration-300 ${
        highlight
          ? "border-white/20 bg-white/[0.06] shadow-lg shadow-white/5"
          : "border-white/10 bg-white/[0.03]"
      } ${compact ? "w-full" : ""}`}
    >
      {pulse && (
        <span className="pointer-events-none absolute -inset-[2px] rounded-xl">
          <span className="absolute inset-0 animate-ping rounded-xl border border-white/20" />
        </span>
      )}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          highlight ? "bg-light-gray text-near-black" : "bg-white/10 text-light-gray"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="truncate text-[11px] font-semibold leading-tight text-light-gray">
          {label}
        </p>
        <p className="truncate text-[9px] text-medium-gray">{sublabel}</p>
      </div>
    </div>
  );
}

function NodeMeta({ text }: { text: string }) {
  return (
    <span className="mt-2 rounded-full bg-white/[0.04] px-2 py-0.5 text-[9px] font-mono text-medium-gray">
      {text}
    </span>
  );
}

/* ---------- Node icons ---------- */
function IconBolt() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
function IconBot() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M9 12h.01M15 12h.01M9 16h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSlack() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="9" width="8" height="3" rx="1.5" />
      <rect x="3" y="14" width="3" height="8" rx="1.5" />
      <rect x="13" y="12" width="8" height="3" rx="1.5" />
      <rect x="18" y="2" width="3" height="8" rx="1.5" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDb() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <ellipse cx="12" cy="5" rx="8" ry="2.5" />
      <path d="M4 5v14c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
      <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
    </svg>
  );
}

/* ---------- Advantage icons ---------- */
function AdvantageIcon({ index }: { index: number }) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-xl bg-near-black/5 text-near-black transition-colors duration-300 group-hover:bg-near-black group-hover:text-light-gray";
  const icons = [
    <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>,
    <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m-8 5h8m-8 5h8M3 17l3-3 3 3M3 7l3 3 3-3" />
    </svg>,
    <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8l-4-4m4 14h-8l4 4M7 7H3l4-4M3 17h4l-4 4" />
    </svg>,
    <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 11-6 0" />
    </svg>,
    <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 5-5" />
    </svg>,
  ];
  return <div className={base}>{icons[index]}</div>;
}

/* ---------- Feature icons ---------- */
function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
    </svg>,
    <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h6M7 13h10M7 17h4" strokeLinecap="round" />
    </svg>,
    <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7M15 17v-4M3 20h18" />
    </svg>,
    <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8-1.4 0-2.7-.3-3.9-.8L3 21l1.8-5.1C4.3 14.7 4 13.4 4 12c0-4.4 4-8 9-8s8 3.6 8 8z" />
    </svg>,
  ];
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-near-black text-light-gray">
      {icons[index]}
    </div>
  );
}

/* ---------- Integrations marquee (two rows, opposite direction) ---------- */
function IntegrationsMarquee() {
  const row1 = [
    "Slack", "Notion", "Gmail", "Google Sheets", "HubSpot", "Salesforce",
    "Airtable", "Stripe", "Mailchimp", "WhatsApp", "Telegram", "Discord",
    "Zapier", "Make", "n8n", "Trello", "Asana", "Linear",
  ];
  const row2 = [
    "ClickUp", "Pipedrive", "Monday", "Zoho", "QuickBooks", "Xero",
    "Calendly", "Typeform", "Jotform", "Webflow", "Shopify", "WooCommerce",
    "Meta Ads", "Google Ads", "Twilio", "SendGrid", "Resend", "OpenAI",
  ];

  return (
    <div className="relative z-10 flex flex-col gap-5">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  return (
    <div className="marquee-container relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-near-black to-transparent md:w-40" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-near-black to-transparent md:w-40" />
      <div
        className={`marquee-track flex w-max gap-3 ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {[...items, ...items].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex shrink-0 items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
          >
            <IntegrationGlyph name={name} />
            <span className="whitespace-nowrap text-xs font-medium text-light-gray/80 transition-colors duration-300 group-hover:text-light-gray">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntegrationGlyph({ name }: { name: string }) {
  const letter = name.charAt(0);
  const hash = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
  const hues = [
    "from-emerald-400/30 to-emerald-400/5",
    "from-sky-400/30 to-sky-400/5",
    "from-violet-400/30 to-violet-400/5",
    "from-amber-400/30 to-amber-400/5",
    "from-rose-400/30 to-rose-400/5",
    "from-teal-400/30 to-teal-400/5",
  ];
  const hue = hues[hash % hues.length];
  return (
    <div
      className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${hue} text-[11px] font-bold text-light-gray`}
    >
      {letter}
    </div>
  );
}
