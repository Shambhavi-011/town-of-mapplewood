import townData from '../../data/townData.json';

export default function BurnPermits() {
  const { burnPermits } = townData.permits;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Maplewood Fire &amp; Rescue Services · By-law 2021-09
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {burnPermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Regulations, eligibility zones, fire ban rules, and application requirements for open-air agricultural and brush burning in the Town of Maplewood.
        </p>
      </header>

      {/* ── Zoning Eligibility Warning ── */}
      <section className="bg-amber-50 border-l-4 border-amber-600 p-5 rounded-r-xl space-y-2">
        <h2 className="text-lg font-bold text-amber-950 font-serif">
          Zoning Restrictions: Rural Properties Only
        </h2>
        <p className="text-sm text-amber-900 leading-relaxed">
          {burnPermits.zoningEligibility}
        </p>
      </section>

      {/* ── Mandatory Burn Conditions (Crucial for Sam's SMS scenario) ── */}
      <section className="space-y-4">
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
      <section className="bg-red-50 border border-red-200 p-5 rounded-xl space-y-2 text-red-950">
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
