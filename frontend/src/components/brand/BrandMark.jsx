import React from 'react';
import { BRAND } from './BRAND';

/**
 * The Nuage Events mark: a gradient tile carrying A celebration cloud with burst star and spark satellites.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <circle cx='26' cy='37' r='13' fill='none' stroke='#ffffff' stroke-width='4'/><circle cx='41' cy='40' r='9' fill='none' stroke='#ffffff' stroke-width='4'/><line x1='16' y1='50' x2='48' y2='50' stroke='#ffffff' stroke-width='3.5' stroke-linecap='round'/><polygon points='45,8 48,19 59,22 48,25 45,36 42,25 31,22 42,19' fill='#ffffff'/><polygon points='16,12 18,17 23,19 18,21 16,26 14,21 9,19 14,17' fill='#ffffff'/>
      </g>
    </svg>
  );
}

export default BrandMark;
