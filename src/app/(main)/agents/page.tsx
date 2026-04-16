"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY = "/meeting";

const copy = {
  es: {
    hero: {
      overline: "Agentes de IA que venden por ti",
      title1: "Un vendedor de IA.",
      title2: "Trabajando 24/7.",
      subtitle:
        "Entrena un agente que conoce tu negocio, responde en segundos y agenda reuniones mientras duermes. Sin templates. Sin fricción. Solo resultados.",
      ctaPrimary: "Quiero mi agente",
      ctaSecondary: "Ver planes",
    },
    advantages: {
      overline: "Ventajas",
      heading: "Tu mejor vendedor. Sin vacaciones.",
      subheading:
        "Un agente entrenado con tu producto, tu tono y tus objetivos de venta. Esto es lo que gana tu negocio.",
      items: [
        {
          title: "Respuesta en segundos",
          description:
            "Cero leads perdidos por tiempo de respuesta. Tu agente contesta en menos de 3 segundos, 24/7.",
        },
        {
          title: "Entrena con tu negocio",
          description:
            "Le das tus PDFs, tu web, tu Notion y tu catálogo. Aprende tu producto como lo haría tu mejor vendedor.",
        },
        {
          title: "Califica y prioriza",
          description:
            "No todos los leads son iguales. El agente hace las preguntas clave y te alerta cuando uno está listo para cerrar.",
        },
        {
          title: "Agenda por ti",
          description:
            "Se conecta con tu calendario, propone horarios y cierra reuniones en vivo durante la conversación.",
        },
        {
          title: "Aprende cada día",
          description:
            "Cada conversación mejora al agente. Se refina con datos reales de tu negocio, no con prompts genéricos.",
        },
        {
          title: "Humano cuando toca",
          description:
            "Cuando detecta un caso crítico, pasa la conversación a tu equipo con todo el contexto listo.",
        },
      ],
    },
    features: {
      overline: "Qué entrenamos",
      heading: "Agentes que no suenan a bot.",
      subheading:
        "Cada agente se construye desde cero con tu identidad, tu producto y tus procesos de venta reales.",
      items: [
        {
          title: "Agente SDR (Web + WhatsApp)",
          description:
            "Recibe al lead, lo califica, responde dudas y agenda la reunión con tu equipo comercial.",
        },
        {
          title: "Agente de soporte",
          description:
            "Responde tickets, resuelve dudas frecuentes y escala a un humano cuando detecta frustración.",
        },
        {
          title: "Agente de onboarding",
          description:
            "Acompaña al cliente nuevo paso a paso. Contesta preguntas, envía recursos y reporta el avance.",
        },
        {
          title: "Agente de seguimiento",
          description:
            "Hace follow-up a leads fríos, rescata oportunidades y vuelve a poner reuniones en el calendario.",
        },
      ],
    },
    integrations: {
      overline: "Integraciones",
      heading: "Se conecta con todo tu stack de ventas.",
      subheading:
        "Desde el CRM hasta el canal donde conversan tus clientes. Soportamos los modelos más avanzados del mercado.",
    },
    pricing: {
      overline: "Planes",
      heading: "Elige qué tan lejos quiere llegar tu agente.",
      subheading:
        "Desde responder rápido hasta cerrar ventas solo. Todos los planes incluyen entrenamiento inicial, prompts personalizados y soporte.",
      plans: [
        {
          tag: "Básico",
          tagline: "Nunca pierdas un lead",
          audience:
            "Para empresas que pierden oportunidades de venta porque no logran responder rápido a los leads que llegan por web o WhatsApp.",
          features: [
            "Agente de IA que responde en web o WhatsApp",
            "Calificación automática con preguntas clave del negocio",
            "Respuestas con información real de tu producto o servicio",
            "Notificación inmediata al equipo cuando un lead está listo",
            "Entrenamiento inicial con tus documentos",
          ],
          result:
            "No se pierde ningún lead por falta de respuesta. El agente atiende 24/7.",
          cta: "Quiero empezar",
          highlight: false,
        },
        {
          tag: "Pro",
          tagline: "Agenda reuniones solo",
          audience:
            "Para empresas que quieren que la IA maneje todo el proceso de ventas: desde el primer contacto hasta agendar la reunión con el vendedor.",
          features: [
            "Todo lo del plan Básico",
            "Seguimiento automático por WhatsApp y email",
            "Agendamiento directo en el calendario del equipo comercial",
            "Scoring de leads por IA para priorizar los mejores prospectos",
            "Dashboard con pipeline de ventas en tiempo real",
          ],
          result:
            "El calendario se llena de reuniones calificadas sin esfuerzo manual del equipo de ventas.",
          cta: "Lo quiero",
          highlight: true,
        },
        {
          tag: "Avanzado",
          tagline: "Cierra ventas autónomamente",
          audience:
            "Para empresas que buscan un sistema de ventas completo donde la IA negocie, maneje objeciones y cierre oportunidades de forma autónoma.",
          features: [
            "Todo lo del plan Pro",
            "Agente que negocia, responde objeciones y guía al cierre",
            "Integración completa con CRM (HubSpot, Pipedrive u otro)",
            "Reportería de conversión y análisis de rendimiento",
            "Entrenamiento continuo del agente con datos reales",
          ],
          result:
            "Escalas las ventas sin necesidad de contratar más vendedores.",
          cta: "Hablar con un experto",
          highlight: false,
        },
      ],
    },
    finalCta: {
      overline: "Último paso",
      heading1: "Tu vendedor de IA",
      heading2: "listo en 7 días.",
      subtitle:
        "Agenda una llamada de 15 minutos. Te mostramos cómo captar, responder y convertir clientes automáticamente.",
      cta: "Agenda tu diagnóstico gratis",
    },
  },
  en: {
    hero: {
      overline: "AI agents that sell for you",
      title1: "An AI salesperson.",
      title2: "Working 24/7.",
      subtitle:
        "Train an agent that knows your business, replies in seconds and books meetings while you sleep. No templates. No friction. Just results.",
      ctaPrimary: "I want my agent",
      ctaSecondary: "See plans",
    },
    advantages: {
      overline: "Advantages",
      heading: "Your best salesperson. No vacations.",
      subheading:
        "An agent trained on your product, your tone and your sales goals. Here's what your business gets.",
      items: [
        {
          title: "Replies in seconds",
          description:
            "Zero leads lost to response time. Your agent answers in under 3 seconds, 24/7.",
        },
        {
          title: "Trained on your business",
          description:
            "Feed it your PDFs, website, Notion and catalog. It learns your product like your best rep would.",
        },
        {
          title: "Qualifies and scores",
          description:
            "Not all leads are equal. The agent asks the key questions and alerts you when one is ready to close.",
        },
        {
          title: "Books for you",
          description:
            "Connects with your calendar, proposes slots and books meetings live during the conversation.",
        },
        {
          title: "Learns every day",
          description:
            "Each conversation makes the agent better. It's refined with real business data, not generic prompts.",
        },
        {
          title: "Human when needed",
          description:
            "When it detects a critical case, it hands off to your team with full context ready.",
        },
      ],
    },
    features: {
      overline: "What we train",
      heading: "Agents that don't sound like bots.",
      subheading:
        "Each agent is built from scratch with your identity, your product and your real sales process.",
      items: [
        {
          title: "SDR agent (Web + WhatsApp)",
          description:
            "Greets the lead, qualifies them, answers questions and books the meeting with your sales team.",
        },
        {
          title: "Support agent",
          description:
            "Answers tickets, solves common questions and escalates to a human when it detects frustration.",
        },
        {
          title: "Onboarding agent",
          description:
            "Walks new customers through setup. Answers questions, sends resources and reports progress.",
        },
        {
          title: "Follow-up agent",
          description:
            "Reaches out to cold leads, rescues opportunities and books meetings back on the calendar.",
        },
      ],
    },
    integrations: {
      overline: "Integrations",
      heading: "Connects to your full sales stack.",
      subheading:
        "From your CRM to the channel where your customers talk. We support the most advanced models on the market.",
    },
    pricing: {
      overline: "Plans",
      heading: "Pick how far your agent goes.",
      subheading:
        "From fast replies to closing deals on its own. Every plan includes initial training, custom prompts and support.",
      plans: [
        {
          tag: "Basic",
          tagline: "Never lose a lead",
          audience:
            "For companies losing sales because they can't reply fast enough to leads coming in from web or WhatsApp.",
          features: [
            "AI agent that replies on web or WhatsApp",
            "Automatic qualification with key business questions",
            "Answers with real info about your product or service",
            "Instant team notification when a lead is ready",
            "Initial training with your documents",
          ],
          result:
            "No lead is lost due to slow response. The agent is on 24/7.",
          cta: "Get started",
          highlight: false,
        },
        {
          tag: "Pro",
          tagline: "Books meetings solo",
          audience:
            "For companies that want AI to run the full sales process: from first contact to booking the meeting with the rep.",
          features: [
            "Everything in Basic",
            "Automatic follow-up via WhatsApp and email",
            "Direct booking into the sales team's calendar",
            "AI lead scoring to prioritize the best prospects",
            "Real-time sales pipeline dashboard",
          ],
          result:
            "The calendar fills with qualified meetings without manual effort from the sales team.",
          cta: "I want this",
          highlight: true,
        },
        {
          tag: "Advanced",
          tagline: "Closes deals autonomously",
          audience:
            "For companies looking for a complete sales system where AI negotiates, handles objections and closes deals on its own.",
          features: [
            "Everything in Pro",
            "Agent that negotiates, handles objections and drives to close",
            "Full CRM integration (HubSpot, Pipedrive or other)",
            "Conversion reporting and sales performance analysis",
            "Continuous agent training with real data",
          ],
          result:
            "You scale sales without hiring more reps.",
          cta: "Talk to an expert",
          highlight: false,
        },
      ],
    },
    finalCta: {
      overline: "Last step",
      heading1: "Your AI salesperson",
      heading2: "ready in 7 days.",
      subtitle:
        "Book a 15-minute call. We'll show you how to capture, respond and convert customers automatically.",
      cta: "Book your free diagnosis",
    },
  },
} as const;

