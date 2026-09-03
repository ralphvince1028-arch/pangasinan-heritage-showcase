# Pangasinan Heritage Digital Showcase — Project Checklist
**Subject:** Elective 4 – Special Topics in IT  
**Student:** Ralph Vince De Venecia  
**Framework:** React + Next.js 14 App Router  
**Deployment Target:** GitHub Pages (/pangasinan-heritage-showcase)

---

## 📋 Activity 1 Requirements: Atomic Design & Architecture
- [x] **Framework Selection:** Next.js 14 App Router + React + TypeScript + CSS Modules
- [x] **New Visual Identity:** Contemporary Coastal Heritage Editorial (Deep Navy, Warm Sand, Burnt Clay, Sea Glass, Rice White, Charcoal)
- [x] **Atomic Design Methodology:**
  - [x] **Atoms:**
    - [x] Button (components/atoms/Button)
    - [x] Typography (components/atoms/Typography)
    - [x] Icon (components/atoms/Icon – clean inline SVG vectors)
    - [x] ResponsiveImage (components/atoms/ResponsiveImage – base-path aware)
    - [x] Color Tokens (styles/tokens.css)
  - [x] **Molecules:**
    - [x] HeritageCard (components/molecules/HeritageCard)
    - [x] SearchForm (components/molecules/SearchForm)
    - [x] NavigationItem (components/molecules/NavigationItem)
  - [x] **Organisms:**
    - [x] HeaderNavigation (components/organisms/HeaderNavigation)
    - [x] HeritageGrid (components/organisms/HeritageGrid)
    - [x] Footer (components/organisms/Footer)
  - [x] **Sections:**
    - [x] HomeHero (Split editorial hero)
    - [x] FeaturedStory (Travel magazine spotlight)
    - [x] HeritageFeature (Historical landmark spotlight)
    - [x] ExperienceStrip (Category discovery)
- [x] **Public Tourism Website (No technical/academic sections in UI):**
  - [x] / – Home (Editorial Split Hero, Discovery Strip, Magazine Features, Experience Categories)
  - [x] /destinations – Destination Directory (Search, Filters, Heritage Grid)
  - [x] /destinations/[slug] – Destination Details (Statically generated)
  - [x] /heritage – Heritage & Culture (Curated stories, landmarks, and geography)
- [x] **Academic Deliverables:**
    - [x] report/Framework-Selection-Report.pdf (React/Next.js 14 vs Vue/Nuxt 3 with weighted scoring matrix)
    - [x] documentation/Atomic-Design-System-Manual.pdf (Comprehensive Atomic Design component manual with visual previews, usage contexts, responsive logic, and code references)

---

## 🙀 Activity 2 Requirements: Static Generation & Deployment
- [x] **Static Generation:** All routes pre-rendered via Next.js static export (output: 'export')
- [x] **Dynamic Route Prerendering:** All destination detail pages generated at build time via generateStaticParams()
- [x] **GitHub Pages Base Path Architecture:** Centralized assetPath utility resolving /pangasinan-heritage-showcase/ in production and clean root / in development
- [x] **Static Optimization:** .nojekyll included to preserve _next/ static chunks
- [x] **Responsive Design:** Verified from 320px mobile to 1440px+ desktop
- [x] **Accessibility (WCAG 2.1 AA):** High contrast tokens, semantic landmarks, keyboard accessible drawer, proper ARIA attributes
- [x] **Performance:** Mobile-first lightweight CSS, zero heavy animation libraries, optimized local PNG imagery
- [x] **Production Build:** Passes npm run lint and npm run build with zero errors
- [x] **Git Repository:** Committed with clean git history and pushed to origin main
