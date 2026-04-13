"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

type MacbookScrollProps = {
  badge?: React.ReactNode;
  screen?: React.ReactNode;
  showGradient?: boolean;
};

export const MacbookScroll = ({
  badge,
  screen,
  showGradient,
}: MacbookScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[150vh] shrink-0 scale-75 transform flex-col items-center justify-start py-10 sm:scale-90 md:scale-100 md:py-20"
    >
      <Lid
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
        screen={screen}
      />

      {/* Base */}
      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-[#272729]">
        {/* Hinge */}
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
          <div className="mx-auto h-full w-[80%]">
            <Keypad />
          </div>
          <div className="mx-auto h-full w-[10%] overflow-hidden">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-light-gray via-light-gray to-transparent" />
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  screen,
}: {
  scaleX: MotionValue<number>;
  scaleY: MotionValue<number>;
  rotate: MotionValue<number>;
  translate: MotionValue<number>;
  screen?: React.ReactNode;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div
          style={{ boxShadow: "0px 2px 0px 2px #171717 inset" }}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-white/70">
            ZEVRA
          </span>
        </div>
      </div>
      <motion.div
        style={{
          scaleX,
          scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#010101] p-2"
      >
        <div className="absolute inset-0 overflow-hidden rounded-lg bg-[#272729]">
          {screen}
        </div>
      </motion.div>
    </div>
  );
};

const Trackpad = () => {
  return (
    <div
      className="mx-auto my-1 h-32 w-[40%] rounded-xl"
      style={{
        boxShadow: "0px 0px 1px 1px #00000020 inset",
      }}
    />
  );
};

const SpeakerGrid = () => {
  return (
    <div
      className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
};

const KBD = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#0A090D] p-[0.5px] text-[5px] text-neutral-200",
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center rounded-[3.5px] bg-[#0A090D]">
        {children}
      </div>
    </div>
  );
};

const Keypad = () => {
  return (
    <div className="mx-1 h-full rounded-md bg-[#050505] p-1">
      {/* Row 1 */}
      <Row>
        <KBD className="w-10 items-end justify-start pl-[4px] pb-[2px]">
          esc
        </KBD>
        {Array.from({ length: 12 }).map((_, i) => (
          <KBD key={`f-${i}`} className="items-end justify-start pl-[4px] pb-[2px]">
            F{i + 1}
          </KBD>
        ))}
        <KBD className="items-end justify-start pl-[4px] pb-[2px]" />
      </Row>
      {/* Row 2 */}
      <Row>
        {"~1234567890-=".split("").map((c, i) => (
          <KBD key={`n-${i}`} className="items-end justify-start pl-[4px] pb-[2px]">
            {c}
          </KBD>
        ))}
        <KBD className="w-10 items-end justify-end pr-[4px] pb-[2px]">
          del
        </KBD>
      </Row>
      {/* Row 3 */}
      <Row>
        <KBD className="w-10 items-end justify-start pl-[4px] pb-[2px]">
          tab
        </KBD>
        {"QWERTYUIOP[]\\".split("").map((c, i) => (
          <KBD key={`q-${i}`} className="items-end justify-start pl-[4px] pb-[2px]">
            {c}
          </KBD>
        ))}
      </Row>
      {/* Row 4 */}
      <Row>
        <KBD className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]">
          caps
        </KBD>
        {"ASDFGHJKL;'".split("").map((c, i) => (
          <KBD key={`a-${i}`} className="items-end justify-start pl-[4px] pb-[2px]">
            {c}
          </KBD>
        ))}
        <KBD className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]">
          return
        </KBD>
      </Row>
      {/* Row 5 */}
      <Row>
        <KBD className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]">
          shift
        </KBD>
        {"ZXCVBNM,./".split("").map((c, i) => (
          <KBD key={`z-${i}`} className="items-end justify-start pl-[4px] pb-[2px]">
            {c}
          </KBD>
        ))}
        <KBD className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]">
          shift
        </KBD>
      </Row>
      {/* Row 6 */}
      <Row>
        <KBD className="items-end justify-start pl-[4px] pb-[2px]">fn</KBD>
        <KBD className="items-end justify-start pl-[4px] pb-[2px]">⌃</KBD>
        <KBD className="items-end justify-start pl-[4px] pb-[2px]">⌥</KBD>
        <KBD className="w-8 items-end justify-start pl-[4px] pb-[2px]">⌘</KBD>
        <KBD className="w-[8.2rem]" />
        <KBD className="w-8 items-end justify-end pr-[4px] pb-[2px]">⌘</KBD>
        <KBD className="items-end justify-end pr-[4px] pb-[2px]">⌥</KBD>
      </Row>
    </div>
  );
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{children}</div>;
};
