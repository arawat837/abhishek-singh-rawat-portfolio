"use client";

import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import { KkboxDashboardVisual } from "@/components/visual/KkboxDashboardVisual";
import { CyclisticVisual } from "@/components/visual/CyclisticVisual";
import { BellabeatVisual } from "@/components/visual/BellabeatVisual";
import { Github, ExternalLink, ChevronDown, ChevronUp, Layers, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

export function ProjectCard({ project, isActive }: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const renderVisual = () => {
    switch (project.visualType) {
      case "kkbox":
        return <KkboxDashboardVisual />;
      case "cyclistic":
        return <CyclisticVisual />;
      case "bellabeat":
        return <BellabeatVisual />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full bg-[#121218] border rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 flex flex-col shadow-2xl ${
        isActive
          ? "border-purple-500/40 shadow-glow-sm"
          : "border-white/10 opacity-70 hover:opacity-90"
      }`}
    >
      {/* Top Visual Banner: High-Fidelity Project Visual Dashboard */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 bg-[#09090f] overflow-hidden group">
        {renderVisual()}

        {/* Floating Action Links Overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#0e0e16]/80 hover:bg-purple-600 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg"
              title="View on GitHub"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="p-2 rounded-xl bg-[#0e0e16]/80 hover:bg-purple-600 text-slate-200 hover:text-white border border-white/10 backdrop-blur-md transition-all duration-200 shadow-lg"
              title="Interactive Case Details"
              aria-label={`${project.title} Demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
        <div>
          {/* Header & Featured Metric */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              {project.tagline}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-bold">
              <span>{project.featuredMetric.value}</span>
              <span className="text-slate-400 font-normal">
                ({project.featuredMetric.label})
              </span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Quick Metrics Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-[#171722] border border-white/5 rounded-xl p-2.5 text-center"
              >
                <div className="text-xs sm:text-sm font-bold text-white font-mono">
                  {m.value}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Collapsible Deep-Dive Details: Problem -> Approach -> Impact */}
          {showDetails && (
            <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm animate-in fade-in duration-200">
              <div>
                <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-1">
                  Business Problem:
                </span>
                <p className="text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              <div>
                <span className="font-bold text-purple-300 uppercase text-[11px] tracking-wider block mb-1">
                  Analytical Approach:
                </span>
                <p className="text-slate-300 leading-relaxed">{project.approach}</p>
              </div>

              <div>
                <span className="font-bold text-emerald-400 uppercase text-[11px] tracking-wider block mb-1">
                  Business Impact:
                </span>
                <p className="text-slate-300 leading-relaxed">{project.impact}</p>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="font-semibold text-slate-200 text-xs block mb-1">
                  Key Insights:
                </span>
                {project.keyInsights.map((insight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-slate-400 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar: Tech Stack & Toggle */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md bg-[#191924] border border-white/5 text-[11px] font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors self-start sm:self-auto shrink-0"
          >
            <span>{showDetails ? "Hide Case Details" : "Read Full Case"}</span>
            {showDetails ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
