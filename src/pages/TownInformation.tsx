import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import townData from '../data/townData.json';
import SEOHead from '../components/SEOHead';

export default function TownInformation() {
  const { townInfo } = townData;
  const { mayorAndCouncil, leadershipAndAdministration, municipalFacilities } = townInfo;

  const [selectedWard, setSelectedWard] = useState<string>('all');

  const filteredCouncillors =
    selectedWard === 'all'
      ? mayorAndCouncil.councillors
      : mayorAndCouncil.councillors.filter((c) => c.ward === selectedWard);

  return (
    <article
      className="space-y-10 max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentOrganization"
      data-kb-topic="town-information-governance"
    >
      <SEOHead
        title="Town Information, Mayor & Council, and Administration"
        description="Official governance and civic profile of the Town of Maplewood. Meet Mayor Eleanor Vance and Council, view department directors, civic statistics, and municipal facilities."
        category="Town Governance"
      />

      {/* ── Civic Crest Header ── */}
      <header className="border-b border-slate-200 pb-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Municipal Corporation &middot; Est. 1888
          </div>
          <time dateTime="2026-11-01" className="text-xs text-slate-500 font-mono">
            Updated: November 1, 2026
          </time>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-4xl p-3 bg-blue-50 border border-blue-200 rounded-2xl shadow-inner">
            🏛️
          </span>
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
              Town Information &amp; Municipal Governance
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed" itemProp="description">
              Welcome to the Corporation of the Town of Maplewood. Explore our elected leadership, municipal administration, operating budget, and public civic facilities.
            </p>
          </div>
        </div>

        {/* Quick Links Nav */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold">
          <a href="#civic-profile" className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 rounded-lg text-slate-700 transition-colors">
            📊 Civic Statistics
          </a>
          <a href="#council-directory" className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 rounded-lg text-slate-700 transition-colors">
            🍁 Mayor &amp; Council
          </a>
          <a href="#departments" className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 rounded-lg text-slate-700 transition-colors">
            👔 Departments &amp; CAO
          </a>
          <a href="#facilities" className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 rounded-lg text-slate-700 transition-colors">
            🏢 Town Facilities
          </a>
          <NavLink to="/services/request" className="px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition-colors ml-auto">
            📝 311 Service Requests &rarr;
          </NavLink>
        </div>
      </header>

      {/* ── 1. Civic Profile & Vital Statistics ── */}
      <section id="civic-profile" className="space-y-4" data-kb-section="civic-statistics">
        <div className="flex items-center gap-2">
          <span className="text-xl">📊</span>
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Town Profile &amp; Civic Statistics
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Population</span>
            <strong className="text-2xl font-bold text-blue-950 font-serif">42,850</strong>
            <span className="text-[11px] text-slate-600 block">16,420 Households</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Incorporation</span>
            <strong className="text-2xl font-bold text-slate-900 font-serif">1888</strong>
            <span className="text-[11px] text-slate-600 block">Ontario Municipality</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Land Area</span>
            <strong className="text-2xl font-bold text-slate-900 font-serif">64.2 km²</strong>
            <span className="text-[11px] text-slate-600 block">245 km Road Network</span>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
            <span className="text-xs text-slate-500 block uppercase font-mono tracking-wider">Operating Budget</span>
            <strong className="text-2xl font-bold text-emerald-700 font-serif">$58.4M</strong>
            <span className="text-[11px] text-slate-600 block">2026 Approved Budget</span>
          </div>
        </div>

        {/* Budget Allocation Breakdown */}
        <div className="p-5 bg-blue-50/70 border border-blue-200 rounded-xl space-y-3 text-xs text-slate-700">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <strong className="text-blue-950 text-sm font-serif">
              2026 Municipal Budget &amp; Tax Levy Distribution
            </strong>
            <span className="font-mono text-blue-900">Residential Mill Rate: 0.0094523</span>
          </div>
          <p className="leading-relaxed text-slate-600">
            For every property tax dollar collected in Maplewood, funds are distributed across three distinct jurisdictions to support local infrastructure, regional emergency services, and education:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            <div className="bg-white p-3 rounded-lg border border-blue-200">
              <div className="text-blue-900 font-bold text-sm">48% &middot; Town of Maplewood</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Road maintenance, snow plowing, parks, fire &amp; rescue, building inspections, waste diversion, and library services.
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-blue-200">
              <div className="text-indigo-900 font-bold text-sm">34% &middot; Regional Municipality</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Regional public transit, policing services, public health, social services, and regional arterial corridors.
              </div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-blue-200">
              <div className="text-emerald-900 font-bold text-sm">18% &middot; School Boards</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Public and Catholic English and French school board education funding as mandated by the Province.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Mayor & Council Directory ── */}
      <section id="council-directory" className="space-y-6" data-kb-section="mayor-and-council">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Mayor &amp; Town Council (2024–2028 Term)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {mayorAndCouncil.councilMeetingSchedule}
            </p>
          </div>

          {/* Ward filter buttons */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 font-medium mr-1">Filter:</span>
            {['all', 'Ward 1', 'Ward 2', 'Ward 3', 'Ward 4'].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setSelectedWard(w)}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  selectedWard === w
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {w === 'all' ? 'All Council' : w}
              </button>
            ))}
          </div>
        </div>

        {/* Head of Council: Mayor & Deputy Mayor */}
        {selectedWard === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mayor */}
            <div className="p-5 bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-2xl shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-400 text-blue-950 font-bold text-xl rounded-full flex items-center justify-center shadow">
                  🍁
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-mono uppercase tracking-wider block">Head of Council</span>
                  <h3 className="text-xl font-bold font-serif">{mayorAndCouncil.mayor.name}</h3>
                  <div className="text-xs text-blue-200">{mayorAndCouncil.mayor.title}</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {mayorAndCouncil.mayor.bio}
              </p>
              <div className="text-xs text-blue-200 pt-2 border-t border-blue-900/60 font-mono space-y-0.5">
                <div>✉️ {mayorAndCouncil.mayor.email}</div>
                <div>📞 {mayorAndCouncil.mayor.phone}</div>
              </div>
            </div>

            {/* Deputy Mayor */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 text-blue-900 font-bold text-xl rounded-full flex items-center justify-center">
                  🏛️
                </div>
                <div>
                  <span className="text-xs text-blue-800 font-mono uppercase tracking-wider block">Councillor-at-Large</span>
                  <h3 className="text-xl font-bold font-serif text-slate-900">{mayorAndCouncil.deputyMayor.name}</h3>
                  <div className="text-xs text-slate-500">{mayorAndCouncil.deputyMayor.title}</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {mayorAndCouncil.deputyMayor.bio}
              </p>
              <div className="text-xs text-slate-600 pt-2 border-t border-slate-200 font-mono space-y-0.5">
                <div>✉️ {mayorAndCouncil.deputyMayor.email}</div>
                <div>📞 {mayorAndCouncil.deputyMayor.phone}</div>
              </div>
            </div>
          </div>
        )}

        {/* Ward Councillors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredCouncillors.map((c) => (
            <div
              key={c.ward}
              className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2 hover:border-blue-400 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-900 font-bold text-xs px-2.5 py-0.5 rounded font-mono">
                  {c.ward}
                </span>
                <span className="text-xs text-slate-400">4-Year Mandate</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 font-serif">{c.name}</h4>
                <div className="text-xs text-slate-500 mt-0.5">{c.area}</div>
              </div>
              <div className="text-xs text-slate-600 pt-2 border-t border-slate-100 font-mono space-y-0.5">
                <div>✉️ <a href={`mailto:${c.email}`} className="text-blue-800 hover:underline">{c.email}</a></div>
                <div>📞 {c.phone}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Council Delegations Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <strong className="text-slate-900 text-sm block">Citizen Delegations &amp; Public Hearings</strong>
            <p className="text-slate-600">
              Residents wishing to address Council on an agenda item must submit a written Delegation Request Form to the Town Clerk at least 5 business days prior to the scheduled meeting.
            </p>
          </div>
          <NavLink
            to="/documents/minutes"
            className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold px-3.5 py-2 rounded-lg whitespace-nowrap"
          >
            Council Agendas &amp; Minutes &rarr;
          </NavLink>
        </div>
      </section>

      {/* ── 3. Administrative Leadership & Department Directors ── */}
      <section id="departments" className="space-y-4" data-kb-section="administrative-leadership">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <span className="text-xl">👔</span>
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Executive Leadership &amp; Department Heads
            </h2>
            <p className="text-xs text-slate-500">
              The municipal administration operates under the leadership of the Chief Administrative Officer (CAO) to deliver council-approved policies and public services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leadershipAndAdministration.map((lead) => (
            <div
              key={lead.department}
              className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-2 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  {lead.department}
                </span>
                <span className="text-xs text-slate-400 font-mono">{lead.phone}</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base font-serif">{lead.leader}</h3>
                <div className="text-xs text-slate-600 font-medium">{lead.title}</div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {lead.responsibilities}
              </p>
              <div className="text-[11px] text-blue-800 font-mono pt-1">
                ✉️ <a href={`mailto:${lead.email}`} className="hover:underline">{lead.email}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. Municipal Facilities Directory ── */}
      <section id="facilities" className="space-y-4" data-kb-section="facilities-directory">
        <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
          <span className="text-xl">🏢</span>
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Town Facilities &amp; Public Buildings Directory
            </h2>
            <p className="text-xs text-slate-500">
              Key municipal buildings, depot sites, emergency stations, and community hubs across the Town of Maplewood.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {municipalFacilities.map((fac) => (
            <div
              key={fac.name}
              className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono uppercase bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {fac.type}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-serif">{fac.name}</h3>
                <div className="text-xs text-slate-600 flex items-start gap-1">
                  <span>📍</span>
                  <span>{fac.address}</span>
                </div>
                <div className="text-xs text-slate-500">
                  <strong>Hours:</strong> {fac.hours}
                </div>
                <div className="text-xs text-slate-500">
                  <strong>Phone:</strong> {fac.phone}
                </div>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <strong>Key Features:</strong> {fac.features}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Service Request CTA Banner ── */}
      <div className="p-6 bg-gradient-to-r from-blue-950 to-indigo-950 text-white rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
            311 Citizen Action Center
          </span>
          <h3 className="text-xl font-bold font-serif">Need to report an issue or request municipal action?</h3>
          <p className="text-xs text-blue-200">
            Submit pothole repairs, missed waste, streetlight outages, or track your existing request in real-time.
          </p>
        </div>
        <NavLink
          to="/services/request"
          className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs px-5 py-3 rounded-xl shadow transition-colors whitespace-nowrap"
        >
          Open 311 Citizen Portal &rarr;
        </NavLink>
      </div>
    </article>
  );
}

