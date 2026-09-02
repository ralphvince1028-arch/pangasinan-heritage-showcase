import React from 'react';
import Link from 'next/link';
import { getFeaturedDestinations } from '@/data/heritage';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import styles from './page.module.css';

export default function HomePage() {
  const featuredDestinations = getFeaturedDestinations();

  return (
    <>
      {/* 1. Hero Section */}
      <section className={styles.heroSection} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroTagline}>
              <Icon name="compass" size="xs" color="var(--color-primary)" ariaHidden />
              <span>Gateway to Northern Luzon &bull; Heritage Showcase</span>
            </div>

            <Typography variant="display" as="h1" id="hero-heading">
              Discover Pangasinan
            </Typography>

            <Typography variant="bodyLead" color="muted">
              Experience the timeless cultural and natural heritage of Pangasinan—from the ancient coral islets of Hundred Islands to the century-old Cape Bolinao beacon and the therapeutic geothermal springs of Mount Balungao.
            </Typography>

            <div className={styles.heroButtons}>
              <Button
                variant="primary"
                size="lg"
                href="/heritage"
                iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}
              >
                Explore Heritage
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/design-system"
                iconRight={<Icon name="sparkles" size="sm" ariaHidden />}
              >
                View Design System
              </Button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <ResponsiveImage
              src="/images/hero-pangasinan.png"
              alt="Panoramic view of Pangasinan coastal islands and horizon at sunrise"
              aspectRatio="16/9"
              priority
              radius="lg"
            />
          </div>
        </div>
      </section>

      {/* 2. Key Cultural Metrics */}
      <section className={styles.metricsSection} aria-label="Pangasinan Heritage Key Stats">
        <div className={`container ${styles.metricsGrid}`}>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>124+</span>
            <span className={styles.metricLabel}>Ancient Islets &amp; Reefs</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>1905</span>
            <span className={styles.metricLabel}>Historic Bolinao Beacon</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>48</span>
            <span className={styles.metricLabel}>Municipalities &amp; Cities</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>WCAG 2.1</span>
            <span className={styles.metricLabel}>Accessible Digital Architecture</span>
          </div>
        </div>
      </section>

      {/* 3. Featured Destinations Showcase */}
      <section className={styles.section} aria-labelledby="featured-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Typography variant="tag">Iconic Destinations</Typography>
            <Typography variant="h2" as="h2" id="featured-heading">
              Featured Heritage Sites
            </Typography>
            <Typography variant="body" color="muted">
              Handpicked iconic cultural, architectural, and natural treasures representing the premier destinations of the province.
            </Typography>
          </div>

          <div className={styles.featuredGrid}>
            {featuredDestinations.map((dest, index) => (
              <HeritageCard
                key={dest.id}
                destination={dest}
                priority={index === 0}
              />
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Button
              variant="outline"
              size="md"
              href="/heritage"
              iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}
            >
              Browse All Heritage Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* 4. About Pangasinan Section */}
      <section className={styles.aboutSection} aria-labelledby="about-heading">
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <Typography variant="tag">Provincial Profile</Typography>
            <Typography variant="h2" as="h2" id="about-heading" className="mt-2">
              The Land of Salt, Sea, and Timeless History
            </Typography>
            <Typography variant="body" color="muted" className="mt-4">
              The name <em>Pangasinan</em> originates from the root word <em>asin</em> (salt), meaning &quot;place where salt is made.&quot; Since pre-colonial times, the province has been celebrated as the salt capital of the Philippine archipelago, enriched by the pristine waters of the Lingayen Gulf and the West Philippine Sea.
            </Typography>
            <Typography variant="body" color="muted" className="mt-4">
              Beyond its coastline, Pangasinan is steeped in centuries of heritage—from indigenous riverine fishing settlements and Spanish-era masonry fortifications to sacred pilgrimage shrines and vital agricultural breadbaskets.
            </Typography>
          </div>

          <div className={styles.aboutCards}>
            <div className={styles.aboutCard}>
              <div className={styles.aboutIcon}>
                <Icon name="water" size="md" ariaHidden />
              </div>
              <div>
                <Typography variant="h4" as="h3">
                  Marine &amp; Coastal Diversity
                </Typography>
                <Typography variant="small" color="muted">
                  Spanning over 285 kilometers of coastline, harboring coral sanctuaries, mangrove ecosystems, and world-renowned marine parks.
                </Typography>
              </div>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.aboutIcon}>
                <Icon name="landmark" size="md" ariaHidden />
              </div>
              <div>
                <Typography variant="h4" as="h3">
                  Architectural &amp; Civic Heritage
                </Typography>
                <Typography variant="small" color="muted">
                  Home to neoclassical provincial civic edifices, centuries-old lighthouses, and canonically crowned religious pilgrimage basilicas.
                </Typography>
              </div>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.aboutIcon}>
                <Icon name="sun" size="md" ariaHidden />
              </div>
              <div>
                <Typography variant="h4" as="h3">
                  Geothermal &amp; Eco-Adventure
                </Typography>
                <Typography variant="small" color="muted">
                  Natural mineral springs flowing from volcanic veins, offering therapeutic retreats and inland eco-tourism adventures.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Cultural Awareness & Tourism CTA */}
      <section className={styles.section} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaBanner}>
            <Icon name="shield" size="lg" color="var(--color-secondary)" ariaHidden />
            <Typography variant="h2" as="h2" id="cta-heading" color="inverse" align="center">
              Experience &amp; Protect Pangasinan&apos;s Living Heritage
            </Typography>
            <p>
              Join the provincial initiative for responsible cultural tourism and environmental stewardship. Discover the rich stories of our municipalities through accessible digital discovery.
            </p>
            <div className={styles.heroButtons}>
              <Button
                variant="secondary"
                size="lg"
                href="/heritage"
                iconRight={<Icon name="arrow-right" size="sm" ariaHidden />}
              >
                Start Exploring Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
