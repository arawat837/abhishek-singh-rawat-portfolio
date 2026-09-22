# Abhishek Singh Rawat — Personal Portfolio

A bespoke, production-ready personal portfolio website showcasing my experience in **Business Analytics**, **Data Analytics**, **Business Intelligence (BI)**, **SQL**, **Python**, **R**, **Power BI**, and **Data Visualization**. 

The portfolio bridges the gap between quantitative data science and executive decision-making, combining a business-focused analytics profile with a modern, high-performance web experience.

---

## Live Website

> **Live Website:**  
> *Coming soon* (Deployment ready on Vercel)

---

## Features

- **Dark Modern Aesthetic**: Near-black / charcoal palette with subtle violet glow accents, soft borders, and restrained visual depth.
- **Interactive Project Carousel**: Large-scale centered carousel with 3D depth, preview cards, swipe/drag gesture handling via Framer Motion, and pagination controls.
- **In-Browser Resume Preview Pop-Up**: Built-in modal viewer enabling recruiters to inspect the full resume document directly without forced downloads, with instant tab and download actions.
- **Bespoke Visual Analytics Banners**: Retina-crisp SVG and canvas dashboard previews with real analytical charts (ROC curves, bimodal commute distributions, biometric scatter regression).
- **Responsive Sticky Navigation**: Minimal header with monogram brand mark, active scroll spy highlighting, and mobile drawer.
- **Decoupled Architecture**: All portfolio data, metrics, experiences, and links are isolated in TypeScript data modules for rapid maintenance.
- **Accessibility & Motion Compliance**: Keyboard-navigable controls, ARIA dialog specifications, visible focus rings, and `prefers-reduced-motion` detection.

---

## Portfolio Sections

1. **Hero**: Professional positioning statement, value proposition, quick social proof, and portrait framed by an orbital glow ring with quantitative metric chips.
2. **About Me**: Two-column layout presenting an executive narrative alongside an Education & Core Competencies card.
3. **Projects Showcase**: Interactive showcase featuring end-to-end data pipeline and predictive modeling case studies.
4. **Skills & Expertise**: Structured capability domains (*Data & Analytics*, *Business Intelligence*, *AI & Modern Analytics*, *Programming & Foundations*) with verified capability pills.
5. **Experience**: Structured timeline detailing operational analytics and cross-functional reporting achievements at S. K. Meditech Pvt. Ltd.
6. **Education & Credentials**: Academic credentials (UPES MBA in Business Analytics, BCA in Computer Applications), Google Data Analytics Professional Certificate, and project leadership.
7. **Connect / Contact**: Direct contact links (Email with 1-click copy, LinkedIn, GitHub, Phone) and an interactive direct message inquiry form.
8. **Footer**: Clean footer with copyright, positioning summary, and smooth back-to-top interaction.

---

## Featured Projects

