"use client";

import React from "react";
import { Database, TrendingUp, ShieldAlert, Cpu } from "lucide-react";

export function KkboxDashboardVisual() {
  return (
    <div className="w-full h-full bg-[#0c0c14] rounded-t-xl p-4 md:p-5 flex flex-col justify-between border-b border-white/5 select-none overflow-hidden relative font-sans">
      {/* Background glow accent */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-purple-400" />
            Customer 360 • PostgreSQL & Churn Model
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-mono">
            ROC-AUC: 0.985
          </span>
        </div>
      </div>

      {/* Micro Metrics Grid */}
      <div className="grid grid-cols-4 gap-2 my-3">
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Subscribers</span>
          <span className="text-sm font-bold text-white font-mono">970K+</span>
          <span className="text-[9px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-2.5 h-2.5" /> Unified
          </span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Streaming Logs</span>
          <span className="text-sm font-bold text-white font-mono">18.4M</span>
          <span className="text-[9px] text-purple-400 mt-0.5">Behavioral</span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Churn Recall</span>
          <span className="text-sm font-bold text-purple-300 font-mono">93.0%</span>
          <span className="text-[9px] text-purple-400/80 mt-0.5">GradBoost</span>
        </div>
        <div className="bg-[#141420] border border-white/5 rounded-lg p-2 flex flex-col">
          <span className="text-[10px] text-slate-400">Renewal Risk</span>
          <span className="text-sm font-bold text-amber-400 font-mono">-45%</span>
          <span className="text-[9px] text-amber-400/80 flex items-center gap-0.5 mt-0.5">
            <ShieldAlert className="w-2.5 h-2.5" /> Stream drop
          </span>
        </div>
      </div>

      {/* Visual Analytics Canvas: ROC Curve & Feature Importance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 items-center">
        {/* Chart 1: ROC Curve */}
        <div className="bg-[#141420]/80 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
            <span className="font-medium flex items-center gap-1">
              <Cpu className="w-3 h-3 text-purple-400" /> ROC Performance Curve
            </span>
            <span className="text-purple-300 font-mono text-[9px]">AUC = 0.985</span>
          </div>
          <div className="relative w-full h-20">
            <svg viewBox="0 0 160 80" className="w-full h-full overflow-visible">
              {/* Grid lines */}
              <line x1="10" y1="70" x2="155" y2="70" stroke="#252535" strokeWidth="1" />
              <line x1="10" y1="10" x2="10" y2="70" stroke="#252535" strokeWidth="1" />
              <line x1="10" y1="40" x2="155" y2="40" stroke="#1d1d28" strokeDasharray="3 3" strokeWidth="0.8" />
              <line x1="82" y1="10" x2="82" y2="70" stroke="#1d1d28" strokeDasharray="3 3" strokeWidth="0.8" />

              {/* Random Guess Baseline (diagonal) */}
              <line x1="10" y1="70" x2="155" y2="10" stroke="#475569" strokeDasharray="3 3" strokeWidth="1" />

              {/* Gradient Area under ROC curve */}
              <defs>
                <linearGradient id="rocGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 10 70 Q 15 14, 40 12 T 155 10 L 155 70 Z"
                fill="url(#rocGrad)"
              />

              {/* Model ROC Line */}
              <path
                d="M 10 70 Q 15 14, 40 12 T 155 10"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Optimal Threshold Marker */}
              <circle cx="28" cy="13" r="3.5" fill="#f43f5e" stroke="#fff" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex justify-between text-[8px] text-slate-500">
            <span>False Positive Rate (0.0)</span>
            <span>(1.0)</span>
          </div>
        </div>

        {/* Chart 2: Feature Importance */}
        <div className="bg-[#141420]/80 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between h-32">
          <div className="flex justify-between items-center text-[10px] text-slate-300 mb-1">
            <span className="font-medium">Churn Driver Feature Weight</span>
            <span className="text-slate-400 text-[9px]">Gini Impurity</span>
          </div>
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Auto-renew Cancellation</span>
                <span className="text-purple-300 font-mono">0.42</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-[88%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Stream Recency Drop (14d)</span>
                <span className="text-purple-300 font-mono">0.29</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-[65%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[9px] text-slate-400 mb-0.5">
                <span>Payment Plan Duration</span>
                <span className="text-purple-300 font-mono">0.18</span>
              </div>
              <div className="w-full h-1.5 bg-[#1e1e2d] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-[42%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
