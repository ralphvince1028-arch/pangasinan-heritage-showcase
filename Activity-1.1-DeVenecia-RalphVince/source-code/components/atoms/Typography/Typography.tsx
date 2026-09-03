import React from 'react';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'lead'
  | 'body'
  | 'eyebrow'
  | 'caption';

export type TypographyColor = 'default' | 'navy' | 'clay' | 'muted' | 'inverse';

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: TypographyColor;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'default',
  as,
  children,
  className = '',
  id,
}) => {
  const defaultTagMap: Record<TypographyVariant, React.ElementType> = {
    display: 'h1',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    lead: 'p',
    body: 'p',
    eyebrow: 'span',
    caption: 'figcaption',
  };

  const Component = as || defaultTagMap[variant] || 'p';
  const variantClass = styles[variant] || styles.body;
  const colorClass = styles[`color-${color}`] || styles['color-default'];
  const combinedClasses = `${variantClass} ${colorClass} ${className}`.trim();

  return (
    <Component className={combinedClasses} id={id}>
      {children}
    </Component>
  );
};

export default Typography;
