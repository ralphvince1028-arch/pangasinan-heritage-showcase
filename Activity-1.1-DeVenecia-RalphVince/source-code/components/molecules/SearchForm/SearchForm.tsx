'use client';

import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import styles from './SearchForm.module.css';

export interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  placeholder?: string;
  className?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  value,
  onChange,
  onClear,
  placeholder = 'Search destinations by name, municipality, or category...',
  className = '',
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClear = () => {
    onChange('');
    if (onClear) onClear();
  };

  return (
    <form className={`${styles.searchForm} ${className}`} onSubmit={handleSubmit} role="search">
      <label htmlFor="destination-search-input" className={styles.srOnly}>
        Search Destinations
      </label>
      
      <div className={styles.inputWrapper}>
        <span className={styles.searchIcon}>
          <Icon name="search" size="sm" ariaHidden />
        </span>
        
        <input
          id="destination-search-input"
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
        />

        {value && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear search query"
          >
            <Icon name="close" size="xs" ariaHidden />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
