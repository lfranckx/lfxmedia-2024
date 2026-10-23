import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import '../styles/ThemeToggle.scss';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className="track">
        <span className="thumb">
          {isDark ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </span>
      </span>
    </button>
  );
}
