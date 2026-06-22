"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("merge-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    setIsDark(nextTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("merge-theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn("rounded-full border border-border bg-background/70")}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
    </Button>
  );
}
