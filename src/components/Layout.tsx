import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-1.5 ${
      isActive
        ? 'bg-blue-900 text-white shadow-inner'
        : 'text-blue-100 hover:bg-blue-800 hover:text-white'
    }`;

  // Generate simple breadcrumbs based on pathname
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbTitle = (part: string) => {
    switch (part) {
      case 'services': return 'Municipal Services';
      case 'public-works': return 'Public Works & Recycling Center';
      case 'waste': return 'Waste & Recycling';
      case 'roads': return 'Roads & Maintenance';
      case 'parks': return 'Parks & Forestry';
      case 'water': return 'Water Services';
      case 'snow': return 'Snow Removal';
      case 'animals': return 'Animal Control';
      case 'taxes': return 'Property Taxes';
      case 'info': return 'Tax Assessments';
      case 'payment': return 'Payment Options';
      case 'pre-authorized': return 'Pre-Authorized Debit';
      case 'calculator': return 'Tax Estimator';
      case 'permits': return 'Permits & Planning';
      case 'apply': return 'Online Permit Application Portal';
      case 'deck': return 'Deck Permit Form';
      case 'pool': return 'Pool Enclosure Form';
      case 'decks': return 'Deck Permits';
      case 'pools': return 'Pool Enclosure Permits';
      case 'burn': return 'Open-Air Burn Permits';
      case 'building': return 'Building Permits';
      case 'signs': return 'Signage Permits';
      case 'documents': return 'Documents & By-laws';
      case 'by-laws': return 'Town By-laws';
      case 'fees': return 'Master Fee Schedule';
      case 'guides': return 'Resident Guides';
      case 'minutes': return 'Council Minutes';
      case 'contact': return 'Contact & Town Hall';
      default: return part.charAt(0).toUpperCase() + part.slice(1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-800 font-sans antialiased">
      {/* ── Top Municipal Emergency & Utility Bar ── */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              24/7 Road &amp; Snow Dispatch: (555) 123-7623
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">Water Emergency: (555) 123-9287</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-amber-300">Downed Wires / Hydro: 1-800-434-1235</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-400">Citizen Service: <strong className="text-white">Dial 311</strong></span>
            <span className="text-slate-600">|</span>
            <span className="bg-slate-800 text-slate-200 px-2 py-0.5 rounded text-[11px] font-mono">
              maplewood.fictionaltown.com
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Municipal Crest Header ── */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-blue-900 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md group-hover:bg-blue-800 transition-colors">
              🍁
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-blue-950 font-serif">
                  Town of Maplewood
                </span>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  Official Portal
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Growing Together in Community and Nature · Ontario, Canada
              </p>
            </div>
          </NavLink>

          {/* Quick Town Hall Info & Search shortcut */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-slate-600">
            <div className="text-right">
              <div className="font-semibold text-slate-800">Town Hall: 123 Main Street</div>
              <div className="text-xs text-slate-500">Mon–Fri: 8:30 AM – 4:30 PM</div>
            </div>
            <NavLink
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>📞 Citizen Service Center</span>
            </NavLink>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* ── Main Navigation Bar ── */}
        <nav className="bg-blue-950 text-white border-t border-blue-900/50 hidden lg:block" aria-label="Main Navigation">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 py-1">
            <NavLink to="/" className={navLinkClass} end>
              <span>🏛️</span> Home
            </NavLink>

            {/* Services Dropdown/Link */}
            <div className="relative group">
              <NavLink to="/services/waste" className={navLinkClass}>
                <span>🚛</span> Municipal Services <span className="text-[10px]">▼</span>
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-200 py-2 z-50">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Public Works &amp; Services</div>
                <NavLink to="/services/public-works" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900 font-semibold text-blue-950">DPW &amp; Recycling Center (359 Boyden)</NavLink>
                <NavLink to="/services/waste" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Waste, Recycling &amp; Organics</NavLink>
                <NavLink to="/services/roads" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Roads, Potholes &amp; Infrastructure</NavLink>
                <NavLink to="/services/parks" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Parks, Trails &amp; Forestry</NavLink>
                <NavLink to="/services/water" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Drinking Water &amp; Conservation</NavLink>
                <NavLink to="/services/snow" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Winter Maintenance &amp; Snow Plowing</NavLink>
                <NavLink to="/services/animals" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Animal Services &amp; Pet Licensing</NavLink>
              </div>
            </div>

            {/* Taxes Dropdown/Link */}
            <div className="relative group">
              <NavLink to="/taxes/info" className={navLinkClass}>
                <span>💰</span> Property Taxes <span className="text-[10px]">▼</span>
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-200 py-2 z-50">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Tax &amp; Finance Department</div>
                <NavLink to="/taxes/info" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Tax Rates &amp; Assessments</NavLink>
                <NavLink to="/taxes/payment" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Payment Options &amp; Instructions</NavLink>
                <NavLink to="/taxes/pre-authorized" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Pre-Authorized Debit (PAP)</NavLink>
                <NavLink to="/taxes/calculator" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Property Tax Estimator Calculator</NavLink>
              </div>
            </div>

            {/* Permits Dropdown/Link */}
            <div className="relative group">
              <NavLink to="/permits/building" className={navLinkClass}>
                <span>📋</span> Permits &amp; Planning <span className="text-[10px]">▼</span>
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-200 py-2 z-50">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Building &amp; Planning Department</div>
                <NavLink to="/permits/decks" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Residential Deck Permits</NavLink>
                <NavLink to="/permits/pools" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Pool Enclosure By-law &amp; Permits</NavLink>
                <NavLink to="/permits/burn" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Open-Air Burn Permits</NavLink>
                <NavLink to="/permits/building" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Building &amp; Renovation Permits</NavLink>
                <NavLink to="/permits/signs" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Signage &amp; Advertising Permits</NavLink>

                <div className="my-1 border-t border-slate-100"></div>
                <div className="px-3 py-1 text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50/70">
                  Online Permit Application Forms
                </div>
                <NavLink to="/permits/apply" className="block px-4 py-1.5 text-xs font-bold text-blue-950 hover:bg-blue-50">
                  Permit Application Portal Hub →
                </NavLink>
                <NavLink to="/permits/apply/deck" className="block px-4 py-1 text-xs text-slate-600 hover:text-blue-900 hover:bg-blue-50">
                  • Apply for Deck Permit ($185)
                </NavLink>
                <NavLink to="/permits/apply/pool" className="block px-4 py-1 text-xs text-slate-600 hover:text-blue-900 hover:bg-blue-50">
                  • Apply for Pool Enclosure ($150)
                </NavLink>
                <NavLink to="/permits/apply/burn" className="block px-4 py-1 text-xs text-slate-600 hover:text-blue-900 hover:bg-blue-50">
                  • Apply for Burn Permit ($25 instant)
                </NavLink>
              </div>
            </div>

            {/* Documents Dropdown/Link */}
            <div className="relative group">
              <NavLink to="/documents/by-laws" className={navLinkClass}>
                <span>📑</span> By-laws &amp; Records <span className="text-[10px]">▼</span>
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-200 py-2 z-50">
                <div className="px-3 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Clerk &amp; Legislative Services</div>
                <NavLink to="/documents/by-laws" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Municipal By-laws Index</NavLink>
                <NavLink to="/documents/fees" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Master Municipal Fee Schedule</NavLink>
                <NavLink to="/documents/guides" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Resident &amp; Builder Guides</NavLink>
                <NavLink to="/documents/minutes" className="block px-4 py-2 text-sm hover:bg-blue-50 text-slate-700 hover:text-blue-900">Council Minutes &amp; Meeting Agendas</NavLink>
              </div>
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              <span>📍</span> Town Hall &amp; Contact
            </NavLink>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-blue-950 text-white px-4 py-3 space-y-2 border-t border-blue-900">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm font-semibold">Home</NavLink>
            <div className="pt-2 pb-1 border-t border-blue-900 text-xs font-bold text-blue-300 uppercase">Services</div>
            <NavLink to="/services/public-works" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-amber-200 font-semibold">DPW &amp; Recycling Center (359 Boyden)</NavLink>
            <NavLink to="/services/waste" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Waste &amp; Recycling</NavLink>
            <NavLink to="/services/roads" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Roads &amp; Maintenance</NavLink>
            <NavLink to="/services/parks" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Parks &amp; Forestry</NavLink>
            <NavLink to="/services/water" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Water Services</NavLink>
            <NavLink to="/services/snow" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Snow Removal</NavLink>
            <NavLink to="/services/animals" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Animal Control</NavLink>
            <div className="pt-2 pb-1 border-t border-blue-900 text-xs font-bold text-blue-300 uppercase">Taxes</div>
            <NavLink to="/taxes/info" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Property Taxes</NavLink>
            <NavLink to="/taxes/payment" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Payment Methods</NavLink>
            <NavLink to="/taxes/pre-authorized" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Pre-Authorized Debit</NavLink>
            <NavLink to="/taxes/calculator" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Tax Calculator</NavLink>
            <div className="pt-2 pb-1 border-t border-blue-900 text-xs font-bold text-blue-300 uppercase">Permits &amp; Planning</div>
            <NavLink to="/permits/apply" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-amber-300 font-semibold">📝 Online Permit Application Forms</NavLink>
            <NavLink to="/permits/apply/deck" onClick={() => setMobileMenuOpen(false)} className="block pl-5 py-0.5 text-xs text-blue-200">• Apply for Deck Permit ($185)</NavLink>
            <NavLink to="/permits/apply/pool" onClick={() => setMobileMenuOpen(false)} className="block pl-5 py-0.5 text-xs text-blue-200">• Apply for Pool Enclosure ($150)</NavLink>
            <NavLink to="/permits/apply/burn" onClick={() => setMobileMenuOpen(false)} className="block pl-5 py-0.5 text-xs text-blue-200">• Apply for Burn Permit ($25)</NavLink>
            <NavLink to="/permits/decks" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Deck Regulations</NavLink>
            <NavLink to="/permits/pools" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Pool Regulations</NavLink>
            <NavLink to="/permits/burn" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Burn Regulations</NavLink>
            <NavLink to="/permits/building" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Building Permits</NavLink>
            <NavLink to="/permits/signs" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Signage Permits</NavLink>
            <div className="pt-2 pb-1 border-t border-blue-900 text-xs font-bold text-blue-300 uppercase">Documents</div>
            <NavLink to="/documents/by-laws" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">By-laws</NavLink>
            <NavLink to="/documents/fees" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Fee Schedules</NavLink>
            <NavLink to="/documents/guides" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Guides</NavLink>
            <NavLink to="/documents/minutes" onClick={() => setMobileMenuOpen(false)} className="block pl-3 py-1 text-sm text-blue-100">Council Minutes</NavLink>
            <div className="pt-2 border-t border-blue-900">
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-semibold text-amber-300">Contact Town Hall</NavLink>
            </div>
          </div>
        )}
      </header>

      {/* ── Breadcrumb Navigation ── */}
      {pathnames.length > 0 && (
        <div className="bg-white border-b border-slate-200">
          <nav className="max-w-7xl mx-auto px-4 py-2 text-xs text-slate-500 flex items-center gap-2" aria-label="Breadcrumb">
            <NavLink to="/" className="hover:text-blue-900">Home</NavLink>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              return (
                <span key={to} className="flex items-center gap-2">
                  <span className="text-slate-400">/</span>
                  {isLast ? (
                    <span className="font-semibold text-slate-800" aria-current="page">
                      {getBreadcrumbTitle(value)}
                    </span>
                  ) : (
                    <NavLink to={to} className="hover:text-blue-900">
                      {getBreadcrumbTitle(value)}
                    </NavLink>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      )}

      {/* ── Main Content Area ── */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* ── Wayhall AI Chatbot Floating Indicator (As per US-12) ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-blue-950 text-white p-3 rounded-2xl shadow-2xl border-2 border-blue-700 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl shadow-inner">
            🤖
          </div>
          <div className="pr-2">
            <div className="text-xs font-bold flex items-center gap-1.5 text-blue-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Wayhall AI Municipal Assistant
            </div>
            <div className="text-[11px] text-slate-300">Ask in English, French or Spanish</div>
          </div>
        </div>
      </div>

      {/* ── Official Municipal Footer ── */}
      <footer className="bg-slate-900 text-slate-300 border-t-4 border-blue-800 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🍁</span>
                <span className="text-lg font-bold text-white font-serif">Town of Maplewood</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Official municipality information portal for residents, businesses, and property owners in the Town of Maplewood.
              </p>
              <div className="text-xs text-slate-400 space-y-1">
                <div><strong>Address:</strong> 123 Main Street, Maplewood, ON M4P 1T8</div>
                <div><strong>Main Phone:</strong> (555) 123-4567</div>
                <div><strong>311 Citizen Help:</strong> 311 or (555) 311-MAPL</div>
                <div><strong>Email:</strong> info@maplewood.fictionaltown.com</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
                Public Works &amp; Services
              </h3>
              <ul className="text-sm space-y-2">
                <li><NavLink to="/services/public-works" className="hover:text-blue-400 font-semibold text-blue-200">DPW &amp; Recycling Depot (359 Boyden)</NavLink></li>
                <li><NavLink to="/services/waste" className="hover:text-blue-400">Waste, Recycling &amp; Compost</NavLink></li>
                <li><NavLink to="/services/roads" className="hover:text-blue-400">Potholes &amp; Road Repairs</NavLink></li>
                <li><NavLink to="/services/snow" className="hover:text-blue-400">Winter Parking &amp; Snow Plowing</NavLink></li>
                <li><NavLink to="/services/water" className="hover:text-blue-400">Drinking Water Quality</NavLink></li>
                <li><NavLink to="/services/animals" className="hover:text-blue-400">Dog Licensing &amp; Animal Control</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
                Taxes &amp; Building Permits
              </h3>
              <ul className="text-sm space-y-2">
                <li><NavLink to="/taxes/info" className="hover:text-blue-400">Property Tax Assessments</NavLink></li>
                <li><NavLink to="/taxes/payment" className="hover:text-blue-400">Payment Options &amp; Due Dates</NavLink></li>
                <li><NavLink to="/taxes/calculator" className="hover:text-blue-400">Tax Estimator Calculator</NavLink></li>
                <li><NavLink to="/permits/apply" className="text-amber-300 font-semibold hover:text-amber-200">Online Permit Application Portal</NavLink></li>
                <li><NavLink to="/permits/decks" className="hover:text-blue-400">Deck Building Regulations</NavLink></li>
                <li><NavLink to="/permits/pools" className="hover:text-blue-400">Pool Enclosure By-law 2022-18</NavLink></li>
                <li><NavLink to="/permits/burn" className="hover:text-blue-400">Open-Air Burn Permits</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 border-b border-slate-800 pb-1">
                Council &amp; Legislative
              </h3>
              <ul className="text-sm space-y-2">
                <li><NavLink to="/documents/by-laws" className="hover:text-blue-400">Municipal By-laws Index</NavLink></li>
                <li><NavLink to="/documents/fees" className="hover:text-blue-400">2026 Master Fee Schedule</NavLink></li>
                <li><NavLink to="/documents/minutes" className="hover:text-blue-400">Council Meeting Minutes</NavLink></li>
                <li><NavLink to="/documents/guides" className="hover:text-blue-400">Resident Guides &amp; Handbooks</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-blue-400">Department Directory &amp; Staff</NavLink></li>
                <li><NavLink to="/sitemap" className="text-amber-300 font-semibold hover:text-amber-200">Site Map &amp; Crawler Index</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div>
              &copy; {new Date().getFullYear()} Corporation of the Town of Maplewood. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <NavLink to="/sitemap" className="hover:text-slate-300">Site Map</NavLink>
              <a href="/sitemap.xml" className="hover:text-slate-300" target="_blank" rel="noreferrer">sitemap.xml</a>
              <a href="/llms.txt" className="hover:text-slate-300" target="_blank" rel="noreferrer">llms.txt</a>
              <a href="/data/townData.json" className="hover:text-slate-300" target="_blank" rel="noreferrer">JSON Feed</a>
              <span>Accessibility (WCAG 2.1 AA)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
