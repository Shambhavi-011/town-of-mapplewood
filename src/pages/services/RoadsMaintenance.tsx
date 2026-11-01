import { NavLink } from 'react-router-dom';
import townData from '../../data/townData.json';
import SEOHead from '../../components/SEOHead';

export default function RoadsMaintenance() {
  const { roadsMaintenance } = townData.services;

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentService"
      data-kb-topic="roads-infrastructure"
    >
      <SEOHead
        title="Roads, Potholes & Infrastructure Maintenance"
        description="Guidelines for reporting potholes in Maplewood: Small (<25cm), Medium (25-60cm), Large (>60cm). Duplicate threshold 50m / 30 days. Emergency hydro hotline 1-800-434-1235."
        category="Public Works"
      />

      {/* ── Title & Intro Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Public Works &amp; Infrastructure
          </div>
          <time dateTime="2026-10-30" className="text-xs text-slate-500 font-mono">
            Updated: October 30, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {roadsMaintenance.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemProp="description">
          Reporting guidelines for road damage, potholes, streetlighting outages, and municipal infrastructure repairs across the Town of Maplewood.
        </p>

        {/* ── 311 Citizen Service Request Action Card ── */}
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block font-mono">
              311 Citizen Service Action
            </span>
            <p className="text-xs text-amber-950">
              Need to report an active pothole, pavement depression, or dark streetlight?
            </p>
          </div>
          <div className="flex items-center gap-2">
            <NavLink
              to="/services/request?type=pothole"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              🚧 Report a Pothole &rarr;
            </NavLink>
            <NavLink
              to="/services/track"
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs px-3.5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              🔍 Track Status
            </NavLink>
          </div>
        </div>
      </header>

      {/* ── Critical Urgent Safety Warning Banner ── */}
      <section
        id="urgent-hazards"
        className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl space-y-3"
        data-hazard-level="critical"
      >
        <div className="flex items-center gap-2 text-red-900 font-bold text-base">
          <span>🚨</span> Urgent Safety Hazards: Downed Wires &amp; Obstructed Roads
        </div>
        <p className="text-sm text-red-950 leading-relaxed" data-contact="hydro-downed-wires">
          <strong>Downed Power Lines:</strong> {roadsMaintenance.urgentSafetyProtocols.downedWiresNotice}
        </p>
        <p className="text-sm text-red-950 leading-relaxed border-t border-red-200/60 pt-2" data-contact="fallen-tree-dispatch">
          <strong>Fallen Trees on Roadway:</strong> {roadsMaintenance.urgentSafetyProtocols.fallenTreeOnRoad}
        </p>
      </section>

      {/* ── Pothole Reporting Guidelines ── */}
      <section
        id="pothole-criteria"
        className="space-y-4"
        data-duplicate-prevention="50m-30days"
      >
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Pothole Inspection &amp; Severity Standards
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {roadsMaintenance.potholeReporting.reportingRequirements}
        </p>

        {/* Pothole Size Guide Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 mt-4">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-slate-700 text-left font-semibold">
              <tr>
                <th className="py-3 px-4">Classification</th>
                <th className="py-3 px-4">Dimensions</th>
                <th className="py-3 px-4">Town SLA Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {roadsMaintenance.potholeReporting.sizeGuide.map((item) => (
                <tr key={item.size} className="hover:bg-slate-50/80" data-pothole-size={item.size.toLowerCase()}>
                  <td className="py-3 px-4 font-bold text-slate-900">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-xs ${
                      item.size === 'Large' ? 'bg-red-100 text-red-800' : item.size === 'Medium' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'
                    }`}>
                      {item.size}
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.dimension}</td>
                  <td className="py-3 px-4 font-semibold text-blue-900">{item.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1" data-rule="travel-lane-priority">
            <strong className="text-slate-900 text-sm block">Travel Lane Rule</strong>
            <p>{roadsMaintenance.potholeReporting.travelLaneRule}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1" data-rule="duplicate-consolidation">
            <strong className="text-slate-900 text-sm block">Duplicate Prevention Protocol</strong>
            <p>{roadsMaintenance.potholeReporting.duplicateDetectionThreshold}</p>
          </div>
        </div>
      </section>

      {/* ── Streetlights Outage Reporting ── */}
      <section id="streetlights" className="space-y-3 pt-4 border-t border-slate-200" data-asset-type="streetlight-pole">
        <h2 className="text-xl font-bold text-slate-900 font-serif">
          Streetlight &amp; Pole Maintenance
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {roadsMaintenance.streetlights.reportingProcess}
        </p>
        <div className="bg-blue-50 p-3.5 rounded-lg border border-blue-200 text-xs text-blue-950">
          <strong>Tip for reporting:</strong> Note the 6-digit identification tag stamped on the street pole (e.g., <em>Pole ML-0412</em> outside 18 Oak Ave). For lights with exposed base wires, notify emergency dispatch immediately.
        </div>
      </section>
    </article>
  );
}
