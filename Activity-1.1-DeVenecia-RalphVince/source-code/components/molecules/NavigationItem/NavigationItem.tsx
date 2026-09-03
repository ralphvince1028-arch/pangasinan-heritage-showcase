import React from 'react';
import Link from 'next/link';
import styles from './NavigationItem.module.css';

export interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
  isActive = false,
  onClick,
  className = '',
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.navItem} ${isActive ? styles.active : ''} ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.indicator} aria-hidden="true" />
    </Link>
  );
};

export default NavigationItem;
