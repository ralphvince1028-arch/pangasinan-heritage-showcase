# Framework Selection Report: React (Next.js 14 App Router) vs. Vue (Nuxt 3)
**Course / Subject:** Elective 4 – Special Topics in IT  
**Project:** Pangasinan Heritage Digital Showcase  
**Author / Student:** Ralph Vince De Venecia  
**Date:** September 2026  
**Selected Framework:** React + Next.js 14 App Router (Static Export)

---

## 1. Executive Summary

The Pangasinan Heritage Digital Showcase is an academic and public-facing digital tourism platform developed for the Pangasinan Provincial Tourism Office. The platform requires high performance on mobile networks (3G/4G cellular connections across coastal and rural municipalities), WCAG 2.1 AA accessibility, strict implementation of Brad Frost’s Atomic Design methodology, and seamless JAMstack static export deployment to GitHub Pages.

This report presents an in-depth quantitative and qualitative evaluation comparing two modern frontend web frameworks:
1. **React 18/19 with Next.js 14 App Router** (React Server Components, Static Export, Turbopack)
2. **Vue 3 with Nuxt.js 3** (Nitro Engine, Composition API, Static Site Generation)

Based on our weighted multi-criteria decision matrix, **React + Next.js 14 App Router scored 93.5/100**, outperforming **Vue + Nuxt 3 (85.0/100)**, and was selected as the framework for this initiative.

---

## 2. Evaluation Criteria & Weighted Scoring Methodology

To ensure objective evaluation, six industry-standard architectural criteria were weighted according to project priorities:

| Evaluation Criterion | Weight | Description & Relevance to Pangasinan Project |
|---|:---:|---|
| **1. Static Delivery & Mobile Performance** | 20% | Zero-JS default rendering, static export speed, bundle compression for 3G/4G connectivity. |
| **2. Architectural Fit & Project Suitability** | 20% | Compatibility with Brad Frost's Atomic Design, directory-based routing, and GitHub Pages. |
| **3. Developer Velocity & Type Safety** | 15% | TypeScript integration, build tooling (Turbopack vs Vite), component authoring ergonomics. |
| **4. Component Architecture & Modular Design**| 15% | Isolation of Atoms, Molecules, Organisms, and strict CSS Modules encapsulation. |
| **5. Ecosystem Maturity & Longevity** | 15% | Enterprise adoption, long-term support, stability of static export plugins. |
| **6. Documentation, Community & Learning Curve**| 15% | Student explicability, official documentation clarity, community support. |
| **Total Weight** | **100%** | |

---

## 3. Comparative Analysis

### Criterion 1: Static Delivery & Mobile Performance (Weight: 20%)
- **Next.js 14 App Router (Score: 19.0 / 20.0):**
  Next.js 14 introduces React Server Components (RSC) by default. Components like `HomeHero`, `FeaturedStory`, and `Footer` ship zero client-side JavaScript. Only interactive elements (`SearchForm`, `HeaderNavigation` mobile drawer) include client JavaScript. Static export via `output: 'export'` generates lightweight, prerendered HTML and optimized static chunks.
- **Nuxt 3 (Score: 17.5 / 20.0):**
  Nuxt 3 uses Nitro for static pre-rendering (`nuxt generate`). While highly capable, Nuxt hydrates client components by default unless explicit islands/server components are configured.

### Criterion 2: Architectural Fit & Project Suitability (Weight: 20%)
- **Next.js 14 App Router (Score: 19.0 / 20.0):**
  The directory-based App Router structure (`app/destinations/`, `app/destinations/[slug]/`, `app/heritage/`) maps directly to tourism browsing hierarchies. Dynamic detail routes are statically prerendered using `generateStaticParams()`. Base path resolution for GitHub Pages is configured via `next.config.ts`.
- **Nuxt 3 (Score: 17.0 / 20.0):**
  Nuxt 3 file-based routing (`pages/destinations/[slug].vue`) is clean, but configuring asset prefixes and static export loaders for nested subdirectories on GitHub Pages requires more Nitro plugin overrides.

