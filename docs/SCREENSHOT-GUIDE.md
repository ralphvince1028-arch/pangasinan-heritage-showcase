# Screenshot Guide for Deliverable 1.2
## Pangasinan Heritage Digital Showcase
**Target Document:** `Atomic-Design-System-Manual.pdf`  
**Purpose:** This guide provides exact instructions on how to capture all required screenshots from the running local application and where to insert them into your manual.

---

## 1. Setup Before Taking Screenshots

1. **Start the local development server**:
   ```bash
   cd my-app
   npm run dev
   ```
2. **Open Google Chrome, Edge, or Firefox** and navigate to:
   `http://localhost:3000/design-system`

3. **Recommended Screenshot Viewports (Use Browser DevTools / Device Mode `F12` or `Ctrl + Shift + M`)**:
   - **Mobile Viewport**: `375px × 812px` (iPhone / standard smartphone)
   - **Tablet Viewport**: `768px × 1024px` (iPad / standard tablet)
   - **Desktop Viewport**: `1440px × 900px` (Laptop / desktop)

---

## 2. Screenshot Checklist & Insertion Mapping

| # | Component / Section | Page URL / Anchor | Recommended Viewport | Manual Section to Insert |
| :-: | :--- | :--- | :--- | :--- |
| **1** | **Color Tokens Swatches** | `/design-system#atoms-colors` | Desktop (1440px) | **Section 3.1: Color Tokens Atom** |
| **2** | **Typography Hierarchy** | `/design-system#atoms-typography` | Desktop (1440px) | **Section 3.2: Typography Atom** |
| **3** | **Button Variants & Sizes** | `/design-system#atoms-buttons` | Desktop (1440px) | **Section 3.3: Button Atom** |
| **4** | **Icon Vector Grid** | `/design-system#atoms-icons` | Desktop (1440px) | **Section 3.4: Icon Atom** |
| **5** | **Responsive Image Ratios** | `/design-system#atoms-image` | Desktop (1440px) | **Section 3.5: ResponsiveImage Atom** |
| **6** | **HeritageCard Molecule** | `/design-system#molecules-card` | Desktop or Mobile | **Section 4.1: HeritageCard Molecule** |
| **7** | **SearchForm Molecule** | `/design-system#molecules-search` | Desktop (1440px) | **Section 4.2: SearchForm Molecule** |
| **8** | **NavigationItem Molecule** | `/design-system#molecules-nav` | Desktop (1440px) | **Section 4.3: NavigationItem Molecule** |
| **9** | **HeritageGrid (Desktop)** | `/heritage` | Desktop (1440px) | **Section 5.1: HeritageGrid Organism** |
| **10** | **HeritageGrid (Mobile)** | `/heritage` | Mobile (375px) | **Section 5.1: HeritageGrid Organism** |
| **11** | **HeaderNavigation (Desktop)** | `/` (Top of page) | Desktop (1440px) | **Section 5.2: HeaderNavigation Organism** |
| **12** | **HeaderNavigation (Mobile Open)** | `/` (Tap Hamburger) | Mobile (375px) | **Section 5.2: HeaderNavigation Organism** |
| **13** | **Footer Organism** | `/` (Bottom of page) | Desktop (1440px) | **Section 5.3: Footer Organism** |

---

## 3. Step-by-Step Capture Instructions

### Step 1: Atoms Screenshots
1. Go to `http://localhost:3000/design-system`.
2. Scroll to **Color Tokens** and capture the grid of colored swatches.
3. Scroll to **Typography** and capture the scale from `Display` down to `Tag`.
4. Scroll to **Button Atom** and capture the variants (Primary, Secondary, Outline, Ghost, Disabled) and sizes.
5. Scroll to **Icon Atom** and capture the grid of vector icons.
6. Scroll to **ResponsiveImage Atom** and capture the 16:9, 4:3, and 1:1 image boxes.

### Step 2: Molecules Screenshots
1. On `/design-system`, capture the **HeritageCard Molecule** box.
2. Capture the interactive **SearchForm Molecule** (type a keyword like "Bolinao" to show the live filter state).
3. Capture the **NavigationItem Molecule** demo showing Active and Inactive states.

### Step 3: Organisms & Responsive Layouts
1. Go to `http://localhost:3000/heritage`.
2. Set browser width to **1440px** and take a screenshot of the 3-column grid.
3. Set browser width to **375px** in DevTools and take a screenshot of the 1-column mobile grid.
4. On `http://localhost:3000/`, capture the desktop top header. Then switch to mobile (375px), click the hamburger icon, and capture the open navigation drawer.
5. Scroll to the bottom of the page and capture the multi-column **Footer Organism**.

---

## 4. Converting to PDF

1. Convert `docs/Atomic-Design-System-Manual.md` and `docs/Framework-Selection-Report.md` using VS Code Markdown PDF extension, Typora, or Google Docs / Microsoft Word.
2. Paste the captured screenshots into their respective sections.
3. Export the final documents as:
   - `report/Framework-Selection-Report.pdf`
   - `documentation/Atomic-Design-System-Manual.pdf`

