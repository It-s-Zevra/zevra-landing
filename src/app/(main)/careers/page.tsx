"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  es: {
    hero: {
      overline: "Carreras · Próximamente",
      title1: "No estamos contratando.",
      title2: "Todavía.",
      subtitle:
        "Estamos construyendo el equipo más afilado de founders, ingenieros y diseñadores de Latam. Cuando abramos posiciones, queremos que te enteres primero.",
    },
    rolesOverline: "Roles que estamos diseñando",
    rolesHeading: "Posiciones pensadas para gente sin término medio.",
    rolesSub:
      "Estos son los tipos de roles que estamos definiendo. Cuando abramos, solo buscaremos gente que ya hizo lo que aparece en cada tarjeta.",
    locked: "Bloqueado",
    level: {
      senior: "Senior",
      mid: "Semi-senior",
    },
    roles: [
      {
        level: "senior",
        title: "AI Agent Engineer",
        description:
          "Entrenas agentes que negocian, cierran y aprenden solos. Dominas LLMs, RAG, tool calling y la diferencia entre un prompt y un producto.",
        skills: ["Python", "LangGraph", "Vector DBs", "Evals"],
      },
      {
        level: "senior",
        title: "Automation Architect",
        description:
          "Diseñas flujos que reemplazan equipos completos. Conoces n8n, Make, Zapier y cuándo cada uno es la respuesta correcta (o ninguna).",
        skills: ["n8n", "Zapier", "APIs", "Integrations"],
      },
      {
        level: "senior",
        title: "Product Designer",
        description:
          "Diseñas landings que convierten y productos que la gente usa a diario. Figma no es tu herramienta, es tu idioma.",
        skills: ["Figma", "Motion", "Copy", "Systems"],
      },
      {
        level: "mid",
        title: "Full-stack Engineer",
        description:
          "Construyes productos end-to-end con Next.js, Supabase y lo que haga falta. Te importa el código limpio, pero te importa más que funcione.",
        skills: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
      },
      {
        level: "mid",
        title: "AI Prompt Engineer",
        description:
          "Entiendes que un buen prompt es 30% negocio, 30% lenguaje y 40% iteración. Mides, versionas y mejoras cada conversación.",
        skills: ["Claude", "OpenAI", "Evals", "Python"],
      },
      {
        level: "mid",
        title: "Growth Engineer",
        description:
          "Unes marketing y producto. Automatizas adquisición, mides funnels reales y entiendes que SEO no es magia — es disciplina.",
        skills: ["Analytics", "SEO", "Ads", "Landing Ops"],
      },
    ],
    cta: {
      heading: "Queremos conocerte antes.",
      subtitle:
        "Si alguno de estos roles te describe — o crees que podemos inventar uno para ti — escríbenos. No hay formulario. No hay HR. Solo una conversación.",
      button: "Escríbeme directo",
      email: "hello@zevraz.com",
    },
  },
  en: {
    hero: {
      overline: "Careers · Coming soon",
      title1: "We're not hiring.",
      title2: "Yet.",
      subtitle:
        "We're building the sharpest team of founders, engineers and designers in Latam. When we open positions, we want you to hear about it first.",
    },
    rolesOverline: "Roles we're designing",
    rolesHeading: "Positions built for people without a middle gear.",
    rolesSub:
      "These are the kinds of roles we're shaping. When we open, we'll only look for people who've already done what's on each card.",
    locked: "Locked",
    level: {
      senior: "Senior",
      mid: "Mid-senior",
    },
    roles: [
      {
        level: "senior",
        title: "AI Agent Engineer",
        description:
          "You train agents that negotiate, close and learn on their own. You master LLMs, RAG, tool calling and the difference between a prompt and a product.",
        skills: ["Python", "LangGraph", "Vector DBs", "Evals"],
      },
      {
        level: "senior",
        title: "Automation Architect",
        description:
          "You design flows that replace entire teams. You know n8n, Make, Zapier and when each is the right answer (or none of them).",
        skills: ["n8n", "Zapier", "APIs", "Integrations"],
      },
      {
        level: "senior",
        title: "Product Designer",
        description:
          "You design landings that convert and products people use daily. Figma isn't your tool — it's your language.",
        skills: ["Figma", "Motion", "Copy", "Systems"],
      },
      {
        level: "mid",
        title: "Full-stack Engineer",
        description:
          "You ship end-to-end products with Next.js, Supabase and whatever it takes. Clean code matters, shipping matters more.",
        skills: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
      },
      {
        level: "mid",
        title: "AI Prompt Engineer",
        description:
          "You understand a great prompt is 30% business, 30% language and 40% iteration. You measure, version and refine every conversation.",
        skills: ["Claude", "OpenAI", "Evals", "Python"],
      },
      {
        level: "mid",
        title: "Growth Engineer",
        description:
          "You bridge marketing and product. You automate acquisition, measure real funnels and know SEO isn't magic — it's discipline.",
        skills: ["Analytics", "SEO", "Ads", "Landing Ops"],
      },
    ],
    cta: {
      heading: "We want to know you now.",
      subtitle:
        "If any of these roles describes you — or you think we could invent one for you — write to us. No form. No HR. Just a conversation.",
      button: "Email me directly",
      email: "hello@zevraz.com",
    },
  },
} as const;

