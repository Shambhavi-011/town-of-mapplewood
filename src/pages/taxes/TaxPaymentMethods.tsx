import { NavLink } from 'react-router-dom';
import townData from '../../data/townData.json';

export default function TaxPaymentMethods() {
  const { paymentMethods } = townData.taxes;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Finance &amp; Revenue Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Property Tax Payment Methods
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Convenient ways to pay your interim and final property tax bills, including online banking, pre-authorized plans, drop-box, and in-person payments at Maplewood Town Hall.
        </p>
      </header>

      {/* ── Payment Options Grid ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Accepted Payment Channels
        </h2>

        <div className="space-y-4">
          {paymentMethods.map((method, index) => (
            <div key={method.method} className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs font-bold font-mono">
                  {index + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-base">{method.method}</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed pl-8">
                {method.instructions}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Important Tax Remittance Note ── */}
      <section className="bg-blue-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-xs sm:text-sm text-blue-950 space-y-1">
        <strong>Assessment Roll Number Requirement:</strong> When paying by online banking or cheque, ensure your 19-digit Assessment Roll Number (found on the top-right corner of your tax notice) is clearly indicated to avoid misallocated payments.
      </section>

      <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
        <NavLink to="/taxes/info" className="text-blue-900 font-semibold hover:underline">
          &larr; Back to Tax Assessment Rates
        </NavLink>
        <NavLink to="/taxes/pre-authorized" className="text-blue-900 font-semibold hover:underline">
          Enroll in Pre-Authorized Debit &rarr;
        </NavLink>
      </div>
    </article>
  );
}
