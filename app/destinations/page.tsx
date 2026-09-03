'use client';

import React, { useState, useMemo } from 'react';
import { getAllDestinations } from '@/data/destinations';
import { DestinationCategory } from '@/types/destination';
import { Typography } from '@/components/atoms/Typography';
import { SearchForm } from '@/components/molecules/SearchForm';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import styles from './destinations.module.css';

const CATEGORIES: Array<{ label: string; value: 'All' | DestinationCategory }> = [
  { label: 'All Destinations', value: 'All' },
  { label: 'Coastal', value: 'Coastal' },
  { label: 'Heritage', value: 'Heritage' },
  { label: 'Nature', value: 'Nature' },
  { label: 'Culture', value: 'Culture' },
];

export default function DestinationsPage() {
  const allDestinations = useMemo(() => getAllDestinations(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | DestinationCategory>('All');

  const filteredDestinations = useMemo(() => {
    return allDestinations.filter((dest) => {
      const matchesCategory =
        selectedCategory === 'All' || dest.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        dest.name.toLowerCase().includes(query) ||
        dest.municipality.toLowerCase().includes(query) ||
        dest.category.toLowerCase().includes(query) ||
        dest.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [allDestinations, searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  const isFiltered = Boolean(searchQuery || selectedCategory !== 'All');

  return (
    <div className={styles.pageContainer}>
      {/* Page Editorial Header */}
      <section className={styles.headerSection} aria-labelledby="page-title">
        <div className="container">
          <div className={styles.headerContent}>
            <Typography variant="eyebrow" color="clay" className={styles.headerEyebrow}>
              Explore Pangasinan
            </Typography>
            <Typography variant="h1" color="navy" id="page-title" className={styles.headerTitle}>
              Places worth the journey.
            </Typography>
            <Typography variant="lead" color="muted" className={styles.headerLead}>
              Browse through our curated collection of iconic coral archipelagos, historic coastal landmarks, and natural geothermal wellness retreats across the province.
            </Typography>
          </div>

          {/* Search and Filter Controls */}
          <div className={styles.controlsWrapper}>
            <div className={styles.searchWrapper}>
              <SearchForm
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => setSearchQuery('')}
              />
            </div>

            {/* Category Filter Pills */}
            <div className={styles.filterPills} role="group" aria-label="Filter destinations by category">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.value;
                return (
                  <button
                    key={cat.value}
                    type="button"
                    className={`${styles.filterPill} ${isSelected ? styles.filterPillActive : ''}`}
                    onClick={() => setSelectedCategory(cat.value)}
                    aria-pressed={isSelected}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Grid Section */}
      <section className={styles.gridSection} aria-label="Destinations Grid">
        <div className="container">
          <div className={styles.resultsMeta}>
            <Typography variant="eyebrow" color="muted">
              Showing {filteredDestinations.length} {filteredDestinations.length === 1 ? 'Destination' : 'Destinations'}
              {isFiltered && ` (Filtered)`}
            </Typography>
          </div>

          <HeritageGrid
            destinations={filteredDestinations}
            onClearSearch={handleClearFilters}
          />
        </div>
      </section>
    </div>
  );
}
