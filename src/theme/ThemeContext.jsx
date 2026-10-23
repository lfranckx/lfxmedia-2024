import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'lfx-theme';
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'dark' || attr === 'light') return attr; // set by the pre-paint script in index.html
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (e) { /* storage blocked */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (root.getAttribute('data-theme') !== theme) {
      // Suspend every CSS transition for this frame so all colors flip together
      // (gradient backgrounds can't animate, so without this they snap while text eases).
      root.classList.add('theme-switching');
      root.setAttribute('data-theme', theme);
      void root.offsetHeight; // force the style recalc while transitions are off
      const id = requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove('theme-switching')));
      try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
      return () => cancelAnimationFrame(id);
    }
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
