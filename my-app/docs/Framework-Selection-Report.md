# Framework Selection Report
## Pangasinan Heritage Digital Showcase
**Course Activity:** Activity 1 – The Pangasinan Heritage Digital Showcase  
**Author:** Ralph Vince De Venecia  
**Degree Program:** Bachelor of Science in Information Technology (BSIT)  
**Target Organization:** Pangasinan Provincial Tourism Office  
**Date:** March 2025  

---

## 1. Introduction

The Pangasinan Provincial Tourism Office is establishing a modern digital platform designed to promote cultural awareness and sustainable eco-tourism for iconic heritage sites across Pangasinan. The province hosts extraordinary geographic, historical, and geological landmarks, including the ancient Hundred Islands National Park in Alaminos, the century-old Cape Bolinao Lighthouse, the geothermal mineral springs of Mount Balungao, and numerous Spanish-era civic and religious structures.

Choosing the correct frontend web application framework is one of the most critical architectural decisions for this initiative. Framework selection directly impacts:
- Page load speed and mobile data consumption for visitors browsing on 3G and 4G cellular networks.
- Accessibility compliance and semantic HTML rendering across diverse screen readers and mobile devices.
- Developer productivity and maintainability over the multi-year lifecycle of the provincial platform.
- Static deployment efficiency on modern JAMstack hosting infrastructure.

This technical report presents a quantitative and qualitative evaluation comparing two modern frontend web frameworks: **React with Next.js 14 (App Router)** and **Vue with Nuxt.js 3**. The goal is to determine the most suitable technology stack based on empirical engineering principles and university-level evaluation criteria.

---

## 2. Project Requirements

The platform specifications demand strict adherence to five core architectural pillars:

### 2.1 Lightning Fast
The application must load smoothly on mobile devices operating over cellular 3G and 4G data connections. This necessitates minimizing client-side JavaScript execution, eliminating blocking third-party libraries, optimizing image assets into modern formats (AVIF/WebP), preventing Cumulative Layout Shift (CLS), and prioritizing Core Web Vitals (Largest Contentful Paint < 2.5s, First Input Delay / Interaction to Next Paint < 200ms, CLS < 0.1).

### 2.2 Mobile-First
The design and layout architecture must prioritize mobile smartphone screens before scaling upwards to tablets and desktop displays. Layouts must adapt flexibly using fluid CSS Grid, Flexbox, and `clamp()` typography, preventing horizontal overflow and ensuring touch targets meet or exceed 44×44 pixels.

### 2.3 Maintainable
The codebase must enforce Brad Frost's **Atomic Design** methodology, organizing user interface components into distinct Atoms, Molecules, and Organisms. Content and dataset models must remain separated from presentation layers, ensuring modularity, clear folder hierarchy, and type-safe data contracts.

### 2.4 Accessible (WCAG 2.1 AA)
The platform must comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. Essential requirements include semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), logical single-`h1` heading hierarchies, high-contrast text color tokens, keyboard navigation with visible focus indicators, screen-reader accessible forms, and reduced-motion media query support.

### 2.5 Deployable (Static / JAMstack)
The showcase must be capable of full static site generation (SSG) and pre-rendering, allowing distribution via global Content Delivery Networks (CDNs) with zero server maintenance overhead.

---

## 3. Framework Candidates

### 3.1 Candidate A: React with Next.js 14 App Router
React is a declarative, component-based user interface library maintained by Meta and an extensive open-source community. Next.js 14, developed by Vercel, introduces the paradigm of **React Server Components (RSC)** through the App Router architecture. 

In this architecture, components execute on the server or build machine by default without shipping JavaScript to the client browser unless explicitly designated with the `"use client"` directive. Next.js natively includes the Next Image optimization engine (`next/image`), automated font optimization, built-in metadata management, and first-class TypeScript support.

### 3.2 Candidate B: Vue with Nuxt.js 3
Vue 3 is a progressive JavaScript framework known for its intuitive Single File Component (SFC) structure and reactivity model based on JavaScript Proxies. Nuxt 3 is the full-stack framework built on top of Vue 3, utilizing the Nitro server engine and Vite build tool. 

Nuxt 3 provides automated routing, server-side rendering (SSR), static site generation (`nuxt generate`), auto-imported components, and module-based extensions such as `@nuxt/image`.

---

## 4. Evaluation Criteria

To establish an objective comparison, seven criteria were defined and assigned relative percentage weights totaling 100%. The weighting reflects the specific technical scenario of a mobile-first, high-performance provincial heritage showcase:

