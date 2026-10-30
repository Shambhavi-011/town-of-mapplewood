import townData from '../../data/townData.json';

export default function SignagePermits() {
  const { signagePermits } = townData.permits;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          By-law 2021-34 &amp; Planning Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {signagePermits.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Permits and standards for commercial storefront signage, pylon signs, temporary advertising, and sidewalk A-frame boards in the Town of Maplewood.
        </p>
      </header>

      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          Signage By-law Regulations (By-law 2021-34)
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {signagePermits.regulations}
        </p>
        <div className="text-xs text-slate-500 pt-2 border-t border-slate-200">
          Applications must include sign dimensions, structural mounting details, electrical safety certification (ESA), and setback distances from public street curbs.
        </div>
      </section>
    </article>
  );
}
