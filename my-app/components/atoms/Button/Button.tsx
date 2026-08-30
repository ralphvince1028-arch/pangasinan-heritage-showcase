import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  disabled,
  ...restProps
}) => {
  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClasses} role="button">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      disabled={disabled}
      aria-disabled={disabled}
      {...restProps}
    >
      {content}
    </button>
  );
};

export default Button;

