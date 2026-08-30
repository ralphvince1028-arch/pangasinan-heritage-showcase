import React from 'react';
import type { Metadata } from 'next';
import { getAllDestinations } from '@/data/heritage';
import { Typography } from '@/components/atoms/Typography';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Explore Heritage Destinations',
  description:
    'Search and filter the iconic cultural, natural, and architectural heritage destinations across Pangasinan.',
};

export default function HeritageCatalogPage() {
  const allDestinations = getAllDestinations();

  return (
    <>
      <header className={styles.pageHeader}>
        <div className={`container ${styles.headerContent}`}>
          <Typography variant="tag">Provincial Heritage Directory</Typography>
          <Typography variant="h1" as="h1">
            Explore Pangasinan Heritage
          </Typography>
          <Typography variant="bodyLead" color="muted">
            Search, filter, and discover the natural marvels, historical landmarks, pilgrimage sanctuaries, and geothermal springs across the province.
          </Typography>
        </div>
      </header>

      <section className={styles.contentSection} aria-label="Destinations Directory and Filter">
        <div className="container">
          <HeritageGrid destinations={allDestinations} showSearch />
        </div>
      </section>
    </>
  );
}

