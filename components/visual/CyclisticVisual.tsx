"use client";

import React from "react";
import { Bike, Users, Clock, Compass } from "lucide-react";

export function CyclisticVisual() {
  return (
    <div className="w-full h-full bg-[#0c0c14] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-b border-white/5 select-none overflow-hidden relative font-sans">
      {/* Glow accents */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase flex items-center gap-1.5">
            <Bike className="w-3.5 h-3.5 text-cyan-400" />
            Urban Mobility Telemetry • R / ggplot2
          </span>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-mono">
          5.4M+ Rides
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-2 my-3">
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Total Volume</span>
          <span className="text-sm font-bold text-white font-mono">5.42M</span>
          <span className="text-[9px] text-cyan-400 mt-0.5 flex items-center gap-0.5">
            <Users className="w-2.5 h-2.5" /> Full dataset
          </span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Casual Duration</span>
          <span className="text-sm font-bold text-purple-300 font-mono">28.4m</span>
          <span className="text-[9px] text-purple-400 mt-0.5">2.3x longer</span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Member Duration</span>
          <span className="text-sm font-bold text-cyan-300 font-mono">12.1m</span>
          <span className="text-[9px] text-cyan-400 mt-0.5">Commute bias</span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Peak Window</span>
          <span className="text-sm font-bold text-amber-300 font-mono">Fri-Sun</span>
          <span className="text-[9px] text-amber-400/80 mt-0.5">Casual spike</span>
        </div>
      </div>

      {/* Visual Analytics Canvas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-center">
        {/* Chart 1: Diurnal Ride Curves (Bimodal Commuter vs Leisure) */}
        <div className="bg-[#141420]/80 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
            <span className="font-medium flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" /> Diurnal Ride Hourly Distribution
            </span>
            <div className="flex items-center gap-2 text-[8px]">
              <span className="flex items-center gap-1 text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Member
              </span>
              <span className="flex items-center gap-1 text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Casual
              </span>
            </div>
          </div>
          <div className="relative w-full h-20">
            <svg viewBox="0 0 160 80" className="w-full h-full overflow-visible">
              <line x1="10" y1="70" x2="155" y2="70" stroke="#252535" strokeWidth="1" />
              <line x1="10" y1="10" x2="10" y2="70" stroke="#252535" strokeWidth="1" />

              {/* Member Commute Curve: Sharp peak at 8 AM (x=45) and 5 PM (x=115) */}
              <path
                d="M 10 68 Q 30 65, 45 22 T 75 48 T 115 15 T 155 68"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Casual Leisure Curve: Gradual rise peaking at 2-3 PM (x=95) */}
              <path
                d="M 10 69 Q 55 67, 95 28 T 155 66"
                fill="none"
                stroke="#c084fc"
                strokeWidth="2"
                strokeDasharray="2 2"
                strokeLinecap="round"
              />

              {/* 8 AM & 5 PM Commute Markers */}
              <circle cx="45" cy="22" r="2.5" fill="#06b6d4" />
              <circle cx="115" cy="15" r="2.5" fill="#06b6d4" />
              {/* Casual Weekend Peak Marker */}
              <circle cx="95" cy="28" r="2.5" fill="#c084fc" />
            </svg>
          </div>
          <div className="flex justify-between text-[8px] text-slate-500">
            <span>00:00 (Midnight)</span>
            <span>12:00 PM</span>
            <span>23:59 (Night)</span>
          </div>
        </div>

        {/* Chart 2: Day-of-Week Ratio & Route Types */}
        <div className="bg-[#141420]/80 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
            <span className="font-medium flex items-center gap-1">
              <Compass className="w-3 h-3 text-purple-400" /> Weekly Segment Share
            </span>
            <span className="text-slate-400 text-[9px]">Weekday vs Weekend</span>
          </div>
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Mon – Thu Commuter Trips</span>
                <span className="text-cyan-300 font-mono">72% Member</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full w-[72%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Sat – Sun Leisure Routes</span>
                <span className="text-purple-300 font-mono">61% Casual</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full w-[61%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Round-Trip Waterfront Docks</span>
                <span className="text-amber-300 font-mono">High Conv Target</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full w-[48%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
