import { NavLink } from 'react-router-dom';
import townData from '../data/townData.json';
import SEOHead from '../components/SEOHead';

export default function Home() {
  const { townInfo, services, taxes, documents } = townData;

  const quickActions = [
    {
      title: 'Waste & Recycling',
      desc: 'Bins out by 7 AM. Missed collection reports after 5 PM.',
      to: '/services/waste',
      icon: '🚛',
      badge: 'Public Works',
      color: 'border-l-blue-600',
    },
    {
      title: 'Report a Pothole or Road Issue',
      desc: 'Submit exact location, size & lane. 24h repair for severe hazards.',
      to: '/services/roads',
      icon: '🚧',
      badge: 'High Priority',
      color: 'border-l-amber-500',
    },
    {
      title: 'Property Taxes & Payments',
      desc: '2026 tax rates, instalment due dates (Feb, Apr, Jun, Sep) & PAP.',
      to: '/taxes/info',
      icon: '💳',
      badge: 'Finance',
      color: 'border-l-emerald-600',
    },
    {
      title: 'Deck & Pool Permits',
      desc: 'Building by-laws, 1.5m pool enclosure rules, and online applications.',
      to: '/permits/decks',
      icon: '📐',
      badge: 'Building Dept',
      color: 'border-l-indigo-600',
    },
    {
      title: 'Open-Air Burn Permits',
      desc: 'Rural zone burning, instant permits, clearances & fire ban rules.',
      to: '/permits/burn',
      icon: '🔥',
      badge: 'Fire & Rescue',
      color: 'border-l-orange-500',
    },
    {
      title: 'By-laws & Fee Schedule',
      desc: 'Noise, property standards, 2026 master fees & official regulations.',
      to: '/documents/by-laws',
      icon: '⚖️',
      badge: 'Legislative',
      color: 'border-l-purple-600',
    },
    {
      title: 'Winter Maintenance & Snow',
      desc: 'Overnight street parking ban (2 AM – 6 AM), priority plow routes.',
      to: '/services/snow',
      icon: '❄️',
      badge: 'Seasonal By-law',
      color: 'border-l-sky-500',
    },
    {
      title: 'Dog Licensing & Animal Control',
      desc: 'Annual dog tags ($30 spayed/neutered), 2m leash by-law & shelter.',
      to: '/services/animals',
      icon: '🐕',
      badge: 'Clerk Services',
      color: 'border-l-teal-600',
    },
  ];

  return (
    <article className="space-y-10" itemScope itemType="https://schema.org/GovernmentOrganization">
      <SEOHead
        title="Official Municipal Knowledge Portal"
        description="Official Town of Maplewood municipal portal. Access curbside waste rules, road repairs, property tax due dates, deck and pool permits, and town council records."
        category="Civic Portal"
      />
      {/* ── Hero Municipal Banner ── */}
      <header className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden border border-blue-800">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-800/80 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm border border-blue-700">
            <span>🍁 Municipal Knowledge &amp; Citizen Portal</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-serif tracking-tight leading-tight">
            Welcome to the Town of Maplewood
          </h1>
          <p className="text-base md:text-lg text-blue-100/90 leading-relaxed">
            {townInfo.motto}. Access municipal services, view official by-laws, apply for building and burn permits, calculate property taxes, and report community infrastructure issues.
          </p>

          <div className="pt-2 flex flex-wrap gap-3 text-xs md:text-sm">
            <NavLink
              to="/services/waste"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition-all hover:shadow-lg flex items-center gap-2"
            >
              <span>Explore All Services</span>
              <span>&rarr;</span>
            </NavLink>
            <NavLink
              to="/taxes/calculator"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <span>Tax Calculator</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <span>Town Hall Directory</span>
            </NavLink>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute right-[-20px] bottom-[-40px] text-blue-800/20 text-[220px] select-none pointer-events-none font-serif">
          🍁
        </div>
      </header>

      {/* ── Urgent Advisories & Municipal Alerts Strip ── */}
      <section className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-sm text-amber-950 space-y-1">
        <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
          <span className="text-base">⚠️</span> Active Municipal Alerts &amp; Timelines
        </div>
        <p className="text-xs md:text-sm text-amber-900/90 leading-relaxed">
          <strong>Curbside Rule:</strong> {services.wasteRecycling.curbsidePlacementRule} ·{' '}
          <strong>Winter Parking:</strong> {services.snowRemoval.overnightParkingBan.split('.')[0]}.
        </p>
      </section>

      {/* ── Key Citizen Action Cards Grid ── */}
      <section aria-labelledby="quick-services-heading">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="quick-services-heading" className="text-2xl font-bold font-serif text-slate-900">
              Resident Services &amp; Citizen Portals
            </h2>
            <p className="text-sm text-slate-600">
              Direct access to departments, online submissions, and municipal guidelines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickActions.map((action) => (
            <NavLink
              key={action.title}
              to={action.to}
              className={`bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all border-l-4 ${action.color} group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
                    {action.icon}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {action.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-1.5">
                  {action.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {action.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-blue-700">
                <span>View Guidelines &amp; Rules</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* ── Featured Direct Permit Forms & Online Intake Hub ── */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300 font-mono">
                Direct Citizen &amp; Chatbot Endpoints
              </span>
            </div>
            <h2 className="text-2xl font-bold font-serif">
              Online Permit Application Forms
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Applying for construction or agricultural burns? Use our dedicated online intake forms. Direct links allow AI scrapers and citizens to submit permits immediately with automated confirmation numbers.
            </p>
          </div>
          <NavLink
            to="/permits/apply"
            className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow self-start md:self-auto whitespace-nowrap"
          >
            All Permit Forms Portal →
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <NavLink
            to="/permits/apply/deck"
            className="p-4 bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 backdrop-blur-xs transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">📐</span>
              <span className="text-[10px] font-mono bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded border border-indigo-400/30">
                $185.00
              </span>
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-blue-200">
              Deck Construction Permit
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For attached decks or height &gt;60cm. Submit drawings and setback verifications.
            </p>
            <div className="text-[11px] text-amber-300 font-semibold pt-1 flex items-center gap-1">
              Apply Online <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </NavLink>

          <NavLink
            to="/permits/apply/pool"
            className="p-4 bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 backdrop-blur-xs transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">🏊</span>
              <span className="text-[10px] font-mono bg-blue-500/30 text-blue-200 px-2 py-0.5 rounded border border-blue-400/30">
                $150.00
              </span>
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-blue-200">
              Pool Enclosure Permit
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mandatory under By-law 2022-18 for &gt;60cm depth. 1.5m fence &amp; latch inspection.
            </p>
            <div className="text-[11px] text-amber-300 font-semibold pt-1 flex items-center gap-1">
              Apply Online <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </NavLink>

          <NavLink
            to="/permits/apply/burn"
            className="p-4 bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 backdrop-blur-xs transition-all space-y-2 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">🔥</span>
              <span className="text-[10px] font-mono bg-orange-500/30 text-orange-200 px-2 py-0.5 rounded border border-orange-400/30">
                $25.00 Instant
              </span>
            </div>
            <h3 className="font-bold text-sm text-white group-hover:text-orange-200">
              Open-Air Burn Permit
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rural zones &amp; County Rd 8 only. Max pile 2mx2mx1m. Instant active approval.
            </p>
            <div className="text-[11px] text-amber-300 font-semibold pt-1 flex items-center gap-1">
              Apply Online <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </NavLink>
        </div>
      </section>

      {/* ── Dual Section: Upcoming Tax Dates & Council Activity ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Taxes & Financial Deadlines */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">📅</span>
              <h2 className="text-lg font-bold text-slate-900">
                2026 Property Tax Instalment Schedule
              </h2>
            </div>
            <NavLink to="/taxes/payment" className="text-xs font-semibold text-blue-800 hover:underline">
              Payment Methods &rarr;
            </NavLink>
          </div>
          <p className="text-xs text-slate-600">
            Residential Mill Rate: <strong className="text-slate-900 font-mono">0.0094523</strong> (Tax distribution: 48% Municipal, 34% Regional, 18% Education).
          </p>
          <div className="divide-y divide-slate-100">
            {taxes.propertyTaxes.instalmentDueDates.map((item) => (
              <div key={item.bill} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-slate-700">{item.bill}</span>
                <span className="font-bold text-blue-950 bg-blue-50 px-2.5 py-1 rounded border border-blue-100 font-mono">
                  {item.dueDate}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-600">
            <strong>Late Penalty:</strong> {taxes.propertyTaxes.latePaymentPenalty}
          </div>
        </section>

        {/* Latest Council Decisions & Minutes */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏛️</span>
              <h2 className="text-lg font-bold text-slate-900">
                Recent Council Decisions &amp; Records
              </h2>
            </div>
            <NavLink to="/documents/minutes" className="text-xs font-semibold text-blue-800 hover:underline">
              All Minutes &rarr;
            </NavLink>
          </div>
          <p className="text-xs text-slate-600">
            Public municipal records, resolutions, and by-laws passed by Maplewood Town Council.
          </p>
          <div className="space-y-3">
            {documents.councilMinutes.slice(0, 3).map((minute) => (
              <div key={minute.meetingDate} className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{minute.type}</span>
                  <span className="text-slate-500 font-mono text-[11px]">{minute.meetingDate}</span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {minute.highlights}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Municipal Contact & Help Desk Info ── */}
      <section className="bg-blue-950 text-white rounded-2xl p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Citizen Service &amp; Inquiry Center
            </div>
            <h2 className="text-2xl font-bold font-serif">Have questions or need to reach a department?</h2>
            <p className="text-sm text-blue-200 max-w-xl">
              Town staff are available Monday through Friday, 8:30 AM to 4:30 PM. For after-hours emergencies regarding water mains or fallen trees, dispatch is on call 24/7.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow"
            >
              Contact Staff &amp; Directory
            </NavLink>
            <NavLink
              to="/documents/guides"
              className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors border border-blue-700"
            >
              Download Resident Guides
            </NavLink>
          </div>
        </div>
      </section>
    </article>
  );
}
