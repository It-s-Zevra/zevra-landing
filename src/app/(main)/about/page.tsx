"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY = "/meeting";

const IMG_JP =
  "https://res.cloudinary.com/dg1x0cwdc/image/upload/q_auto/f_auto/v1776050115/1742335408214_axmqrv.jpg";
const IMG_IVAN =
  "https://res.cloudinary.com/dg1x0cwdc/image/upload/q_auto/f_auto/v1776050121/IvanOfficial_sln22t.jpg";

const copy = {
  es: {
    hero: {
      overline: "Nosotros",
      title1: "Construimos lo que",
      title2: "nos hubiera gustado tener.",
      subtitle:
        "No somos otra software factory. No somos una consultora más. Somos dos founders que vivieron en carne propia lo difícil que es hacer que un negocio funcione — y decidimos construir el equipo que les hubiera salvado la vida.",
    },
    foundersOverline: "Los founders",
    foundersHeading: "Dos caminos. Un mismo problema.",
    jp: {
      name: "Juan Pablo Valenzuela",
      role: "Co-founder · Estrategia & Negocio",
      tag: "JP",
      quickFacts: [
        { label: "Formación", value: "Ingeniero Civil Industrial" },
        { label: "Exit", value: "Capi Foods → USA" },
        { label: "Rol hoy", value: "Business · Growth · Operaciones" },
      ],
      quote:
        "El problema casi nunca es la idea, ni la tecnología. Es cómo se estructura el negocio para que realmente funcione.",
      bio: [
        "He pasado los últimos años construyendo negocios desde cero. Me ha tocado estar en todas las etapas: desde la idea inicial, pasando por validar, vender, levantar financiamiento, escalar… y también quebrar o cerrar.",
        "Fui fundador de Capi Foods, donde llevamos un producto desde una idea hasta supermercados y exportaciones a Estados Unidos. En ese proceso levanté financiamiento, armé equipo y, sobre todo, aprendí lo difícil que es hacer que un negocio funcione en la vida real.",
        "Después entré al mundo del venture building, trabajando con empresas y startups en la creación de nuevos negocios. Eso me permitió ver el otro lado: cómo las organizaciones piensan, evalúan oportunidades y toman decisiones.",
        "Hoy lo que más me motiva es ordenar, dar claridad y conectar estrategia con ejecución en negocios reales.",
      ],
    },
    ivan: {
      name: "Iván Sangueza",
      role: "Co-founder · Producto & Tecnología",
      tag: "IS",
      quickFacts: [
        { label: "Formación", value: "Ingeniero en Sistemas" },
        { label: "Exit", value: "Menti Academy" },
        { label: "Rol hoy", value: "Producto · IA · Automatización" },
      ],
      quote:
        "La tecnología por sí sola no sirve de nada si no resuelve un problema real.",
      bio: [
        "Siempre me ha gustado construir cosas: desde mis primeros proyectos como desarrollador, hasta productos completos que hoy han tenido usuarios reales y resultados concretos.",
        "Partí en el mundo del desarrollo y diseño — frontend y UX/UI — pero rápidamente empecé a involucrarme más en producto, growth y cómo la tecnología realmente impacta un negocio.",
        "Fundé Menti Academy, una plataforma educativa que escalamos a miles de usuarios y finalmente tuvo un exit. Después, en Güil Mobility Ventures, construí y escalé startups desde cero combinando desarrollo, datos y growth.",
        "En Seiff fui CTO y cofundador, donde construí el producto completo desde cero: automatizaciones, flujos, inteligencia artificial. Todo pensado para funcionar de verdad y escalar.",
      ],
    },
    story: {
      overline: "Nuestra historia",
      heading: "Nos conocimos construyendo.",
      chapters: [
        {
          year: "2021",
          title: "Güil Mobility Ventures",
          body: "Trabajábamos en lo mismo, pero desde lados distintos. JP metido en negocio, estrategia y oportunidades. Iván enfocado en producto, tecnología y ejecución. Conectamos rápido: hablábamos el mismo idioma desde perspectivas distintas.",
        },
        {
          year: "2023",
          title: "Seiff",
          body: "Decidimos emprender juntos. Ya no era teoría: era el mercado real. Construimos desde cero, levantamos el producto, validamos, conseguimos tracción, levantamos capital… y también nos tocó cerrarla. Y esa experiencia nos dejó claro algo muy importante.",
        },
        {
          year: "2026",
          title: "Zevra",
          body: "Volvimos a construir juntos. Un modelo donde la tecnología no sea una carga más, sino una ayuda real. Donde no tengas que entender IA para beneficiarte de ella. Donde puedas ordenar tu negocio y crecer sin perder el foco.",
        },
      ],
    },
    manifesto: {
      overline: "Por qué hacemos esto",
      heading: "Vemos el mismo patrón, una y otra vez.",
      lead: "Empresas funcionando con muchísimo esfuerzo, pero con desorden, procesos manuales, pérdida de tiempo y oportunidades. Negocios que podrían crecer mucho más, pero que están atrapados en el día a día.",
      points: [
        {
          problem: "Las software factories",
          reality: "son caras y lentas.",
        },
        {
          problem: "Las consultoras",
          reality: "son demasiado teóricas.",
        },
        {
          problem: "Las herramientas",
          reality: "no están pensadas para quienes no son técnicos.",
        },
        {
          problem: "La inteligencia artificial",
          reality: "genera más ansiedad que claridad.",
        },
      ],
      closing:
        "Entendemos los dos lados. El de quien necesita que su negocio funcione, y el de quien puede construir lo necesario para que eso ocurra. Por eso estamos acá.",
    },
    cta: {
      overline: "Hablemos",
      heading1: "Queremos conocer",
      heading2: "tu negocio.",
      subtitle:
        "Una llamada de 20 minutos. Nos cuentas qué estás construyendo, te damos una perspectiva honesta y salimos con un plan concreto.",
      cta: "Agenda una llamada",
    },
  },
  en: {
    hero: {
      overline: "About us",
      title1: "We built what",
      title2: "we wish we'd had.",
      subtitle:
        "We're not another software factory. We're not just another consultancy. We're two founders who learned first-hand how hard it is to make a business work — and decided to build the team that would have saved us back then.",
    },
    foundersOverline: "The founders",
    foundersHeading: "Two paths. Same problem.",
    jp: {
      name: "Juan Pablo Valenzuela",
      role: "Co-founder · Strategy & Business",
      tag: "JP",
      quickFacts: [
        { label: "Background", value: "Industrial Engineer" },
        { label: "Exit", value: "Capi Foods → USA" },
        { label: "Today", value: "Business · Growth · Ops" },
      ],
      quote:
        "The problem is almost never the idea or the tech. It's how the business is structured to actually work.",
      bio: [
        "I've spent the last few years building businesses from scratch. I've been in every stage: from the initial idea, to validation, selling, fundraising, scaling… and also going broke or shutting down.",
        "I founded Capi Foods, where we took a product from an idea to supermarkets and exports to the United States. Along the way I raised capital, built a team and, above all, learned how hard it is to make a business work in real life.",
        "Then I stepped into venture building, working with companies and startups to create new businesses. That let me see the other side: how organizations think, evaluate opportunities and make decisions.",
        "What motivates me today is exactly that: bringing order, clarity, and connecting strategy with execution in real businesses.",
      ],
    },
    ivan: {
      name: "Iván Sangueza",
      role: "Co-founder · Product & Technology",
      tag: "IS",
      quickFacts: [
        { label: "Background", value: "Systems Engineer" },
        { label: "Exit", value: "Menti Academy" },
        { label: "Today", value: "Product · AI · Automation" },
      ],
      quote:
        "Technology by itself is useless if it doesn't solve a real problem.",
      bio: [
        "I've always loved building: from my first projects as a developer to full products with real users and concrete results.",
        "I started in development and design — frontend and UX/UI — but I quickly got pulled into product, growth and how technology actually impacts a business.",
        "I founded Menti Academy, an education platform we scaled to thousands of users that eventually had an exit. Then at Güil Mobility Ventures I built and scaled startups from zero combining dev, data and growth.",
        "At Seiff I was CTO and co-founder, where I built the entire product from scratch: automations, flows, AI. All designed to actually work and scale.",
      ],
    },
    story: {
      overline: "Our story",
      heading: "We met while building.",
      chapters: [
        {
          year: "2021",
          title: "Güil Mobility Ventures",
          body: "We worked on the same things from different angles. JP on business, strategy, opportunities. Iván on product, tech, execution. We clicked fast: same language, different perspectives.",
        },
        {
          year: "2023",
          title: "Seiff",
          body: "We decided to build together. No more theory — real market. We built from scratch, launched the product, validated, got traction, raised capital… and we also had to shut it down. That experience made something very clear.",
        },
        {
          year: "2026",
          title: "Zevra",
          body: "We came back together to build. A model where technology isn't another burden, but real help. Where you don't need to understand AI to benefit from it. Where you can organize your business and grow without losing focus.",
        },
      ],
    },
    manifesto: {
      overline: "Why we do this",
      heading: "We keep seeing the same pattern.",
      lead: "Companies running on massive effort but stuck in chaos, manual processes, wasted time and missed opportunities. Businesses that could grow much more, but are trapped in day-to-day operations.",
      points: [
        {
          problem: "Software factories",
          reality: "are expensive and slow.",
        },
        {
          problem: "Consultancies",
          reality: "are too theoretical.",
        },
        {
          problem: "Tools",
          reality: "aren't built for non-technical people.",
        },
        {
          problem: "AI",
          reality: "creates more anxiety than clarity.",
        },
      ],
      closing:
        "We understand both sides. The side that needs the business to work, and the side that can build what makes it happen. That's why we're here.",
    },
    cta: {
      overline: "Let's talk",
      heading1: "We'd love to hear",
      heading2: "about your business.",
      subtitle:
        "A 20-minute call. You tell us what you're building, we give you an honest take, and you leave with a concrete plan.",
      cta: "Book a call",
    },
  },
} as const;

