import { useState } from 'react';
import townData from '../../data/townData.json';
import SEOHead from '../../components/SEOHead';
import { NavLink } from 'react-router-dom';

export default function SnowRemoval() {
  const { snowRemoval } = townData.services;
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRoutes = snowRemoval.designatedSnowEmergencyRoutes.filter(
    (route) =>
      route.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.extent.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <article
      className="space-y-10 max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentService"
      data-kb-topic="snow-emergency-routes"
      data-ordinance-reference="Chapter 257 Vehicles and Traffic & Chapter 239 Streets"
    >
      <SEOHead
        title="Snow Emergencies, Plowing Routes & Emergency Parking Regulations"
        description="Official Maplewood snow emergency routes, Chapter 257 emergency no-parking regulations, tow-away zones (§ 257-31), and 24-hour sidewalk snow clearing laws (§ 239-1)."
        category="Public Works & Traffic"
      />

      {/* ── Title Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Municipal Code Chapter 257 &amp; Chapter 239
          </div>
          <time dateTime="2026-10-31" className="text-xs text-slate-500 font-mono">
            Updated: October 31, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {snowRemoval.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemProp="description">
          Official regulations governing designated snow emergency routes, emergency no-parking restrictions under Chapter 257, DPW plowing schedules, tow-away impound procedures, and property owner sidewalk clearing mandates.
        </p>
      </header>

      {/* ── Emergency State & Parking Ban Warning ── */}
      <section
        id="snow-emergency-ban"
        className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-xl space-y-3"
        data-restriction="emergency-no-parking"
      >
        <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
          <span>🚫</span> State of Emergency &amp; Snow-Covered Street Parking Prohibitions (§ 257-36.7 / § 257-2.5)
        </div>
        <p className="text-sm text-amber-950 leading-relaxed">
          {snowRemoval.overnightParkingBan}
        </p>
        <div className="text-xs text-amber-900 bg-amber-100/70 p-3 rounded-lg border border-amber-200">
          <strong>Important Permit Notice:</strong> When a snow emergency is declared or roads become snow-covered, <strong>all standard on-street overnight parking permits are suspended</strong> until streets have been plowed curb-to-curb by municipal and county plows.
        </div>
      </section>

      {/* ── Designated Snow Emergency Routes (From eCode360 Chapter 257) ── */}
      <section id="designated-routes" className="space-y-4" data-kb-section="snow-emergency-streets">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Designated Snow Emergency Streets &amp; Routes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Parking is prohibited on both sides of these designated municipal corridors during snow emergencies to ensure emergency vehicle and plow access.
            </p>
          </div>
          <span className="text-xs font-mono font-bold bg-blue-100 text-blue-900 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
            {snowRemoval.designatedSnowEmergencyRoutes.length} Designated Corridors
          </span>
        </div>

        {/* Filter Input */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search street, avenue, or jurisdiction..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
            aria-label="Filter snow emergency routes"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
        </div>

        {/* Routes Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-slate-700 text-left font-semibold">
              <tr>
                <th className="py-3 px-4">Street / Avenue Name</th>
                <th className="py-3 px-4">Location &amp; Extent</th>
                <th className="py-3 px-4">Sides</th>
                <th className="py-3 px-4">Plowing Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredRoutes.map((rt) => (
                <tr key={rt.street} className="hover:bg-slate-50/80 transition-colors" data-street-name={rt.street}>
                  <td className="py-3 px-4 font-bold text-slate-900">{rt.street}</td>
                  <td className="py-3 px-4 text-xs sm:text-sm">{rt.extent}</td>
                  <td className="py-3 px-4 text-xs font-semibold text-blue-950">
                    <span className="bg-blue-50 px-2 py-0.5 rounded border border-blue-200 whitespace-nowrap">
                      {rt.side}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-600 font-medium">{rt.jurisdiction}</td>
                </tr>
              ))}
              {filteredRoutes.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-slate-400 text-sm">
                    No matching streets found for "{searchQuery}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Towing & Impoundment Statute (§ 257-31) ── */}
      <section
        id="towing-statute"
        className="bg-red-50 border border-red-200 p-5 rounded-xl space-y-2 text-red-950"
        data-statute="section-257-31"
      >
        <div className="flex items-center gap-2 font-bold text-base text-red-900">
          <span>🚨</span> Vehicle Removal &amp; Impoundment Authority (§ 257-31)
        </div>
        <p className="text-xs sm:text-sm leading-relaxed">
          {snowRemoval.towingAndImpoundPolicy}
        </p>
        <div className="text-[11px] text-red-900/90 pt-1">
          Vehicle retrieval requires proof of ownership and payment of all municipal towing fees and daily impound storage charges at the Maplewood Police Department (1618 Springfield Ave).
        </div>
      </section>

      {/* ── Plowing Priority Routes (1, 2, 3) ── */}
      <section id="priority-schedules" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          DPW Snow Plowing Priority Standards
        </h2>
        <div className="space-y-3">
          {snowRemoval.priorityPlowingSchedule.map((tier) => (
            <div key={tier.priority} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1" data-priority-tier={tier.priority}>
              <h3 className="font-bold text-slate-900 text-base">{tier.priority}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{tier.threshold}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sidewalk Clearing Law & Snow Dumping Prohibitions ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <section id="sidewalk-clearing" className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2" data-ordinance="section-239-1">
          <h2 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
            <span>❄️</span> Sidewalk Snow Clearing (§ 239-1)
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            {snowRemoval.sidewalkClearingByLaw}
          </p>
        </section>

        <section id="snow-dumping-prohibition" className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2" data-ordinance="section-239-2">
          <h2 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
            <span>⚠️</span> Depositing Snow in Streets Prohibited (§ 239-2)
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            It is illegal for any resident, property owner, contractor, or commercial plower to shovel, blow, push, or plow snow or ice into public roads that have already been cleared by municipal or county plows. Violators are subject to municipal summons and fines.
          </p>
        </section>
      </div>

      {/* Quick Navigation Footer */}
      <footer className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center text-xs text-blue-900 gap-3">
        <NavLink to="/services/public-works" className="font-semibold hover:underline">
          &larr; Department of Public Works (359 Boyden)
        </NavLink>
        <NavLink to="/documents/by-laws" className="font-semibold hover:underline">
          View Chapter 257 &amp; Municipal By-laws &rarr;
        </NavLink>
      </footer>
    </article>
  );
}
