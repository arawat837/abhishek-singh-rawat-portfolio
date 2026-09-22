"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Github, Phone, Copy, Check, Send, Sparkles } from "lucide-react";

export function ContactSection() {
  const { profile } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto generation for seamless email client integration
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="connect" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="Open for business analyst roles, data analytics opportunities, and strategic collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Cards matching reference */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">
              Reach Out Directly
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Whether you are evaluating candidates for analyst positions, consulting opportunities, or want to discuss analytics projects, feel free to reach out.
            </p>

            {/* Email Card with Copy button */}
            <div className="bg-[#121218] border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors shadow-sm">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold text-white hover:text-purple-300 transition-colors truncate block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121218] border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors shadow-sm block group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0077b5]/15 border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    LinkedIn Network
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {profile.linkedinDisplay}
                  </div>
                </div>
              </div>
              <span className="text-xs text-purple-400 group-hover:translate-x-0.5 transition-transform">
                Connect →
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#121218] border border-white/10 hover:border-purple-500/40 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3 transition-colors shadow-sm block group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    GitHub Codebase
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {profile.githubDisplay}
                  </div>
                </div>
              </div>
              <span className="text-xs text-purple-400 group-hover:translate-x-0.5 transition-transform">
                Explore →
              </span>
            </a>

            {/* Phone Card */}
            <div className="bg-[#121218] border border-white/10 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    Direct Mobile
                  </div>
                  <div className="text-sm font-semibold text-white font-mono">
                    {profile.phone}
                  </div>
                </div>
              </div>
              <span className="text-xs text-slate-400">
                {profile.location.split("/")[0].trim()}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Message Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121218] border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 shadow-card relative">
              <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below to send an email directly to Abhishek.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Email Client Triggered
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your default mail client has opened with your message pre-formatted. You can also email directly at{" "}
                    <span className="text-purple-300 font-mono">{profile.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs text-purple-400 underline hover:text-purple-300 pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Message / Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Abhishek, I reviewed your KKBOX Customer 360 project and would love to discuss an analyst role..."
                      className="w-full px-4 py-3 rounded-xl bg-[#171722] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-glow-md hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
