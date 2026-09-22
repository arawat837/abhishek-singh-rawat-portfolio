"use client";

import React from "react";
import { Activity, Moon, Heart, Flame } from "lucide-react";

export function BellabeatVisual() {
  return (
    <div className="w-full h-full bg-[#0c0c14] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-b border-white/5 select-none overflow-hidden relative font-sans">
      {/* Ambient glow */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-rose-400" />
            Biometric Telemetry • R Statistical Modeling
          </span>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 font-mono">
          Fitbit Sensor Streams
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2 my-3">
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Daily Step Avg</span>
          <span className="text-sm font-bold text-white font-mono">7,638</span>
          <span className="text-[9px] text-emerald-400 mt-0.5 flex items-center gap-0.5">
            <Flame className="w-2.5 h-2.5" /> Active base
          </span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Sedentary Time</span>
          <span className="text-sm font-bold text-amber-300 font-mono">12.2h</span>
          <span className="text-[9px] text-amber-400/80 mt-0.5">Midday window</span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Sleep Latency</span>
          <span className="text-sm font-bold text-purple-300 font-mono">-24m</span>
          <span className="text-[9px] text-purple-400 mt-0.5 flex items-center gap-0.5">
            <Moon className="w-2.5 h-2.5" /> Active cohort
          </span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Heart Rate Avg</span>
          <span className="text-sm font-bold text-rose-300 font-mono">72 bpm</span>
          <span className="text-[9px] text-rose-400/80 mt-0.5 flex items-center gap-0.5">
            <Heart className="w-2.5 h-2.5" /> Resting
          </span>
        </div>
      </div>

      {/* Visual Analytics Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-center">
        {/* Chart 1: Step Count vs Sleep Latency Correlation */}
        <div className="bg-[#141420]/80 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
            <span className="font-medium flex items-center gap-1">
              <Moon className="w-3 h-3 text-purple-400" /> Daily Steps vs. Sleep Onset
            </span>
            <span className="text-purple-300 font-mono text-[9px]">r = -0.64</span>
          </div>
          <div className="relative w-full h-20">
            <svg viewBox="0 0 160 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="155" y2="70" stroke="#252535" strokeWidth="1" />
              <line x1="10" y1="10" x2="10" y2="70" stroke="#252535" strokeWidth="1" />

              {/* Scatter Points representing anonymized user days */}
              <circle cx="25" cy="22" r="2" fill="#fda4af" opacity="0.6" />
              <circle cx="35" cy="28" r="2" fill="#fda4af" opacity="0.7" />
              <circle cx="45" cy="36" r="2" fill="#fda4af" opacity="0.6" />
              <circle cx="60" cy="32" r="2" fill="#c084fc" opacity="0.7" />
              <circle cx="75" cy="42" r="2" fill="#c084fc" opacity="0.8" />
              <circle cx="90" cy="48" r="2" fill="#c084fc" opacity="0.8" />
              <circle cx="105" cy="52" r="2" fill="#a855f7" opacity="0.8" />
              <circle cx="120" cy="58" r="2" fill="#a855f7" opacity="0.9" />
              <circle cx="135" cy="62" r="2" fill="#a855f7" opacity="0.8" />
              <circle cx="145" cy="65" r="2" fill="#a855f7" opacity="0.9" />

              {/* Inverse Regression Trendline */}
              <line
                x1="18"
                y1="18"
                x2="150"
                y2="66"
                stroke="#c084fc"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex justify-between text-[8px] text-slate-500">
            <span>2k Steps (High Latency)</span>
            <span>12k+ Steps (Fast Sleep)</span>
          </div>
        </div>

        {/* Chart 2: Product Strategy Clusters */}
        <div className="bg-[#141420]/80 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
            <span className="font-medium flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-rose-400" /> User Activity Segmentation
            </span>
            <span className="text-slate-400 text-[9px]">Bellabeat App</span>
          </div>
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Sedentary Office Workers</span>
                <span className="text-amber-300 font-mono">48% (Target: Nudge)</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[48%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Active Commuters</span>
                <span className="text-purple-300 font-mono">34% (Target: Streaks)</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full w-[34%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Consistent Fitness Cohort</span>
                <span className="text-emerald-300 font-mono">18% (Target: Retention)</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-[18%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
