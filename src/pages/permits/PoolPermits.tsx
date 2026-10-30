import townData from '../../data/townData.json';

export default function PoolPermits() {
  const { poolPermits } = townData.permits;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          By-law 2022-18 &amp; Public Safety
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {poolPermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Requirements for private residential swimming pools, hot tubs, safety fencing enclosures, and self-closing gate inspections in the Town of Maplewood.
        </p>
      </header>

      {/* ── Mandatory Permit Rule ── */}
      <section className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-r-xl space-y-2">
        <h2 className="text-lg font-bold text-blue-950 font-serif">
          Mandatory Permit Before Excavation or Water Filling
        </h2>
        <p className="text-sm text-blue-900 leading-relaxed">
          {poolPermits.mandatoryPermitRule}
        </p>
      </section>

      {/* ── Fence Enclosure Specifications ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Enclosure By-law Specifications (By-law 2022-18)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-900 uppercase">Minimum Fence Height</div>
            <div className="text-xl font-bold text-slate-900">1.5 Meters (5.0 Feet)</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.minimumHeight}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-900 uppercase">Self-Closing Gate</div>
            <div className="text-xl font-bold text-slate-900">Latch @ 1.35m Height</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.gateRequirements}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-900 uppercase">Anti-Climb Design</div>
            <div className="text-xl font-bold text-slate-900">Max 38mm Mesh</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.climbingPrevention}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <div className="text-xs font-bold text-blue-900 uppercase">Locking Hot Tub Safety Cover</div>
            <div className="text-xl font-bold text-slate-900">ASTM F1346 Certified</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.hotTubExemption}</p>
          </div>
        </div>
      </section>

      {/* ── Fee & Application Process ── */}
      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Permit Fee &amp; Safety Inspection Stages
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {poolPermits.permitFee}
        </p>
        <p className="text-xs text-slate-500">
          Applicants must submit a dimensioned site plan showing property boundaries, house location, pool dimensions, proposed fence enclosure location, and gate swing direction.
        </p>
      </section>
    </article>
  );
}
