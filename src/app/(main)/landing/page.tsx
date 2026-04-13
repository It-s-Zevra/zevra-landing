"use client";

import { motion } from "motion/react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY = "/meeting";

const copy = {
  es: {
    hero: {
      overline: "Landing pages que venden",
      title1: "Convierte visitas",
      title2: "en clientes reales.",
      subtitle:
        "Diseñamos páginas rápidas, bonitas y pensadas para vender. Listas para que tu próximo cliente te encuentre hoy.",
      ctaPrimary: "Quiero mi landing",
      ctaSecondary: "Ver planes",
      scrollHint: "Desliza para ver la magia",
    },
    advantages: {
      overline: "Ventajas",
      heading: "Todo lo que tu marca necesita para crecer online.",
      subheading:
        "No es solo una página bonita. Es una máquina de conversión diseñada con estrategia, diseño y datos.",
      items: [
        {
          title: "Conversión primero",
          description:
            "Cada sección, cada botón y cada palabra están pensados para que tu visitante haga clic donde importa.",
        },
        {
          title: "Velocidad brutal",
          description:
            "Cargamos en menos de 2 segundos. Google te ama, tus usuarios no se van.",
        },
        {
          title: "Diseño que enamora",
          description:
            "Interfaces limpias, modernas y 100% responsivas. Tu marca al nivel de las mejores del mundo.",
        },
        {
          title: "SEO desde el día 1",
          description:
            "Estructura optimizada para aparecer en Google sin depender solo de anuncios pagados.",
        },
        {
          title: "Medición real",
          description:
            "Ves de dónde vienen tus clientes y qué funciona. Decisiones con datos, no con intuición.",
        },
        {
          title: "Soporte humano",
          description:
            "Hablas con personas, no con tickets. Te acompañamos antes, durante y después del lanzamiento.",
        },
      ],
    },
    features: {
      overline: "Qué incluye",
      heading: "Una página. Todas las herramientas.",
      subheading:
        "Diseñada en cualquier dispositivo, conectada con tus herramientas favoritas y lista para escalar contigo.",
      items: [
        {
          title: "Responsive de verdad",
          description:
            "Se ve perfecta en el celular, en la laptop y en la tablet. Sin excepciones.",
        },
        {
          title: "Formularios inteligentes",
          description:
            "Captura leads con validación, anti-spam y envío directo a tu correo, WhatsApp o CRM.",
        },
        {
          title: "Animaciones sutiles",
          description:
            "Microinteracciones premium que enamoran sin sacrificar velocidad.",
        },
        {
          title: "Panel de métricas",
          description:
            "Google Analytics, Meta Pixel y eventos personalizados instalados y listos.",
        },
      ],
    },
    integrations: {
      overline: "Integraciones",
      heading: "Conectada con las herramientas que ya usas.",
      subheading:
        "Tu landing no vive sola. La integramos con tu CRM, tus campañas y tus canales de venta.",
    },
    pricing: {
      overline: "Planes",
      heading: "Elige el plan que convierte para ti.",
      subheading:
        "Desde estar online hoy mismo hasta montar un sistema completo de captación. Todos los planes incluyen diseño, desarrollo y publicación.",
      plans: [
        {
          tag: "Básico",
          tagline: "Empieza rápido",
          audience: "Para quien necesita estar online ya y empezar a recibir contactos.",
          features: [
            "Página simple y profesional",
            "Hasta 4 secciones",
            "Formulario de contacto",
            "Publicación lista en internet",
            "Dominio y hosting incluidos",
          ],
          result: "Empiezas a recibir contactos desde el día 1",
          cta: "Quiero empezar",
          highlight: false,
        },
        {
          tag: "Pro",
          tagline: "Convierte mejor",
          audience: "Para quien quiere que su página realmente genere clientes.",
          features: [
            "Diseño trabajado y enfocado en conversión",
            "Hasta 7 secciones",
            "Formularios optimizados",
            "Integración con email marketing",
            "Medición de resultados",
          ],
          result: "Más contactos y mejor calidad de leads",
          cta: "Lo quiero",
          highlight: true,
        },
        {
          tag: "Avanzado",
          tagline: "Sistema de captación",
          audience: "Para quien quiere una página que trabaje como máquina de ventas.",
          features: [
            "Diseño completamente personalizado",
            "Hasta 10 secciones",
            "Integración con CRM o automatización",
            "Seguimiento de usuarios por WhatsApp",
            "Optimización continua",
          ],
          result: "Un sistema que capta y organiza clientes automáticamente",
          cta: "Hablar con un experto",
          highlight: false,
        },
      ],
    },
    finalCta: {
      overline: "Último paso",
      heading1: "Tu próxima landing",
      heading2: "empieza hoy.",
      subtitle:
        "Agenda una llamada de 20 minutos. Te mostramos ejemplos reales y te damos una propuesta en menos de 48 horas.",
      cta: "Agenda tu llamada gratis",
      note: "Sin compromiso. Sin pagos adelantados. Sin letra chica.",
    },
  },
  en: {
    hero: {
      overline: "Landing pages that sell",
      title1: "Turn visitors",
      title2: "into real customers.",
      subtitle:
        "Fast, beautiful pages built to convert. Ready for your next customer to find you today.",
      ctaPrimary: "Get my landing",
      ctaSecondary: "See plans",
      scrollHint: "Scroll to see the magic",
    },
    advantages: {
      overline: "Advantages",
      heading: "Everything your brand needs to grow online.",
      subheading:
        "Not just a pretty page. A conversion machine built with strategy, design and data.",
      items: [
        {
          title: "Conversion first",
          description:
            "Every section, button and word is designed to get your visitor to click where it matters.",
        },
        {
          title: "Blazing fast",
          description:
            "We load in under 2 seconds. Google loves you, your users don't bounce.",
        },
        {
          title: "Design that sells",
          description:
            "Clean, modern, fully responsive. Your brand at the level of the world's best.",
        },
        {
          title: "SEO from day 1",
          description:
            "Optimized structure to rank on Google without relying only on paid ads.",
        },
        {
          title: "Real metrics",
          description:
            "See where your customers come from and what works. Data-driven decisions.",
        },
        {
          title: "Human support",
          description:
            "You talk to people, not tickets. We support you before, during and after launch.",
        },
      ],
    },
    features: {
      overline: "What's included",
      heading: "One page. Every tool.",
      subheading:
        "Built for every device, connected to your favorite tools, and ready to scale.",
      items: [
        {
          title: "Truly responsive",
          description:
            "Perfect on mobile, laptop and tablet. No exceptions.",
        },
        {
          title: "Smart forms",
          description:
            "Capture leads with validation, anti-spam and direct delivery to email, WhatsApp or CRM.",
        },
        {
          title: "Subtle animations",
          description:
            "Premium microinteractions that delight without sacrificing speed.",
        },
        {
          title: "Analytics panel",
          description:
            "Google Analytics, Meta Pixel and custom events installed and ready.",
        },
      ],
    },
    integrations: {
      overline: "Integrations",
      heading: "Connected to the tools you already use.",
      subheading:
        "Your landing doesn't live alone. We integrate it with your CRM, your campaigns and your sales channels.",
    },
    pricing: {
      overline: "Plans",
      heading: "Pick the plan that converts for you.",
      subheading:
        "From going live today to building a full lead-gen system. Every plan includes design, development and launch.",
      plans: [
        {
          tag: "Basic",
          tagline: "Start fast",
          audience: "For those who need to be online now and start getting leads.",
          features: [
            "Simple, professional page",
            "Up to 4 sections",
            "Contact form",
            "Live on the internet",
            "Domain and hosting included",
          ],
          result: "You start getting leads from day 1",
          cta: "Get started",
          highlight: false,
        },
        {
          tag: "Pro",
          tagline: "Convert better",
          audience: "For those who want their page to actually generate customers.",
          features: [
            "Conversion-focused design",
            "Up to 7 sections",
            "Optimized forms",
            "Email marketing integration",
            "Results tracking",
          ],
          result: "More leads and better lead quality",
          cta: "I want this",
          highlight: true,
        },
        {
          tag: "Advanced",
          tagline: "Lead-gen system",
          audience: "For those who want a page that works like a sales machine.",
          features: [
            "Fully custom design",
            "Up to 10 sections",
            "CRM or automation integration",
            "User tracking via WhatsApp",
            "Continuous optimization",
          ],
          result: "A system that captures and organizes customers automatically",
          cta: "Talk to an expert",
          highlight: false,
        },
      ],
    },
    finalCta: {
      overline: "Last step",
      heading1: "Your next landing",
      heading2: "starts today.",
      subtitle:
        "Book a 20-minute call. We'll show you real examples and send a proposal in under 48 hours.",
      cta: "Book your free call",
      note: "No commitment. No upfront payment. No fine print.",
    },
  },
} as const;

