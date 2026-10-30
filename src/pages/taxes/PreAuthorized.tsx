import { NavLink } from 'react-router-dom';
import townData from '../../data/townData.json';

export default function PreAuthorized() {
  const { preAuthorizedPlans } = townData.taxes;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Finance &amp; Revenue Services
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Pre-Authorized Payment (PAP) Plans
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Automate your property tax remittances with Maplewood's interest-free, fee-free Pre-Authorized Debit plans. Choose between a 10-month monthly plan or an instalment due date withdrawal plan.
        </p>
      </header>

      {/* ── Two Plans Breakdown ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Available Enrollment Options
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-800">Option 1</div>
            <h3 className="font-bold text-slate-900 text-lg">10-Month Monthly Plan</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              {preAuthorizedPlans.plan10Month}
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
              Payments calculated by dividing annual taxes across 10 equal instalments (Jan–Oct).
            </div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Option 2</div>
            <h3 className="font-bold text-slate-900 text-lg">Instalment Due Date Plan</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              {preAuthorizedPlans.planInstalment}
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
              Withdrawals occur only on statutory due dates (Feb 27, Apr 30, Jun 30, Sep 30).
            </div>
          </div>
        </div>
      </section>

      {/* ── Enrollment Deadline & Instructions ── */}
      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3">
        <h2 className="text-lg font-bold text-slate-900 font-serif">
          How to Enroll or Modify Your Plan
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          {preAuthorizedPlans.enrollmentDeadline}
        </p>
        <ul className="text-xs text-slate-600 list-disc list-inside space-y-1">
          <li>Attach a blank cheque marked 'VOID' or official bank-issued direct debit authorization form.</li>
          <li>Submit in person at Town Hall (123 Main St) or email a scanned copy to taxes@maplewood.fictionaltown.com.</li>
          <li>Written notice is required at least 30 days prior to cancel or update banking details.</li>
        </ul>
      </section>

      <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
        <NavLink to="/taxes/payment" className="text-blue-900 font-semibold hover:underline">
          &larr; View All Payment Options
        </NavLink>
        <NavLink to="/taxes/calculator" className="text-blue-900 font-semibold hover:underline">
          Estimate Your Taxes &rarr;
        </NavLink>
      </div>
    </article>
  );
}
