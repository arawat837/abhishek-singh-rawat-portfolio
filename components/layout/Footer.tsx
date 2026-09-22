"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { useResumeModal } from "@/context/ResumeModalContext";

export function Footer() {
  const { profile } = portfolioData;
  const { openResume } = useResumeModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08080c] border-t border-white/10 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand & Positioning */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                {profile.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono">
                {profile.initials}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              {profile.title} • {profile.location}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-[#14141e] hover:bg-purple-600 text-slate-300 hover:text-white border border-white/5 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-[#14141e] hover:bg-purple-600 text-slate-300 hover:text-white border border-white/5 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-[#14141e] hover:bg-purple-600 text-slate-300 hover:text-white border border-white/5 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top of page"
              className="p-2.5 rounded-xl bg-[#14141e] hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all duration-200 flex items-center gap-1.5 text-xs ml-2"
            >
              <ArrowUp className="w-4 h-4 text-purple-400" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {profile.name}. Grounded in verified credentials & analytics portfolio.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={openResume}
              className="hover:text-purple-300 transition-colors cursor-pointer"
            >
              View Resume
            </button>
            <span>•</span>
            <span className="text-slate-400">Built with Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
