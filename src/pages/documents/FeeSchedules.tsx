import townData from '../../data/townData.json';

export default function FeeSchedules() {
  const { feeSchedules } = townData.documents;

  // Group by category
  const categories = Array.from(new Set(feeSchedules.map((item) => item.category)));

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Financial By-law 2026-02
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          2026 Master Municipal Fee Schedule
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Comprehensive schedule of fees, user charges, licenses, and permits established under the Municipal Act by the Council of the Town of Maplewood.
        </p>
      </header>

      {/* ── Fee Tables by Category ── */}
      <section className="space-y-6">
        {categories.map((cat) => (
          <div key={cat} className="space-y-3">
            <h2 className="text-lg font-bold font-serif text-slate-900 border-b border-slate-200 pb-2">
              {cat}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50 text-slate-700 text-left font-semibold">
                  <tr>
                    <th className="py-2.5 px-4">Service / License / Permit</th>
                    <th className="py-2.5 px-4 text-right">Approved 2026 Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {feeSchedules
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <tr key={item.item} className="hover:bg-slate-50/80">
                        <td className="py-2.5 px-4 font-medium text-slate-800">{item.item}</td>
                        <td className="py-2.5 px-4 text-right font-mono font-bold text-blue-950">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-500">
        All fees are subject to applicable HST unless specifically exempted under federal excise tax legislation.
      </div>
    </article>
  );
}
