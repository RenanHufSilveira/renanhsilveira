"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Carrega tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Aplica tema global no HTML
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
