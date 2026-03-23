"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  console.log({ prefersDark });
  return prefersDark ? "light" : "dark";
}

export default function TopAppBar() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  return (
    <nav
      className={[
        "sticky top-0 z-50 w-full backdrop-blur-xl shadow-none",
        isDark ? "bg-slate-950/70 border-b border-white/5" : "bg-white/70 border-b border-slate-900/10",
      ].join(" ")}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-2xl font-bold tracking-tighter text-primary font-headline">KINETIC_DEV</div>

        <div className="hidden md:flex items-center gap-8 font-label text-sm uppercase tracking-widest">
          <a
            className={[isDark ? "text-slate-400" : "text-slate-600", "hover:text-primary transition-colors"].join(" ")}
            href="#about"
          >
            About
          </a>
          <a
            className={[isDark ? "text-slate-400" : "text-slate-600", "hover:text-primary transition-colors"].join(" ")}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={[isDark ? "text-slate-400" : "text-slate-600", "hover:text-primary transition-colors"].join(" ")}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={[isDark ? "text-slate-400" : "text-slate-600", "hover:text-primary transition-colors"].join(" ")}
            href="#contact"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="material-symbols-outlined text-primary hover:opacity-80 transition-all duration-300 scale-95 active:scale-90"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {isDark ? "light_mode" : "dark_mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
