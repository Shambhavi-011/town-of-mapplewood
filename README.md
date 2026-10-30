# 🏛️ Town of Maplewood — Official Municipal Knowledge Portal

[![React](https://img.shields.io/badge/React-19.3-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Municipal_Demo-green.svg)]()

> **Domain:** `maplewood.fictionaltown.com`  
> **Municipal Slogan:** *"Growing Together in Community and Nature"*  
> **Physical Address:** 123 Main Street, Maplewood, ON M4P 1T8  
> **Citizen Helpline:** Dial `311` or `(555) 123-4567`  
> **24/7 Dispatch Hotline:** `(555) 123-7623` (Roads/Snow) | `(555) 123-9287` (Water Breaks)

---

## 📌 Project Overview

The **Town of Maplewood Municipal Portal** is a 20+ page Single Page Application (SPA) architected for civic clarity and optimized as an authoritative, structured knowledge base for the **Wayhall Municipal AI Scraper & Resident Assistant**.

Every route is structured using strict semantic HTML (`<article>`, `<header>`, `<section>`, `<h1>`, `<h2>`, `<h3>`, `<table>`, `<ul>`) to provide unambiguous factual grounding for automated AI crawling, natural language inquiry pipelines, and citizen self-service workflows.

---

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode, ES2023)
- **Bundler:** [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/) (Declarative client routing with nested layouts)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) with modern civic design tokens

---

## 🧭 Site Architecture & Routes

### 🏛️ Main Civic Hub
| Route | Page Component | Description |
|---|---|---|
| `/` | [`Home.tsx`](src/pages/Home.tsx) | Civic dashboard with alert banner, quick action cards, tax instalment deadlines & council updates |
| `/contact` | [`Contact.tsx`](src/pages/Contact.tsx) | Town Hall address, office hours, departmental directory, 311 line & 24/7 emergency dispatch |

### 🚛 Public Works & Services
| Route | Page Component | Municipal Highlights & Rules |
|---|---|---|
| `/services/waste` | [`WasteRecycling.tsx`](src/pages/services/WasteRecycling.tsx) | Bins out by **7:00 AM**; missed collection reports strictly **after 5:00 PM**; 2-business-day resolution SLA; green bin, blue box, and bulk item schedules. |
| `/services/roads` | [`RoadsMaintenance.tsx`](src/pages/services/RoadsMaintenance.tsx) | Pothole size matrix (<25cm, 25–60cm, >60cm); travel lane severity rule; **50m & 30-day duplicate prevention**; urgent downed wire hotline (`1-800-434-1235`); streetlight pole IDs (e.g. `ML-0412`). |
| `/services/parks` | [`ParksForestry.tsx`](src/pages/services/ParksForestry.tsx) | 18 municipal parks, 35 km trails, boulevard vs. private tree rules under By-law 2023-45, park bench and playground hazard reporting. |
| `/services/water` | [`WaterServices.tsx`](src/pages/services/WaterServices.tsx) | Aquifer drinking water, seasonal odd/even watering restrictions (May 15 – Sept 15, 6–8 AM & 7–9 PM), emergency water main break hotline (`(555) 123-9287`). |
| `/services/snow` | [`SnowRemoval.tsx`](src/pages/services/SnowRemoval.tsx) | Priority 1–3 plowing routes, annual winter overnight parking ban (**2:00 AM – 6:00 AM from Dec 1 to Mar 31**, $60 fine), 24h sidewalk clearing by-law. |
| `/services/animals` | [`AnimalControl.tsx`](src/pages/services/AnimalControl.tsx) | Mandatory dog licensing ($30 spayed/neutered, $45 intact), leash by-law (max 2.0m length), Bark Park rules, lost/found pet shelter. |

