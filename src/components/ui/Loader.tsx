"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const t = setTimeout(() => setVisible(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-near-black select-none"
        >
          {/* Logo */}
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

          {/* Brand wordmark */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="mt-6 text-[11px] font-medium tracking-[0.65em] text-white/25 uppercase"
          >
            ZEVRA
          </motion.span>

          {/* Progress line at bottom */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-10 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-white/45 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "linear", delay: 0.1 }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
