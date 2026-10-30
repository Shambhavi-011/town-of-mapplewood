import townData from '../../data/townData.json';

export default function WasteRecycling() {
  const { wasteRecycling } = townData.services;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      {/* ── Title & Intro Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Public Works &amp; Environmental Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {wasteRecycling.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive guide to residential waste collection, organic green bins, blue box recycling, bulk item pickup, and missed collection resolution for the Town of Maplewood.
        </p>
      </header>

      {/* ── Curbside Placement Rules ── */}
      <section className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-r-xl space-y-2">
        <h2 className="text-lg font-bold text-blue-950 flex items-center gap-2">
          <span>⏰</span> Mandatory Curbside Placement Rule
        </h2>
        <p className="text-sm text-blue-900 leading-relaxed font-medium">
          {wasteRecycling.curbsidePlacementRule}
        </p>
      </section>

      {/* ── Missed Collection Policy (Crucial for Scraper & Chatbot) ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Missed Collection Reporting &amp; Service Level Agreement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700">Reporting Cutoff</div>
            <h3 className="font-bold text-slate-900 text-sm">Wait Until 5:00 PM</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {wasteRecycling.missedCollectionPolicy.cutoffTime}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-rose-700">Late Setout Notice</div>
            <h3 className="font-bold text-slate-900 text-sm">7:00 AM Deadline</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {wasteRecycling.missedCollectionPolicy.lateSetoutNotice}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">Town SLA</div>
            <h3 className="font-bold text-slate-900 text-sm">2-Business-Day Resolution</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {wasteRecycling.missedCollectionPolicy.serviceLevelAgreement}
            </p>
          </div>
        </div>
      </section>

      {/* ── Collection Streams & Schedules ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Curbside Waste Streams &amp; Standards
        </h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg">🍏</span>
              <h3 className="font-bold text-emerald-950 text-base">Green Bin (Organic Food &amp; Yard Waste)</h3>
            </div>
            <p className="text-sm text-emerald-900 leading-relaxed">
              {wasteRecycling.schedules.organicsGreenBin}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg">♻️</span>
              <h3 className="font-bold text-blue-950 text-base">Blue Box (Recycling Program)</h3>
            </div>
            <p className="text-sm text-blue-900 leading-relaxed">
              {wasteRecycling.schedules.recyclingBlueBox}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 font-serif">Bulk Item Collection</h2>
          <p className="text-xs font-semibold text-blue-800">
            Schedule: {wasteRecycling.bulkPickup.schedule}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {wasteRecycling.bulkPickup.rules}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-slate-900 font-serif">Household Hazardous Waste (HHW)</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {wasteRecycling.hazardousWaste}
          </p>
        </section>
      </div>
    </article>
  );
}