### 💰 Property Taxes & Finance
| Route | Page Component | Municipal Highlights & Rules |
|---|---|---|
| `/taxes/info` | [`PropertyTaxes.tsx`](src/pages/taxes/PropertyTaxes.tsx) | 2026 residential mill rate (**0.0094523**); tax allocation (**48% Municipal, 34% Regional, 18% Education**); statutory instalment due dates (**Feb 27, Apr 30, Jun 30, Sep 30**). |
| `/taxes/payment` | [`TaxPaymentMethods.tsx`](src/pages/taxes/TaxPaymentMethods.tsx) | Online banking (19-digit Roll Number), 24/7 Town Hall drop box, in-person Interac/Cash, mail-in cheques. |
| `/taxes/pre-authorized`| [`PreAuthorized.tsx`](src/pages/taxes/PreAuthorized.tsx) | 10-month equal withdrawal plan vs. 4-instalment automatic due-date plan; enrollment requirements. |
| `/taxes/calculator` | [`TaxCalculator.tsx`](src/pages/taxes/TaxCalculator.tsx) | **Interactive Tax Calculator** estimating annual taxes, quarterly instalments, and municipal/regional/school dollar allocations from MPAC assessed value. |

### 📋 Building & Planning Permits
| Route | Page Component | Municipal Highlights & Rules |
|---|---|---|
| `/permits/decks` | [`DeckPermits.tsx`](src/pages/permits/DeckPermits.tsx) | **Exempt vs Mandatory:** Freestanding <60cm (24") & <10m² (108 sq ft) is exempt; attached decks or >60cm require building permit ($185 fee); 1.5m rear / 1.2m side setbacks. |
| `/permits/pools` | [`PoolPermits.tsx`](src/pages/permits/PoolPermits.tsx) | **By-law 2022-18:** Required for water depth >60cm; minimum **1.5m (5.0ft)** non-climbable fence; self-closing and self-latching gate with latch at 1.35m height; ASTM F1346 locking hot tub cover exemption; $150 fee. |
| `/permits/burn` | [`BurnPermits.tsx`](src/pages/permits/BurnPermits.tsx) | **By-law 2021-09:** Permitted only in Rural (A-1, RU) zones & County Rd 8; burn pile max 2m × 2m × 1m; adult 18+ with charged hose; sunrise to sunset; automatic revocation during fire bans. |
| `/permits/building` | [`BuildingPermits.tsx`](src/pages/permits/BuildingPermits.tsx) | Renovation and addition permits, secondary basement suites, accessory buildings >15m², 10-day OBC review timeline, mandatory inspection stages. |
| `/permits/signs` | [`SignagePermits.tsx`](src/pages/permits/SignagePermits.tsx) | By-law 2021-34 for storefront fascia, pylon signs, and annual $50 sidewalk A-frame sandwich boards (1.8m pedestrian clearance required). |

### 📑 Legislative & Public Records
| Route | Page Component | Municipal Highlights & Rules |
|---|---|---|
| `/documents/by-laws` | [`ByLaws.tsx`](src/pages/documents/ByLaws.tsx) | Searchable index of active municipal by-laws (Noise 2024-12, Winter Parking 2023-88, Property Standards 2023-45, Pool Enclosure 2022-18, Burn 2021-09, Animal 2020-04). |
| `/documents/fees` | [`FeeSchedules.tsx`](src/pages/documents/FeeSchedules.tsx) | Complete 2026 Master Fee Schedule across Planning, Building, Fire, Licensing, Taxation, and Public Works. |
| `/documents/guides` | [`Guides.tsx`](src/pages/documents/Guides.tsx) | Downloadable PDF handbooks: Waste & Recycling Calendar, Deck Construction Manual, Pool Safety Guide, Resident Welcome Kit. |
| `/documents/minutes` | [`CouncilMinutes.tsx`](src/pages/documents/CouncilMinutes.tsx) | Official records and passed resolutions from recent Town Council and Standing Committee meetings. |

---

## 🤖 AI Scraper & Wayhall Integration Design

This application implements multi-layered scraping architecture to support both headless browser bots and lightweight HTTP-only scrapers (Python `requests`, BeautifulSoup, Scrapy, curl, Cheerio):

1. **Pre-rendered Static Snapshot in `index.html`:**  
   Non-JavaScript crawlers immediately receive a clean semantic directory with all 22+ page links, contact numbers, and core rules (7:00 AM waste cutoff, 5:00 PM reporting threshold, 1.5m pool enclosure rule, deck permit exemptions, 0.0094523 tax mill rate).
2. **Standard Machine-Readable Feeds:**  
   - [`/robots.txt`](public/robots.txt): Explicitly grants crawling access to `WayhallBot`, `GPTBot`, `ClaudeBot`, `PerplexityBot`, and general web crawlers.
   - [`/sitemap.xml`](public/sitemap.xml): Full XML sitemap covering all 22+ routes with `<lastmod>`, `<changefreq>`, and `<priority>`.
   - [`/llms.txt`](public/llms.txt): Modern AI knowledge base manifest summarizing every topic with direct section links.
   - [`/data/townData.json`](public/data/townData.json): Static JSON endpoint allowing scrapers to fetch structured municipal facts in 1 request.
3. **Dynamic SEO & Schema.org Metadata ([`SEOHead.tsx`](src/components/SEOHead.tsx)):**  
   Automatically injects per-page `<title>`, `<meta name="description">`, OpenGraph tags, canonical links, and Schema.org `GovernmentService` / `GovernmentOrganization` JSON-LD scripts on route navigation.
4. **Section Anchors & Microdata Attributes:**  
   Sections include direct IDs (`#missed-collection`, `#pothole-criteria`, `#permit-rules`, `#pool-by-law`, `#due-dates`) and microdata attributes (`data-kb-topic`, `data-sla`, `data-fee`, `data-bylaw-reference`) enabling Wayhall to cite specific section URLs in compliance with Epic 2 (`US-08`).
5. **Dedicated HTML Site Map ([`/sitemap`](src/pages/Sitemap.tsx)):**  
   Provides a clean, hierarchical index of all pages with sparse key-fact summaries for deep web crawl discovery.
6. **Centralized Grounding Data (`src/data/townData.json` & `townData.ts`):**  
   Single source of truth ensuring exact numeric values prevent AI hallucination.

---

## 🛠️ Project Structure

```text
maplewood-town-site/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   ├── robots.txt                  # Directives for Web & AI Crawlers (WayhallBot, GPTBot, ClaudeBot)
│   ├── sitemap.xml                 # Canonical XML sitemap with 22+ municipal endpoints
│   ├── llms.txt                    # Standard LLM/AI scraper plain-text knowledge manifest
│   └── data/
│       ├── townData.json           # Public static JSON endpoint for programmatic scraping
│       └── knowledge-base.json
└── src/
    ├── main.tsx
    ├── App.tsx                     # Top-level Router configuration
    ├── index.css                   # Tailwind directives (@tailwind base/components/utilities)
    ├── App.css                     # Minimal root styling
    ├── components/
    │   ├── Layout.tsx              # Civic header, emergency bar, mega-nav, breadcrumbs & footer
    │   └── SEOHead.tsx             # Dynamic metadata, canonical links & Schema.org JSON-LD injector
    ├── data/
    │   ├── townData.json           # Comprehensive municipal grounding dataset
    │   └── townData.ts             # Typed TypeScript exports
    └── pages/
        ├── Home.tsx                # Municipal portal dashboard
        ├── Contact.tsx             # Town Hall & departmental directory
        ├── Sitemap.tsx             # Comprehensive HTML Site Map & Crawler Index
        ├── services/
        │   ├── WasteRecycling.tsx
        │   ├── RoadsMaintenance.tsx
        │   ├── ParksForestry.tsx
        │   ├── WaterServices.tsx
        │   ├── SnowRemoval.tsx
        │   └── AnimalControl.tsx
        ├── taxes/
        │   ├── PropertyTaxes.tsx
        │   ├── TaxPaymentMethods.tsx
        │   ├── PreAuthorized.tsx
        │   └── TaxCalculator.tsx   # Interactive CAD calculator
        ├── permits/
        │   ├── DeckPermits.tsx
        │   ├── PoolPermits.tsx
        │   ├── BurnPermits.tsx
        │   ├── BuildingPermits.tsx
        │   └── SignagePermits.tsx
        └── documents/
            ├── ByLaws.tsx
            ├── FeeSchedules.tsx
            ├── Guides.tsx
            └── CouncilMinutes.tsx
```

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd maplewood-town-site

# Install project dependencies
npm install
```

### Development
```bash
# Start local Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Typecheck & Production Build
```bash
# Run TypeScript compilation check
npx tsc --noEmit

# Compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ♿ Accessibility & Standards

- Designed following **WCAG 2.1 AA** color contrast and focus visibility guidelines.
- Responsive layout supporting viewports from **360px mobile** to widescreen desktop displays.
- High-contrast emergency banner and persistent keyboard-accessible navigation menus.

---

*Town of Maplewood · Corporation of the Town of Maplewood · Ontario, Canada*
