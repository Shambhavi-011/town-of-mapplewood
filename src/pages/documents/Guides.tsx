import townData from '../../data/townData.json';

export default function Guides() {
  const { guides } = townData.documents;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Public Information &amp; Publications
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Resident Guides &amp; Handbooks
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Official printable manuals, illustrated construction guides, waste calendars, and new resident resources published by the Town of Maplewood.
        </p>
      </header>

      {/* ── Guides List ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Official Publications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                    {guide.format} Document
                  </span>
                  <span className="text-slate-500 font-mono">{guide.size}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">{guide.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-blue-900">
                <span>View / Download Document</span>
                <span>📥</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600">
        Alternative accessible formats (braille, large-print, and audio) are available upon request to the Communications &amp; Accessibility Coordinator at accessibility@maplewood.fictionaltown.com.
      </div>
    </article>
  );
}
