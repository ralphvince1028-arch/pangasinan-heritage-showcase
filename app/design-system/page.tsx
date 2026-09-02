'use client';

import React, { useState } from 'react';
import { DESTINATIONS, HERITAGE_CATEGORIES } from '@/data/heritage';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon, IconName } from '@/components/atoms/Icon';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { HeritageCard } from '@/components/molecules/HeritageCard';
import { SearchForm } from '@/components/molecules/SearchForm';
import { NavigationItem } from '@/components/molecules/NavigationItem';
import { HeritageGrid } from '@/components/organisms/HeritageGrid';
import styles from './page.module.css';

export default function DesignSystemPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sampleDestination = DESTINATIONS[0]; // Hundred Islands

  const allIcons: IconName[] = [
    'search',
    'map-pin',
    'arrow-right',
    'arrow-left',
    'menu',
    'close',
    'compass',
    'sun',
    'water',
    'landmark',
    'tag',
    'calendar',
    'shield',
    'sparkles',
    'external-link',
    'check',
    'chevron-down',
    'clear',
    'info',
  ];

  const colorTokens = [
    { name: 'Primary Coastal Blue', token: '--color-primary', hex: '#0F4C81', bg: '#0F4C81', text: '#FFFFFF' },
    { name: 'Primary Hover', token: '--color-primary-hover', hex: '#0C3E69', bg: '#0C3E69', text: '#FFFFFF' },
    { name: 'Primary Dark (Footer)', token: '--color-primary-dark', hex: '#082946', bg: '#082946', text: '#FFFFFF' },
    { name: 'Primary Light (Tint)', token: '--color-primary-light', hex: '#EBF3FA', bg: '#EBF3FA', text: '#0F4C81' },
    { name: 'Secondary Solar Ochre', token: '--color-secondary', hex: '#D97706', bg: '#D97706', text: '#FFFFFF' },
    { name: 'Secondary Light', token: '--color-secondary-light', hex: '#FEF3C7', bg: '#FEF3C7', text: '#92400E' },
    { name: 'Eco Emerald (Mangroves)', token: '--color-emerald', hex: '#15803D', bg: '#15803D', text: '#FFFFFF' },
    { name: 'Accessible Focus Ring', token: '--color-focus', hex: '#0284C7', bg: '#0284C7', text: '#FFFFFF' },
    { name: 'Canvas Background', token: '--color-background', hex: '#FAF9F6', bg: '#FAF9F6', text: '#1C1917' },
    { name: 'Card Surface', token: '--color-surface', hex: '#FFFFFF', bg: '#FFFFFF', text: '#1C1917' },
    { name: 'Subtle Surface', token: '--color-surface-subtle', hex: '#F5F4F0', bg: '#F5F4F0', text: '#1C1917' },
    { name: 'Slate Border', token: '--color-border', hex: '#E7E5E4', bg: '#E7E5E4', text: '#1C1917' },
    { name: 'Primary Text (AAA)', token: '--color-text', hex: '#1C1917', bg: '#1C1917', text: '#FFFFFF' },
    { name: 'Muted Text (AA)', token: '--color-text-muted', hex: '#57534E', bg: '#57534E', text: '#FFFFFF' },
  ];

  return (
    <div className={`container ${styles.container}`}>
      {/* Header */}
      <header className={styles.header}>
        <Typography variant="tag">Design System Specification</Typography>
        <Typography variant="h1" as="h1">
          Atomic Design System Manual &amp; Showcase
        </Typography>
        <Typography variant="bodyLead" color="muted">
          Interactive reference library for the Pangasinan Heritage Digital Showcase built following Brad Frost&apos;s Atomic Design methodology. Use this page to capture component screenshots for Deliverable 1.2.
        </Typography>
      </header>

      {/* =========================================================================
          SECTION 1: ATOMS
          ========================================================================= */}
      <section className={styles.section} id="atoms-colors" aria-labelledby="atoms-colors-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Atom 1 &bull; Design Tokens</Typography>
          <Typography variant="h2" as="h2" id="atoms-colors-heading">
            Color Tokens
          </Typography>
          <p className={styles.sectionLead}>
            Semantic palette inspired by Pangasinan&apos;s coastal waters, golden sun, stone, and mangrove reserves.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 1.1 Color Tokens</span>
          </div>
        </div>

        <div className={styles.colorGrid}>
          {colorTokens.map((c) => (
            <div key={c.token} className={styles.colorCard}>
              <div
                className={styles.colorSwatch}
                style={{ backgroundColor: c.bg, borderBottom: '1px solid var(--color-border)' }}
              />
              <div className={styles.colorInfo}>
                <span className={styles.colorName}>{c.name}</span>
                <span className={styles.colorToken}>{c.token}</span>
                <span className={styles.colorHex}>{c.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ATOM 2: TYPOGRAPHY */}
      <section className={styles.section} id="atoms-typography" aria-labelledby="atoms-type-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Atom 2 &bull; Typography Scale</Typography>
          <Typography variant="h2" as="h2" id="atoms-type-heading">
            Typography
          </Typography>
          <p className={styles.sectionLead}>
            Editorial serif headings paired with clean, accessible sans-serif body text using fluid <code>clamp()</code> scaling.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 1.2 Typography</span>
          </div>
        </div>

        <div className={styles.typeStack}>
          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: Display</span>
              <span>clamp(2.25rem, 5vw + 1rem, 3.75rem) &bull; Bold Serif</span>
            </div>
            <Typography variant="display">Discover Pangasinan Heritage</Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: H1</span>
              <span>clamp(1.875rem, 3.5vw + 0.75rem, 2.75rem) &bull; Bold Serif</span>
            </div>
            <Typography variant="h1">Hundred Islands National Park</Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: H2</span>
              <span>clamp(1.5rem, 2.5vw + 0.5rem, 2rem) &bull; Bold Serif</span>
            </div>
            <Typography variant="h2">Historic Cape Bolinao Lighthouse</Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: H3</span>
              <span>clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem) &bull; Semibold Sans</span>
            </div>
            <Typography variant="h3">Balungao Hot and Cold Springs</Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: H4</span>
              <span>clamp(1.125rem, 1vw + 0.35rem, 1.25rem) &bull; Semibold Sans</span>
            </div>
            <Typography variant="h4">Geothermal Thermal Pools &amp; Trails</Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: Body Lead</span>
              <span>1.125rem (18px) &bull; Regular Sans &bull; Line height 1.7</span>
            </div>
            <Typography variant="bodyLead" color="muted">
              The Pangasinan Provincial Tourism Office promotes cultural awareness and sustainable eco-tourism across Northern Luzon.
            </Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: Body</span>
              <span>1rem (16px) &bull; Regular Sans &bull; Line height 1.65</span>
            </div>
            <Typography variant="body">
              Believed to be over two million years old, these ancient coral reef deposits were sculpted by geological upheaval and ocean waves into distinct mushroom silhouettes.
            </Typography>
          </div>

          <div className={styles.typeRow}>
            <div className={styles.typeMeta}>
              <span>Variant: Small &amp; Tag</span>
              <span>0.875rem &amp; 0.75rem &bull; Pill badges &amp; sub-details</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Typography variant="tag">Natural Heritage</Typography>
              <Typography variant="small" color="muted">
                Alaminos City, Pangasinan
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* ATOM 3: BUTTONS */}
      <section className={styles.section} id="atoms-buttons" aria-labelledby="atoms-btn-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Atom 3 &bull; Interactive Controls</Typography>
          <Typography variant="h2" as="h2" id="atoms-btn-heading">
            Button Atom
          </Typography>
          <p className={styles.sectionLead}>
            Accessible polymorphic button atom supporting links, buttons, 4 variants, 3 sizes, and touch targets &ge; 44px.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 1.3 Button</span>
          </div>
        </div>

        <div className={styles.buttonPlayground}>
          <div>
            <Typography variant="h4" as="h3" className="mb-3">
              Variants (Primary, Secondary, Outline, Ghost, Disabled)
            </Typography>
            <div className={styles.buttonRow}>
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="outline">Outline Action</Button>
              <Button variant="ghost">Ghost Action</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </div>

          <div>
            <Typography variant="h4" as="h3" className="mb-3">
              Sizes (Small, Medium, Large)
            </Typography>
            <div className={styles.buttonRow}>
              <Button variant="primary" size="sm">
                Small (sm)
              </Button>
              <Button variant="primary" size="md">
                Medium (md)
              </Button>
              <Button variant="primary" size="lg">
                Large (lg)
              </Button>
            </div>
          </div>

          <div>
            <Typography variant="h4" as="h3" className="mb-3">
              With Icons &amp; Touch Target Compliance
            </Typography>
            <div className={styles.buttonRow}>
              <Button
                variant="primary"
                iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}
              >
                Explore Destinations
              </Button>
              <Button
                variant="outline"
                iconLeft={<Icon name="arrow-left" size="xs" ariaHidden />}
              >
                Previous Page
              </Button>
              <Button
                variant="secondary"
                iconLeft={<Icon name="sparkles" size="xs" ariaHidden />}
              >
                Featured Highlights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ATOM 4: ICONS */}
      <section className={styles.section} id="atoms-icons" aria-labelledby="atoms-icon-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Atom 4 &bull; Vector Icons</Typography>
          <Typography variant="h2" as="h2" id="atoms-icon-heading">
            Icon Atom
          </Typography>
          <p className={styles.sectionLead}>
            Ultra-lightweight inline SVGs with zero external bundle overhead and scalable size props.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 1.4 Icon</span>
          </div>
        </div>

        <div className={styles.iconGrid}>
          {allIcons.map((iconName) => (
            <div key={iconName} className={styles.iconCard}>
              <Icon name={iconName} size="md" color="var(--color-primary)" />
              <span className={styles.iconName}>{iconName}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ATOM 5: RESPONSIVE IMAGE */}
      <section className={styles.section} id="atoms-image" aria-labelledby="atoms-img-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Atom 5 &bull; Media Optimization</Typography>
          <Typography variant="h2" as="h2" id="atoms-img-heading">
            ResponsiveImage Atom
          </Typography>
          <p className={styles.sectionLead}>
            Wraps <code>next/image</code> with responsive aspect ratios, layout-shift prevention, and optional hover zoom.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 1.5 ResponsiveImage</span>
          </div>
        </div>

        <div className={styles.imageDemoGrid}>
          <div className={styles.imageDemoCard}>
            <span className={styles.imageDemoLabel}>Aspect Ratio 16:9 (Widescreen)</span>
            <ResponsiveImage
              src="/images/hundred-islands.png"
              alt="Hundred Islands preview 16:9"
              aspectRatio="16/9"
              radius="md"
              caption="16:9 Widescreen Aspect"
            />
          </div>

          <div className={styles.imageDemoCard}>
            <span className={styles.imageDemoLabel}>Aspect Ratio 4:3 (Standard)</span>
            <ResponsiveImage
              src="/images/bolinao-lighthouse.png"
              alt="Bolinao Lighthouse preview 4:3"
              aspectRatio="4/3"
              radius="md"
              caption="4:3 Standard Photo Aspect"
            />
          </div>

          <div className={styles.imageDemoCard}>
            <span className={styles.imageDemoLabel}>Aspect Ratio 1:1 (Square)</span>
            <ResponsiveImage
              src="/images/balungao-hot-spring.png"
              alt="Balungao Hot Spring preview 1:1"
              aspectRatio="1/1"
              radius="md"
              caption="1:1 Square Aspect"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MOLECULES
          ========================================================================= */}
      <section className={styles.section} id="molecules-card" aria-labelledby="molecules-card-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Molecule 1 &bull; Card Component</Typography>
          <Typography variant="h2" as="h2" id="molecules-card-heading">
            HeritageCard Molecule
          </Typography>
          <p className={styles.sectionLead}>
            Combines Image, Tag, Typography, Icon, and Button atoms into an accessible editorial destination card.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 2.1 HeritageCard</span>
          </div>
        </div>

        <div style={{ maxWidth: '420px' }}>
          <HeritageCard destination={sampleDestination} />
        </div>
      </section>

      {/* MOLECULE 2: SEARCH FORM */}
      <section className={styles.section} id="molecules-search" aria-labelledby="molecules-search-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Molecule 2 &bull; Filtering Interface</Typography>
          <Typography variant="h2" as="h2" id="molecules-search-heading">
            SearchForm Molecule
          </Typography>
          <p className={styles.sectionLead}>
            Interactive search input with real-time text query, category pill filters, and live count indicator.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 2.2 SearchForm</span>
          </div>
        </div>

        <div className={styles.componentShowcaseBox}>
          <SearchForm
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            categories={HERITAGE_CATEGORIES}
            resultCount={DESTINATIONS.length}
            totalCount={DESTINATIONS.length}
            onReset={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
          />
        </div>
      </section>

      {/* MOLECULE 3: NAVIGATION ITEM */}
      <section className={styles.section} id="molecules-nav" aria-labelledby="molecules-nav-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Molecule 3 &bull; Navigation Link</Typography>
          <Typography variant="h2" as="h2" id="molecules-nav-heading">
            NavigationItem Molecule
          </Typography>
          <p className={styles.sectionLead}>
            Accessible navigation link with active state indicator line and minimum 44px touch targets.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 2.3 NavigationItem</span>
          </div>
        </div>

        <div className={styles.navItemDemoRow}>
          <NavigationItem href="/design-system" label="Active State" isActive />
          <NavigationItem href="/heritage" label="Inactive State" isActive={false} />
          <NavigationItem
            href="/"
            label="With Icon"
            icon={<Icon name="compass" size="xs" ariaHidden />}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: ORGANISMS
          ========================================================================= */}
      <section className={styles.section} id="organisms-grid" aria-labelledby="organisms-grid-heading">
        <div className={styles.sectionHeader}>
          <Typography variant="tag">Organism 1 &bull; Responsive Grid</Typography>
          <Typography variant="h2" as="h2" id="organisms-grid-heading">
            HeritageGrid Organism
          </Typography>
          <p className={styles.sectionLead}>
            Mobile-first CSS Grid (1 col &lt; 640px, 2 col 640px&ndash;1023px, 3 col &ge; 1024px) with client-side live filtering.
          </p>
          <div className={styles.docNote}>
            <Icon name="info" size="xs" ariaHidden />
            <span>Screenshot Target: Deliverable 1.2 &bull; Section 3.1 HeritageGrid</span>
          </div>
        </div>

        <HeritageGrid destinations={DESTINATIONS.slice(0, 3)} showSearch={false} />
      </section>
    </div>
  );
}

