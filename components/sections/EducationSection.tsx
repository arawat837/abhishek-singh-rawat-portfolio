"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Award, BookOpen, Compass, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const { education, certifications, leadership } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials & Academic Rigor"
          title="Education & Credentials"
          subtitle="Formal academic degrees, verified professional certifications, and project leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Education Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              Academic Degrees & Background
            </h3>

            {/* UPES MBA */}
            <div className="bg-[#121218] border border-purple-500/30 rounded-2xl p-6 sm:p-7 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    Master of Business Administration
                  </span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {education[0].field}
                  </h4>
                  <p className="text-sm text-slate-300 font-medium">
                    {education[0].institution}, {education[0].location}
                  </p>
                </div>
                <span className="self-start px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
                  {education[0].period}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">
                  Key Academic Domains:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education[0].focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#181824] border border-white/5 text-xs text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* BCA Degree */}
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Bachelor of Computer Applications (BCA)
                  </span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {education[1].field}
                  </h4>
                  <p className="text-sm text-slate-300">
                    {education[1].institution}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-medium">
                    {education[1].period}
                  </span>
                  {education[1].grade && (
                    <span className="text-xs font-bold text-slate-300 font-mono">
                      {education[1].grade}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-2">
                  Technical Foundation:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {education[1].focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[#181824] border border-white/5 text-xs text-slate-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Schooling Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#121218] border border-white/10 rounded-xl p-4">
                <span className="text-[11px] font-mono text-purple-400 uppercase">
                  Class 12th (ISC)
                </span>
                <h5 className="text-sm font-bold text-white mt-0.5">
                  St. Francis College
                </h5>
                <p className="text-xs text-slate-400">Lucknow, India</p>
              </div>
              <div className="bg-[#121218] border border-white/10 rounded-xl p-4">
                <span className="text-[11px] font-mono text-purple-400 uppercase">
                  Class 10th (ICSE)
                </span>
                <h5 className="text-sm font-bold text-white mt-0.5">
                  City Montessori School
                </h5>
                <p className="text-xs text-slate-400">Lucknow, India</p>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Leadership */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-purple-400" />
              Professional Certification
            </h3>

            {/* Google Data Analytics Certificate */}
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#121218] border border-purple-500/40 rounded-2xl p-6 sm:p-7 shadow-glow-sm relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
                    G
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                      {cert.issuer}
                    </span>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {cert.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-slate-400 block">
                    Core Competencies Validated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsGained.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#191926] text-xs text-purple-300 border border-purple-500/20 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Academic & Project Leadership Box */}
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-card">
              <div className="flex items-center gap-2.5 mb-3">
                <Compass className="w-5 h-5 text-purple-400" />
                <h4 className="text-base font-bold text-white">
                  Academic & Project Leadership
                </h4>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Collaborative problem-solving across analytics, UX, and AI solutions.
              </p>

              <div className="space-y-3">
                {leadership[0].points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
