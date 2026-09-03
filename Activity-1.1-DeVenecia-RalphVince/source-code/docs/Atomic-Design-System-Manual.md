# Atomic Design System Manual
## Pangasinan Heritage Digital Showcase
**Course Activity:** Activity 1 – The Pangasinan Heritage Digital Showcase  
**Author:** Ralph Vince De Venecia  
**Degree Program:** Bachelor of Science in Information Technology (BSIT)  
**Organization:** Pangasinan Provincial Tourism Office  
**Methodology:** Brad Frost's Atomic Design System  

---

## Table of Contents
1. [Overview & Design Philosophy](#overview--design-philosophy)
2. [Global Design Tokens](#global-design-tokens)
3. [Atoms](#atoms)
   - [3.1 Color Tokens Atom](#31-color-tokens-atom)
   - [3.2 Typography Atom](#32-typography-atom)
   - [3.3 Button Atom](#33-button-atom)
   - [3.4 Icon Atom](#34-icon-atom)
   - [3.5 ResponsiveImage Atom](#35-responsiveimage-atom)
4. [Molecules](#molecules)
   - [4.1 HeritageCard Molecule](#41-heritagecard-molecule)
   - [4.2 SearchForm Molecule](#42-searchform-molecule)
   - [4.3 NavigationItem Molecule](#43-navigationitem-molecule)
5. [Organisms](#organisms)
   - [5.1 HeritageGrid Organism](#51-heritagegrid-organism)
   - [5.2 HeaderNavigation Organism](#52-headernavigation-organism)
   - [5.3 Footer Organism](#53-footer-organism)
6. [Responsive Breakpoint Architecture](#responsive-breakpoint-architecture)
7. [Accessibility & WCAG 2.1 AA Compliance](#accessibility--wcag-21-aa-compliance)

---

## 1. Overview & Design Philosophy

The **Pangasinan Heritage Digital Showcase** design system is engineered following **Brad Frost's Atomic Design** methodology. This methodology constructs complex user interfaces hierarchically:

$$\text{Atoms} \longrightarrow \text{Molecules} \longrightarrow \text{Organisms} \longrightarrow \text{Templates / Pages}$$

### Visual Identity
- **Editorial Philippine Tourism Aesthetic**: Spacious layout, clean lines, authentic cultural colors (Pangasinan coastal blue, warm sand ochre, mangrove emerald, slate stone).
- **Zero-Bloat Performance**: Built without heavy UI component frameworks (no Material UI, no Ant Design). All micro-interactions use efficient CSS transitions.
- **Accessibility as a First-Class Citizen**: Complies with **WCAG 2.1 Level AA** standards with high-contrast color ratios, visible focus indicators, keyboard navigability, and `prefers-reduced-motion` compliance.

> **Design System Showcase Route**: A dedicated live showcase is available at `/design-system` where every component and its states can be inspected and screenshotted.

---

## 2. Global Design Tokens

Design tokens are defined as CSS Custom Properties in `app/globals.css`. They provide a single source of truth for color, typography, spacing, border radii, and shadows across the entire application.

```css
:root {
  /* Color Tokens */
  --color-primary: #0F4C81;
  --color-primary-hover: #0C3E69;
  --color-primary-dark: #082946;
  --color-primary-light: #EBF3FA;
  --color-secondary: #D97706;
  --color-secondary-hover: #B45309;
  --color-secondary-light: #FEF3C7;
  --color-emerald: #15803D;
  --color-background: #FAF9F6;
  --color-surface: #FFFFFF;
  --color-surface-subtle: #F5F4F0;
  --color-text: #1C1917;
  --color-text-muted: #57534E;
  --color-text-inverse: #FFFFFF;
  --color-border: #E7E5E4;
  --color-focus: #0284C7;

  /* Spacing Tokens */
  --space-2xs: 0.25rem; /* 4px */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 0.75rem;  /* 12px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 3rem;    /* 48px */
  --space-3xl: 4.5rem;  /* 72px */

  /* Radius Tokens */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```

---

## 3. Atoms

### 3.1 Color Tokens Atom

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#atoms-colors`
- **Capture Instructions**: Take a viewport capture of the Color Tokens swatch grid displaying swatch colors, token names, and hex codes.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: Color Tokens Swatches from /design-system]        |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Purpose**: Defines semantic palette values for backgrounds, foregrounds, brand accents, and states.
- **Where Used**: Injected globally via `:root` in `app/globals.css` and referenced by CSS modules.
- **When to Use**: Used across all components to ensure color consistency and WCAG AA contrast compliance. Never hardcode arbitrary hex codes in component files.

#### 3. Responsive Logic
- Adapts dynamically on mobile, tablet, and desktop using CSS Grid:
  - Mobile (< 640px): 1–2 columns auto-fit (`minmax(220px, 1fr)`).
  - Tablet (640px–1023px): 3 columns auto-fit.
  - Desktop (≥ 1024px): 4–5 columns auto-fit.

---

### 3.2 Typography Atom

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#atoms-typography`
- **Capture Instructions**: Take a screenshot of the Typography scale showing `Display`, `H1`, `H2`, `H3`, `H4`, `Body Lead`, `Body`, `Small`, and `Tag`.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: Typography Scale Hierarchy from /design-system]  |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/atoms/Typography/Typography.tsx`
- **Purpose**: Enforces standard heading hierarchies, body text sizes, fluid clamp scaling, and color variants.
- **Where Used**: Throughout all pages, headings, cards, and editorial content blocks.
- **When to Use**: Whenever rendering text elements. Prevents disjointed font sizes and ensures proper semantic heading levels (`<h1>` through `<h6>`).

#### 3. Responsive Logic
- Uses CSS `clamp()` formulas for fluid responsive typography without sudden breakpoint jumps:
  - `Display`: `clamp(2.25rem, 5vw + 1rem, 3.75rem)` (36px on mobile $\rightarrow$ 60px on desktop).
  - `H1`: `clamp(1.875rem, 3.5vw + 0.75rem, 2.75rem)` (30px on mobile $\rightarrow$ 44px on desktop).
  - `H2`: `clamp(1.5rem, 2.5vw + 0.5rem, 2rem)` (24px on mobile $\rightarrow$ 32px on desktop).
  - `H3`: `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)` (20px on mobile $\rightarrow$ 24px on desktop).

#### 4. Code Reference
```tsx
// components/atoms/Typography/Typography.tsx
import React from 'react';
import styles from './Typography.module.css';

export type TypographyVariant =
  | 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodyLead' | 'small' | 'caption' | 'tag';

export type TypographyColor =
  | 'default' | 'muted' | 'brand' | 'secondary' | 'inverse' | 'emerald';

export interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  color?: TypographyColor;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  color = 'default',
  align = 'left',
  children,
  className = '',
  id,
}) => {
  const Component = as || defaultElementMap[variant] || 'p';
  return (
    <Component className={`${styles[variant]} ${styles[color]} ${className}`} id={id}>
      {children}
    </Component>
  );
};
```

---

### 3.3 Button Atom

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#atoms-buttons`
- **Capture Instructions**: Take a screenshot of the Button playground showing Primary, Secondary, Outline, Ghost, Disabled, and Size variants.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: Button Variants and Sizes from /design-system]   |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/atoms/Button/Button.tsx`
- **Purpose**: Provides interactive actions, navigation links, and call-to-action buttons.
- **Where Used**: Hero banners, Navigation Header, Heritage Cards, and Detail pages.
- **When to Use**: Use `href` prop when navigating between routes (renders `<Link>`); omit `href` when triggering actions (renders `<button>`).

#### 3. Responsive Logic
- **Touch Target Minimum**: Enforces `min-height: 44px` on mobile viewports for WCAG 2.1 AA touch compliance.
- Supports `fullWidth={true}` for mobile drawers and form submissions.
- Focus-visible ring renders a 3px high-visibility electric blue outline (`--color-focus`).

#### 4. Code Reference
```tsx
// components/atoms/Button/Button.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  className = '',
  disabled,
  ...restProps
}) => {
  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return <Link href={href} className={combinedClasses} role="button">{content}</Link>;
  }

  return (
    <button type="button" className={combinedClasses} disabled={disabled} aria-disabled={disabled} {...restProps}>
      {content}
    </button>
  );
};
```

---

### 3.4 Icon Atom

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#atoms-icons`
- **Capture Instructions**: Capture the icon grid showcasing all 19 vector glyphs.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: Icon Atom Grid from /design-system]              |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/atoms/Icon/Icon.tsx`
- **Purpose**: Renders lightweight, inline SVG icons without importing heavy third-party icon libraries.
- **Where Used**: Search inputs, location badges, card action buttons, and mobile menus.
- **When to Use**: Whenever a visual icon glyph is required alongside text.

#### 3. Responsive Logic
- Inherits `currentColor` or uses explicit design tokens.
- Supports standardized pixel scales: `xs` (14px), `sm` (18px), `md` (24px), `lg` (32px).
- Sets `aria-hidden="true"` by default to prevent screen reader clutter, or accepts `ariaLabel`.

#### 4. Code Reference
```tsx
// components/atoms/Icon/Icon.tsx
import React from 'react';
import styles from './Icon.module.css';

export type IconName = 'search' | 'map-pin' | 'arrow-right' | 'arrow-left' | 'menu' | 'close' | 'compass' | 'sun' | 'water' | 'landmark' | 'tag' | 'calendar' | 'shield' | 'sparkles' | 'external-link' | 'check' | 'chevron-down' | 'clear' | 'info';

export interface IconProps {
  name: IconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | number;
  color?: string;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}
```

---

### 3.5 ResponsiveImage Atom

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#atoms-image`
- **Capture Instructions**: Take a screenshot of the 16:9, 4:3, and 1:1 image aspect ratio demonstrations.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: ResponsiveImage Aspect Ratios from /design-system]|
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/atoms/ResponsiveImage/ResponsiveImage.tsx`
- **Purpose**: Wraps `next/image` with predefined aspect ratios, layout bounding boxes, and lazy loading.
- **Where Used**: Hero banners, Heritage Cards, and Destination Detail galleries.
- **When to Use**: Every image rendering in the application. Eliminates Cumulative Layout Shift (CLS).

#### 3. Responsive Logic
- Implements CSS `aspect-ratio: 16 / 9`, `4 / 3`, or `1 / 1`.
- Configures responsive `sizes` attribute (`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`).
- Uses `priority={true}` only for hero banners (LCP images); defaults to `loading="lazy"`.

#### 4. Code Reference
```tsx
// components/atoms/ResponsiveImage/ResponsiveImage.tsx
import React from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './ResponsiveImage.module.css';

export interface ResponsiveImageProps extends Omit<ImageProps, 'alt'> {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9' | 'auto';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  caption?: string;
  zoomOnHover?: boolean;
  className?: string;
}
```

---

## 4. Molecules

### 4.1 HeritageCard Molecule

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#molecules-card` or `http://localhost:3000/`
- **Capture Instructions**: Take a screenshot of the HeritageCard displaying image, category pill, title, location pin, description, and explore button.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: HeritageCard Molecule from /design-system]       |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/molecules/HeritageCard/HeritageCard.tsx`
- **Composition**: Composed of `ResponsiveImage` (Atom), `Typography` (Atom), `Icon` (Atom), and `Button` (Atom).
- **Where Used**: Home Page Featured section, Heritage Catalog grid, and search result views.
- **When to Use**: Used to display any heritage destination in a card format.

#### 3. Responsive Logic
- Enclosed in semantic `<article>` container.
- Flexbox column layout with `height: 100%` and `margin-top: auto` on the footer ensures uniform card heights across grid rows.
- Interactive hover state applies a subtle lift (`transform: translateY(-4px)`) and shadow elevation (`--shadow-card-hover`).

#### 4. Code Reference
```tsx
// components/molecules/HeritageCard/HeritageCard.tsx
import React from 'react';
import Link from 'next/link';
import { Destination } from '@/types/heritage';
import { ResponsiveImage } from '@/components/atoms/ResponsiveImage';
import { Typography } from '@/components/atoms/Typography';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/atoms/Button';
import styles from './HeritageCard.module.css';

export interface HeritageCardProps {
  destination: Destination;
  className?: string;
  priority?: boolean;
}

export const HeritageCard: React.FC<HeritageCardProps> = ({ destination, className = '', priority = false }) => {
  const { slug, name, municipality, province, category, description, imageUrl, imageAlt, featured } = destination;
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        {featured && <span className={styles.featuredBadge}>Featured</span>}
        <Link href={`/heritage/${slug}`} aria-label={`View details of ${name}`}>
          <ResponsiveImage src={imageUrl} alt={imageAlt} aspectRatio="16/9" priority={priority} zoomOnHover />
        </Link>
      </div>
      <div className={styles.content}>
        <Typography variant="tag">{category}</Typography>
        <Link href={`/heritage/${slug}`}>
          <Typography variant="h3" as="h3" className={styles.title}>{name}</Typography>
        </Link>
        <div className={styles.location}>
          <Icon name="map-pin" size="xs" color="var(--color-secondary)" ariaHidden />
          <Typography variant="small" color="muted">{municipality}, {province}</Typography>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <Button variant="outline" size="sm" href={`/heritage/${slug}`} fullWidth iconRight={<Icon name="arrow-right" size="xs" ariaHidden />}>
            Explore Destination
          </Button>
        </div>
      </div>
    </article>
  );
};
```

---

### 4.2 SearchForm Molecule

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#molecules-search` or `http://localhost:3000/heritage`
- **Capture Instructions**: Take a screenshot of the search input, category filter pills, and live result count status bar.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: SearchForm Molecule from /design-system]         |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/molecules/SearchForm/SearchForm.tsx`
- **Composition**: Composed of `Icon` (Atom), form `<input>`, filter pills, and live count indicator.
- **Where Used**: Heritage Catalog page (`/heritage`) and Design System showcase.
- **When to Use**: Whenever users need to search destinations by keyword or filter by heritage category.

#### 3. Responsive Logic
- Form container adapts with full width.
- Category pills wrap flexibly (`flex-wrap: wrap`) on mobile screens without horizontal overflow.
- Accessible form landmark (`<form role="search">`) with live polite status announcements (`aria-live="polite"`).

#### 4. Code Reference
```tsx
// components/molecules/SearchForm/SearchForm.tsx
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
```

---

### 4.3 NavigationItem Molecule

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/design-system#molecules-nav`
- **Capture Instructions**: Capture the active and inactive NavigationItem states.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: NavigationItem Molecule from /design-system]     |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/molecules/NavigationItem/NavigationItem.tsx`
- **Composition**: Combines `next/link`, `Icon` (optional), and active indicator styling.
- **Where Used**: Header navigation bar and mobile drawer menu.
- **When to Use**: For all header and drawer navigation links.

#### 3. Responsive Logic
- Renders an active underline on desktop and a highlighted background on mobile viewports.
- Uses `aria-current="page"` when the current route matches `href`.
- Ensures touch target height of at least 44px.

---

## 5. Organisms

### 5.1 HeritageGrid Organism

#### 1. Visual Preview
- **Live Location**: Navigate to `http://localhost:3000/heritage`
- **Capture Instructions**: Take full-width screenshots at Mobile (375px), Tablet (768px), and Desktop (1440px) viewports showing the column transitions.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: HeritageGrid Responsive Layouts]                 |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/organisms/HeritageGrid/HeritageGrid.tsx`
- **Composition**: Combines `SearchForm` (Molecule), multiple `HeritageCard` (Molecules), empty-state typography, and action buttons.
- **Where Used**: Heritage Catalog (`/heritage`) and Home Page featured showcase.
- **When to Use**: For rendering responsive collections of destination cards with live filtering.

#### 3. Responsive Logic (CSS Grid)
```css
/* components/organisms/HeritageGrid/HeritageGrid.module.css */
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile default: 1 column (<640px) */
  gap: var(--space-lg);
  width: 100%;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns (640px-1023px) */
    gap: var(--space-xl);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns (>=1024px) */
    gap: var(--space-xl);
  }
}
```

---

### 5.2 HeaderNavigation Organism

#### 1. Visual Preview
- **Live Location**: Visible at the top of all pages (`http://localhost:3000/`)
- **Capture Instructions**: 
  1. Desktop view showing brand emblem, title, horizontal nav links, and CTA button.
  2. Mobile view (375px) showing logo, title, and hamburger icon.
  3. Mobile open drawer showing full slide-down navigation menu.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: HeaderNavigation Desktop & Mobile Drawer]        |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/organisms/HeaderNavigation/HeaderNavigation.tsx`
- **Composition**: Combines Brand logo, Typography, `NavigationItem` molecules, `Button` atom, and `Icon` hamburger toggle.
- **Where Used**: Mounted globally inside `app/layout.tsx`.
- **When to Use**: Persistent site header across all routes.

#### 3. Responsive Logic
- Sticky positioning (`position: sticky; top: 0`) with subtle backdrop blur.
- On desktop ($\ge 840\text{px}$): Displays inline horizontal links and CTA button.
- On mobile ($< 840\text{px}$): Hides horizontal links and displays accessible 44px hamburger button. Opening the menu triggers a smooth slide-down drawer with ESC key and route change auto-close.

---

### 5.3 Footer Organism

#### 1. Visual Preview
- **Live Location**: Bottom of all pages (`http://localhost:3000/`)
- **Capture Instructions**: Take a screenshot of the multi-column footer layout.
- **Screenshot Placeholder**:
  ```
  +-----------------------------------------------------------------------+
  | [INSERT SCREENSHOT: Footer Organism]                                 |
  +-----------------------------------------------------------------------+
  ```

