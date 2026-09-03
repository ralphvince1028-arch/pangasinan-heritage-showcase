# Atomic Design System Manual: Pangasinan Heritage Digital Showcase
**Course / Subject:** Elective 4 – Special Topics in IT  
**Student:** Ralph Vince De Venecia  
**Methodology:** Brad Frost’s Atomic Design (Atoms, Molecules, Organisms, Sections)  
**Visual Identity:** Contemporary Coastal Heritage Editorial  
**Color Scheme:** Deep Navy (`#182A35`), Warm Sand (`#F3EBDD`), Burnt Clay (`#B85C3D`), Sea Glass (`#6F9C97`), Rice White (`#FBF8F1`), Charcoal (`#202322`)

---

## 1. System Overview & Hierarchy

Brad Frost’s Atomic Design methodology establishes a modular component hierarchy that promotes reuse, encapsulation, and maintainability across the Pangasinan Heritage digital ecosystem:

```
Atoms (Tokens, Button, Typography, Icon, ResponsiveImage)
  └── Molecules (HeritageCard, SearchForm, NavigationItem)
        └── Organisms (HeaderNavigation, HeritageGrid, Footer)
              └── Templates & Sections (HomeHero, FeaturedStory, HeritageFeature, ExperienceStrip)
                    └── Pages (Home, Destinations Directory, Destination Details, Heritage & Culture)
```

---

## 2. Atoms

### 2.1. Design Tokens (`styles/tokens.css`)
- **Usage Context:** Defines centralized CSS Custom Properties for colors, typography, spacing, border-radii, and shadows.
- **Responsive Logic:** Adapts `--container-padding` from `1.5rem` on mobile to `2.5rem` on tablet/desktop.
- **Code Reference:**
```css
:root {
  --color-navy: #182A35;
  --color-sand: #F3EBDD;
  --color-clay: #B85C3D;
  --color-seaglass: #6F9C97;
  --color-rice-white: #FBF8F1;
  --color-charcoal: #202322;
  --font-editorial-serif: 'Playfair Display', Georgia, serif;
  --font-body-sans: 'Plus Jakarta Sans', Inter, sans-serif;
}
```

---

### 2.2. Button Atom (`components/atoms/Button`)
- **Visual Preview:** Rectangular button with Burnt Clay background (`primary`), Navy border (`outline`), or editorial link with sliding arrow (`editorial-link`).
- **Usage Context:** Triggers actions or navigates to destination pages throughout the showcase.
- **Responsive Logic:** Scales font size and padding across `sm`, `md`, `lg`. Supports `fullWidth` for mobile dialogs and aside CTAs.
- **Code Reference:**
```tsx
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  iconRight,
}) => {
  const combined = `${styles.button} ${styles[variant]} ${styles[size]}`;
  if (href) return <Link href={href} className={combined}>{children}{iconRight}</Link>;
  return <button className={combined}>{children}{iconRight}</button>;
};
```

---

### 2.3. Typography Atom (`components/atoms/Typography`)
- **Visual Preview:** High-contrast editorial serif headings and crisp sans-serif body copy with proportional line heights.
- **Usage Context:** Standardizes all typographic elements across the application (`display`, `h1`, `h2`, `h3`, `lead`, `body`, `eyebrow`, `caption`).
- **Responsive Logic:** Uses CSS `clamp()` fluid typography (e.g., `clamp(1.85rem, 4vw, 3.25rem)` for `h1`).
- **Code Reference:**
```tsx
export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  color = 'default',
  as,
  children,
}) => {
  const Component = as || defaultTagMap[variant];
  return <Component className={`${styles[variant]} ${styles[`color-${color}`]}`}>{children}</Component>;
};
```

---

