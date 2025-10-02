"use client";

import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  // theme: 'light' | 'dark' | 'system' | null
  const [theme, setTheme] = useState<string | null>(null);
  useEffect(() => {
    // Set initial theme from localStorage or system preference
    const applyTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else if (storedTheme === "light") {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      } else {
        // system
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          setTheme("system-dark");
        } else {
          document.documentElement.classList.remove("dark");
          setTheme("system-light");
        }
      }
    };
    applyTheme();
    // Listen for system theme changes if no manual preference
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem("theme")) {
        applyTheme();
      }
    };
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark" || theme === "system-dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const resetTheme = () => {
    localStorage.removeItem("theme");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("system-dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("system-light");
    }
  };

  if (theme === null) return null; // Avoid hydration mismatch

  let icon;
  if (theme === "dark") icon = "🌙 Dark";
  else if (theme === "light") icon = "☀️ Light";
  else if (theme === "system-dark") icon = "🖥️🌙 System";
  else icon = "🖥️☀️ System";

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {icon}
      </button>
      {(theme === "dark" || theme === "light") && (
        <button onClick={resetTheme} aria-label="Reset to system theme">
          🖥️ System
        </button>
      )}
    </div>
  );
};
