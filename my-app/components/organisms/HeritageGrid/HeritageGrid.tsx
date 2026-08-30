'use client';

import React, { useState, useMemo } from 'react';
import { Destination } from '@/types/heritage';
import { HERITAGE_CATEGORIES } from '@/data/heritage';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import { SearchForm } from '@/components/molecules/SearchForm';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import styles from './HeritageGrid.module.css';

export interface HeritageGridProps {
  destinations: Destination[];
  showSearch?: boolean;
  initialCategory?: string;
  className?: string;
}

export const HeritageGrid: React.FC<HeritageGridProps> = ({
  destinations,
  showSearch = false,
  initialCategory = 'All',
  className = '',
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredDestinations = useMemo(() => {
    if (!showSearch) return destinations;

    return destinations.filter((dest) => {
      const matchesCategory =
        selectedCategory === 'All' || dest.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.municipality.toLowerCase().includes(q) ||
        dest.tagline.toLowerCase().includes(q) ||
        dest.description.toLowerCase().includes(q) ||
        dest.category.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [destinations, showSearch, searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {showSearch && (
        <SearchForm
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={HERITAGE_CATEGORIES}
          resultCount={filteredDestinations.length}
          totalCount={destinations.length}
          onReset={handleReset}
        />
      )}

      {filteredDestinations.length > 0 ? (
        <div className={styles.grid}>
          {filteredDestinations.map((dest, index) => (
            <HeritageCard
              key={dest.id}
              destination={dest}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>
            <Icon name="search" size="lg" ariaHidden />
          </div>
          <Typography variant="h3" as="h3">
            No Heritage Destinations Found
          </Typography>
          <Typography variant="body" color="muted">
            We couldn&apos;t find any destination matching &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category.
          </Typography>
          <Button variant="outline" size="sm" onClick={handleReset}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeritageGrid;

