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
      overline: "Most businesses grow by effort",
      heading1: "The best ones",
      heading2: "grow with systems",
      subtitle:
        "We build systems that get customers, automate processes and scale your business with technology and artificial intelligence.",
      cta: "Schedule a call",
      ctaSecondary: "See our work",
    },
    trustedBy: {
      label: "Trusted by",
    },
    whyUs: {
      heading: "How we turn your business into a system that grows",
      subheading:
        "We design and build systems that get customers, automate your operations and scale your business.",
      cta: "Let's build together",
      features: [
        {
          title: "Fast results",
          description:
            "We implement in days, not months. You start seeing results from the beginning.",
        },
        {
          title: "Built to grow",
          description:
            "We don't build for the sake of it. We design systems that make sense for your business.",
        },
        {
          title: "Continuous improvement",
          description:
            "We measure, optimize and automate so your business never stops moving forward.",
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
      overline: "La mayoría de los negocios crece por esfuerzo",
      heading1: "Los mejores",
      heading2: "crecen con sistemas",
      subtitle:
        "Creamos sistemas que consiguen clientes, automatizan procesos y escalan tu negocio con tecnología e inteligencia artificial.",
      cta: "Agenda una llamada",
      ctaSecondary: "Ver nuestro trabajo",
    },
    trustedBy: {
      label: "Con la confianza de",
    },
    whyUs: {
      heading: "Cómo convertimos tu negocio en un sistema que crece",
      subheading:
        "Diseñamos y construimos sistemas que consiguen clientes, automatizan tu operación y escalan tu negocio.",
      cta: "Construyamos juntos",
      features: [
        {
          title: "Resultados rápidos",
          description:
            "Implementamos en días, no meses. Empiezas a ver resultados desde el inicio.",
        },
        {
          title: "Pensado para crecer",
          description:
            "No construimos por construir. Diseñamos sistemas que tienen sentido para tu negocio.",
        },
        {
          title: "Mejora continua",
          description:
            "Medimos, optimizamos y automatizamos para que tu negocio no deje de avanzar.",
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