export default function CareersPage() {
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

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 px-6 pt-36 pb-24 text-center md:pt-44 md:pb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-near-black/10 bg-white/60 px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-dark-gray backdrop-blur-sm"
          >
            <IconLock className="h-3 w-3" />
            {t.hero.overline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-near-black sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            {t.hero.title1}
            <br />
            <span className="text-dark-gray">{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="max-w-2xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* ====== ROLES GRID ====== */}
      <section className="relative w-full bg-white/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.rolesOverline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.rolesHeading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.rolesSub}
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.roles.map((role, i) => (
              <LockedRoleCard
                key={role.title}
                role={role}
                index={i}
                lockedLabel={t.locked}
                levelLabel={
                  role.level === "senior" ? t.level.senior : t.level.mid
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA ====== */}
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
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-light-gray sm:text-5xl md:text-6xl"
          >
            {t.cta.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.cta.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={`mailto:${t.cta.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-light-gray px-8 py-4 text-sm font-semibold text-near-black transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-light-gray/10"
            >
              {t.cta.button}
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xs text-medium-gray"
          >
            {t.cta.email}
          </motion.p>
        </div>
      </section>
    </main>
  );
}

/* ---------- Locked role card ---------- */
function LockedRoleCard({
  role,
  index,
  lockedLabel,
  levelLabel,
}: {
  role: {
    level: string;
    title: string;
    description: string;
    skills: readonly string[];
  };
  index: number;
  lockedLabel: string;
  levelLabel: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "120px" }}
      transition={{ duration: 0.5, delay: 0.04 * index }}
      className="group relative overflow-hidden rounded-2xl border border-near-black/6 bg-white/60 p-7 transition-all duration-300 hover:border-near-black/12 hover:bg-white hover:shadow-lg hover:shadow-near-black/5"
    >
      {/* Locked badge (floats top-right) */}
      <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-near-black/10 bg-near-black/5 px-2.5 py-1 backdrop-blur-sm transition-all duration-300 group-hover:border-near-black/20 group-hover:bg-near-black group-hover:text-light-gray">
        <IconLock className="h-2.5 w-2.5" />
        <span className="text-[9px] font-semibold uppercase tracking-wider">
          {lockedLabel}
        </span>
      </div>

      {/* Level pill */}
      <span
        className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${
          role.level === "senior"
            ? "bg-near-black text-light-gray"
            : "bg-near-black/8 text-near-black"
        }`}
      >
        {levelLabel}
      </span>

      <h3 className="mt-4 text-xl font-bold text-near-black">{role.title}</h3>

      {/* Description — slightly blurred until hover */}
      <p className="mt-3 text-sm leading-relaxed text-dark-gray transition-all duration-500 group-hover:blur-0 md:blur-[0.5px] md:group-hover:blur-0">
        {role.description}
      </p>

      {/* Skills chips */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {role.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-near-black/8 bg-white/80 px-2 py-0.5 text-[10px] font-medium text-dark-gray"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Decorative lock glow in corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-near-black/[0.03] blur-3xl transition-all duration-700 group-hover:bg-near-black/[0.08]"
      />
    </motion.div>
  );
}

function IconLock({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.2}
      aria-hidden
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" />
    </svg>
  );
}