#### 2. Usage Context
- **Component File**: `components/organisms/Footer/Footer.tsx`
- **Composition**: Cultural overview, municipal directory, accessibility statement badge, and copyright bar.
- **Where Used**: Mounted globally in `app/layout.tsx`.

---

## 6. Responsive Breakpoint Architecture

The project strictly follows a **Mobile-First** strategy using three primary breakpoints:

| Viewport Category | Range | Grid Behavior | Navigation Behavior |
| :--- | :--- | :--- | :--- |
| **Mobile** | $< 640\text{px}$ | 1 Column Grid | Hamburger Button + Slide-Down Drawer |
| **Tablet** | $640\text{px} - 1023\text{px}$ | 2 Column Grid | Compact Navigation Layout |
| **Desktop** | $\ge 1024\text{px}$ | 3 Column Grid | Full Horizontal Navigation + Action CTA |

---

## 7. Accessibility & WCAG 2.1 AA Compliance

| Accessibility Feature | Implementation | WCAG Guideline |
| :--- | :--- | :--- |
| **Skip Link** | `.skip-link` jumps directly to `<main id="main-content">` | 2.4.1 Bypass Blocks |
| **Color Contrast** | Text contrast $\ge 4.5:1$ (Slate `#1C1917` on `#FAF9F6` is $13.5:1$) | 1.4.3 Contrast (Minimum) |
| **Focus Indicators** | `:focus-visible` with 3px electric azure ring (`--color-focus`) | 2.4.7 Focus Visible |
| **Touch Targets** | All buttons and links have `min-height: 44px` | 2.5.5 Target Size |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` removes animations | 2.3.3 Animation from Interactions |
| **Semantic HTML** | Uses `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` | 1.3.1 Info and Relationships |
| **Alt Text** | Every `next/image` has descriptive non-empty `alt` attributes | 1.1.1 Non-text Content |
| **Form Labels** | Accessible `<label>` elements connected via `htmlFor` / `id` | 3.3.2 Labels or Instructions |

