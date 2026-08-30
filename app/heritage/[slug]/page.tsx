import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDestinations, getDestinationBySlug } from '@/data/heritage';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const destinations = getAllDestinations();
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: 'Destination Not Found',
    };
  }

  return {
    title: destination.name,
    description: `${destination.name} in ${destination.municipality}, Pangasinan: ${destination.description}`,
    openGraph: {
      title: `${destination.name} | Pangasinan Heritage`,
      description: destination.description,
      images: [{ url: destination.imageUrl }],
    },
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const {
    name,
    tagline,
    municipality,
    province,
    category,
    longOverview,
    culturalSignificance,
    highlights,
    imageUrl,
    imageAlt,
    gallery,
  } = destination;

  return (
    <article className={`${styles.article} container`}>
      {/* 1. Breadcrumbs / Back Navigation */}
      <nav className={styles.backNav} aria-label="Breadcrumb navigation">
        <Button
          variant="ghost"
          size="sm"
          href="/heritage"
          iconLeft={<Icon name="arrow-left" size="xs" ariaHidden />}
        >
          Back to Heritage Directory
        </Button>
      </nav>

      {/* 2. Hero Header */}
      <header className={styles.heroHeader}>
        <div className={styles.metaRow}>
          <Typography variant="tag">{category}</Typography>
          <div className={styles.location}>
            <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
            <Typography variant="small" color="muted">
              {municipality}, {province}
            </Typography>
          </div>
        </div>

        <Typography variant="h1" as="h1">
          {name}
        </Typography>

        <Typography variant="bodyLead" color="muted">
          {tagline}
        </Typography>
      </header>

      {/* 3. Hero Visual */}
      <div className={styles.heroMedia}>
        <ResponsiveImage
          src={imageUrl}
          alt={imageAlt}
          aspectRatio="16/9"
          priority
        />
      </div>

      {/* 4. Main Two-Column Content Grid */}
      <div className={styles.grid}>
        <div className={styles.mainContent}>
          {/* Overview Block */}
          <section className={styles.contentBlock} aria-labelledby="overview-heading">
            <Typography variant="h2" as="h2" id="overview-heading">
              Overview &amp; Natural Setting
            </Typography>
            <Typography variant="body" color="muted">
              {longOverview}
            </Typography>
          </section>

          {/* Cultural Significance Block */}
          <section className={styles.contentBlock} aria-labelledby="cultural-heading">
            <Typography variant="h2" as="h2" id="cultural-heading">
              Cultural &amp; Historical Significance
            </Typography>
            <Typography variant="body" color="muted">
              {culturalSignificance}
            </Typography>
          </section>

          {/* Highlights Block */}
          {highlights && highlights.length > 0 && (
            <section className={styles.contentBlock} aria-labelledby="highlights-heading">
              <Typography variant="h2" as="h2" id="highlights-heading">
                Key Heritage Highlights
              </Typography>
              <div className={styles.highlightsGrid}>
                {highlights.map((h, i) => (
                  <div key={i} className={styles.highlightCard}>
                    <div className={styles.highlightHeader}>
                      <Icon name="sparkles" size="xs" color="var(--color-primary)" ariaHidden />
                      <Typography variant="h4" as="h3">
                        {h.title}
                      </Typography>
                    </div>
                    <Typography variant="small" color="muted">
                      {h.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Gallery Block */}
          {gallery && gallery.length > 0 && (
            <section className={styles.contentBlock} aria-labelledby="gallery-heading">
              <Typography variant="h2" as="h2" id="gallery-heading">
                Visual Perspectives
              </Typography>
              <div className={styles.galleryGrid}>
                {gallery.map((img, i) => (
                  <div key={i} className={styles.galleryItem}>
                    <ResponsiveImage
                      src={img.url}
                      alt={img.alt}
                      aspectRatio="16/9"
                      caption={img.caption}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Info Card */}
        <aside className={styles.sidebar} aria-label="Destination fast facts">
          <div className={styles.quickInfoCard}>
            <Typography variant="h3" as="h3">
              Destination Information
            </Typography>

            <div className={styles.quickInfoList}>
              <div className={styles.quickInfoItem}>
                <span className={styles.quickInfoLabel}>Municipality / City</span>
                <span className={styles.quickInfoValue}>{municipality}</span>
              </div>
              <div className={styles.quickInfoItem}>
                <span className={styles.quickInfoLabel}>Province</span>
                <span className={styles.quickInfoValue}>{province}</span>
              </div>
              <div className={styles.quickInfoItem}>
                <span className={styles.quickInfoLabel}>Heritage Category</span>
                <span className={styles.quickInfoValue}>{category}</span>
              </div>
              <div className={styles.quickInfoItem}>
                <span className={styles.quickInfoLabel}>Tourism Access</span>
                <span className={styles.quickInfoValue}>Public Eco-Tourism Route</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="md"
              href="/heritage"
              fullWidth
              iconLeft={<Icon name="arrow-left" size="xs" ariaHidden />}
            >
              Back to Catalog
            </Button>
          </div>
        </aside>
      </div>

      {/* 5. Bottom Navigation */}
      <footer className={styles.bottomNav}>
        <Button
          variant="outline"
          size="md"
          href="/heritage"
          iconLeft={<Icon name="arrow-left" size="xs" ariaHidden />}
        >
          All Destinations
        </Button>
        <Button
          variant="primary"
          size="md"
          href="/"
          iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}
        >
          Showcase Home
        </Button>
      </footer>
    </article>
  );
}

