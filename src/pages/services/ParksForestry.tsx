import townData from '../../data/townData.json';

export default function ParksForestry() {
  const { parksForestry } = townData.services;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Parks, Recreation &amp; Culture
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {parksForestry.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {parksForestry.parksInventory}
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Urban Forestry &amp; Tree Maintenance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-emerald-50/60 rounded-xl border border-emerald-200 space-y-2">
            <h3 className="font-bold text-emerald-950 text-base">Municipal Boulevard Trees</h3>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {parksForestry.treeMaintenance.municipalResponsibility}
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base">Private Property Trees</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              {parksForestry.treeMaintenance.privateTrees}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Reporting Park Hazards &amp; Equipment Damage
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {parksForestry.parkIssueReporting}
        </p>
        <div className="text-xs text-slate-500">
          When reporting a damaged park bench, tree limb, or playground structure, mention the park name and closest landmark or trail marker ID.
        </div>
      </section>
    </article>
  );
}
