import townData from '../../data/townData.json';

export default function DeckPermits() {
  const { deckPermits } = townData.permits;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Building Department &amp; Ontario Building Code
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {deckPermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive guide to determining when a municipal building permit is required for residential outdoor decks, zoning setbacks, structural drawings, and inspections.
        </p>
      </header>

      {/* ── Key Rule: Exempt vs Required (Crucial Scraper Grounding) ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Do I Need a Permit for My Deck?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Exempt */}
          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-700 font-bold text-lg">✅</span>
              <h3 className="font-bold text-emerald-950 text-base">Permit NOT Required (Exempt)</h3>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {deckPermits.permitRequirementRules.exemptDecks}
            </p>
          </div>

          {/* Mandatory */}
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-700 font-bold text-lg">⚠️</span>
              <h3 className="font-bold text-amber-950 text-base">Building Permit MANDATORY</h3>
            </div>
            <p className="text-xs text-amber-900 leading-relaxed">
              {deckPermits.permitRequirementRules.mandatoryPermitDecks}
            </p>
          </div>
        </div>
      </section>

      {/* ── Zoning Setbacks & Guardrails ── */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 font-serif">
          Zoning Setbacks &amp; Guardrail Safety Standards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong className="text-slate-900 text-sm block">Property Boundary Setbacks</strong>
            <p>{deckPermits.zoningSetbacks}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
            <strong className="text-slate-900 text-sm block">Guardrail Height &amp; Spindles</strong>
            <p>{deckPermits.guardrailRequirements}</p>
          </div>
        </div>
      </section>

      {/* ── Application Requirements & Fees ── */}
      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Permit Application Checklist &amp; Required Documents
        </h2>
        <ul className="text-xs text-slate-700 space-y-2 list-disc list-inside">
          {deckPermits.applicationRequirements.map((req, idx) => (
            <li key={idx} className="leading-relaxed">{req}</li>
          ))}
        </ul>
        <div className="pt-2 text-xs text-slate-500 border-t border-slate-200">
          Typical review time is 10 business days for complete submissions. Submit applications online via the Citizen Portal or in person at Town Hall (123 Main St).
        </div>
      </section>
    </article>
  );
}
