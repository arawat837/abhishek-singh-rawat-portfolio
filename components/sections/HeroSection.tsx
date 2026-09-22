"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Download, Linkedin, Github, Mail, Sparkles, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useResumeModal } from "@/context/ResumeModalContext";

export function HeroSection() {
  const { profile } = portfolioData;
  const { openResume } = useResumeModal();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:py-32 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Positioning, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>{profile.roleBadge}</span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-4">
              {profile.name}
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-5">
              {profile.title}
            </p>

            {/* Value Proposition */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {profile.headline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={openResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#14141e] hover:bg-[#1a1a28] text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-purple-500/50 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links & Quick Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-6 border-t border-white/10 text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Abhishek Singh Rawat on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Abhishek Singh Rawat on GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Email Abhishek Singh Rawat"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Portrait with Glowing Aura matching reference video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer Glowing Orbital Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none scale-110" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-violet-500/10 to-transparent blur-2xl pointer-events-none" />
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-50 blur-sm pointer-events-none" />

              {/* Portrait Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-500/40 bg-[#121218] shadow-2xl">
                <Image
                  src={profile.portraitUrl}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top filter contrast-[1.04]"
                />
              </div>

              {/* Floating Metric Badge 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-2 -right-4 sm:top-2 sm:-right-2 bg-[#12121c]/90 backdrop-blur-md border border-purple-500/30 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 z-10"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xs">
                  AUC
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">0.985</div>
                  <div className="text-[10px] text-slate-400">Churn Model</div>
                </div>
              </motion.div>

              {/* Floating Metric Badge 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 sm:bottom-2 sm:-left-2 bg-[#12121c]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 z-10"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
                  DB
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">18.4M+</div>
                  <div className="text-[10px] text-slate-400">Records Analyzed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Metric Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {profile.metrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#121218]/70 backdrop-blur-md border border-white/5 hover:border-purple-500/30 rounded-2xl p-4 sm:p-5 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-0.5">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {metric.subtext}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
