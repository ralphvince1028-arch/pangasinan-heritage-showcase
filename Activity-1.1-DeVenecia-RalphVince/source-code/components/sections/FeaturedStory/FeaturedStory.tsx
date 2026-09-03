import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { Icon } from '@/components/atoms/Icon';
import styles from './FeaturedStory.module.css';

export const FeaturedStory: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="featured-story-title">
      <div className={`container ${styles.grid}`}>
        {/* Large Landscape Image (60%) */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <ResponsiveImage
              src="/images/hundred-islands.png"
              alt="Mushroom-shaped limestone islands surrounded by calm blue water in Hundred Islands, Alaminos"
              aspectRatio="16/9"
              radius="xs"
              zoomOnHover
            />
            <div className={styles.imageOverlayBadge}>
              <Icon name="compass" size="xs" ariaHidden />
              <span>Iconic Wonder of Northern Luzon</span>
            </div>
          </div>
        </div>

        {/* Editorial Text Panel (40%) */}
        <div className={styles.textCol}>
          <Typography variant="eyebrow" color="clay" className={styles.eyebrow}>
            Featured Story &bull; Alaminos City
          </Typography>

          <Typography variant="h2" color="navy" id="featured-story-title" className={styles.title}>
            Hundred Islands: Two Million Years in the Making
          </Typography>

          <Typography variant="body" color="muted" className={styles.paragraph}>
            Scattered like giant emeralds across the calm waters of the Lingayen Gulf, the Hundred Islands comprise approximately 124 ancient mushroom-shaped coral islets formed by ancient sea-level regressions.
          </Typography>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>124</span>
              <span className={styles.statLabel}>Ancient Islets</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1,844</span>
              <span className={styles.statLabel}>Hectares Protected</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2M+</span>
              <span className={styles.statLabel}>Years of Geology</span>
            </div>
          </div>

          <div className={styles.actionWrapper}>
            <Button variant="outline" size="md" href="/destinations/hundred-islands" iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
              Read Destination Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
