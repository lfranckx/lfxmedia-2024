import React from 'react';
import light from '../images/computer.png';
import dark from '../images/computer-dark.png';

/** Hero desk illustration — teal in light mode, brand-gradient recolor in dark mode. */
export default function WorkspaceArt({ alt = 'desktop workspace', ...rest }) {
  return (
    <>
      <img src={light} alt={alt} className='theme-light-only' {...rest} />
      <img src={dark} alt={alt} className='theme-dark-only' {...rest} />
    </>
  );
}
