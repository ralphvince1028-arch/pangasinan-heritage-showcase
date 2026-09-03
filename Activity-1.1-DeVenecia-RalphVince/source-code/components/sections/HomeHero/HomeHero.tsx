import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { Icon } from '@/components/atoms/Icon';
import styles from './HomeHero.module.css';

export const HomeHero: React.FC = () => {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Narrative Column (40%) */}
        <div className={styles.narrativeCol}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <Typography variant="eyebrow" color="clay">
              Pangasinan, Philippines
            </Typography>
          </div>

          <Typography variant="display" color="navy" id="hero-title" className={styles.headline}>
            Stories shaped by land and sea.
          </Typography>

          <Typography variant="lead" color="muted" className={styles.description}>
            From ancient coral islets in the Lingayen Gulf to century-old coastal lighthouses and inland geothermal springs—experience the living heritage of Northern Luzon.
          </Typography>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" href="/destinations" iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}>
              Explore Destinations
            </Button>
            <Link href="/heritage" className={styles.secondaryLink}>
              <span>Discover our heritage</span>
              <Icon name="arrow-right" size="xs" ariaHidden />
            </Link>
          </div>
        </div>

        {/* Right Imagery Column (60%) */}
        <div className={styles.visualCol}>
          <div className={styles.imageFrame}>
            <ResponsiveImage
              src="/images/hero-pangasinan.png"
              alt="Panoramic scenic view of Pangasinan coastal islets, turquoise sea, and morning horizon"
              aspectRatio="4/3"
              radius="xs"
              priority
            />
            <div className={styles.imageCaption}>
              <span className={styles.captionLocation}>Hundred Islands &bull; Alaminos City</span>
              <span className={styles.captionSub}>Gateway to Northern Luzon Heritage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
