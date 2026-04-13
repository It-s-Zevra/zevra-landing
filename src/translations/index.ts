export type Language = "en" | "es";

export const translations = {
  en: {
    nav: {
      about: "About",
      portfolio: "Portfolio",
      products: "Landings",
      automations: "Automations",
      agents: "AI Agents",
      lab: "Business Lab",
      careers: "Careers",
      schedule: "Book a call",
    },
    hero: {
      overline: "The future is here",
      heading1: "Reimagine",
      heading2: "what's possible",
      subtitle:
        "We craft digital experiences that push boundaries and redefine the way brands connect with the world.",
      cta: "Schedule a call",
      ctaSecondary: "See our work",
    },
    trustedBy: {
      label: "Trusted by",
    },
    whyUs: {
      heading: "Built different",
      subheading:
        "We're not a traditional software factory. We combine startup speed with corporate precision — delivering faster without compromising quality.",
      cta: "Let's build together",
      features: [
        {
          title: "Rapid Execution",
          description:
            "From concept to production in record time. No layers of approval — just focused teams shipping real value.",
        },
        {
          title: "Built to Scale",
          description:
            "Startup energy meets enterprise architecture. We build systems designed to grow with your ambition.",
        },
        {
          title: "Always Evolving",
          description:
            "Continuous iteration isn't a buzzword. We measure, learn, and optimize — your product never stops improving.",
        },
      ],
    },
    ctaBanner: {
      overline: "Next level",
      heading1: "Future-Proof",
      heading2: "Your Business",
      subtitle:
        "Unleash your potential with bold AI-driven solutions, seamless integrations, and architecture designed to scale without limits.",
      cta: "Schedule a call",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      portfolio: "Portafolio",
      products: "Landings",
      automations: "Automatizaciones",
      agents: "Agentes IA",
      lab: "Business Lab",
      careers: "Únete al equipo",
      schedule: "Agenda una llamada",
    },
    hero: {
      overline: "El futuro está aquí",
      heading1: "Reimagina",
      heading2: "lo que es posible",
      subtitle:
        "Creamos experiencias digitales que rompen límites y redefinen la forma en que las marcas se conectan con el mundo.",
      cta: "Agenda una llamada",
      ctaSecondary: "Ver nuestro trabajo",
    },
    trustedBy: {
      label: "Con la confianza de",
    },
    whyUs: {
      heading: "Construido diferente",
      subheading:
        "No somos una fábrica de software tradicional. Combinamos la velocidad de una startup con la precisión corporativa — entregando más rápido sin comprometer la calidad.",
      cta: "Construyamos juntos",
      features: [
        {
          title: "Ejecución rápida",
          description:
            "Del concepto a producción en tiempo récord. Sin capas de aprobación — solo equipos enfocados entregando valor real.",
        },
        {
          title: "Construido para escalar",
          description:
            "La energía de una startup se encuentra con la arquitectura empresarial. Construimos sistemas diseñados para crecer con tu ambición.",
        },
        {
          title: "Siempre evolucionando",
          description:
            "La iteración continua no es una moda. Medimos, aprendemos y optimizamos — tu producto nunca deja de mejorar.",
        },
      ],
    },
    ctaBanner: {
      overline: "Siguiente nivel",
      heading1: "A prueba",
      heading2: "del futuro",
      subtitle:
        "Libera tu potencial con soluciones impulsadas por IA, integraciones perfectas y arquitectura diseñada para escalar sin límites.",
      cta: "Agenda una llamada",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
} as const;
