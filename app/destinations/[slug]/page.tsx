import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllDestinations, getDestinationBySlug, getRelatedDestinations } from '@/data/destinations';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import styles from './destinationDetail.module.css';

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const destinations = getAllDestinations();
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: `${destination.name} | Pangasinan Tourism`,
    description: destination.shortDescription,
    openGraph: {
      title: `${destination.name} - Pangasinan Heritage`,
      description: destination.shortDescription,
      images: [
        {
          url: destination.image,
          alt: destination.imageAlt,
        },
      ],
    },
  };
}

export default async function DestinationDetailPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedDestinations = getRelatedDestinations(destination.slug, 3);

  return (
    <div className={styles.pageWrapper}>
      {/* Top Breadcrumb Navigation */}
      <section className={styles.breadcrumbSection}>
        <div className="container">
          <Link href="/destinations" className={styles.backLink}>
            <Icon name="arrow-left" size="xs" ariaHidden />
            <span>Back to All Destinations</span>
          </Link>
        </div>
      </section>

      {/* Destination Hero Header */}
      <section className={styles.heroSection} aria-labelledby="destination-name">
        <div className="container">
          <div className={styles.heroHeader}>
            <div className={styles.metaRow}>
              <Typography variant="eyebrow" color="clay">
                {destination.category} &bull; {destination.municipality}
              </Typography>
            </div>
            <Typography variant="h1" color="navy" id="destination-name" className={styles.title}>
              {destination.name}
            </Typography>
            <Typography variant="lead" color="muted" className={styles.tagline}>
              {destination.tagline}
            </Typography>
          </div>

          {/* Featured Image */}
          <div className={styles.imageWrapper}>
            <ResponsiveImage
              src={destination.image}
              alt={destination.imageAlt}
              aspectRatio="16/9"
              radius="xs"
              priority
            />
            <div className={styles.imageCaption}>
              <span>{destination.name}, {destination.municipality}, Pangasinan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Key Highlights */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Left Narrative Column */}
            <div className={styles.mainNarrative}>
              <Typography variant="eyebrow" color="clay" className={styles.sectionKicker}>
                Destination Overview
              </Typography>
              <Typography variant="h2" color="navy" className={styles.narrativeTitle}>
                About {destination.name}
              </Typography>
              <Typography variant="body" color="default" className={styles.bodyText}>
                {destination.description}
              </Typography>

              {/* Highlights List */}
              <div className={styles.highlightsContainer}>
                <Typography variant="h3" color="navy" className={styles.highlightsTitle}>
                  Key Features &amp; Heritage Highlights
                </Typography>
                <div className={styles.highlightsList}>
                  {destination.highlights.map((item, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <div className={styles.highlightIcon}>
                        <Icon name="check" size="sm" color="var(--color-clay)" ariaHidden />
                      </div>
                      <div>
                        <h4 className={styles.highlightHeading}>{item.title}</h4>
                        <p className={styles.highlightDesc}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Info Card */}
            <aside className={styles.infoAside} aria-label="Destination Visitor Information">
              <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>Visitor Essentials</h3>

                <div className={styles.infoGroup}>
                  <div className={styles.infoLabel}>
                    <Icon name="map-pin" size="xs" color="var(--color-clay)" ariaHidden />
                    <span>Municipality</span>
                  </div>
                  <div className={styles.infoValue}>{destination.municipality}, Pangasinan</div>
                </div>

                <div className={styles.infoGroup}>
                  <div className={styles.infoLabel}>
                    <Icon name="tag" size="xs" color="var(--color-clay)" ariaHidden />
                    <span>Heritage Category</span>
                  </div>
                  <div className={styles.infoValue}>{destination.category} Heritage</div>
                </div>

                {destination.bestTimeToVisit && (
                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>
                      <Icon name="calendar" size="xs" color="var(--color-clay)" ariaHidden />
                      <span>Best Season to Visit</span>
                    </div>
                    <div className={styles.infoValue}>{destination.bestTimeToVisit}</div>
                  </div>
                )}

                {destination.travelTip && (
                  <div className={styles.infoGroup}>
                    <div className={styles.infoLabel}>
                      <Icon name="info" size="xs" color="var(--color-clay)" ariaHidden />
                      <span>Travel Advice</span>
                    </div>
                    <div className={styles.infoValue}>{destination.travelTip}</div>
                  </div>
                )}

                <div className={styles.asideCta}>
                  <Button variant="primary" size="md" fullWidth href="/destinations">
                    Browse More Places
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className={styles.relatedSection} aria-labelledby="related-title">
        <div className="container">
          <div className={styles.relatedHeader}>
            <Typography variant="eyebrow" color="clay">
              Continue Exploring
            </Typography>
            <Typography variant="h2" color="navy" id="related-title" className={styles.relatedTitle}>
              You Might Also Like
            </Typography>
          </div>

          <div className={styles.relatedGrid}>
            {relatedDestinations.map((rel) => (
              <HeritageCard key={rel.id} destination={rel} aspectRatio="3/2" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}