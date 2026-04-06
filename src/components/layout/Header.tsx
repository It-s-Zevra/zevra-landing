"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const CALENDLY = "/meeting";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const navLinks = [
    { label: t.portfolio, href: "#portfolio" },
    { label: t.products, href: "#products" },
    { label: t.careers, href: "#careers" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/60 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="relative mx-auto flex max-w-7xl items-center px-6 py-4 md:py-5 justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative z-10 w-9 h-9 md:w-10 md:h-10 shrink-0">
              <Image
                src="https://res.cloudinary.com/dg1x0cwdc/image/upload/v1774782823/logosolo_vjar0o.png"
                alt="Zevra"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            <div
              className={`hidden md:block overflow-hidden transition-all duration-700 ease-out ${
                scrolled ? "max-w-36 opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <span className="block whitespace-nowrap pl-2.5 text-[17px] font-semibold tracking-tight text-near-black">
                ZEVRA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-[14px] font-medium text-near-black transition-colors duration-300 hover:text-dark-gray after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-near-black after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1.5 text-[13px] font-medium transition-colors duration-200"
              aria-label="Switch language"
            >
              <span
                className={
                  lang === "en"
                    ? "text-near-black font-semibold"
                    : "text-medium-gray"
                }
              >
                EN
              </span>
              <span className="text-medium-gray/50 select-none">·</span>
              <span
                className={
                  lang === "es"
                    ? "text-near-black font-semibold"
                    : "text-medium-gray"
                }
              >
                ES
              </span>
            </button>

            {/* Book a call CTA */}
            <a
              href={CALENDLY}
              className="rounded-full bg-near-black px-5 py-2 text-[13px] font-medium text-light-gray transition-all duration-300 hover:bg-charcoal hover:shadow-md hover:shadow-near-black/20"
            >
              {t.schedule}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center gap-1.75 w-7">
              <span
                className={`h-0.5 rounded-full bg-near-black transition-all duration-400 ease-out origin-center ${
                  mobileOpen
                    ? "w-7 rotate-45 translate-y-[4.5px]"
                    : "w-4 ml-auto"
                }`}
              />
              <span
                className={`h-0.5 rounded-full bg-near-black transition-all duration-400 ease-out origin-center ${
                  mobileOpen
                    ? "w-7 -rotate-45 -translate-y-[4.5px]"
                    : "w-7"
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-light-gray/95 backdrop-blur-2xl" />

        <nav className="relative flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-[28px] font-medium text-near-black transition-all duration-500 ease-out hover:text-dark-gray ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Book a call CTA */}
          <a
            href={CALENDLY}
            onClick={() => setMobileOpen(false)}
            className={`rounded-full bg-near-black px-8 py-3.5 text-[15px] font-medium text-light-gray transition-all duration-500 ease-out ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${150 + navLinks.length * 80}ms`
                : "0ms",
            }}
          >
            {t.schedule}
          </a>

          {/* Mobile Lang Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className={`flex items-center gap-2 text-[14px] font-medium transition-all duration-500 ease-out ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${150 + (navLinks.length + 1) * 80}ms`
                : "0ms",
            }}
            aria-label="Switch language"
          >
            <span
              className={
                lang === "en"
                  ? "text-near-black font-semibold"
                  : "text-medium-gray"
              }
            >
              EN
            </span>
            <span className="text-medium-gray/50 select-none">·</span>
            <span
              className={
                lang === "es"
                  ? "text-near-black font-semibold"
                  : "text-medium-gray"
              }
            >
              ES
            </span>
          </button>
        </nav>
      </div>
    </>
  );
}
