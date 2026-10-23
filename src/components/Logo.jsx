import React from 'react';

/**
 * LFX wordmark as inline SVG so it can take a flat color (light mode)
 * or the brand gradient (dark mode) through the --logo-fill CSS variable.
 * `variant="outline"` adds a stroke for the loading-screen draw animation.
 */
export const LOGO_PATHS = [
  // L
  'M128.514 368.624V86.1152H76.7944V415.734H238.083L283.674 368.624H128.514Z',
  // F (stem + foot merged into one outline so the stroke animation has no internal edges)
  'M593.992 86.115L349.526 86.115L349.526 368.624L313.054 368.624L267.464 415.734L349.526 415.734L379.920 415.734L401.398 415.734L401.398 272.073L542.576 272.073L542.576 225.166L401.398 225.166L401.398 133.175L626.007 133.175Z',
  // X + frame merged for the same reason
  'M1000.000 495.061L1000.000 0.000L0.000 0.000L0.000 496.429L873.056 496.429L842.105 447.039L49.339 447.039L49.339 49.390L952.383 49.390L952.383 444.253L926.206 444.253L792.260 243.757L905.172 86.115L843.979 86.115L761.663 201.510L679.145 86.115L618.003 86.115L651.740 133.225L730.865 243.807L608.581 415.734L669.723 415.734L761.663 286.308L899.043 495.112L960.184 495.112L960.150 495.061Z',
];

export function LogoGradientDefs({ id = 'lfx-grad' }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--grad-1)" />
        <stop offset="55%" stopColor="var(--grad-2)" />
        <stop offset="100%" stopColor="var(--grad-3)" />
      </linearGradient>
    </defs>
  );
}

export default function Logo({ className = '', title = 'LFX Media', variant = 'solid', ...rest }) {
  return (
    <svg
      className={`lfx-logo ${variant} ${className}`}
      viewBox="0 0 1000 497"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...rest}
    >
      <title>{title}</title>
      <LogoGradientDefs />
      {LOGO_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