1. **Bundle Size and Runtime Performance (Weight: 25%)**: Evaluates default static build output size, runtime client JavaScript payload, hydration overhead, and Core Web Vitals optimization.
2. **Suitability for Project Requirements (Weight: 20%)**: Assesses how naturally the framework satisfies the five project pillars (Speed, Mobile-First, Atomic Design, WCAG AA, JAMstack deployment).
3. **Component Architecture and Modularity (Weight: 15%)**: Measures adherence to atomic component separation, prop typing, CSS encapsulation (CSS Modules), and design token integration.
4. **Ecosystem Maturity and Tooling (Weight: 15%)**: Examines package ecosystem breadth, static site generator reliability, TypeScript compiler integration, and linting support.
5. **Documentation and Community Support (Weight: 10%)**: Analyzes the depth, clarity, and currency of official guides, learning resources, and community problem-solving channels.
6. **Developer Velocity (Weight: 10%)**: Measures development speed, hot-module replacement (HMR), component scaffolding, and debugging ergonomics for a BSIT developer.
7. **Learning Curve (Weight: 5%)**: Evaluates the cognitive complexity of the mental model, reactivity paradigms, and framework abstractions for university students.

---

## 5. Quantitative Comparison (Weighted Decision Matrix)

The quantitative scoring employs a standardized 5-point Likert scale:
- **5 = Excellent**: Exceeds all project expectations with industry-standard tooling.
- **4 = Very Good**: Meets all requirements with strong performance and minimal trade-offs.
- **3 = Good**: Adequate for standard use cases; minor limitations.
- **2 = Below Average**: Noticeable drawbacks requiring workarounds.
- **1 = Poor**: Significant deficiencies for the specified use case.

$$\text{Weighted Score} = \text{Score} \times \left(\frac{\text{Weight \%}}{100}\right)$$

### Decision Matrix Table

| Evaluation Criterion | Weight (%) | Next.js 14 Score (1–5) | Nuxt 3 Score (1–5) | Weighted Next.js 14 | Weighted Nuxt 3 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **1. Bundle Size & Runtime Performance** | 25% | 5 | 4 | $5 \times 0.25 = \mathbf{1.25}$ | $4 \times 0.25 = \mathbf{1.00}$ |
| **2. Suitability for Project Requirements** | 20% | 5 | 4 | $5 \times 0.20 = \mathbf{1.00}$ | $4 \times 0.20 = \mathbf{0.80}$ |
| **3. Component Architecture & Modularity** | 15% | 5 | 4 | $5 \times 0.15 = \mathbf{0.75}$ | $4 \times 0.15 = \mathbf{0.60}$ |
| **4. Ecosystem Maturity & Tooling** | 15% | 5 | 4 | $5 \times 0.15 = \mathbf{0.75}$ | $4 \times 0.15 = \mathbf{0.60}$ |
| **5. Documentation & Community Support** | 10% | 5 | 4 | $5 \times 0.10 = \mathbf{0.50}$ | $4 \times 0.10 = \mathbf{0.40}$ |
| **6. Developer Velocity** | 10% | 4 | 5 | $4 \times 0.10 = \mathbf{0.40}$ | $5 \times 0.10 = \mathbf{0.50}$ |
| **7. Learning Curve** | 5% | 4 | 4 | $4 \times 0.05 = \mathbf{0.20}$ | $4 \times 0.05 = \mathbf{0.20}$ |
| **TOTALS** | **100%** | **33 / 35** | **29 / 35** | $\mathbf{4.85} \text{ / } 5.00$ | $\mathbf{4.10} \text{ / } 5.00$ |

---

## 6. Comparative Analysis

### 6.1 Bundle Size and Runtime Performance (Weight: 25%)
- **Next.js 14 (Score: 5/5 | Weighted: 1.25)**: The App Router architecture leverages React Server Components (RSC) to render pages into pure static HTML and minimal JSON payloads during static build time. Non-interactive components (such as Hero banners, Typography atoms, and static Footers) ship **zero client-side JavaScript**. Only interactive molecules (`SearchForm`) include hydration scripts. Built-in `next/image` handles automatic WebP/AVIF conversion and Cumulative Layout Shift prevention without additional configuration.
- **Nuxt 3 (Score: 4/5 | Weighted: 1.00)**: Nuxt 3 delivers fast performance via Vite and Nitro, but by default hydrates every Vue component on the client unless experimental Island components are used. While `@nuxt/image` is capable, Next.js's native image optimization pipeline is more deeply integrated into static prerendering workflows.

### 6.2 Suitability for Project Requirements (Weight: 20%)
- **Next.js 14 (Score: 5/5 | Weighted: 1.00)**: Directly satisfies all five project pillars. Static export and prerendering (`generateStaticParams`) generate clean HTML files for dynamic routes (`/heritage/[slug]`). CSS Modules prevent global style leakage, and TypeScript types guarantee strong data contracts across destinations.
- **Nuxt 3 (Score: 4/5 | Weighted: 0.80)**: Nuxt supports static site generation (`nuxi generate`), but handling deep nested TypeScript types and static parameter generation across route segments requires extra Nuxt Nitro configuration hooks.

