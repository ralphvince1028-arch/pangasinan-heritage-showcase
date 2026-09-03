import React from 'react';
import { Destination } from '@/types/destination';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import styles from './HeritageGrid.module.css';

export interface HeritageGridProps {
  destinations: Destination[];
  onClearSearch?: () => void;
  className?: string;
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({
  destinations,
  onClearSearch,
  className = '',
}) => {
  if (destinations.length === 0) {
    return (
      <div className={`${styles.emptyState} ${className}`} role="status">
        <div className={styles.emptyIcon}>
          <Icon name="search" size="xl" ariaHidden />
        </div>
        <Typography variant="h3" color="navy" className={styles.emptyTitle}>
          No destinations match your search.
        </Typography>
        <Typography variant="body" color="muted" className={styles.emptyDescription}>
          Try searching for a different destination, municipality (e.g., Alaminos, Bolinao, Balungao), or clearing your active filters.
        </Typography>
        {onClearSearch && (
          <Button variant="outline" size="md" onClick={onClearSearch} className={styles.clearBtn}>
            Clear Search &amp; Filters
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.grid} ${className}`}>
      {destinations.map((dest, idx) => (
        <HeritageCard
          key={dest.id}
          destination={dest}
          priority={idx < 3}
        />
      ))}
    </div>
  );
};

export default HeritageGrid;
