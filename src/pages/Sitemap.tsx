import { NavLink } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Sitemap() {
  const sections = [
    {
      title: 'Municipal Services & Public Works',
      links: [
        {
          title: 'Department of Public Works (DPW) & Recycling Center',
          url: '/services/public-works',
          desc: '359 Boyden Ave facility: Mon-Fri 8am-3pm, Sat 8am-12pm. Dual-stream recycling schedules (Sections 1-6), bulk drop-off rules, fall leaf collection, spring rake-out, Jitney commuter bus, and tree permits.',
          facts: 'Location: 359 Boyden Ave · Phone: (973) 762-1175 · Dual-stream & Bulk Drop-off'
        },
        {
          title: 'Waste & Recycling Collection',
          url: '/services/waste',
          desc: 'Curbside by 7:00 AM, missed collection reports after 5:00 PM, 2-day resolution SLA, green organics, blue box, bulk items.',
          facts: 'Rule: 7 AM setout · SLA: 2 business days · Bulk: 1st Tuesday'
        },
        {
          title: 'Roads, Potholes & Infrastructure',
          url: '/services/roads',
          desc: 'Pothole dimensions, travel lane High Severity priority, 50m & 30-day duplicate prevention, streetlight pole tags, downed wires.',
          facts: 'Duplicate rule: 50m / 30 days · Emergency Hydro: 1-800-434-1235'
        },
        {
          title: 'Parks, Trails & Urban Forestry',
          url: '/services/parks',
          desc: '18 parks, 35 km trails, boulevard vs. private tree responsibilities under By-law 2023-45, park bench reporting.',
          facts: 'Boulevard trees: 4.5m of curb · By-law: 2023-45'
        },
        {
          title: 'Drinking Water & Conservation',
          url: '/services/water',
          desc: 'Maplewood Aquifer source, odd/even summer watering by-law (May 15–Sept 15, 6–8 AM & 7–9 PM), emergency water main break dispatch.',
          facts: 'Conservation: May 15 – Sept 15 · Emergency: (555) 123-9287'
        },
        {
          title: 'Snow Removal & Winter Maintenance',
          url: '/services/snow',
          desc: 'Priority 1–3 routes, overnight street parking ban 2:00 AM–6:00 AM (Dec 1–Mar 31, By-law 2023-88, $60 fine), 24h sidewalk clearing.',
          facts: 'Parking ban: 2 AM - 6 AM (Dec 1 - Mar 31) · Fine: $60'
        },
        {
          title: 'Animal Control & Pet Licensing',
          url: '/services/animals',
          desc: 'Dog licensing ($30 spayed/neutered, $45 intact), leash by-law (max 2.0m), Bark Park, stray pet shelter.',
          facts: 'Dog tag: $30 / $45 · Leash: Max 2.0m · By-law 2020-04'
        }
      ]
    },
    {
      title: 'Property Taxes & Finance',
      links: [
        {
          title: 'Property Tax Assessments & Rates',
          url: '/taxes/info',
          desc: '2026 Residential Mill Rate (0.0094523), 48/34/18 split, statutory instalment due dates (Feb 27, Apr 30, Jun 30, Sep 30), 1.25% penalty.',
          facts: 'Mill rate: 0.0094523 · Due: Feb 27, Apr 30, Jun 30, Sep 30'
        },
        {
          title: 'Payment Options & Remittance',
          url: '/taxes/payment',
          desc: 'Online banking payee instructions with 19-digit Roll Number, in-person Interac/Cash, 24/7 North Entrance drop box, mail.',
          facts: 'Payee: Town of Maplewood - Property Taxes'
        },
        {
          title: 'Pre-Authorized Debit (PAP) Plans',
          url: '/taxes/pre-authorized',
          desc: '10-month monthly equal withdrawal plan vs. 4-instalment automatic due-date plan, 14-day enrollment notice, VOID cheque.',
          facts: 'Options: 10-month (1st of month) or 4-instalment'
        },
        {
          title: 'Interactive Property Tax Estimator',
          url: '/taxes/calculator',
          desc: 'Real-time CAD tax calculator based on MPAC assessed property values.',
          facts: 'Calculation: Assessed Value × 0.0094523'
        }
      ]
    },
    {
      title: 'Building & Planning Permits',
      links: [
        {
          title: 'Residential Deck Permits',
          url: '/permits/decks',
          desc: 'Exempt if freestanding <60cm (24") & <10m² (108 sq ft); mandatory if attached or >60cm; setbacks 1.5m rear / 1.2m side, $185 fee.',
          facts: 'Exempt threshold: <60cm & <10m² · Fee: $185.00'
        },
        {
          title: 'Pool Enclosure Permits (By-law 2022-18)',
          url: '/permits/pools',
          desc: 'Mandatory before filling water >60cm depth; minimum 1.5m (5.0ft) fence, self-closing/latching gate at 1.35m latch height, $150 fee.',
          facts: 'Min fence: 1.5m (5ft) · Latch: 1.35m inside · Fee: $150.00'
        },
        {
          title: 'Open-Air Burn Permits',
          url: '/permits/burn',
          desc: 'Rural (A-1, RU) & County Rd 8 only; max pile 2m × 2m × 1m, 15m clearance, adult 18+ with water, sunrise-sunset, fire ban rules.',
          facts: 'Rural zones only · Max pile: 2m × 2m × 1m · Fee: $25.00'
        },
        {
          title: 'General Building Permits',
          url: '/permits/building',
          desc: 'Residential additions, secondary suites, accessory buildings >15m², 10-day Ontario Building Code review timeline.',
          facts: 'Accessory structures >15m² · Review: 10 business days'
        },
        {
          title: 'Commercial & Temporary Signage',
          url: '/permits/signs',
          desc: 'By-law 2021-34 for storefront fascia, pylon signs, and annual $50 sidewalk A-frame sandwich boards (1.8m pedestrian walkway).',
          facts: 'Sidewalk A-frames: $50/yr · Walkway: 1.8m clearance'
        }
      ]
    },
    {
      title: 'Online Permit Intake Forms (Direct Scraper & Chatbot Endpoints)',
      links: [
        {
          title: 'Permit Application Portal Hub',
          url: '/permits/apply',
          desc: 'Centralized directory of online permit application forms and direct routing endpoints for residents, contractors, and AI chatbots.',
          facts: 'Portal: Online intake · Live confirmation numbers · Microdata enabled'
        },
        {
          title: 'Residential Deck Permit Application Form',
          url: '/permits/apply/deck',
          desc: 'Dedicated intake form for deck construction permits ($185 fee). Collects dimensions, setbacks (1.5m rear / 1.2m side), site plans, and generates instant application reference numbers.',
          facts: 'Endpoint: /permits/apply/deck · Fee: $185.00 · SLA: 10 days'
        },
        {
          title: 'Pool Enclosure Permit Application Form (By-law 2022-18)',
          url: '/permits/apply/pool',
          desc: 'Dedicated intake form for swimming pool enclosures and safety fences ($150 fee). Verifies minimum 1.5m fence and 1.35m latch height prior to excavation.',
          facts: 'Endpoint: /permits/apply/pool · Fee: $150.00 · SLA: 5 days'
        },
        {
          title: 'Open-Air Burn Permit Application Form (By-law 2021-09)',
          url: '/permits/apply/burn',
          desc: 'Instant automated issuance form for rural & County Rd 8 agricultural burn permits ($25 seasonal fee). Enforces 2mx2mx1m pile limits and adult 18+ supervision.',
          facts: 'Endpoint: /permits/apply/burn · Fee: $25.00 · Issuance: Instant active certificate'
        }
      ]
    },
    {
      title: 'By-laws, Records & Town Hall Directory',
      links: [
        {
          title: 'Municipal By-laws Index',
          url: '/documents/by-laws',
          desc: 'Searchable repository: Noise 2024-12, Traffic & Parking 2023-88, Property Standards 2023-45, Pool Enclosures 2022-18, Burn 2021-09, Animals 2020-04.',
          facts: 'Official Council By-laws directory'
        },
        {
          title: '2026 Master Municipal Fee Schedule',
          url: '/documents/fees',
          desc: 'Comprehensive fee table for permits, planning, licensing, fire certificates, and public works under By-law 2026-02.',
          facts: 'By-law 2026-02 Fee Schedule'
        },
        {
          title: 'Resident Guides & Handbooks',
          url: '/documents/guides',
          desc: 'Downloadable PDF guides: Waste calendar, deck manual, pool safety guide, resident welcome kit.',
          facts: 'Official PDF publications'
        },
        {
          title: 'Council Minutes & Meeting Agendas',
          url: '/documents/minutes',
          desc: 'Official proceedings and recorded resolutions of Maplewood Town Council and committee hearings.',
          facts: 'Public records & delegations'
        },
        {
          title: 'Contact & Town Hall Directory',
          url: '/contact',
          desc: '123 Main Street, Mon–Fri 8:30 AM–4:30 PM, department extensions, 311 citizen queue, 24/7 emergency dispatch numbers.',
          facts: 'Phone: (555) 123-4567 · 311 · 24/7 Dispatch'
        }
      ]
    }
  ];

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <SEOHead
        title="Complete Site Map & Knowledge Base Crawler Index"
        description="Comprehensive index of all 22+ municipal pages, service rules, by-laws, tax schedules, and permit requirements for the Town of Maplewood."
        category="Public Documentation"
      />

      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Machine-Readable Crawler Index &amp; Site Map
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Municipal Knowledge Base &amp; Site Directory
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Full index of all pages, by-laws, service standards, and key sparse facts for human navigation and automated AI crawler indexing (Wayhall, Search Engines, and LLMs).
        </p>

        {/* Machine Feeds Quick Bar */}
        <div className="flex flex-wrap gap-2 pt-2 text-xs">
          <a
            href="/sitemap.xml"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded border border-slate-300 font-mono font-semibold flex items-center gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            <span>🗺️</span> sitemap.xml
          </a>
          <a
            href="/robots.txt"
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded border border-slate-300 font-mono font-semibold flex items-center gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            <span>🤖</span> robots.txt
          </a>
          <a
            href="/llms.txt"
            className="bg-blue-50 hover:bg-blue-100 text-blue-900 px-3 py-1.5 rounded border border-blue-200 font-mono font-semibold flex items-center gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            <span>📄</span> llms.txt (AI Scraper Standard)
          </a>
          <a
            href="/data/townData.json"
            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-900 px-3 py-1.5 rounded border border-emerald-200 font-mono font-semibold flex items-center gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            <span>💾</span> Raw townData.json API
          </a>
        </div>
      </header>

      {/* Directory Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-xl font-bold font-serif text-slate-900 border-b border-slate-100 pb-2">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.links.map((link) => (
                <div
                  key={link.url}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <NavLink
                      to={link.url}
                      className="font-bold text-blue-900 hover:underline text-base flex items-center gap-2"
                    >
                      <span>🔗</span> {link.title}
                    </NavLink>
                    <span className="text-[11px] font-mono bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                      {link.url}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {link.desc}
                  </p>
                  <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded border border-emerald-100/60 inline-block">
                    ⚡ Sparse Key Facts: {link.facts}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Structured Grounding Meta */}
      <footer className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 space-y-1">
        <div><strong>Dataset Version:</strong> Town of Maplewood Municipal Knowledge Base Phase 1 (October 2026)</div>
        <div><strong>Authority:</strong> Corporation of the Town of Maplewood, Ontario, Canada</div>
        <div><strong>Machine-readable Endpoints:</strong> <code>/sitemap.xml</code>, <code>/robots.txt</code>, <code>/llms.txt</code>, <code>/data/townData.json</code></div>
      </footer>
    </article>
  );
}

