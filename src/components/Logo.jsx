import React from 'react';

/**
 * LFX wordmark as inline SVG so it can take a flat color (light mode)
 * or the brand gradient (dark mode) through the --logo-fill CSS variable.
 * `variant="outline"` adds a stroke for the loading-screen draw animation.
 */
export const LOGO_PATHS = [
  'M128.514 368.624V86.1152H76.7944V415.734H238.083L283.674 368.624H128.514Z',
  'M313.054 368.624L267.464 415.734H379.92V368.624H313.054Z',
  'M626.007 133.175L593.992 86.1152H349.526V415.734H401.398V272.073H542.576V225.166H401.398V133.175H626.007Z',
  'M792.26 243.757L905.172 86.1152H843.979L761.663 201.51L679.145 86.1152H618.003L651.74 133.225L730.865 243.807L608.581 415.734H669.723L761.663 286.308L899.043 495.112H960.184L792.26 243.757Z',
  'M899.043 495.061H1000V0H0V496.429H873.056L842.105 447.039H49.3389V49.3896H952.383V444.253H885.669L899.043 495.061Z',
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
