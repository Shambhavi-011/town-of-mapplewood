import townData from '../../data/townData.json';

export default function BuildingPermits() {
  const { buildingPermits } = townData.permits;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Building &amp; Planning Department
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {buildingPermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Permit application guidelines, plan reviews, inspection scheduling, and compliance with the Ontario Building Code for residential and commercial construction.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          When Is a Building Permit Required?
        </h2>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-700 leading-relaxed space-y-2">
          <p>{buildingPermits.scope}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
          <h3 className="font-bold text-blue-950 text-base">Statutory Review Timelines</h3>
          <p className="text-xs text-blue-900 leading-relaxed">
            {buildingPermits.reviewTimelines}
          </p>
        </div>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <h3 className="font-bold text-slate-900 text-base">Mandatory Inspection Milestones</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Inspections must be requested at least 48 hours in advance: Footings before concrete pour, foundation backfill, framing, rough-in plumbing, insulation/vapour barrier, and final occupancy inspection.
          </p>
        </div>
      </section>
    </article>
  );
}
