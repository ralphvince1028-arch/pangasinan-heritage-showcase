import React from 'react';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodyLead'
  | 'small'
  | 'caption'
  | 'tag';

export type TypographyColor =
  | 'default'
  | 'muted'
  | 'brand'
  | 'secondary'
  | 'inverse'
  | 'emerald';

export type TypographyAlign = 'left' | 'center' | 'right';

export interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  color?: TypographyColor;
  align?: TypographyAlign;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const defaultElementMap: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  bodyLead: 'p',
  body: 'p',
  small: 'span',
  caption: 'span',
  tag: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color = 'default',
  align = 'left',
  children,
  className = '',
  id,
}) => {
  const Component = as || defaultElementMap[variant] || 'p';

  const colorClassMap: Record<TypographyColor, string> = {
    default: styles.colorDefault,
    muted: styles.colorMuted,
    brand: styles.colorBrand,
    secondary: styles.colorSecondary,
    inverse: styles.colorInverse,
    emerald: styles.colorEmerald,
  };

  const alignClassMap: Record<TypographyAlign, string> = {
    left: styles.alignLeft,
    center: styles.alignCenter,
    right: styles.alignRight,
  };

  const combinedClasses = [
    styles[variant],
    colorClassMap[color],
    alignClassMap[align],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={combinedClasses} id={id}>
      {children}
    </Component>
  );
};

export default Typography;

