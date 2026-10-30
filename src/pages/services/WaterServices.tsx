import townData from '../../data/townData.json';

export default function WaterServices() {
  const { waterServices } = townData.services;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Water Distribution &amp; Wastewater
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {waterServices.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {waterServices.waterSource}
        </p>
      </header>

      {/* ── Water Conservation By-law (Crucial Scraper Fact) ── */}
      <section className="bg-sky-50 border-l-4 border-sky-600 p-5 rounded-r-xl space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">💧</span>
          <h2 className="text-lg font-bold text-sky-950 font-serif">
            Seasonal Water Conservation By-law
          </h2>
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
          Effective Period: {waterServices.conservationByLaw.effectivePeriod}
        </p>
        <p className="text-sm text-sky-900 leading-relaxed">
          {waterServices.conservationByLaw.rules}
        </p>
      </section>

      {/* ── Emergency Water Main Breaks ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 font-serif">
          Emergency Water Main Breaks &amp; Boil Water Notices
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {waterServices.emergencyWaterMainBreaks}
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
          <strong className="text-slate-900 block">Water Meter Readings</strong>
          <p>
            Residential water meters are read electronically on a bi-monthly billing cycle. For billing questions or final meter readings during property ownership transfer, email waterbilling@maplewood.fictionaltown.com.
          </p>
        </div>
      </section>
    </article>
  );
}
