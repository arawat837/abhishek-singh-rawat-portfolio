"use client";

import React, { useEffect } from "react";
import { useResumeModal } from "@/context/ResumeModalContext";
import { portfolioData } from "@/data/portfolio-data";
import { X, Download, ExternalLink, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ResumeModal() {
  const { isOpen, closeResume } = useResumeModal();
  const resumePath = portfolioData.profile.resumeUrl;

  // Handle ESC key press and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeResume();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeResume]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resume Preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeResume}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[90vh] bg-[#121218] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#0e0e14]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">
                    {portfolioData.profile.name} — Resume
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    PDF Document Viewer
                  </p>
                </div>
              </div>

              {/* Action Buttons: New Tab, Download, Close */}
              <div className="flex items-center gap-2">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/5 transition-colors"
                  title="Open in new browser tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>

                <a
                  href={resumePath}
                  download="Abhishek_Singh_Rawat_Resume.pdf"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium shadow-sm transition-colors"
                  title="Download copy"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>

                <button
                  onClick={closeResume}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full h-full bg-[#171722] relative">
              <iframe
                src={`${resumePath}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title={`${portfolioData.profile.name} Resume Preview`}
              />
            </div>

            {/* Modal Footer with quick note */}
            <div className="px-4 py-2 border-t border-white/5 bg-[#0e0e14] flex items-center justify-between text-[11px] text-slate-400">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">ESC</kbd> to exit preview</span>
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden text-purple-400 hover:underline flex items-center gap-1"
              >
                Open in Tab <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
