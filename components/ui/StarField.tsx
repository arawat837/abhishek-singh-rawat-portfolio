"use client";

import React, { useEffect, useRef } from "react";

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mediaQuery.matches;

    // Generate restrained, subtle particles
    const starCount = Math.floor((width * height) / 14000);
    const stars: {
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      pulseSpeed: number;
      pulseOffset: number;
    }[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.15,
        speed: (Math.random() * 0.15 + 0.05) * (isReduced ? 0 : 1),
        pulseSpeed: Math.random() * 0.015 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!isReduced) {
          star.y -= star.speed;
          if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
          }
        }

        const currentOpacity =
          star.opacity * (0.7 + 0.3 * Math.sin(time * star.pulseSpeed + star.pulseOffset));

        ctx.fillStyle = `rgba(216, 180, 254, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