### Criterion 3: Developer Velocity & Type Safety (Weight: 15%)
- **Next.js 14 App Router (Score: 14.0 / 15.0):**
  First-class TypeScript integration with end-to-end typed routes and automated type-checking via `tsc`. Turbopack provides sub-second incremental compilation during development.
- **Nuxt 3 (Score: 13.0 / 15.0):**
  Vite-powered Nuxt 3 provides fast HMR. Volar / TypeScript support for `.vue` single file components is strong, though template type-checking can occasionally produce complex diagnostics.

### Criterion 4: Component Architecture & Atomic Design (Weight: 15%)
- **Next.js 14 App Router (Score: 14.5 / 15.0):**
  React's pure component model matches Brad Frost’s Atomic Design seamlessly. Atoms (`Button`, `Typography`, `Icon`, `ResponsiveImage`), Molecules (`HeritageCard`, `SearchForm`), and Organisms (`HeaderNavigation`, `HeritageGrid`) are neatly isolated in dedicated folders with zero cross-leakage via CSS Modules.
- **Nuxt 3 (Score: 13.0 / 15.0):**
  Vue SFCs encapsulate templates, scripts, and scoped styles well, but Atomic component composition with polymorphic rendering (`as="h1"` or Next Link vs Button) is more verbose in Vue.

### Criterion 5: Ecosystem Maturity & Longevity (Weight: 15%)
- **Next.js 14 App Router (Score: 14.0 / 15.0):**
  Backed by Vercel and React Core Team. Extensive production deployments across Fortune 500 companies and government tourism boards ensure decades of architectural longevity.
- **Nuxt 3 (Score: 12.5 / 15.0):**
  Strong open-source community, but smaller ecosystem footprint compared to the broader React ecosystem.

### Criterion 6: Documentation, Community & Learning Curve (Weight: 15%)
- **Next.js 14 App Router (Score: 13.0 / 15.0):**
  Exhaustive official Next.js documentation, vast educational tutorials, and clear concepts that allow IT students to explain architectural choices during defense.
- **Nuxt 3 (Score: 12.0 / 15.0):**
  Clean documentation, but transitions between Nuxt 2, Nuxt Bridge, and Nuxt 3 created legacy fragmentation in search results.

---

## 4. Quantitative Scoring Matrix

| Criterion | Weight | Next.js 14 Score (1-100) | Next.js Weighted | Nuxt 3 Score (1-100) | Nuxt 3 Weighted |
|---|:---:|:---:|:---:|:---:|:---:|
| 1. Static Delivery & Mobile Performance | 20% | 95 | 19.0 | 88 | 17.6 |
| 2. Architectural Fit & Project Suitability | 20% | 95 | 19.0 | 85 | 17.0 |
| 3. Developer Velocity & Type Safety | 15% | 93 | 14.0 | 87 | 13.1 |
| 4. Component Architecture & Atomic Design | 15% | 97 | 14.5 | 87 | 13.1 |
| 5. Ecosystem Maturity & Longevity | 15% | 93 | 14.0 | 83 | 12.5 |
| 6. Documentation & Student Explicability | 15% | 87 | 13.0 | 78 | 11.7 |
| **Final Composite Score** | **100%** | **—** | **93.5 / 100** | **—** | **85.0 / 100** |

---

## 5. Conclusion & Final Recommendation

**React + Next.js 14 App Router** is the definitively superior choice for the Pangasinan Heritage Digital Showcase. It delivers:
1. **Uncompromised 3G/4G Mobile Performance** through zero-JS Server Components by default.
2. **Strict Atomic Design Modularization** with clean TypeScript interfaces and scoped CSS Modules.
3. **Robust JAMstack Static Export** pre-rendering all dynamic destination pages into standalone static HTML files for GitHub Pages deployment.