import React from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './ResponsiveImage.module.css';

export type AspectRatio = '16/9' | '4/3' | '1/1' | '21/9' | 'auto';
export type ImageRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ResponsiveImageProps extends Omit<ImageProps, 'alt'> {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  radius?: ImageRadius;
  caption?: string;
  zoomOnHover?: boolean;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  radius = 'none',
  caption,
  zoomOnHover = false,
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  ...restProps
}) => {
  const aspectClassMap: Record<AspectRatio, string> = {
    '16/9': styles.aspect169,
    '4/3': styles.aspect43,
    '1/1': styles.aspect11,
    '21/9': styles.aspect219,
    auto: '',
  };

  const radiusClassMap: Record<ImageRadius, string> = {
    none: '',
    sm: styles.radiusSm,
    md: styles.radiusMd,
    lg: styles.radiusLg,
    full: styles.radiusFull,
  };

  const wrapperClasses = [
    styles.wrapper,
    aspectClassMap[aspectRatio],
    radiusClassMap[radius],
    zoomOnHover ? styles.zoomOnHover : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const imageElement = (
    <div className={wrapperClasses}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={styles.image}
        {...restProps}
      />
    </div>
  );

  if (caption) {
    return (
      <figure className={styles.figure}>
        {imageElement}
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>
    );
  }

  return imageElement;
};

export default ResponsiveImage;

