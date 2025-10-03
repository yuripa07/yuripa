"use client";

import { useState, useEffect } from "react";
import { MonitorSmartphone, SunMedium, Moon } from "lucide-react";

type Theme = "system" | "light" | "dark";

export function ThemeSelector() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const applyTheme = () => {
      const storedTheme = localStorage.getItem("theme") as Theme | null;

      if (storedTheme) {
        setTheme(storedTheme);
        if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        setTheme("system");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    applyTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      if (localStorage.getItem("theme") === null) {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", newTheme);
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  if (!theme) {
    return null;
  }

  const iconSize = 16;
  const buttonBaseClasses =
    "p-1.5 rounded-full transition-all duration-200 cursor-pointer";

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-paragraph/10">
      <button
        onClick={() => handleThemeChange("system")}
        className={`${buttonBaseClasses} ${
          theme === "system"
            ? "bg-paragraph/3 border border-paragraph/10 text-paragraph"
            : "border border-transparent opacity-50 hover:opacity-100 text-paragraph/70"
        }`}
        aria-label="Set theme to system preference"
      >
        <MonitorSmartphone size={iconSize} />
      </button>

      <button
        onClick={() => handleThemeChange("light")}
        className={`${buttonBaseClasses} ${
          theme === "light"
            ? "bg-paragraph/3 border border-paragraph/10 text-paragraph"
            : "border border-transparent opacity-50 hover:opacity-100 text-paragraph/70"
        }`}
        aria-label="Set light theme"
      >
        <SunMedium size={iconSize} />
      </button>

      <button
        onClick={() => handleThemeChange("dark")}
        className={`${buttonBaseClasses} ${
          theme === "dark"
            ? "bg-paragraph/3 border border-paragraph/10 text-paragraph"
            : "border border-transparent opacity-50 hover:opacity-100 text-paragraph/70"
        }`}
        aria-label="Set dark theme"
      >
        <Moon size={iconSize} />
      </button>
    </div>
  );
}
