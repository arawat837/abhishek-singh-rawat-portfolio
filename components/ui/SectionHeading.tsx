import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"
      } ${className}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 border border-purple-500/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
