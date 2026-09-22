"use client";

import React from "react";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const { profile, education, skills } = portfolioData;

  // Extract key competency tags from skills
  const coreCompetencies = [
    "SQL & PostgreSQL",
    "Python & R",
    "Power BI",
    "Churn Modeling",
    "Customer 360",
    "Business Analytics",
    "Exploratory Data Analysis",
    "Requirements Gathering",
    "Executive Reporting",
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Background & Focus"
          title="About Me"
          subtitle="Analytical rigor meets practical business problem-solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Professional Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-300 font-normal">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141e]/60 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Data-to-Strategy Alignment
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Translating quantitative models into concrete management actions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14141e]/60 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Cross-Functional Leadership
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Gathering requirements & presenting findings to operational stakeholders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Core Competencies Card matching reference video */}
          <div className="lg:col-span-5">
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-card relative overflow-hidden">
              {/* Subtle top purple border line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />

              {/* Education Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Education</h3>
                    <p className="text-xs text-slate-400">Academic Credentials</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-medium">
                  Active
                </span>
              </div>

              {/* Degrees summary */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="text-base font-bold text-white">
                      {education[0].degree}
                    </h4>
                    <span className="text-xs font-mono text-purple-400">
                      {education[0].period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-300">
                    {education[0].field}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {education[0].institution}, {education[0].location}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-white">
                      {education[1].degree}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">
                      {education[1].grade}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {education[1].field}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {education[1].institution}
                  </p>
                </div>
              </div>

              {/* Core Competencies Box matching reference video */}
              <div className="pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-purple-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Core Competencies
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {coreCompetencies.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-lg bg-[#181824] border border-white/5 text-slate-300 hover:border-purple-500/40 hover:text-white transition-colors"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
