import React from 'react';
import Link from 'next/link';
import { Destination } from '@/types/heritage';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import styles from './HeritageCard.module.css';

export interface HeritageCardProps {
  destination: Destination;
  className?: string;
  priority?: boolean;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({
  destination,
  className = '',
  priority = false,
}) => {
  const {
    slug,
    name,
    municipality,
    province,
    category,
    description,
    imageUrl,
    imageAlt,
    featured,
  } = destination;

  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
        <Link href={`/heritage/${slug}`} aria-label={`View details of ${name}`}>
          <ResponsiveImage
            src={imageUrl}
            alt={imageAlt}
            aspectRatio="16/9"
            priority={priority}
            zoomOnHover
          />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.categoryTag}>
          <Typography variant="tag">{category}</Typography>
        </div>

        <Link href={`/heritage/${slug}`}>
          <Typography variant="h3" as="h3" className={styles.title}>
            {name}
          </Typography>
        </Link>

        <div className={styles.location}>
          <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
          <Typography variant="small" color="muted">
            {municipality}, {province}
          </Typography>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <Button
            variant="outline"
            size="sm"
            href={`/heritage/${slug}`}
            fullWidth
            iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}
            aria-label={`Explore details of ${name}`}
          >
            Explore Destination
          </Button>
        </div>
      </div>
    </article>
  );
};

export default HeritageCard;