export default function AboutPage() {
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
            className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight text-near-black sm:text-5xl md:text-6xl lg:text-[80px]"
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

      {/* ====== FOUNDERS ====== */}
      <section className="relative w-full bg-white/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.foundersOverline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.foundersHeading}
            </motion.h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            <FounderBlock
              index={0}
              name={t.jp.name}
              role={t.jp.role}
              tag={t.jp.tag}
              image={IMG_JP}
              quote={t.jp.quote}
              bio={t.jp.bio}
              quickFacts={t.jp.quickFacts}
            />
            <FounderBlock
              index={1}
              name={t.ivan.name}
              role={t.ivan.role}
              tag={t.ivan.tag}
              image={IMG_IVAN}
              quote={t.ivan.quote}
              bio={t.ivan.bio}
              quickFacts={t.ivan.quickFacts}
              reverse
            />
          </div>
        </div>
      </section>

      {/* ====== STORY TIMELINE ====== */}
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0D0D0D_85%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-20 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.story.overline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-light-gray md:text-5xl"
            >
              {t.story.heading}
            </motion.h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden
              className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-medium-gray/40 to-transparent md:left-1/2 md:-translate-x-px"
            />

            <div className="space-y-16 md:space-y-24">
              {t.story.chapters.map((chapter, i) => (
                <TimelineChapter
                  key={chapter.year}
                  chapter={chapter}
                  side={i % 2 === 0 ? "left" : "right"}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== MANIFESTO ====== */}
      <section className="relative w-full bg-light-gray py-28 md:py-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
            >
              {t.manifesto.overline}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold tracking-tight text-near-black md:text-5xl"
            >
              {t.manifesto.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "120px" }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 text-base leading-relaxed text-dark-gray md:text-lg"
            >
              {t.manifesto.lead}
            </motion.p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {t.manifesto.points.map((p, i) => (
              <motion.div
                key={p.problem}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "120px" }}
                transition={{ duration: 0.5, delay: 0.04 * i }}
                className="flex items-start gap-4 rounded-2xl border border-near-black/6 bg-white/60 p-6 transition-all duration-300 hover:border-near-black/12 hover:bg-white"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-near-black text-[11px] font-bold text-light-gray">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-dark-gray">
                  <span className="font-semibold text-near-black">
                    {p.problem}{" "}
                  </span>
                  {p.reality}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mx-auto mt-14 max-w-3xl text-center text-xl font-medium leading-relaxed text-near-black md:text-2xl"
          >
            {t.manifesto.closing}
          </motion.p>
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
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-medium-gray"
          >
            {t.cta.overline}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.05] tracking-tight text-light-gray sm:text-5xl md:text-7xl"
          >
            {t.cta.heading1}
            <br />
            <span className="text-medium-gray">{t.cta.heading2}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "120px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dark-gray md:text-lg"
          >
            {t.cta.subtitle}
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
              {t.cta.cta}
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
        </div>
      </section>
    </main>
  );
}

/* ---------- Founder block ---------- */
function FounderBlock({
  index,
  name,
  role,
  tag,
  image,
  quote,
  bio,
  quickFacts,
  reverse = false,
}: {
  index: number;
  name: string;
  role: string;
  tag: string;
  image: string;
  quote: string;
  bio: readonly string[];
  quickFacts: readonly { label: string; value: string }[];
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-near-black/8 shadow-2xl shadow-near-black/10">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 448px, 100vw"
            className="object-cover transition-all duration-700 hover:scale-105"
            priority={index === 0}
          />
          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-near-black/40 via-transparent to-transparent" />
          {/* Tag badge */}
          <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-light-gray/20 bg-near-black/80 text-sm font-bold text-light-gray backdrop-blur-sm">
            {tag}
          </div>
          {/* Name at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-light-gray/70">
              {role}
            </p>
            <p className="mt-1 text-xl font-bold text-light-gray">{name}</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Quick facts */}
        <div className="mb-6 flex flex-wrap gap-2">
          {quickFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-xl border border-near-black/8 bg-white/60 px-4 py-2"
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-medium-gray">
                {f.label}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-near-black">
                {f.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="relative mb-6 border-l-2 border-near-black pl-5">
          <p className="text-xl font-semibold leading-snug text-near-black md:text-2xl">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        {/* Bio */}
        <div className="space-y-4">
          {bio.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-dark-gray md:text-base">
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Timeline chapter ---------- */
function TimelineChapter({
  chapter,
  side,
  index,
}: {
  chapter: { year: string; title: string; body: string };
  side: "left" | "right";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative pl-16 md:pl-0"
    >
      {/* Dot */}
      <div className="absolute left-5 top-2 z-10 md:left-1/2 md:-translate-x-1/2">
        <div className="relative flex h-4 w-4 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-light-gray/40" />
          <span className="relative h-3 w-3 rounded-full border-2 border-near-black bg-light-gray" />
        </div>
      </div>

      <div
        className={`md:grid md:grid-cols-2 md:gap-12 ${
          side === "right" ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div
          className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8 ${
            side === "left" ? "md:text-right" : ""
          }`}
        >
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-medium-gray">
            {chapter.year}
          </span>
          <h3 className="mt-3 text-2xl font-bold text-light-gray">
            {chapter.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-medium-gray md:text-base">
            {chapter.body}
          </p>
        </div>
        <div />
      </div>
    </motion.div>
  );
}
