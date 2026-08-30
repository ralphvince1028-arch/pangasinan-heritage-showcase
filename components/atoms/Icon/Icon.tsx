import React from 'react';
import styles from './Icon.module.css';

export type IconName =
  | 'search'
  | 'map-pin'
  | 'arrow-right'
  | 'arrow-left'
  | 'menu'
  | 'close'
  | 'compass'
  | 'sun'
  | 'water'
  | 'landmark'
  | 'tag'
  | 'calendar'
  | 'shield'
  | 'sparkles'
  | 'external-link'
  | 'check'
  | 'chevron-down'
  | 'clear'
  | 'info';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | number;

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

const sizeMap: Record<'xs' | 'sm' | 'md' | 'lg', number> = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 32,
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'currentColor',
  className = '',
  ariaLabel,
  ariaHidden = true,
}) => {
  const pixelSize = typeof size === 'number' ? size : sizeMap[size] || 24;

  const renderPath = () => {
    switch (name) {
      case 'search':
        return (
          <>
            <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" fill="none" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'map-pin':
        return (
          <>
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="3" stroke={color} strokeWidth="2" fill="none" />
          </>
        );
      case 'arrow-right':
        return (
          <>
            <line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <polyline points="12 5 19 12 12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </>
        );
      case 'arrow-left':
        return (
          <>
            <line x1="19" y1="12" x2="5" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <polyline points="12 19 5 12 12 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </>
        );
      case 'menu':
        return (
          <>
            <line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'close':
      case 'clear':
        return (
          <>
            <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'compass':
        return (
          <>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={color} />
          </>
        );
      case 'sun':
        return (
          <>
            <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" fill="none" />
            <line x1="12" y1="1" x2="12" y2="3" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'water':
        return (
          <>
            <path
              d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        );
      case 'landmark':
        return (
          <>
            <line x1="3" y1="22" x2="21" y2="22" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="18" x2="6" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="18" x2="10" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="18" x2="14" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="18" x2="18" y2="11" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <polygon points="12 2 20 7 4 7 12 2" fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          </>
        );
      case 'tag':
        return (
          <>
            <path
              d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="7" y1="7" x2="7.01" y2="7" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'calendar':
        return (
          <>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke={color} strokeWidth="2" fill="none" />
            <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="2" />
          </>
        );
      case 'shield':
        return (
          <>
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      case 'sparkles':
        return (
          <>
            <path
              d="M12 3l1.91 5.89L20 10l-5.09 3.11L16 19l-4-3.11L8 19l1.09-5.89L4 10l6.09-1.11L12 3z"
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      case 'external-link':
        return (
          <>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
            <polyline points="15 3 21 3 21 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <line x1="10" y1="14" x2="21" y2="3" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'check':
        return (
          <polyline points="20 6 9 17 4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        );
      case 'chevron-down':
        return (
          <polyline points="6 9 12 15 18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        );
      case 'info':
        return (
          <>
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
            <line x1="12" y1="16" x2="12" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="8" x2="12.01" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <span
      className={`${styles.icon} ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden && !ariaLabel}
    >
      <svg
        viewBox="0 0 24 24"
        width={pixelSize}
        height={pixelSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderPath()}
      </svg>
    </span>
  );
};

export default Icon;