### 6.3 Component Architecture and Modularity (Weight: 15%)
- **Next.js 14 (Score: 5/5 | Weighted: 0.75)**: React's explicit function component model with JSX fits Brad Frost's Atomic Design methodology naturally. Atoms receive typed props and render semantic HTML elements with explicit CSS Module classes. The explicit separation between Server Components (data rendering) and Client Components (`"use client"` for search filtering) enforces clean software architecture.
- **Nuxt 3 (Score: 4/5 | Weighted: 0.60)**: Vue Single File Components (SFCs) combine `<template>`, `<script>`, and `<style>` in one file. While convenient, auto-importing all components can obscure component dependencies and boundaries in strict Atomic Design hierarchies.

### 6.4 Ecosystem Maturity and Tooling (Weight: 15%)
- **Next.js 14 (Score: 5/5 | Weighted: 0.75)**: React and Next.js represent the industry standard for production web applications, with extensive testing libraries, strict TypeScript integrations, and enterprise deployment options (Vercel, AWS Amplify, GitHub Pages, Netlify, Cloudflare Pages).
- **Nuxt 3 (Score: 4/5 | Weighted: 0.60)**: Nuxt 3 has reached good stability, but third-party module parity and TypeScript plugin typing occasionally experience minor version mismatches.

### 6.5 Documentation and Community Support (Weight: 10%)
- **Next.js 14 (Score: 5/5 | Weighted: 0.50)**: Comprehensive official documentation, interactive tutorials (Next.js Learn), extensive architectural blueprints, and millions of verified community solutions on Stack Overflow and GitHub Discussions.
- **Nuxt 3 (Score: 4/5 | Weighted: 0.40)**: Clear documentation, though some guides still reference older Nuxt 2 conventions in community forums, causing occasional confusion for university developers.

### 6.6 Developer Velocity (Weight: 10%)
- **Next.js 14 (Score: 4/5 | Weighted: 0.40)**: Rapid development via Next.js Turbopack fast refresh and strict compile-time TypeScript checks that catch invalid props before runtime.
- **Nuxt 3 (Score: 5/5 | Weighted: 0.50)**: Nuxt's auto-importing of composables and components provides very high initial development velocity with minimal boilerplate.

### 6.7 Learning Curve (Weight: 5%)
- **Next.js 14 (Score: 4/5 | Weighted: 0.20)**: Modern React with TypeScript and the Server/Client Component boundary requires understanding React hooks (`useState`, `useMemo`, `useEffect`) and async server rendering. This is standard curriculum for BSIT web development students.
- **Nuxt 3 (Score: 4/5 | Weighted: 0.20)**: Vue's `ref`, `reactive`, and template directives (`v-if`, `v-for`, `v-model`) are approachable, but mastering the Composition API with TypeScript requires comparable cognitive effort.

---

## 7. Selected Framework

Based on the quantitative evaluation, **React with Next.js 14 (App Router)** achieved a superior weighted score of **4.85 / 5.00** compared to **4.10 / 5.00** for Vue with Nuxt.js 3.

Consequently, **React + Next.js 14 App Router** is selected as the production framework for the Pangasinan Heritage Digital Showcase.

---

## 8. Justification for the Pangasinan Heritage Digital Showcase

The selection of Next.js 14 directly benefits this specific academic project in four concrete ways:

1. **Zero-JS Static Prerendering for Fast 3G/4G Loading**:
   By keeping the Home Page, Navigation, Layout, and Destination Detail pages as Server Components, static HTML and minimal CSS are sent to mobile devices. Users in rural coastal areas of Pangasinan can browse destinations instantly without downloading heavy JavaScript bundles.
2. **Native Asset Optimization without Third-Party Plugins**:
   The `next/image` component automatically generates responsive image source sets (`srcset`), reserves layout bounding boxes to eliminate layout shifts, and lazy-loads below-the-fold destination photos.
3. **Atomic Design Cleanliness with CSS Modules**:
   CSS Modules (`.module.css`) allow each Atom, Molecule, and Organism to encapsulate its styling locally while consuming global design tokens defined in `app/globals.css`.
4. **Prerendered Dynamic Destination Routes**:
   The `generateStaticParams()` function compiles all destination detail routes (`/heritage/hundred-islands`, `/heritage/bolinao-lighthouse`, `/heritage/balungao-hot-spring`, etc.) into static HTML at build time, enabling instant page transitions with zero runtime server latency.

---

## 9. Conclusion

The selection of React with Next.js 14 App Router provides the Pangasinan Heritage Digital Showcase with an industry-standard, high-performance, and accessible web foundation. The quantitative decision matrix clearly demonstrates that Next.js 14 excels in the areas most vital to this project: runtime performance, architectural modularity, ecosystem maturity, and compliance with modern JAMstack deployment standards.

The resulting application delivers a clean, responsive, and culturally grounded showcase that meets all university activity objectives and provides a maintainable digital platform for Pangasinan tourism.

