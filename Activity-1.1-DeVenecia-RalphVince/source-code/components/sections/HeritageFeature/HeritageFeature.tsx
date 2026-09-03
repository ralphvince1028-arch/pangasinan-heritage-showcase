import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { Icon } from '@/components/atoms/Icon';
import styles from './HeritageFeature.module.css';

export const HeritageFeature: React.FC = () => {
  return (
    <section className={styles.section} aria-labelledby="heritage-spotlight-title">
      <div className={`container ${styles.grid}`}>
        {/* Left Editorial Narrative (45%) */}
        <div className={styles.textCol}>
          <div className={styles.kickerBadge}>
            <Icon name="landmark" size="xs" ariaHidden />
            <span>Maritime Heritage Spotlight</span>
          </div>

          <Typography variant="h2" color="navy" id="heritage-spotlight-title" className={styles.title}>
            Cape Bolinao Lighthouse: A Century of Guiding Light
          </Typography>

          <Typography variant="body" color="muted" className={styles.description}>
            Rising 101 feet atop Punta Piedra Point since 1905, Cape Bolinao Lighthouse is one of the tallest and most enduring historic beacons in the Philippine archipelago. Built by American, British, and Filipino engineers, it continues to watch over the West Philippine Sea.
          </Typography>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <Icon name="check" size="xs" color="var(--color-clay)" ariaHidden />
              <span>Built in 1905 on elevated coastal limestone bluffs</span>
            </div>
            <div className={styles.featureItem}>
              <Icon name="check" size="xs" color="var(--color-clay)" ariaHidden />
              <span>101-foot architectural tower with panoramic sea views</span>
            </div>
            <div className={styles.featureItem}>
              <Icon name="check" size="xs" color="var(--color-clay)" ariaHidden />
              <span>Gateway landmark along the western maritime corridor</span>
            </div>
          </div>

          <div className={styles.actionWrapper}>
            <Button variant="primary" size="md" href="/destinations/bolinao-lighthouse" iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
              Discover Cape Bolinao
            </Button>
          </div>
        </div>

        {/* Right Landmark Photography (55%) */}
        <div className={styles.imageCol}>
          <div className={styles.imageCard}>
            <ResponsiveImage
              src="/images/bolinao-lighthouse.png"
              alt="Historic Cape Bolinao Lighthouse against coastal sea bluffs in Bolinao, Pangasinan"
              aspectRatio="4/3"
              radius="xs"
              zoomOnHover
            />
            <div className={styles.imageCaption}>
              <Typography variant="caption" className={styles.captionText}>
                Cape Bolinao Lighthouse, Punta Piedra Point &bull; Completed 1905
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageFeature;
