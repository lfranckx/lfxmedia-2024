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
    document.documentElement.setAttribute('data-theme', theme);
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