### 1. [KKBOX Customer Retention & Subscription Analytics](https://github.com/arawat837/kkbox-customer-retention-analytics)
- **GitHub:** [https://github.com/arawat837/kkbox-customer-retention-analytics](https://github.com/arawat837/kkbox-customer-retention-analytics)
- **Technologies:** PostgreSQL, SQL, Python, Power BI, Scikit-Learn, Gradient Boosting
- **Description:** Engineered an enterprise Customer 360 data pipeline in PostgreSQL consolidating 970K+ subscribers and 18.4M+ streaming records. Trained Gradient Boosting churn early-warning models achieving **0.985 ROC-AUC** and **93% churn recall** to enable proactive retention campaigns.

### 2. [Cyclistic Bike-Share Case Study](https://github.com/arawat837/cyclistic-bike-share-case-studys)
- **GitHub:** [https://github.com/arawat837/cyclistic-bike-share-case-studys](https://github.com/arawat837/cyclistic-bike-share-case-studys)
- **Technologies:** R, ggplot2, Data Wrangling, Exploratory Data Analysis, Customer Segmentation
- **Description:** Analyzed 5.4M+ urban bike-share trips using R to identify behavioral differences between casual riders and annual members, delivering empirical recommendations for weekday commuter conversion funnels.

### 3. [Bellabeat Case Study](https://github.com/arawat837/bellabeat-case-study)
- **GitHub:** [https://github.com/arawat837/bellabeat-case-study](https://github.com/arawat837/bellabeat-case-study)
- **Technologies:** R, Biometric Telemetry, Statistical Modeling, Product Strategy, Data Visualization
- **Description:** Analyzed multi-sensor Fitbit smart device telemetry across activity intensity, sleep stages, and heart rate in R, formulating data-driven product features and coaching nudges for Bellabeat's wellness ecosystem.

---

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Site Generation)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation & Gestures**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)

---

## Project Structure

```
abhishek-singh-rawat-portfolio/
├── app/
│   ├── globals.css              # Custom styling, glow utilities & scrollbar
│   ├── layout.tsx               # Root layout with SEO metadata & modal provider
│   └── page.tsx                 # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky navigation with scroll spy & resume modal trigger
│   │   └── Footer.tsx           # Minimal footer with social links & back-to-top
│   ├── ui/
│   │   ├── ResumeModal.tsx      # In-browser interactive PDF resume preview dialog
│   │   ├── SectionHeading.tsx   # Standardized section headings
│   │   └── StarField.tsx        # Ambient canvas starfield particle effect
│   ├── visual/
│   │   ├── KkboxDashboardVisual.tsx   # KKBOX ROC & Churn analytics SVG visual
│   │   ├── CyclisticVisual.tsx        # Cyclistic diurnal commute distribution visual
│   │   └── BellabeatVisual.tsx        # Bellabeat biometric correlation visual
│   └── sections/
│       ├── HeroSection.tsx      # Hero banner with portrait glowing ring
│       ├── AboutSection.tsx     # Narrative & Education/Competencies card
│       ├── ProjectsCarousel.tsx # Framer Motion 3D carousel
│       ├── ProjectCard.tsx      # Case study card with details toggle
│       ├── SkillsSection.tsx    # Categorized skill pills
│       ├── ExperienceSection.tsx# S. K. Meditech timeline & resume CTA
│       ├── EducationSection.tsx # Degrees, credentials & leadership
│       └── ContactSection.tsx   # Contact channels & email inquiry form
├── context/
│   └── ResumeModalContext.tsx   # Global state for resume modal
├── data/
│   └── portfolio-data.ts        # Content repository (single source of truth)
├── types/
│   └── portfolio.ts             # TypeScript interface definitions
├── public/
│   ├── photo.jpg                # Professional portrait
│   └── Abhishek_Singh_Rawat_Resume.pdf # Downloadable resume PDF
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18+ or 20+ recommended)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installation & Run
1. Clone the repository:
   ```bash
   git clone https://github.com/arawat837/abhishek-singh-rawat-portfolio.git
   cd abhishek-singh-rawat-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Production Build

To test the optimized production build locally:

```bash
# Generate optimized static bundle
npm run build

# Start production server
npm run start
```

---

## Deployment to Vercel

This Next.js application is optimized for zero-configuration deployment on **Vercel**:

1. Push your code to GitHub (see repository link below).
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select `abhishek-singh-rawat-portfolio`.
4. Leave build settings at default (`npm run build`).
5. Click **"Deploy"**. Vercel will build and assign a production URL with automatic SSL.

---

## Author

**Abhishek Singh Rawat**  
- **GitHub:** [@arawat837](https://github.com/arawat837)  
- **LinkedIn:** [abhisheksinghrawatlink](https://www.linkedin.com/in/abhisheksinghrawatlink/)  
- **Email:** [abhisheksinghrawat22@gmail.com](mailto:abhisheksinghrawat22@gmail.com)  
