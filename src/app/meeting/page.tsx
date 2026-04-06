"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const CALENDLY = "https://calendly.com/jp-valenzuela316/15min";

export default function MeetingPage() {
  useEffect(() => {
    const t = setTimeout(() => {
      window.location.href = CALENDLY;
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-near-black select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="https://res.cloudinary.com/dg1x0cwdc/image/upload/q_auto/f_auto/v1775437361/izo_nftdgh.png"
          alt="Zevra"
          width={72}
          height={72}
          className="object-contain"
          priority
        />
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-6 text-[11px] font-medium tracking-[0.65em] text-white/25 uppercase"
      >
        ZEVRA
      </motion.span>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-10 h-px bg-white/10 overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-white/45 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.6, ease: "linear", delay: 0.1 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
