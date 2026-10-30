import townData from '../../data/townData.json';
import SEOHead from '../../components/SEOHead';

export default function BurnPermits() {
  const { burnPermits } = townData.permits;

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentService"
      data-kb-topic="burn-permits"
      data-bylaw-reference="By-law 2021-09"
    >
      <SEOHead
        title="Open-Air Burn Permits & Fire Safety (By-law 2021-09)"
        description="Open-air burning rules in Maplewood: Rural zones & County Rd 8 only. Max pile 2m x 2m x 1m. Adult 18+ with water source. Sunrise to sunset. Fee $25."
        category="Fire & Rescue"
      />

      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Maplewood Fire &amp; Rescue Services · By-law 2021-09
          </div>
          <time dateTime="2026-10-30" className="text-xs text-slate-500 font-mono">
            Updated: October 30, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemprop="name">
          {burnPermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemprop="description">
          Regulations, eligibility zones, fire ban rules, and application requirements for open-air agricultural and brush burning in the Town of Maplewood.
        </p>
      </header>

      {/* ── Zoning Eligibility Warning ── */}
      <section
        id="eligibility-zones"
        className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-xl space-y-2"
        data-allowed-zones="A-1, A-2, RU, County Road 8"
        data-prohibited-zones="urban residential subdivisions, commercial zones"
      >
        <h2 className="text-lg font-bold text-amber-950 font-serif">
          Zoning Restrictions: Rural Properties Only
        </h2>
        <p className="text-sm text-amber-900 leading-relaxed">
          {burnPermits.zoningEligibility}
        </p>
      </section>

      {/* ── Mandatory Burn Conditions (Crucial for Sam's SMS scenario) ── */}
      <section id="burn-conditions" className="space-y-4" data-fee="25.00" data-pile-dimension="2mx2mx1m">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Permit Conditions &amp; Fire Safety Rules
        </h2>
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <ul className="text-sm text-slate-700 space-y-2.5 list-disc list-inside">
            {burnPermits.permitConditions.map((condition, idx) => (
              <li key={idx} className="leading-relaxed">{condition}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Fire Ban Policy & Penalties ── */}
      <section id="fire-bans" className="bg-red-50 border border-red-200 p-5 rounded-xl space-y-2 text-red-950" data-fire-ban-revocation="automatic">
        <h2 className="text-lg font-bold text-red-900 font-serif flex items-center gap-2">
          <span>🔥</span> Automatic Revocation During Fire Bans
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed">
          {burnPermits.fireBanRule}
        </p>
      </section>
    </article>
  );
}