### 2.4. Icon Atom (`components/atoms/Icon`)
- **Visual Preview:** Crisp inline SVG icons (compass, map-pin, arrow-right, search, landmark, waves, sun, calendar).
- **Usage Context:** Provides visual anchors for navigation, metadata labels, and interactive search controls.
- **Responsive Logic:** Fixed pixel bounding boxes (`xs: 14px`, `sm: 16px`, `md: 20px`, `lg: 24px`, `xl: 32px`) preventing layout shifting.
- **Code Reference:**
```tsx
export const Icon: React.FC<IconProps> = ({ name, size = 'md', color = 'currentColor' }) => (
  <span className={styles.icon} style={{ width: sizeMap[size], height: sizeMap[size] }}>
    <svg viewBox="0 0 24 24">{renderPath(name, color)}</svg>
  </span>
);
```

---

### 2.5. ResponsiveImage Atom (`components/atoms/ResponsiveImage`)
- **Visual Preview:** Photographic container with aspect-ratio enforcement (`16/9`, `4/3`, `3/2`, `1/1`), subtle zoom-on-hover, and base-path awareness.
- **Usage Context:** Renders all local destination photographs and hero banners.
- **Responsive Logic:** Next.js `fill` mode inside a responsive aspect-ratio container with `sizes` query to serve optimized dimensions on mobile vs desktop.
- **Code Reference:**
```tsx
export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, aspectRatio = '16/9', priority }) => {
  const resolved = assetPath(src);
  return (
    <div className={`${styles.wrapper} ${aspectClassMap[aspectRatio]}`}>
      <Image src={resolved} alt={alt} fill priority={priority} className={styles.image} />
    </div>
  );
};
```

---

## 3. Molecules

### 3.1. HeritageCard Molecule (`components/molecules/HeritageCard`)
- **Visual Preview:** Image-forward editorial card featuring a rectangular photo, category/municipality kicker, bold serif title, short narrative, and "Explore Destination &rarr;" link.
- **Usage Context:** Displayed in the Homepage Discovery Strip, Destinations Directory, and Related Destinations section.
- **Responsive Logic:** Stacks neatly in single-column mobile viewports and spans 2-column (tablet) or 3-column (desktop) grids.

---

### 3.2. SearchForm Molecule (`components/molecules/SearchForm`)
- **Visual Preview:** Editorial search bar with search icon, placeholder text, and clear button (`&times;`).
- **Usage Context:** Primary interactive filter on `/destinations` enabling real-time search across destination names, municipalities, and categories.
- **Responsive Logic:** Expands to 100% of container width with touch-friendly 44px minimum tap targets.

---

### 3.3. NavigationItem Molecule (`components/molecules/NavigationItem`)
- **Visual Preview:** Clean text link with an animated bottom accent underline indicating the active route.
- **Usage Context:** Used in desktop and mobile header navigation bars.
- **Responsive Logic:** Horizontal inline presentation on desktop; full-width stacked row on mobile drawer.

---

## 4. Organisms

### 4.1. HeaderNavigation Organism (`components/organisms/HeaderNavigation`)
- **Visual Preview:** Sticky header with "PANGASINAN" wordmark, navigation links (Home, Destinations, Heritage & Culture), Explore CTA button, and accessible mobile menu drawer.
- **Usage Context:** Global header persistent across all pages.
- **Responsive Logic:** Replaces desktop nav links with an accessible hamburger button on viewports `< 768px`.

---

### 4.2. HeritageGrid Organism (`components/organisms/HeritageGrid`)
- **Visual Preview:** Dynamic grid of `HeritageCard` molecules with an interactive Empty State ("No destinations match your search.") and reset button.
- **Usage Context:** Powers destination directory browsing on `/destinations`.
- **Responsive Logic:** `grid-template-columns: 1fr` (Mobile) &rarr; `repeat(2, 1fr)` (Tablet) &rarr; `repeat(3, 1fr)` (Desktop).

---

### 4.3. Footer Organism (`components/organisms/Footer`)
- **Visual Preview:** Deep Navy footer with provincial tourism summary, quick navigation, featured municipalities directory, and copyright bar.
- **Usage Context:** Global footer persistent across all pages.
- **Responsive Logic:** Stacks columns vertically on mobile; spreads across a 3-column grid on viewports `&ge; 768px`.