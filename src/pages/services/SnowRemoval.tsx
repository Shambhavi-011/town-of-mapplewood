import townData from '../../data/townData.json';

export default function SnowRemoval() {
  const { snowRemoval } = townData.services;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Winter Maintenance Operations
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {snowRemoval.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Information on municipal snow plowing priorities, the winter overnight street parking ban, and sidewalk clearing responsibilities in Maplewood.
        </p>
      </header>

      {/* ── Overnight Winter Parking Ban ── */}
      <section className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">🚫</span>
          <h2 className="text-lg font-bold text-amber-950 font-serif">
            Overnight Street Parking Prohibition (By-law 2023-88)
          </h2>
        </div>
        <p className="text-sm text-amber-900 leading-relaxed">
          {snowRemoval.overnightParkingBan}
        </p>
      </section>

      {/* ── Road Plowing Priority Table ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Snow Plowing Priority Routes &amp; Standards
        </h2>
        <div className="space-y-3">
          {snowRemoval.priorityPlowingSchedule.map((tier) => (
            <div key={tier.priority} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-base">{tier.priority}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{tier.threshold}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sidewalk Clearing By-law ── */}
      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Sidewalk Clearing Responsibility (24-Hour Rule)
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {snowRemoval.sidewalkClearingByLaw}
        </p>
      </section>
    </article>
  );
}
