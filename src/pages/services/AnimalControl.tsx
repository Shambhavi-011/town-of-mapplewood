import townData from '../../data/townData.json';

export default function AnimalControl() {
  const { animalControl } = townData.services;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          By-law &amp; Animal Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {animalControl.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          {animalControl.licensingRequirements}
        </p>
      </header>

      {/* ── Annual Dog Licensing Fees ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Annual Pet Licensing &amp; Tag Fees
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 text-center space-y-1">
            <div className="text-xs font-bold text-teal-700 uppercase">Spayed / Neutered</div>
            <div className="text-2xl font-bold text-teal-950 font-mono">{animalControl.fees.spayedNeuteredDog}</div>
            <p className="text-[11px] text-teal-800">Annual license (proof of sterilization required)</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold text-slate-600 uppercase">Intact Dog</div>
            <div className="text-2xl font-bold text-slate-900 font-mono">{animalControl.fees.intactDog}</div>
            <p className="text-[11px] text-slate-500">Annual license for non-altered dogs</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
            <div className="text-xs font-bold text-slate-600 uppercase">Replacement Tag</div>
            <div className="text-2xl font-bold text-slate-900 font-mono">{animalControl.fees.replacementTag}</div>
            <p className="text-[11px] text-slate-500">For lost or damaged municipal tags</p>
          </div>
        </div>
      </section>

      {/* ── Leash By-law (By-law 2020-04) ── */}
      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">🐕</span>
          <h2 className="text-lg font-bold text-slate-900 font-serif">
            Leash By-law Regulations (By-law 2020-04)
          </h2>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          {animalControl.leashByLaw}
        </p>
      </section>

      {/* ── Lost, Found & Stray Animals ── */}
      <section className="space-y-2 pt-2 border-t border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Lost &amp; Found Pets, Wildlife Reporting
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          {animalControl.lostFoundPets}
        </p>
      </section>
    </article>
  );
}
