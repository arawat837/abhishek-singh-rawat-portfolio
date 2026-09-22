"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Briefcase, Download, Calendar, MapPin, CheckCircle2, FileText } from "lucide-react";
import { useResumeModal } from "@/context/ResumeModalContext";

export function ExperienceSection() {
  const { experience, profile } = portfolioData;
  const { openResume } = useResumeModal();

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <SectionHeading
            badge="Work History"
            title="Experience"
            subtitle="Professional background, operational analytics, and cross-functional leadership."
            className="mb-0 md:mb-0"
          />

          {/* Dedicated View Resume CTA */}
          <div className="mt-6 md:mt-0">
            <button
              onClick={openResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#14141e] hover:bg-purple-600 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-purple-500/50 shadow-md transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-purple-400 group-hover:text-white" />
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-[#121218] border border-white/10 hover:border-purple-500/30 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-card transition-all duration-300"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-slate-300">
                      <span className="font-semibold text-purple-300">
                        {item.company}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.durationBadge}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-5">
                {item.summary}
              </p>

              {/* Achievements Bullets */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Achievements:
                </h4>
                {item.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {ach}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech & Competency Badges */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 mr-2 font-medium">
                  Applied Skills:
                </span>
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#181824] border border-white/5 text-xs text-slate-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
