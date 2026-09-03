import React from 'react';
import { getFeaturedDestinations } from '@/data/destinations';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import { HomeHero } from '@/components/sections/HomeHero';
import { FeaturedStory } from '@/components/sections/FeaturedStory';
import { HeritageFeature } from '@/components/sections/HeritageFeature';
import { ExperienceStrip } from '@/components/sections/ExperienceStrip';
import styles from './page.module.css';

export default function HomePage() {
  const featuredDestinations = getFeaturedDestinations();

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Split Editorial Hero */}
      <HomeHero />

      {/* 2. Compact Discovery Strip (Start Exploring) */}
      <section className={styles.discoverySection} aria-labelledby="discovery-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.headerTitleGroup}>
              <Typography variant="eyebrow" color="clay">
                Featured Highlights
              </Typography>
              <Typography variant="h2" color="navy" id="discovery-title" className={styles.heading}>
                Start Exploring
              </Typography>
            </div>
            <Button variant="editorial-link" href="/destinations" iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
              View All Destinations
            </Button>
          </div>

          <div className={styles.discoveryGrid}>
            {featuredDestinations.map((dest) => (
              <HeritageCard key={dest.id} destination={dest} aspectRatio="3/2" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Large Travel Magazine Feature Story */}
      <FeaturedStory />

      {/* 4. Architectural & Maritime Landmark Feature */}
      <HeritageFeature />

      {/* 5. Explore by Experience */}
      <ExperienceStrip />

      {/* 6. Final Call to Action */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className="container">
          <div className={styles.ctaCard}>
            <Typography variant="eyebrow" color="clay" className={styles.ctaEyebrow}>
              Plan Your Journey
            </Typography>
            <Typography variant="h2" color="navy" id="cta-title" className={styles.ctaTitle}>
              There is more to discover across Pangasinan.
            </Typography>
            <Typography variant="lead" color="muted" className={styles.ctaText}>
              From coastal coral flats and secluded beaches to inland thermal springs and centuries-old cultural monuments.
            </Typography>
            <div className={styles.ctaButtons}>
              <Button variant="primary" size="lg" href="/destinations" iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}>
                Browse All Destinations
              </Button>
              <Button variant="outline" size="lg" href="/heritage">
                Explore Heritage &amp; Culture
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
