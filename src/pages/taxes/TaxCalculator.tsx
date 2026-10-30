import { useState } from 'react';
import townData from '../../data/townData.json';

export default function TaxCalculator() {
  const { propertyTaxes } = townData.taxes;
  const [assessmentValue, setAssessmentValue] = useState<number>(500000);

  const rate = propertyTaxes.residentialTaxRate;
  const annualTotal = assessmentValue * rate;
  const municipalShare = annualTotal * 0.48;
  const regionalShare = annualTotal * 0.34;
  const educationShare = annualTotal * 0.18;
  const quarterlyInstalment = annualTotal / 4;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(val);

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Online Financial Tools
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Property Tax Estimator &amp; Calculator
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Estimate your annual residential property tax based on your property's Municipal Property Assessment Corporation (MPAC) assessed value and the {propertyTaxes.taxYear} mill rate.
        </p>
      </header>

      {/* ── Interactive Estimator Tool ── */}
      <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-6">
        <div>
          <label htmlFor="assessment-input" className="block text-sm font-bold text-slate-900 mb-2">
            Enter MPAC Assessed Property Value (CAD):
          </label>
          <div className="relative max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 font-bold">$</span>
            <input
              id="assessment-input"
              type="number"
              min="50000"
              step="10000"
              value={assessmentValue}
              onChange={(e) => setAssessmentValue(Number(e.target.value) || 0)}
              className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-slate-300 font-mono text-base font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
            />
          </div>
          <p className="text-xs text-slate-500 mt-1.5">
            Default residential rate: <span className="font-mono font-semibold text-slate-700">{rate}</span> (includes municipal, regional, and education taxes).
          </p>
        </div>

        {/* Calculated Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-emerald-900 text-white p-5 rounded-xl shadow-md space-y-1">
            <div className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">
              Estimated Annual Total ({propertyTaxes.taxYear})
            </div>
            <div className="text-3xl sm:text-4xl font-bold font-mono">
              {formatCurrency(annualTotal)}
            </div>
            <div className="text-xs text-emerald-200/80 pt-1">
              Estimated per quarterly instalment: <strong>{formatCurrency(quarterlyInstalment)}</strong>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 text-xs">
            <div className="font-bold text-slate-900 text-sm">Tax Dollar Allocation:</div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Town of Maplewood (48%):</span>
              <span className="font-bold text-slate-900 font-mono">{formatCurrency(municipalShare)}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-600">Regional Services (34%):</span>
              <span className="font-bold text-slate-900 font-mono">{formatCurrency(regionalShare)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-600">Education / School Boards (18%):</span>
              <span className="font-bold text-slate-900 font-mono">{formatCurrency(educationShare)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Semantic Fact Sheet for AI Scraper ── */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900 font-serif">
          How Municipal Taxes Are Computed in Maplewood
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Property taxes are calculated by multiplying the MPAC assessment value by the approved council tax rate. Taxes fund essential services including fire protection, snow plowing, road repairs, library facilities, and public parks.
        </p>
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-900">
          <strong>Need to lookup your exact bill?</strong> Residents can contact the Tax Department at (555) 123-4567 ext. 210 or via email at taxes@maplewood.fictionaltown.com with their 19-digit Roll Number.
        </div>
      </section>
    </article>
  );
}
