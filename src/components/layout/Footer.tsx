"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const navLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.products, href: "/landing" },
    { label: t.nav.automations, href: "/automations" },
    { label: t.nav.agents, href: "/agents" },
    { label: t.nav.lab, href: "/lab" },
    { label: t.nav.careers, href: "/careers" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-near-black/5"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="https://res.cloudinary.com/dg1x0cwdc/image/upload/v1774782823/logosolo_vjar0o.png"
              alt="Zevra"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-base font-semibold tracking-tight text-near-black">
              ZEVRA
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-dark-gray transition-colors duration-300 hover:text-near-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-near-black/5" />

        {/* Bottom row */}
        <div className="flex items-center justify-center">
          <p className="text-xs text-medium-gray">
            &copy; {new Date().getFullYear()} Zevra. {t.footer.rights}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