export default function LandingPagesProductPage() {
  const { lang } = useLanguage();
  const t = copy[lang];

  return (
    <main className="overflow-hidden">
      {/* ====== HERO ====== */}
      <section className="relative w-full overflow-hidden bg-light-gray">
        {/* Ambient aurora blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(152,162,166,0.25), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 0%, rgba(176,190,197,0.22), transparent 65%)",
          }}
        />

        {/* Text hero */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 pt-36 pb-8 text-center md:pt-44 md:pb-14">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-near-black sm:text-6xl md:text-7xl lg:text-[96px]"
          >
            {t.hero.title1}
            <br />
            <span className="text-dark-gray">{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
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

        {/* Device showcase — desktop: MacBook scroll */}
        <div className="relative z-10 hidden md:block">
          <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col items-center gap-2 text-medium-gray"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
                {t.hero.scrollHint}
              </span>
              <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>
          <MacbookScroll screen={<ScreenMockup lang={lang} />} />
        </div>

        {/* Device showcase — mobile: static browser window */}
        <div className="relative z-10 mx-auto mt-6 max-w-md px-4 pb-20 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <MobileBrowserFrame>
              <ScreenMockup lang={lang} />
            </MobileBrowserFrame>
          </motion.div>
        </div>
      </section>

      {/* ====== ADVANTAGES ====== */}
      <section className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.advantages.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
          >
            {t.advantages.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.advantages.subheading}
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {t.advantages.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
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
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.features.overline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.features.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.features.subheading}
            </motion.p>
          </div>

          {/* Device showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 flex flex-col items-center justify-center gap-10 lg:flex-row"
          >
            <DeviceIPhone />
            <DeviceMacbook />
            <DeviceIPad />
          </motion.div>

          {/* Feature cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.features.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
                className="rounded-2xl border border-near-black/6 bg-light-gray p-6 transition-all duration-300 hover:border-near-black/12 hover:shadow-md hover:shadow-near-black/5"
              >
                <FeatureIcon index={i} />
                <h3 className="mt-5 text-base font-semibold text-near-black">
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
      <section className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.integrations.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
          >
            {t.integrations.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.integrations.subheading}
          </motion.p>
        </div>

        <IntegrationsGrid />
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
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.pricing.overline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.pricing.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.pricing.subheading}
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.pricing.plans.map((plan, i) => (
              <motion.div
                key={plan.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
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
                  <p
                    className={`text-xs font-medium uppercase tracking-[0.2em] ${
                      plan.highlight ? "text-medium-gray" : "text-medium-gray"
                    }`}
                  >
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
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.15em] ${
                      plan.highlight ? "text-medium-gray" : "text-medium-gray"
                    }`}
                  >
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.finalCta.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-light-gray sm:text-5xl md:text-7xl"
          >
            {t.finalCta.heading1}
            <br />
            <span className="text-medium-gray">{t.finalCta.heading2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.finalCta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            <p className="text-xs text-medium-gray">{t.finalCta.note}</p>
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

/* ---------- Mobile browser frame (wraps ScreenMockup) ---------- */
function MobileBrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-[24px] border border-near-black/10 bg-near-black p-2 shadow-2xl shadow-near-black/20">
      {/* Soft glow behind frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[32px] bg-gradient-to-br from-medium-gray/30 via-transparent to-medium-gray/20 blur-2xl"
      />
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-light-gray/30" />
        <div className="h-2 w-2 rounded-full bg-light-gray/30" />
        <div className="h-2 w-2 rounded-full bg-light-gray/30" />
        <div className="ml-3 flex flex-1 items-center gap-1 rounded-md bg-light-gray/10 px-2 py-1">
          <svg className="h-2.5 w-2.5 text-light-gray/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-[9px] font-medium text-light-gray/50">zevra.bo</span>
        </div>
      </div>
      {/* Screen */}
      <div className="relative aspect-[9/14] w-full overflow-hidden rounded-[16px]">
        {children}
      </div>
    </div>
  );
}

/* ---------- Screen mockup (inside MacBook lid) ---------- */
function ScreenMockup({ lang }: { lang: "es" | "en" }) {
  const s =
    lang === "es"
      ? {
          nav: ["Inicio", "Servicios", "Casos", "Contacto"],
          brand: "ZEVRA",
          overline: "Landing en 7 días",
          title1: "Tu marca.",
          title2: "A otro nivel.",
          subtitle:
            "Páginas diseñadas para convertir visitas en clientes desde el primer día.",
          ctaPrimary: "Agenda una demo",
          ctaSecondary: "Ver casos",
          stat1: "+320%",
          stat1Label: "Conversión",
          stat2: "< 2s",
          stat2Label: "Velocidad",
          stat3: "100/100",
          stat3Label: "Lighthouse",
        }
      : {
          nav: ["Home", "Services", "Cases", "Contact"],
          brand: "ZEVRA",
          overline: "Landing in 7 days",
          title1: "Your brand.",
          title2: "Next level.",
          subtitle:
            "Pages designed to turn visitors into customers from day one.",
          ctaPrimary: "Book a demo",
          ctaSecondary: "See cases",
          stat1: "+320%",
          stat1Label: "Conversion",
          stat2: "< 2s",
          stat2Label: "Speed",
          stat3: "100/100",
          stat3Label: "Lighthouse",
        };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0A0A0C]">
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(152,162,166,0.22), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(176,190,197,0.10), transparent 70%)",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F0F1F2 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Top nav bar */}
      <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-md bg-light-gray" />
          <span className="text-[11px] font-bold tracking-[0.15em] text-light-gray">
            {s.brand}
          </span>
        </div>
        <div className="flex items-center gap-5">
          {s.nav.map((item) => (
            <span key={item} className="text-[9px] font-medium text-light-gray/60">
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-light-gray px-3 py-1">
          <span className="text-[9px] font-semibold text-near-black">
            {s.ctaPrimary}
          </span>
          <svg
            className="h-2 w-2 text-near-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative flex flex-col items-center justify-center px-10 pt-8 text-center">
        <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[8px] font-medium uppercase tracking-[0.2em] text-light-gray/70">
          {s.overline}
        </span>
        <h1 className="text-[26px] font-bold leading-[1] tracking-tight text-light-gray">
          {s.title1}
          <br />
          <span className="text-medium-gray">{s.title2}</span>
        </h1>
        <p className="mt-3 max-w-[260px] text-[9px] leading-relaxed text-light-gray/60">
          {s.subtitle}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-light-gray px-3 py-1.5">
            <span className="text-[9px] font-semibold text-near-black">
              {s.ctaPrimary}
            </span>
            <svg
              className="h-2 w-2 text-near-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          <div className="rounded-full border border-white/20 px-3 py-1.5">
            <span className="text-[9px] font-medium text-light-gray/80">
              {s.ctaSecondary}
            </span>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="relative mt-6 flex gap-3 px-8">
        {[
          { v: s.stat1, l: s.stat1Label },
          { v: s.stat2, l: s.stat2Label },
          { v: s.stat3, l: s.stat3Label },
        ].map((stat) => (
          <div
            key={stat.l}
            className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 backdrop-blur-sm"
          >
            <p className="text-[14px] font-bold text-light-gray">{stat.v}</p>
            <p className="mt-0.5 text-[8px] uppercase tracking-wider text-light-gray/50">
              {stat.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Advantage icons ---------- */
function AdvantageIcon({ index }: { index: number }) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-xl bg-near-black/5 text-near-black transition-colors duration-300 group-hover:bg-near-black group-hover:text-light-gray";
  const icons = [
    // target / conversion
    <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>,
    // lightning / speed
    <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // sparkle / design
    <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 3z" />
    </svg>,
    // search / seo
    <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
    </svg>,
    // chart
    <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 14l4-4 4 4 5-5" />
    </svg>,
    // chat / support
    <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>,
  ];
  return <div className={base}>{icons[index]}</div>;
}

/* ---------- Feature icons ---------- */
function FeatureIcon({ index }: { index: number }) {
  const icons = [
    <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>,
    <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 10h6M7 14h4" strokeLinecap="round" />
    </svg>,
    <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5 12H3m18 0h-2M6 6l1.5 1.5M16.5 16.5L18 18M6 18l1.5-1.5M16.5 7.5L18 6" />
    </svg>,
    <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l5 5L21 4" />
    </svg>,
  ];
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-near-black text-light-gray">
      {icons[index]}
    </div>
  );
}

/* ---------- Device mockups ---------- */
function DeviceIPhone() {
  return (
    <div className="relative h-[360px] w-[170px] rounded-[38px] border border-near-black/10 bg-near-black p-2 shadow-xl shadow-near-black/10">
      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-br from-[#1a1a1c] to-[#0D0D0D]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-near-black" />
        <div className="pt-10 px-4">
          <div className="h-1 w-10 rounded-full bg-white/40" />
          <div className="mt-3 h-3 w-[80%] rounded-md bg-white/80" />
          <div className="mt-1.5 h-3 w-[60%] rounded-md bg-white/60" />
          <div className="mt-4 space-y-1.5">
            <div className="h-1.5 w-[90%] rounded-full bg-white/25" />
            <div className="h-1.5 w-[80%] rounded-full bg-white/25" />
            <div className="h-1.5 w-[70%] rounded-full bg-white/25" />
          </div>
          <div className="mt-4 h-6 w-24 rounded-full bg-white" />
          <div className="mt-4 flex gap-2">
            <div className="h-16 flex-1 rounded-xl bg-white/10" />
            <div className="h-16 flex-1 rounded-xl bg-white/10" />
          </div>
          <div className="mt-2 flex gap-2">
            <div className="h-16 flex-1 rounded-xl bg-white/10" />
            <div className="h-16 flex-1 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DeviceMacbook() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative h-[240px] w-[380px] rounded-xl border border-near-black/10 bg-near-black p-1.5 shadow-xl shadow-near-black/10">
        <div className="relative h-full w-full overflow-hidden rounded-md bg-gradient-to-br from-[#1a1a1c] to-[#0D0D0D]">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          </div>
          <div className="flex flex-col items-center gap-2 px-8 pt-6">
            <div className="h-1 w-16 rounded-full bg-white/30" />
            <div className="mt-1 h-3 w-[85%] rounded-md bg-white/80" />
            <div className="h-3 w-[65%] rounded-md bg-white/70" />
            <div className="mt-3 flex gap-2">
              <div className="h-5 w-20 rounded-full bg-white" />
              <div className="h-5 w-20 rounded-full border border-white/40" />
            </div>
          </div>
          <div className="mt-4 flex gap-2 px-6">
            <div className="h-14 flex-1 rounded-lg bg-white/10" />
            <div className="h-14 flex-1 rounded-lg bg-white/10" />
            <div className="h-14 flex-1 rounded-lg bg-white/10" />
          </div>
        </div>
      </div>
      {/* Base */}
      <div className="h-2 w-[420px] rounded-b-xl bg-gradient-to-b from-[#272729] to-[#0D0D0D]" />
      <div className="h-1 w-[80px] rounded-b-md bg-[#0D0D0D]" />
    </div>
  );
}

function DeviceIPad() {
  return (
    <div className="relative h-[300px] w-[230px] rounded-[24px] border border-near-black/10 bg-near-black p-2 shadow-xl shadow-near-black/10">
      <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1a1a1c] to-[#0D0D0D]">
        <div className="flex flex-col items-center gap-2 px-5 pt-6">
          <div className="h-1 w-12 rounded-full bg-white/30" />
          <div className="mt-1 h-3 w-[85%] rounded-md bg-white/80" />
          <div className="h-3 w-[65%] rounded-md bg-white/70" />
          <div className="mt-2 h-5 w-20 rounded-full bg-white" />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 px-4">
          <div className="h-16 rounded-lg bg-white/10" />
          <div className="h-16 rounded-lg bg-white/10" />
          <div className="h-16 rounded-lg bg-white/10" />
          <div className="h-16 rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Integrations grid ---------- */
function IntegrationsGrid() {
  const items = [
    { name: "WhatsApp", icon: <IconWhatsApp /> },
    { name: "Google Analytics", icon: <IconGA /> },
    { name: "Meta Pixel", icon: <IconMeta /> },
    { name: "HubSpot", icon: <IconHubSpot /> },
    { name: "Mailchimp", icon: <IconMailchimp /> },
    { name: "Stripe", icon: <IconStripe /> },
    { name: "Notion", icon: <IconNotion /> },
    { name: "Slack", icon: <IconSlack /> },
    { name: "Zapier", icon: <IconZapier /> },
    { name: "Calendly", icon: <IconCalendly /> },
    { name: "Google Ads", icon: <IconGoogleAds /> },
    { name: "Resend", icon: <IconResend /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {items.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.04 * i }}
          className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-near-black/6 bg-white/60 px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-near-black/12 hover:bg-white hover:shadow-md hover:shadow-near-black/5"
        >
          <div className="text-near-black transition-transform duration-300 group-hover:scale-110">
            {item.icon}
          </div>
          <span className="text-[11px] font-medium tracking-wide text-dark-gray">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- Integration SVG icons (simplified brand-neutral glyphs) ---------- */
const iconCls = "h-7 w-7";

function IconWhatsApp() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.42 1.28 4.86L2 22l5.28-1.38A9.95 9.95 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.82 14.26c-.25.7-1.24 1.34-1.86 1.44-.5.08-1.13.11-1.82-.12-.42-.14-.96-.32-1.66-.63-2.93-1.27-4.84-4.22-4.99-4.42-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.42.27-.3.58-.37.78-.37.2 0 .39 0 .56.01.18.01.42-.07.66.5.25.6.84 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.33-.3.5-.15.17-.32.38-.46.51-.15.15-.31.31-.13.6.17.3.78 1.28 1.67 2.08 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.12.66-.07.18-.2.76-.88.97-1.18.2-.3.4-.25.68-.15.27.1 1.74.82 2.04.97.3.15.5.22.58.35.07.12.07.72-.18 1.42z"/>
    </svg>
  );
}

function IconGA() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="13" width="4" height="8" rx="1" />
      <rect x="10" y="9" width="4" height="12" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="2" />
    </svg>
  );
}

function IconMeta() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M2 12c2-6 4-8 6-8s3 2 4 5 2 5 4 5 4-2 4-4-1-3-2-3-2 1-3 3-3 5-5 7-4 3-6 3-2-2-2-8z" />
    </svg>
  );
}

function IconHubSpot() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="17" cy="15" r="4" />
      <path d="M17 11V6" strokeLinecap="round" />
      <circle cx="6" cy="6" r="2" />
      <path d="M7.5 7.5l6 6" strokeLinecap="round" />
    </svg>
  );
}

function IconMailchimp() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 8l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconStripe() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" strokeLinecap="round" />
    </svg>
  );
}

function IconNotion() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7v10M8 7l8 10V7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSlack() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="9" width="8" height="3" rx="1.5" />
      <rect x="3" y="14" width="3" height="8" rx="1.5" />
      <rect x="13" y="12" width="8" height="3" rx="1.5" />
      <rect x="18" y="2" width="3" height="8" rx="1.5" />
      <rect x="9" y="13" width="3" height="8" rx="1.5" />
      <rect x="12" y="3" width="8" height="3" rx="1.5" />
    </svg>
  );
}

function IconZapier() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4" strokeLinecap="round" />
    </svg>
  );
}

function IconCalendly() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function IconGoogleAds() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M7 20L14 4M14 20L21 8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5" cy="18" r="2" />
    </svg>
  );
}

function IconResend() {
  return (
    <svg className={iconCls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 6h16v12H4z" />
      <path d="M4 6l8 7 8-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 15l4 4" strokeLinecap="round" />
    </svg>
  );
}
