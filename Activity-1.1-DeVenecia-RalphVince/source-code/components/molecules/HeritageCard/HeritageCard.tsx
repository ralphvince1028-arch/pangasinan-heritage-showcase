import React from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import styles from './HeritageCard.module.css';

export interface HeritageCardProps {
  destination: Destination;
  aspectRatio?: '16/9' | '4/3' | '3/2';
  className?: string;
  priority?: boolean;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({
  destination,
  aspectRatio = '3/2',
  className = '',
  priority = false,
}) => {
  const destinationUrl = `/destinations/${destination.slug}`;

  return (
    <article className={`${styles.card} ${className}`}>
      <Link href={destinationUrl} className={styles.imageLink} aria-label={`View ${destination.name}`}>
        <ResponsiveImage
          src={destination.image}
          alt={destination.imageAlt}
          aspectRatio={aspectRatio}
          radius="xs"
          zoomOnHover
          priority={priority}
        />
      </Link>

      <div className={styles.content}>
        <div className={styles.metaRow}>
          <Typography variant="eyebrow" color="clay" className={styles.eyebrow}>
            {destination.category} &bull; {destination.municipality}
          </Typography>
        </div>

        <Link href={destinationUrl} className={styles.titleLink}>
          <Typography variant="h3" color="navy" className={styles.title}>
            {destination.name}
          </Typography>
        </Link>

        <Typography variant="body" color="muted" className={styles.description}>
          {destination.shortDescription}
        </Typography>

        <div className={styles.footer}>
          <Link href={destinationUrl} className={styles.ctaLink}>
            <span>Explore Destination</span>
            <Icon name="arrow-right" size="xs" ariaHidden />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HeritageCard;