export default function AgentsPage() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <main className="overflow-hidden">
      {/* ====== HERO ====== */}
      <section className="relative w-full overflow-hidden bg-light-gray">
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

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-24 md:pb-32">
          <AgentChatVisual lang={lang} />
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

/* ---------- Hero visual: Train panel + Chat panel ---------- */
function AgentChatVisual({ lang }: { lang: "es" | "en" }) {
  const s =
    lang === "es"
      ? {
          agentName: "Sofía · Agente de ventas",
          status: "En línea",
          trainLabel: "Instrucciones",
          trainLines: [
            "Eres Sofía, asistente de ventas de Zevra.",
            "Responde con empatía y en menos de 3 segundos.",
            "Califica al lead antes de agendar.",
            "Si el presupuesto es > $2k, agenda reunión.",
          ],
          knowledgeLabel: "Base de conocimiento",
          knowledge: [
            { icon: "pdf", name: "catalog_2026.pdf" },
            { icon: "web", name: "zevra.bo/planes" },
            { icon: "notion", name: "objeciones.md" },
            { icon: "csv", name: "clientes.csv" },
          ],
          trainStatus: "Entrenando · 4 fuentes",
          messages: [
            {
              from: "user",
              text: "Hola, quiero saber si pueden automatizar el onboarding de mis clientes",
            },
            {
              from: "agent",
              text: "¡Hola! 👋 Claro, eso lo hacemos mucho. ¿Cuántos clientes nuevos tienen al mes aproximadamente?",
            },
            {
              from: "user",
              text: "Unos 80-100 por mes, todo lo hacemos a mano hoy.",
            },
            {
              from: "agent",
              text: "Perfecto. Con ese volumen el ROI es inmediato. ¿Te agendo una llamada de 20 min con un experto?",
              cta: "Agendar reunión · Mañana 10:30am",
            },
          ],
          typing: "Sofía está escribiendo...",
          leadBadge: "Lead calificado",
          leadScore: "Score 94",
          input: "Escribe un mensaje...",
        }
      : {
          agentName: "Sofia · Sales Agent",
          status: "Online",
          trainLabel: "Instructions",
          trainLines: [
            "You are Sofia, Zevra's sales assistant.",
            "Reply with empathy and in under 3 seconds.",
            "Qualify the lead before booking.",
            "If budget > $2k, book a meeting.",
          ],
          knowledgeLabel: "Knowledge base",
          knowledge: [
            { icon: "pdf", name: "catalog_2026.pdf" },
            { icon: "web", name: "zevra.bo/plans" },
            { icon: "notion", name: "objections.md" },
            { icon: "csv", name: "customers.csv" },
          ],
          trainStatus: "Training · 4 sources",
          messages: [
            {
              from: "user",
              text: "Hi, can you automate customer onboarding for us?",
            },
            {
              from: "agent",
              text: "Hi there! 👋 Absolutely, we do this a lot. How many new customers do you get per month?",
            },
            {
              from: "user",
              text: "About 80-100 a month, all manual today.",
            },
            {
              from: "agent",
              text: "Perfect. At that volume the ROI is immediate. Want me to book a 20-min call with an expert?",
              cta: "Book meeting · Tomorrow 10:30am",
            },
          ],
          typing: "Sofia is typing...",
          leadBadge: "Qualified lead",
          leadScore: "Score 94",
          input: "Type a message...",
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="relative mx-auto w-full overflow-hidden rounded-3xl border border-near-black/8 bg-near-black shadow-2xl shadow-near-black/20"
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
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(152,162,166,0.18), transparent 60%)",
        }}
      />

      {/* Window chrome */}
      <div className="relative flex items-center justify-between border-b border-white/5 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400/30 to-teal-400/10">
            <IconSparkle />
          </div>
          <span className="text-[11px] font-semibold text-light-gray">
            {s.agentName}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-400/80">
            {s.status}
          </span>
        </div>
      </div>

      {/* Split panels */}
      <div className="relative grid gap-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* ===== TRAIN PANEL ===== */}
        <div className="relative border-b border-white/5 p-5 md:border-b-0 md:border-r md:p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-medium-gray">
              {s.trainLabel}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
              {s.trainStatus}
            </span>
          </div>

          {/* Editor-ish block */}
          <div className="relative rounded-xl border border-white/8 bg-white/[0.02] p-3 font-mono text-[11px] leading-relaxed text-light-gray/80">
            {s.trainLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
                className="flex gap-3"
              >
                <span className="w-4 select-none text-right text-medium-gray/50">
                  {i + 1}
                </span>
                <span>{line}</span>
              </motion.div>
            ))}
            {/* Blinking cursor line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex gap-3"
            >
              <span className="w-4 select-none text-right text-medium-gray/50">
                {s.trainLines.length + 1}
              </span>
              <span className="inline-block h-3.5 w-1.5 animate-pulse bg-light-gray" />
            </motion.div>
          </div>

          {/* Knowledge base */}
          <div className="mt-5">
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-medium-gray">
              {s.knowledgeLabel}
            </span>
            <div className="flex flex-wrap gap-2">
              {s.knowledge.map((k, i) => (
                <motion.span
                  key={k.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 2.0 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-light-gray/80"
                >
                  <KnowledgeIcon kind={k.icon} />
                  {k.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CHAT PANEL ===== */}
        <div className="relative flex min-h-[420px] flex-col p-5 md:p-6">
          {/* Messages */}
          <div className="flex flex-1 flex-col gap-3">
            {s.messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.4 }}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[12px] leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-sm bg-light-gray text-near-black"
                      : "rounded-bl-sm bg-white/[0.06] text-light-gray"
                  }`}
                >
                  {m.from === "agent" && (
                    <div className="mb-1 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
                      <IconSparkle className="h-2.5 w-2.5" />
                      Sofía AI
                    </div>
                  )}
                  <p>{m.text}</p>
                  {"cta" in m && m.cta && (
                    <button className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-400/15 px-3 py-1.5 text-[11px] font-semibold text-emerald-400 transition-colors hover:bg-emerald-400/25">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <rect x="3" y="5" width="18" height="16" rx="2" />
                        <path
                          d="M3 10h18M8 3v4M16 3v4"
                          strokeLinecap="round"
                        />
                      </svg>
                      {m.cta}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-white/[0.06] px-4 py-3">
                <TypingDot delay={0} />
                <TypingDot delay={0.2} />
                <TypingDot delay={0.4} />
              </div>
            </motion.div>
          </div>

          {/* Lead scored badge (floating) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="pointer-events-none absolute right-5 top-5 md:right-6 md:top-6"
          >
            <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 backdrop-blur-sm">
              <svg
                className="h-3 w-3 text-emerald-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
                  {s.leadBadge}
                </span>
                <span className="text-[9px] text-emerald-400/70">
                  {s.leadScore}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Input */}
          <div className="mt-5 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2.5">
            <span className="flex-1 text-[11px] text-medium-gray">
              {s.input}
            </span>
            <button className="flex h-7 w-7 items-center justify-center rounded-full bg-light-gray text-near-black">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19V5M5 12l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TypingDot({ delay }: { delay: number }) {
  return (
    <motion.span
      className="block h-1.5 w-1.5 rounded-full bg-light-gray/60"
      animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1, repeat: Infinity, delay }}
    />
  );
}

function IconSparkle({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5L12 2zm7 10l.9 2.6L22 16l-2.1.9-.9 2.6-.9-2.6L16 16l2.1-1.4.9-2.6z" />
    </svg>
  );
}

function KnowledgeIcon({ kind }: { kind: string }) {
  const cls = "h-3 w-3 text-medium-gray";
  if (kind === "pdf")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
        <path d="M14 2v6h6M9 15h6" strokeLinecap="round" />
      </svg>
    );
  if (kind === "web")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    );
  if (kind === "notion")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7v10M8 7l8 10V7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M9 4v16" />
    </svg>
  );
}

/* ---------- Advantage icons ---------- */
function AdvantageIcon({ index }: { index: number }) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-xl bg-near-black/5 text-near-black transition-colors duration-300 group-hover:bg-near-black group-hover:text-light-gray";
  const icons = [
    <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>,
    <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" />
    </svg>,
    <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l6 3" strokeLinecap="round" />
    </svg>,
    <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 3a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
  ];
  return <div className={base}>{icons[index]}</div>;
}

/* ---------- Feature icons ---------- */
function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.4-4 8-9 8-1.4 0-2.7-.3-3.9-.8L3 21l1.8-5.1C4.3 14.7 4 13.4 4 12c0-4.4 4-8 9-8s8 3.6 8 8z" />
    </svg>,
    <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636A9 9 0 015.636 18.364M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
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
    "OpenAI", "Claude", "Gemini", "Llama", "Mistral", "Groq",
    "WhatsApp", "Telegram", "Instagram", "Messenger", "SMS", "Web Chat",
    "HubSpot", "Pipedrive", "Salesforce", "Zoho", "ActiveCampaign", "Freshsales",
  ];
  const row2 = [
    "Calendly", "Cal.com", "Google Calendar", "Outlook", "Zoom", "Meet",
    "Gmail", "Outlook Mail", "Resend", "Sendgrid", "Twilio", "Vonage",
    "Notion", "Airtable", "Google Sheets", "Supabase", "Pinecone", "Zapier",
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
