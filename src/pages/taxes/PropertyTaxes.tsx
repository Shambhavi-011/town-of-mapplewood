import { NavLink } from 'react-router-dom';
import townData from '../../data/townData.json';

export default function PropertyTaxes() {
  const { propertyTaxes } = townData.taxes;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Finance &amp; Revenue Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          {propertyTaxes.title}
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Overview of the Town of Maplewood {propertyTaxes.taxYear} residential mill rate, tax breakdown, instalment deadlines, and assessment information.
        </p>
      </header>

      {/* ── Rate & Breakdown Banner ── */}
      <section className="bg-emerald-50 border-l-4 border-emerald-600 p-5 rounded-r-xl space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-bold text-emerald-950 font-serif">
            {propertyTaxes.taxYear} Residential Tax Rate (Mill Rate)
          </h2>
          <span className="text-2xl font-bold font-mono text-emerald-950 bg-white px-3 py-1 rounded border border-emerald-200 shadow-sm">
            {propertyTaxes.residentialTaxRate}
          </span>
        </div>
        <p className="text-xs text-emerald-900">
          For every $100,000 of assessed residential property value, annual taxes are approximately $945.23.
        </p>

        <div className="pt-2 border-t border-emerald-200 text-xs space-y-1 text-emerald-950">
          <div className="font-bold">Where your tax dollars go:</div>
          <div>• <strong>Municipal Services:</strong> {propertyTaxes.distributionBreakdown.municipalPortion}</div>
          <div>• <strong>Regional Services:</strong> {propertyTaxes.distributionBreakdown.regionalPortion}</div>
          <div>• <strong>Education:</strong> {propertyTaxes.distributionBreakdown.educationPortion}</div>
        </div>
      </section>

      {/* ── Instalment Due Dates ── */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 font-serif">
            {propertyTaxes.taxYear} Statutory Instalment Due Dates
          </h2>
          <NavLink to="/taxes/payment" className="text-xs font-semibold text-blue-800 hover:underline">
            Ways to Pay &rarr;
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {propertyTaxes.instalmentDueDates.map((item) => (
            <div key={item.bill} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-center">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase">{item.bill.includes('Interim') ? 'Interim Tax' : 'Final Tax'}</div>
                <div className="text-sm font-bold text-slate-900">{item.bill}</div>
              </div>
              <span className="text-sm font-bold font-mono text-blue-950 bg-blue-50 px-3 py-1.5 rounded border border-blue-200">
                {item.dueDate}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Penalties & Quick Navigation ── */}
      <section className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-800 text-sm">Late Payment Penalties &amp; Interest</div>
        <p>{propertyTaxes.latePaymentPenalty}</p>
        <div className="pt-2 flex flex-wrap gap-4">
          <NavLink to="/taxes/calculator" className="text-blue-900 font-semibold hover:underline">
            Use Online Tax Estimator &rarr;
          </NavLink>
          <NavLink to="/taxes/pre-authorized" className="text-blue-900 font-semibold hover:underline">
            Pre-Authorized Payment Program &rarr;
          </NavLink>
        </div>
      </section>
    </article>
  );
}
