# Pangasinan Heritage & Tourism Digital Showcase
**Course / Subject:** Elective 4 – Special Topics in IT  
**Student Name:** Ralph Vince De Venecia  
**Selected Framework:** React + Next.js 14 App Router (Static Export)  
**Live Website URL:** [https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/](https://ralphvince1028-arch.github.io/pangasinan-heritage-showcase/)  
**Deployment Platform:** GitHub Pages (JAMstack Static Prerendering)

---

## 🏛️ Project Overview

The **Pangasinan Heritage Digital Showcase** is a public-facing digital tourism and cultural awareness platform developed for the **Pangasinan Provincial Tourism Office**. The project presents iconic destinations, historic colonial landmarks, and natural geothermal wellness retreats across Northern Luzon with an editorial travel magazine experience.

### Visual Identity: *Contemporary Coastal Heritage Editorial*
- **Deep Navy (`#182A35`)**: Primary headers, dark footer, and brand typography.
- **Warm Sand (`#F3EBDD`)**: Primary page background and warm editorial surfaces.
- **Burnt Clay (`#B85C3D`)**: Primary call-to-action buttons and key highlights.
- **Sea Glass (`#6F9C97`)**: Restrained secondary accent for environmental badges.
- **Rice White (`#FBF8F1`)**: Light card containers and reading surfaces.
- **Charcoal (`#202322`)**: Accessible, high-contrast body typography.

---

## 🧭 Public Website Structure

- **`/` (Home)**: Split editorial hero, compact discovery strip ("Start Exploring"), large travel magazine feature on Hundred Islands, architectural spotlight on Cape Bolinao Lighthouse, and category exploration.
- **`/destinations` (Destinations Directory)**: Real-time search by destination name, municipality, and category with category filter pills and responsive Heritage Grid.
- **`/destinations/[slug]` (Destination Detail Pages)**: Statically generated dynamic routes featuring comprehensive overviews, key highlights, travel advice, and related destination suggestions.
- **`/heritage` (Heritage & Culture)**: Curated cultural essays covering the coastal origin of *Panag-asinan* (the land of salt), colonial lighthouses, civic palaces, and pilgrimage shrines.

---

## 🧱 Atomic Design Component Architecture

The codebase strictly adheres to Brad Frost's Atomic Design methodology:

- **Atoms (`components/atoms/`)**:
  - `Button`: Primary, Outline, Ghost, and Editorial Link variants with polymorph support.
  - `Typography`: Fluid serif display and clean sans-serif body text (`display`, `h1`, `h2`, `h3`, `lead`, `body`, `eyebrow`, `caption`).
  - `Icon`: Inline SVG vector icons (zero network dependencies).
  - `ResponsiveImage`: Aspect-ratio-enforcing, layout-shift-free image container with GitHub Pages `basePath` resolution.
  - `Color Tokens`: Semantic CSS custom properties defined in `styles/tokens.css`.
- **Molecules (`components/molecules/`)**:
  - `HeritageCard`: Image-forward destination card with rectangular photo, uppercase location kicker, serif title, and link.
  - `SearchForm`: Interactive search bar with search icon, clear button, and accessible labels.
  - `NavigationItem`: Navigation link with active state bottom accent line.
- **Organisms (`components/organisms/`)**:
  - `HeaderNavigation`: Sticky editorial header with brand wordmark, desktop navigation, and mobile menu drawer.
  - `HeritageGrid`: Responsive 1/2/3-column grid with empty search state.
  - `Footer`: Deep Navy editorial footer with municipality directory and cultural mission statement.
- **Sections (`components/sections/`)**:
  - `HomeHero`: 40/60 split editorial hero.
  - `FeaturedStory`: 60/40 magazine-style layout for Hundred Islands.
  - `HeritageFeature`: Spotlight layout for Cape Bolinao Lighthouse.
  - `ExperienceStrip`: Category-based visual discovery grid.

---

## ⚡ Performance & Accessibility (WCAG 2.1 AA)

- **JAMstack Static Site Generation (SSG)**: 100% of pages are pre-rendered into static HTML during build time via `output: 'export'`.
- **Zero-JS Default Content**: Editorial and detail sections render without requiring client-side JavaScript execution.
- **Accessible Landmarks & Focus**: Visible focus rings (`:focus-visible`), skip-to-content link, semantic heading hierarchies (`h1` &rarr; `h2` &rarr; `h3`), and ARIA roles on interactive elements.
- **Mobile-First Responsiveness**: Hand-crafted CSS Grid and Flexbox layouts tested across 320px mobile up to 1440px+ widescreen viewports.
- **Asset Resolution**: Centralized `assetPath()` utility resolving `/pangasinan-heritage-showcase/images/...` on GitHub Pages while keeping `/images/...` in local development.

---

## 🛠️ Setup & Development Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run ESLint Validation
```bash
npm run lint
```

### 4. Build Static Export (Local / GitHub Actions)
```bash
# Local development build
npm run build

# GitHub Pages production export
npm run build
```
Static output is generated in the `./out/` directory with `.nojekyll` enabled for GitHub Pages hosting.

---

## 🚀 Deployment Instructions (GitHub Pages)

1. Push the repository to GitHub on branch `main`.
2. Navigate to **Settings** &gt; **Pages** in the GitHub repository.
3. Set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/nextjs.yml` will automatically build the static export and deploy the live site.