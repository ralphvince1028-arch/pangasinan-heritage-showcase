# Pangasinan Heritage Digital Showcase

An academic digital tourism and cultural awareness platform developed for the **Pangasinan Provincial Tourism Office**, showcasing iconic destinations including the **Hundred Islands National Park in Alaminos**, **Cape Bolinao Lighthouse**, and **Balungao Hot Spring**.

Built with **Next.js 14 App Router**, **TypeScript**, **CSS Modules**, and **Brad Frost's Atomic Design methodology**.

---

## 🌟 Key Features

- **⚡ Lightning Fast & Data Efficient**: Optimized for mobile users on 3G/4G cellular networks. Server Components by default with minimal client-side JavaScript.
- **📱 Mobile-First Responsive Design**: Clean 1-column mobile, 2-column tablet, and 3-column desktop grid with zero horizontal overflow.
- **🧱 Brad Frost's Atomic Design**: Strictly organized into Atoms (`Button`, `Typography`, `Icon`, `ResponsiveImage`), Molecules (`HeritageCard`, `SearchForm`, `NavigationItem`), and Organisms (`HeritageGrid`, `HeaderNavigation`, `Footer`).
- **♿ WCAG 2.1 AA Compliant**: Accessible focus indicators, keyboard navigation, semantic HTML landmarks, high-contrast text, form labels, and `prefers-reduced-motion` support.
- **🔍 Real-Time Live Search & Filtering**: Instant client-side destination search by keyword, municipality, and heritage category.
- **🚀 100% Static / JAMstack Prerendering**: Dynamic destination detail routes (`/heritage/[slug]`) are pre-rendered at build time via `generateStaticParams()`.
- **🎨 Interactive Design System Showcase**: Dedicated `/design-system` page displaying all design tokens, typography, component states, and responsive previews.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | React Server Components, Static Site Generation, Routing |
| **Language** | TypeScript (v5) | Strict type safety and structured data models |
| **UI Architecture**| Brad Frost Atomic Design | Modular, scalable, and reusable component structure |
| **Styling** | CSS Modules + Custom Tokens | Encapsulated styling, fluid `clamp()` typography, zero-runtime CSS |
| **Media Optimization** | `next/image` | Responsive aspect ratios, layout-shift prevention, lazy loading |
| **Icons** | Custom Inline SVG Icon Atom | Zero external dependencies, ultra-lightweight bundle |

---

## 📂 Project Structure

```
my-app/
├── app/
│   ├── layout.tsx                    # Root layout with HeaderNavigation, SkipLink, and Footer
│   ├── globals.css                   # Design tokens, CSS custom properties, WCAG AA focus, reset
│   ├── page.tsx                      # Editorial Home Page (Hero, Featured Sites, About, CTA)
│   ├── page.module.css               # Home page layout styling
│   ├── heritage/
│   │   ├── page.tsx                  # Searchable Heritage Catalog & Live Filtering Organism
│   │   ├── page.module.css           # Catalog layout styling
│   │   └── [slug]/
│   │       ├── page.tsx              # Static Prerendered Detail Page (generateStaticParams)
│   │       └── page.module.css       # Detail page layout styling
│   └── design-system/
│       ├── page.tsx                  # Interactive Atomic Design System Showcase
│       └── page.module.css           # Design system layout styling
│
├── components/
│   ├── atoms/                        # Basic UI building blocks
│   │   ├── Button/                   # Polymorphic button/link (4 variants, 3 sizes)
│   │   ├── Typography/               # Fluid clamp typography (headings, body, tags)
│   │   ├── Icon/                     # 19 lightweight inline vector SVGs
│   │   └── ResponsiveImage/          # Next/image wrapper with aspect-ratio bounding boxes
│   ├── molecules/                    # Combinations of atoms
│   │   ├── HeritageCard/             # Card combining Image, Tag, Title, Location, and Button
│   │   ├── SearchForm/               # Search input with category pills & count indicator
│   │   └── NavigationItem/           # Accessible link with active state indicator
│   └── organisms/                    # Complex structural components
│       ├── HeaderNavigation/         # Sticky desktop header with accessible mobile drawer
│       ├── HeritageGrid/             # Responsive 1/2/3-col grid with live search filtering
│       └── Footer/                   # Cultural overview, directory links, & accessibility badge
│
├── data/
│   └── heritage.ts                   # Structured dataset for Pangasinan destinations
│
├── types/
│   └── heritage.ts                   # TypeScript interfaces for Destination, Category, and Filter models
│
├── docs/                             # Academic Documentation Suite
│   ├── Framework-Selection-Report.md # Deliverable 1.1: Next.js 14 vs Nuxt 3 with Weighted Matrix
│   ├── Atomic-Design-System-Manual.md# Deliverable 1.2: Full Atomic Design System Reference & Guides
│   ├── SCREENSHOT-GUIDE.md           # Step-by-step screenshot capture guide
│   └── PROJECT-EXPLANATION.md        # Technical defense study guide for BSIT instructor presentation
│
├── public/                           # Static assets
│   └── images/                       # Optimized destination SVG vector illustrations & logos
│
├── README.md                         # Project documentation
└── SUBMISSION-CHECKLIST.md           # Activity submission checklist
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18.17 or higher)** installed on your machine.

### 2. Installation
Clone the repository and install dependencies:

```bash
cd my-app
npm install
```

### 3. Running the Development Server
Start the local Next.js development server:

```bash
npm run dev
```

Open your browser and navigate to:
- **Home Page**: `http://localhost:3000`
- **Heritage Catalog**: `http://localhost:3000/heritage`
- **Destination Detail**: `http://localhost:3000/heritage/hundred-islands`
- **Design System Showcase**: `http://localhost:3000/design-system`

---

## 🏗️ Production Build & Verification

To verify TypeScript types and build the production static export:

```bash
npm run build
```

This compiles all pages and static routes:
```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /design-system
├ ○ /heritage
└   /heritage/[slug]
  ├ ● /heritage/hundred-islands
  ├ ● /heritage/bolinao-lighthouse
  ├ ● /heritage/balungao-hot-spring
  └ ● [+5 more paths]

○  (Static)  prerendered as static content
●  (SSG)     prerendered as static HTML (uses generateStaticParams)
```

To test the production build locally:
```bash
npm run start
```

---

## 📄 Academic Deliverables

All documentation source files are available in the `docs/` folder:

1. **`docs/Framework-Selection-Report.md`**  
   Deliverable 1.1: Quantitative evaluation comparing React + Next.js 14 App Router against Vue + Nuxt.js 3 using a 100% weighted decision matrix across 7 criteria.
2. **`docs/Atomic-Design-System-Manual.md`**  
   Deliverable 1.2: Complete documentation manual for every Atom, Molecule, and Organism, including screenshot mapping, usage contexts, responsive logic, and source code.
3. **`docs/SCREENSHOT-GUIDE.md`**  
   Step-by-step guide with recommended viewports (Mobile 375px, Tablet 768px, Desktop 1440px) to easily capture screenshots for the manual.
4. **`docs/PROJECT-EXPLANATION.md`**  
   Plain-English oral defense guide to assist the student in presenting to their professor.
5. **`SUBMISSION-CHECKLIST.md`**  
   Verification checklist before submitting the university archive.

---

## 👨‍🎓 Author

**Ralph Vince De Venecia**  
Bachelor of Science in Information Technology (BSIT)  
University Course Activity 1: The Pangasinan Heritage Digital Showcase
