"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Sync with html class on mount
  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme") === "dark";
    console.log("ThemeToggle: initial load, saved theme:", localStorage.getItem("theme"));
    if (saved) {
      root.classList.add("dark");
      setIsDark(true);
      console.log("ThemeToggle: applied dark mode on load");
    } else {
      root.classList.remove("dark");
      setIsDark(false);
      console.log("ThemeToggle: applied light mode on load");
    }
  }, []);

  const toggle = () => {
    console.log("ThemeToggle: clicked, current isDark =", isDark);
    const root = document.documentElement;
    console.log("ThemeToggle: html classes before toggle:", root.className);
    
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
      console.log("ThemeToggle: switched to light, html classes now:", root.className);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
      console.log("ThemeToggle: switched to dark, html classes now:", root.className);
    }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      aria-label="Cambiar tema"
    >
      {isDark ? <FiSun className="size-5" /> : <FiMoon className="size-5" />}
    </button>
  );
}
