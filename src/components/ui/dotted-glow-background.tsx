"use client";

import { useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Dot {
  x: number;
  y: number;
  phase: number;
  speed: number;
}

interface DottedGlowBackgroundProps {
  className?: string;
  gap?: number;
  radius?: number;
  dotColor?: string;
  glowColor?: string;
  opacity?: number;
  speedMin?: number;
  speedMax?: number;
}

export function DottedGlowBackground({
  className,
  gap = 14,
  radius = 1.5,
  dotColor = "rgba(86, 89, 89, 0.6)",
  glowColor = "rgba(152, 162, 166, 0.7)",
  opacity = 0.7,
  speedMin = 0.3,
  speedMax = 1.4,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const dotsRef = useRef<Dot[]>([]);

  const initDots = useCallback(
    (w: number, h: number) => {
      const dots: Dot[] = [];
      for (let x = gap / 2; x < w; x += gap) {
        for (let y = gap / 2; y < h; y += gap) {
          dots.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            speed: speedMin + Math.random() * (speedMax - speedMin),
          });
        }
      }
      dotsRef.current = dots;
    },
    [gap, speedMin, speedMax]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const t = time / 1000;

      for (const dot of dotsRef.current) {
        const pulse = 0.5 + 0.5 * Math.sin(t * dot.speed + dot.phase);
        const a = (0.1 + 0.9 * pulse) * opacity;
        const r = radius * (0.5 + 0.9 * pulse);

        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);

        if (pulse > 0.78) {
          ctx.shadowBlur = 4 + 14 * pulse;
          ctx.shadowColor = glowColor;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [dotColor, glowColor, opacity, radius, initDots]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0", className)}
    />
  );
}
