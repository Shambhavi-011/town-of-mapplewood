import { NavLink } from 'react-router-dom';
import townData from '../../data/townData.json';
import SEOHead from '../../components/SEOHead';

export default function PoolPermits() {
  const { poolPermits } = townData.permits;

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentService"
      data-kb-topic="pool-permits"
      data-bylaw-reference="By-law 2022-18"
    >
      <SEOHead
        title="Swimming Pool Enclosure Permits (By-law 2022-18)"
        description="Pool enclosure rules in Maplewood under By-law 2022-18: Minimum 1.5m (5.0ft) fence, self-closing & self-latching gate at 1.35m latch height, $150 permit fee."
        category="Public Safety & By-laws"
      />

      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            By-law 2022-18 &amp; Public Safety
          </div>
          <time dateTime="2026-10-30" className="text-xs text-slate-500 font-mono">
            Updated: October 30, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {poolPermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemProp="description">
          Requirements for private residential swimming pools, hot tubs, safety fencing enclosures, and self-closing gate inspections in the Town of Maplewood.
        </p>

        {/* ── Direct Permit Form CTA Banner ── */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
              Online Enclosure Permit Portal
            </span>
            <p className="text-xs text-blue-800">
              Applying to install an in-ground, above-ground, or seasonal pool?
            </p>
          </div>
          <NavLink
            to="/permits/apply/pool"
            className="inline-flex items-center gap-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <span>🏊</span> Apply for Pool Permit Online →
          </NavLink>
        </div>
      </header>

      {/* ── Mandatory Permit Rule ── */}
      <section
        id="pool-by-law"
        className="bg-blue-50 border-l-4 border-blue-700 p-5 rounded-r-xl space-y-2"
        data-trigger-depth="60cm"
      >
        <h2 className="text-lg font-bold text-blue-950 font-serif">
          Mandatory Permit Before Excavation or Water Filling (&gt;60 cm Depth)
        </h2>
        <p className="text-sm text-blue-900 leading-relaxed">
          {poolPermits.mandatoryPermitRule}
        </p>
      </section>

      {/* ── Fence Enclosure Specifications ── */}
      <section id="enclosure-specs" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Enclosure By-law Specifications (By-law 2022-18)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1" data-spec="minimum-height">
            <div className="text-xs font-bold text-blue-900 uppercase">Minimum Fence Height</div>
            <div className="text-xl font-bold text-slate-900">1.5 Meters (5.0 Feet)</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.minimumHeight}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1" data-spec="self-latching-gate">
            <div className="text-xs font-bold text-blue-900 uppercase">Self-Closing Gate</div>
            <div className="text-xl font-bold text-slate-900">Latch @ 1.35m Height</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.gateRequirements}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1" data-spec="mesh-dimension">
            <div className="text-xs font-bold text-blue-900 uppercase">Anti-Climb Design</div>
            <div className="text-xl font-bold text-slate-900">Max 38mm Mesh</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.climbingPrevention}</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1" data-spec="hot-tub-exemption">
            <div className="text-xs font-bold text-blue-900 uppercase">Locking Hot Tub Safety Cover</div>
            <div className="text-xl font-bold text-slate-900">ASTM F1346 Certified</div>
            <p className="text-xs text-slate-600">{poolPermits.fenceEnclosureSpecifications.hotTubExemption}</p>
          </div>
        </div>
      </section>

      {/* ── Fee & Application Process ── */}
      <section id="inspections" className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2" data-fee="150.00">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Permit Fee &amp; Safety Inspection Stages ($150.00)
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {poolPermits.permitFee}
        </p>
        <p className="text-xs text-slate-500">
          Applicants must submit a dimensioned site plan showing property boundaries, house location, pool dimensions, proposed fence enclosure location, and gate swing direction.
        </p>
        <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-600">Enclosure review SLA is 5 business days prior to excavation.</span>
          <NavLink
            to="/permits/apply/pool"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors"
          >
            Launch Online Pool Permit Form →
          </NavLink>
        </div>
      </section>
    </article>
  );
}
