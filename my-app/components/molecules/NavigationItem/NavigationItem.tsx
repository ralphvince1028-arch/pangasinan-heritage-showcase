import React from 'react';
import Link from 'next/link';
import styles from './NavigationItem.module.css';

export interface NavigationItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  label,
  isActive = false,
  icon,
  onClick,
  className = '',
}) => {
  return (
    <Link
      href={href}
      className={`${styles.navItem} ${isActive ? styles.active : ''} ${className}`}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{label}</span>
    </Link>
  );
};

export default NavigationItem;

