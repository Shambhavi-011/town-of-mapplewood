import { NavLink } from 'react-router-dom';
import townData from '../../data/townData.json';
import SEOHead from '../../components/SEOHead';

export default function WasteRecycling() {
  const { wasteRecycling } = townData.services;

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentService"
      data-kb-topic="waste-recycling"
    >
      <SEOHead
        title="Waste, Recycling & Organics Collection"
        description="Curbside waste rules for Maplewood: Bins out by 7:00 AM, missed collection reports after 5:00 PM, 2-day SLA resolution, and bulk pickup."
        category="Public Works"
      />

      {/* ── Title & Intro Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Public Works &amp; Environmental Services
          </div>
          <time dateTime="2026-10-30" className="text-xs text-slate-500 font-mono">
            Updated: October 30, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {wasteRecycling.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemProp="description">
          Comprehensive guide to residential waste collection, organic green bins, blue box recycling, bulk item pickup, and missed collection resolution for the Town of Maplewood.
        </p>

        {/* ── 311 Citizen Service Request Action Card ── */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block font-mono">
              311 Citizen Action &middot; Missed Pickup Reporting
            </span>
            <p className="text-xs text-blue-950">
              Was your recycling, organics, or garbage missed? File a verified report after 5:00 PM.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <NavLink
              to="/services/request?type=missedWaste"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              🚛 Report Missed Collection &rarr;
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

      {/* ── Curbside Placement Rules ── */}
      <section
        id="curbside-rules"
        className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-r-xl space-y-2"
        data-rule="curbside-placement"
        data-cutoff-time="07:00"
      >
        <h2 className="text-lg font-bold text-blue-950 flex items-center gap-2">
          <span>⏰</span> Mandatory Curbside Placement Rule (7:00 AM)
        </h2>
        <p className="text-sm text-blue-900 leading-relaxed font-medium">
          {wasteRecycling.curbsidePlacementRule}
        </p>
      </section>

      {/* ── Missed Collection Policy (Crucial for Scraper & Chatbot) ── */}
      <section
        id="missed-collection"
        className="space-y-4"
        data-sla="2-business-days"
        data-reporting-window="after-17:00"
      >
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Missed Collection Reporting &amp; Service Level Agreement (SLA)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2" data-fact="reporting-cutoff">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Reporting Cutoff</div>
            <h3 className="font-bold text-slate-900 text-sm">Wait Until 5:00 PM</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {wasteRecycling.missedCollectionPolicy.cutoffTime}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2" data-fact="late-setout-rule">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-700">Late Setout Notice</div>
            <h3 className="font-bold text-slate-900 text-sm">7:00 AM Deadline</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {wasteRecycling.missedCollectionPolicy.lateSetoutNotice}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2" data-fact="town-sla">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Town SLA Timeline</div>
            <h3 className="font-bold text-slate-900 text-sm">2-Business-Day Resolution</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {wasteRecycling.missedCollectionPolicy.serviceLevelAgreement}
            </p>
          </div>
        </div>
      </section>

      {/* ── Collection Streams & Schedules ── */}
      <section id="collection-schedules" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Curbside Waste Streams &amp; Standards
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1" data-stream="organics-green-bin">
            <div className="flex items-center gap-2">
              <span className="text-lg">🍏</span>
              <h3 className="font-bold text-emerald-950 text-base">Green Bin (Organic Food &amp; Yard Waste)</h3>
            </div>
            <p className="text-sm text-emerald-900 leading-relaxed">
              {wasteRecycling.schedules.organicsGreenBin}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1" data-stream="recycling-blue-box">
            <div className="flex items-center gap-2">
              <span className="text-lg">♻️</span>
              <h3 className="font-bold text-blue-950 text-base">Blue Box (Recycling Program)</h3>
            </div>
            <p className="text-sm text-blue-900 leading-relaxed">
              {wasteRecycling.schedules.recyclingBlueBox}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1" data-stream="garbage-residual">
            <div className="flex items-center gap-2">
              <span className="text-lg">🗑️</span>
              <h3 className="font-bold text-slate-900 text-base">Garbage (Non-Recyclable Residual Waste)</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {wasteRecycling.schedules.garbage}
            </p>
          </div>
        </div>
      </section>

      {/* ── Bulk Items & Household Hazardous Waste ── */}
      <div id="bulk-items" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
        <section className="space-y-2" data-stream="bulk-pickup">
          <h2 className="text-lg font-bold text-slate-900 font-serif">Bulk Item Collection</h2>
          <p className="text-xs font-semibold text-blue-800">
            Schedule: {wasteRecycling.bulkPickup.schedule}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {wasteRecycling.bulkPickup.rules}
          </p>
        </section>

        <section className="space-y-2" data-stream="hazardous-waste">
          <h2 className="text-lg font-bold text-slate-900 font-serif">Household Hazardous Waste (HHW)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {wasteRecycling.hazardousWaste}
          </p>
        </section>
      </div>
    </article>
  );
}
