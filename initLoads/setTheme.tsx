"use client";
import { useContext, useEffect } from "react";
import Context from "@/store/context";

export default function SetTheme() {
  const ctx = useContext(Context);

  useEffect(() => {
    // Check for the user prefer theme
    // First check to see if we have one already set
    // in the storage
    const userTheme = localStorage.getItem("theme");
    // Grab the system prefer theme
    const systemPreferTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // Now determine our theme
    const theme = userTheme || (systemPreferTheme ? "dark" : "light");
    // Set our Theme
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);

    ctx.setAppReady((prev) => ({ ...prev, theme: true }));
  }, []);

  return null;
}
