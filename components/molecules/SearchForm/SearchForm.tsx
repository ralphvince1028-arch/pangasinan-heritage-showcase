'use client';

import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import styles from './SearchForm.module.css';

export interface SearchFormProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  resultCount: number;
  totalCount: number;
  onReset?: () => void;
  className?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  resultCount,
  totalCount,
  onReset,
  className = '',
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const isFiltered = searchQuery.trim().length > 0 || selectedCategory !== 'All';

  return (
    <form
      role="search"
      aria-label="Search and filter Pangasinan heritage destinations"
      className={`${styles.formContainer} ${className}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.searchBarWrapper}>
        <span className={styles.searchIcon}>
          <Icon name="search" size="sm" ariaHidden />
        </span>
        <label htmlFor="heritage-search-input" className="sr-only">
          Search destinations by name, municipality, or keywords
        </label>
        <input
          id="heritage-search-input"
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search destinations (e.g. Alaminos, Lighthouse, Spring...)"
          className={styles.input}
          autoComplete="off"
        />
        {searchQuery.length > 0 && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className={styles.clearButton}
            aria-label="Clear search text"
          >
            <Icon name="clear" size="xs" ariaHidden />
          </button>
        )}
      </div>

      <div className={styles.categoryGroup}>
        <span id="category-filter-label" className={styles.categoryLabel}>
          Filter by Heritage Category:
        </span>
        <div
          className={styles.pillsList}
          role="group"
          aria-labelledby="category-filter-label"
        >
          {['All', ...categories].map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                className={`${styles.pill} ${isSelected ? styles.pillActive : ''}`}
                onClick={() => onCategoryChange(category)}
                aria-pressed={isSelected}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.statusBar} aria-live="polite">
        <span>
          Showing <strong>{resultCount}</strong> of <strong>{totalCount}</strong> destination
          {totalCount === 1 ? '' : 's'}
        </span>
        {isFiltered && onReset && (
          <button
            type="button"
            onClick={onReset}
            className={styles.resetLink}
          >
            Reset Filters
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;

