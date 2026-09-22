"use client";

import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsCarousel() {
  const { projects } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = projects.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Helpers to get left, center, and right project indices
  const getPrevIndex = () => (currentIndex - 1 + total) % total;
  const getNextIndex = () => (currentIndex + 1) % total;

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionHeading
            badge="Featured Case Studies"
            title="Projects"
            subtitle="Engaging technical implementations, large-scale data pipelines, and predictive analytics."
            className="mb-0 md:mb-0"
          />

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full bg-[#14141e] hover:bg-purple-600 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-12 h-12 rounded-full bg-[#14141e] hover:bg-purple-600 text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/50 flex items-center justify-center transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop 3-Card Interactive Carousel Stage */}
        <div className="relative min-h-[640px] md:min-h-[700px] flex items-center justify-center select-none">
          {/* Left Peeking Card (Desktop only) */}
          <div
            onClick={prevSlide}
            className="hidden lg:block absolute left-0 w-[42%] max-w-[500px] z-10 cursor-pointer transform -translate-x-12 scale-[0.88] opacity-40 hover:opacity-75 transition-all duration-500 ease-out filter blur-[0.5px]"
            title="Click to view previous project"
          >
            <ProjectCard project={projects[getPrevIndex()]} isActive={false} />
          </div>

          {/* Center Active Main Card with Motion Transitions & Drag Support */}
          <div className="w-full lg:w-[65%] max-w-[760px] z-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 50 : -50,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -50 : 50,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) {
                    nextSlide();
                  } else if (info.offset.x > 60) {
                    prevSlide();
                  }
                }}
                className="cursor-grab active:cursor-grabbing"
              >
                <ProjectCard project={projects[currentIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Peeking Card (Desktop only) */}
          <div
            onClick={nextSlide}
            className="hidden lg:block absolute right-0 w-[42%] max-w-[500px] z-10 cursor-pointer transform translate-x-12 scale-[0.88] opacity-40 hover:opacity-75 transition-all duration-500 ease-out filter blur-[0.5px]"
            title="Click to view next project"
          >
            <ProjectCard project={projects[getNextIndex()]} isActive={false} />
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Jump to project ${idx + 1}: ${proj.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                idx === currentIndex
                  ? "w-8 bg-purple-500 shadow-glow-sm"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
