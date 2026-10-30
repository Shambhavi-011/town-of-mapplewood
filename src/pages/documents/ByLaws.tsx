import townData from '../../data/townData.json';
import SEOHead from '../../components/SEOHead';

export default function ByLaws() {
  const { byLaws } = townData.documents;

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/Legislation"
      data-kb-topic="municipal-bylaws"
    >
      <SEOHead
        title="Municipal By-laws Index & Legislation"
        description="Official directory of Town of Maplewood By-laws: Noise 2024-12, Traffic & Winter Parking 2023-88, Property Standards 2023-45, Pool Enclosures 2022-18, Burn 2021-09."
        category="Legislative Services"
      />

      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Clerk &amp; Legislative Services
          </div>
          <time dateTime="2026-10-30" className="text-xs text-slate-500 font-mono">
            Updated: October 30, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemprop="name">
          Town of Maplewood Municipal By-laws
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemprop="description">
          Official repository of municipal by-laws enacted by Maplewood Town Council. These authoritative records govern noise control, property standards, winter parking, pool safety, open burning, and animal care.
        </p>
      </header>

      {/* ── Official By-laws Directory ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Active Municipal By-laws Index
        </h2>

        <div className="space-y-4">
          {byLaws.map((bylaw) => (
            <div
              key={bylaw.number}
              id={`bylaw-${bylaw.number}`}
              data-bylaw-number={bylaw.number}
              data-effective-date={bylaw.effectiveDate}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-2 scroll-mt-24"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-blue-900 text-white px-2.5 py-1 rounded">
                    By-law {bylaw.number}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base">{bylaw.title}</h3>
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  Effective: {bylaw.effectiveDate}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {bylaw.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Public Access & Certified Copies ── */}
      <section id="enforcement" className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
        <div className="font-bold text-slate-900 text-sm">Official Certified Copies &amp; Enforcement</div>
        <p>
          Certified copies of by-laws are available from the Municipal Clerk's Office at 123 Main Street. By-law enforcement officers patrol municipal zones to ensure community safety and compliance. To file a by-law complaint, call (555) 123-4567 ext. 300.
        </p>
      </section>
    </article>
  );
}
