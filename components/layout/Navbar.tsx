"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { useResumeModal } from "@/context/ResumeModalContext";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Connect", href: "#connect" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { openResume } = useResumeModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark (Initial Monogram) */}
        <Link
          href="#top"
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
          aria-label="Abhishek Singh Rawat - Back to top"
        >
          <span className="text-purple-400 font-extrabold group-hover:text-purple-300 transition-colors">
            {portfolioData.profile.initials}
          </span>
          <span className="text-xs uppercase tracking-widest text-slate-400 font-medium hidden sm:inline-block border-l border-white/15 pl-2">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121218]/60 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Resume (Opens Modal Preview) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openResume}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-purple-500/50 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400" />
            Resume
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={openResume}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c12]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-purple-500/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-medium text-sm"
            >
              <FileText className="w-4 h-4 text-purple-400" /> View Resume
            </button>
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-purple-600 text-white font-medium text-sm shadow-glow-sm"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
