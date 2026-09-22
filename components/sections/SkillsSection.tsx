"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Database, BarChart3, Cpu, Code, Layers } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "database":
        return <Database className="w-5 h-5 text-purple-400" />;
      case "chart-bar":
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "code":
        return <Code className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical & Analytical Capabilities"
          title="Skills & Expertise"
          subtitle="Specialized capabilities organized across data pipelines, business intelligence, predictive modeling, and software foundations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((category) => (
            <div
              key={category.id}
              className="bg-[#121218] border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-[#171724] border border-white/5 group-hover:border-purple-500/30 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Pills Grid */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-[#181824] border border-white/5 hover:border-purple-500/40 text-slate-200 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Accent */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                <span>Verified in Resume & Projects</span>
                <span className="font-mono text-purple-400/80">
                  {category.skills.length} Capabilities
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
