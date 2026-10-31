import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import townData from '../../../data/townData.json';

export default function DeckPermitApply() {
  const { deckPermits } = townData.permits;

  // Form State
  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    rollNumber: '',
    deckType: 'attached', // 'attached' | 'freestanding'
    heightCm: 75,
    areaSqFt: 192,
    rearSetbackM: 2.1,
    sideSetbackM: 1.5,
    guardrailHeight: '90cm',
    projectValue: 6500,
    builderType: 'contractor', // 'contractor' | 'diy'
    contractorName: '',
    notes: '',
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');
  const [submittedAt, setSubmittedAt] = useState('');
  const [copiedEndpoint, setCopiedEndpoint] = useState(false);

  // Check if current values require a permit
  const isExempt =
    formData.deckType === 'freestanding' &&
    Number(formData.heightCm) <= 60 &&
    Number(formData.areaSqFt) < 108;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refNumber = `PERM-DECK-2026-${randomCode}`;
    setApplicationRef(refNumber);
    setSubmittedAt(new Date().toLocaleString());
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText('https://maplewood.fictionaltown.com/permits/apply/deck');
    setCopiedEndpoint(true);
    setTimeout(() => setCopiedEndpoint(false), 2000);
  };

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/ApplyAction"
      data-endpoint-url="https://maplewood.fictionaltown.com/permits/apply/deck"
      data-permit-type="Deck Construction Permit"
      data-bylaw-reference="Ontario Building Code &amp; Maplewood Building By-law"
      data-fee="185.00"
    >
      <SEOHead
        title="Apply for a Deck Construction Permit Online"
        description="Official online permit application form for residential deck construction in Maplewood. Submit site plans, framing specs, and track your application ($185 fee, 10 business day review)."
        category="Permit Application"
      />

      {/* ── Scraper & API Direct Endpoint Header ── */}
      <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs space-y-2 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono font-bold uppercase text-slate-300">
              Direct Permit Endpoint (Scraper &amp; Chatbot Ready)
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyEndpoint}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded text-[11px] font-mono transition-colors flex items-center gap-1 border border-slate-700"
          >
            {copiedEndpoint ? '✓ Copied URL!' : '📋 Copy Direct Link'}
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400 font-mono text-[11px]">
          <div>
            URL: <code className="text-amber-300">https://maplewood.fictionaltown.com/permits/apply/deck</code>
          </div>
          <div>• Code: <span className="text-white">PERM-DECK</span></div>
          <div>• Fee: <span className="text-white">$185.00 flat</span></div>
          <div>• SLA: <span className="text-white">10 business days</span></div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Building Department · Online Permit Intake
          </div>
          <NavLink
            to="/permits/decks"
            className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
          >
            ← View Deck Regulations &amp; Setbacks
          </NavLink>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {deckPermits.title} Application Form
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed" itemProp="description">
          Submit this form to obtain municipal authorization under the Ontario Building Code before commencing excavation or framing of any outdoor residential deck, patio platform, or veranda.
        </p>
      </header>

      {/* ── Submission Confirmation View ── */}
      {submitted ? (
        <section
          className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in"
          data-submission-status="success"
          data-reference-number={applicationRef}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              ✓
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Application Submitted Successfully
              </span>
              <h2 className="text-2xl font-bold text-emerald-950 font-serif">
                Permit Request Received
              </h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-emerald-200 space-y-3 text-sm text-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100 font-mono text-xs">
              <div>
                <span className="text-slate-500 block">Application Tracking Number:</span>
                <strong className="text-base text-blue-950">{applicationRef}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Submission Timestamp:</span>
                <strong>{submittedAt}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Property Address:</span>
                <strong>{formData.propertyAddress || '123 Main Street'}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Assigned Department:</span>
                <strong>Chief Building Official (CBO)</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Deck Type</span>
                <strong className="text-slate-900 capitalize">{formData.deckType}</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Plan Review Fee</span>
                <strong className="text-slate-900">$185.00 CAD (Pending invoice)</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Review SLA</span>
                <strong className="text-emerald-700 font-semibold">10 business days</strong>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 space-y-1">
              <strong>Next Steps for Applicant:</strong>
              <p>
                1. A confirmation receipt and official invoice have been sent to <strong>{formData.email || 'applicant email'}</strong>.
              </p>
              <p>
                2. A municipal plans examiner will review your zoning setbacks (min 1.5m rear / 1.2m side) and structural framing specifications within 10 business days.
              </p>
              <p>
                3. Do NOT pour concrete footings until your permit is officially issued and the first footing inspection is scheduled.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              🖨️ Print Application Summary
            </button>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  applicantName: '',
                  email: '',
                  phone: '',
                  propertyAddress: '',
                  rollNumber: '',
                  deckType: 'attached',
                  heightCm: 75,
                  areaSqFt: 192,
                  rearSetbackM: 2.1,
                  sideSetbackM: 1.5,
                  guardrailHeight: '90cm',
                  projectValue: 6500,
                  builderType: 'contractor',
                  contractorName: '',
                  notes: '',
                  agreeToTerms: false,
                });
              }}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Submit Another Application
            </button>
            <NavLink
              to="/permits/decks"
              className="text-xs text-blue-800 hover:text-blue-950 font-semibold ml-auto"
            >
              Return to Deck Rules →
            </NavLink>
          </div>
        </section>
      ) : (
        /* ── The Application Form ── */
        <form onSubmit={handleSubmit} className="space-y-8" id="deck-permit-form">
          {/* Real-time Exemption Indicator Alert */}
          {isExempt ? (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-start gap-3 text-xs text-emerald-950">
              <span className="text-xl">💡</span>
              <div>
                <strong className="block font-bold text-sm text-emerald-900">
                  Friendly Advisory: Your Project Might Be Exempt from a Building Permit
                </strong>
                <p className="mt-0.5 leading-relaxed text-emerald-800">
                  Because your planned deck is <strong>freestanding (unattached)</strong>, with a height of{' '}
                  <strong>≤60 cm (24 in)</strong> and total area under <strong>10 m² (108 sq ft)</strong>, it satisfies Maplewood's exemption criteria. You may not need a permit, though you must still respect zoning setbacks (1.5m rear / 1.2m side). You may still submit this form if you wish to obtain an official zoning clearance certificate.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3 text-xs text-blue-950">
              <span className="text-xl">ℹ️</span>
              <div>
                <strong className="block font-bold text-sm text-blue-900">
                  Standard Permit Intake ($185.00 Flat Review Fee)
                </strong>
                <p className="mt-0.5 leading-relaxed text-blue-800">
                  Decks attached to a dwelling or higher than 60 cm above grade require an approved building permit and two mandatory municipal inspections (footings prior to concrete pour, and final railing/structural completion).
                </p>
              </div>
            </div>
          )}

          {/* 1. Applicant & Property Information */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              1. Applicant &amp; Property Information
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="applicantName" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name of Property Owner / Applicant *
                </label>
                <input
                  type="text"
                  id="applicantName"
                  required
                  placeholder="e.g., Sarah Jenkins"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (for status updates &amp; permit delivery) *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Contact Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-xs font-semibold text-slate-700 mb-1">
                  Maplewood Property Address (Construction Site) *
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  required
                  placeholder="e.g., 45 Elm Street, Maplewood, ON"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="rollNumber" className="block text-xs font-semibold text-slate-700 mb-1">
                  Municipal Tax Assessment Roll Number (Optional, 19 digits)
                </label>
                <input
                  type="text"
                  id="rollNumber"
                  placeholder="e.g., 1904-000-012-34500-0000"
                  value={formData.rollNumber}
                  onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-mono"
                />
                <span className="text-[11px] text-slate-500">Found on the upper-left corner of your property tax bill.</span>
              </div>
            </div>
          </fieldset>

          {/* 2. Deck Structural Specifications */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              2. Deck Structural &amp; Dimensional Specifications
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="deckType" className="block text-xs font-semibold text-slate-700 mb-1">
                  Structural Connection Type *
                </label>
                <select
                  id="deckType"
                  value={formData.deckType}
                  onChange={(e) => setFormData({ ...formData, deckType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="attached">Physically Attached to Dwelling (Requires Ledger Board &amp; Permit)</option>
                  <option value="freestanding">Freestanding (Supported solely by piers/footings)</option>
                </select>
              </div>

              <div>
                <label htmlFor="heightCm" className="block text-xs font-semibold text-slate-700 mb-1">
                  Maximum Height Above Finished Grade (cm) *
                </label>
                <input
                  type="number"
                  id="heightCm"
                  required
                  min="10"
                  max="400"
                  value={formData.heightCm}
                  onChange={(e) => setFormData({ ...formData, heightCm: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
                <span className="text-[11px] text-slate-500">
                  {formData.heightCm} cm = {(formData.heightCm / 2.54).toFixed(1)} inches (Exempt limit is 60 cm / 24 in).
                </span>
              </div>

              <div>
                <label htmlFor="areaSqFt" className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Walking Surface Area (sq ft) *
                </label>
                <input
                  type="number"
                  id="areaSqFt"
                  required
                  min="20"
                  max="2000"
                  value={formData.areaSqFt}
                  onChange={(e) => setFormData({ ...formData, areaSqFt: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
                <span className="text-[11px] text-slate-500">
                  {formData.areaSqFt} sq ft = {(formData.areaSqFt * 0.092903).toFixed(1)} m² (e.g., 12 ft x 16 ft = 192 sq ft).
                </span>
              </div>

              <div>
                <label htmlFor="guardrailHeight" className="block text-xs font-semibold text-slate-700 mb-1">
                  Proposed Guardrail Height *
                </label>
                <select
                  id="guardrailHeight"
                  value={formData.guardrailHeight}
                  onChange={(e) => setFormData({ ...formData, guardrailHeight: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="90cm">90 cm (36 inches) - For deck walking height 60 cm to 180 cm</option>
                  <option value="107cm">107 cm (42 inches) - Mandatory for deck walking height &gt;180 cm (6 ft)</option>
                  <option value="none">No guardrail (Allowed only if deck walking surface is &lt;60 cm high)</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* 3. Zoning Setback Verification */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              3. Zoning Boundary Setbacks (Maplewood Zoning By-law)
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="rearSetbackM" className="block text-xs font-semibold text-slate-700 mb-1">
                  Rear-Yard Setback (meters from deck edge to rear property line) *
                </label>
                <input
                  type="number"
                  id="rearSetbackM"
                  required
                  step="0.1"
                  min="0.5"
                  max="50"
                  value={formData.rearSetbackM}
                  onChange={(e) => setFormData({ ...formData, rearSetbackM: Number(e.target.value) })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white ${
                    formData.rearSetbackM < 1.5 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                <span className={`text-[11px] block mt-1 ${formData.rearSetbackM < 1.5 ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
                  Minimum required rear setback is 1.5 meters (4.9 feet).
                  {formData.rearSetbackM < 1.5 && ' ⚠️ Below municipal minimum! Minor variance required.'}
                </span>
              </div>

              <div>
                <label htmlFor="sideSetbackM" className="block text-xs font-semibold text-slate-700 mb-1">
                  Interior Side-Yard Setback (meters to nearest side property line) *
                </label>
                <input
                  type="number"
                  id="sideSetbackM"
                  required
                  step="0.1"
                  min="0.5"
                  max="50"
                  value={formData.sideSetbackM}
                  onChange={(e) => setFormData({ ...formData, sideSetbackM: Number(e.target.value) })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white ${
                    formData.sideSetbackM < 1.2 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                <span className={`text-[11px] block mt-1 ${formData.sideSetbackM < 1.2 ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
                  Minimum required interior side setback is 1.2 meters (3.9 feet).
                  {formData.sideSetbackM < 1.2 && ' ⚠️ Below municipal minimum!'}
                </span>
              </div>
            </div>
          </fieldset>

          {/* 4. Construction Execution & Attachments */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              4. Builder Details &amp; Plan Attachments
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="builderType" className="block text-xs font-semibold text-slate-700 mb-1">
                  Who Will Construct the Deck? *
                </label>
                <select
                  id="builderType"
                  value={formData.builderType}
                  onChange={(e) => setFormData({ ...formData, builderType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="contractor">Licensed Building Contractor</option>
                  <option value="diy">Self-Built by Homeowner</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectValue" className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Total Construction Value ($ CAD) *
                </label>
                <input
                  type="number"
                  id="projectValue"
                  required
                  min="500"
                  step="100"
                  value={formData.projectValue}
                  onChange={(e) => setFormData({ ...formData, projectValue: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              {formData.builderType === 'contractor' && (
                <div className="sm:col-span-2">
                  <label htmlFor="contractorName" className="block text-xs font-semibold text-slate-700 mb-1">
                    Contractor Business Name &amp; Contact
                  </label>
                  <input
                    type="text"
                    id="contractorName"
                    placeholder="e.g., Maplewood Custom Carpentry Ltd., (555) 789-0123"
                    value={formData.contractorName}
                    onChange={(e) => setFormData({ ...formData, contractorName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                  />
                </div>
              )}

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Upload Site Plan &amp; Structural Drawings (Mock PDF/Image Intake)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-white hover:border-blue-400 transition-colors cursor-pointer">
                  <span className="text-2xl block mb-1">📎</span>
                  <span className="text-xs font-semibold text-slate-700 block">
                    Click to select or drag &amp; drop drawings (PDF, PNG, JPG, DWG)
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Include property boundary site plan and beam/joist spans. Max file size: 25 MB.
                  </span>
                </div>
              </div>
            </div>
          </fieldset>

          {/* 5. Statutory Declaration & Submission */}
          <div className="space-y-4 pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <span className="text-xs text-slate-600 leading-relaxed">
                I hereby certify that all information provided in this application is accurate and conforms to the Ontario Building Code and Town of Maplewood zoning standards. I agree to pay the standard <strong>$185.00 flat permit fee</strong> upon plan approval and schedule the required municipal inspections prior to enclosing footings or occupying the deck.
              </span>
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200">
              <div className="text-xs text-slate-500">
                Fee Payable Upon Approval: <strong className="text-slate-900 text-sm">$185.00 CAD</strong>
              </div>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all hover:shadow-lg flex items-center gap-2"
              >
                <span>🚀</span> Submit Deck Permit Application
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ── Scraper Technical Metadata Footer ── */}
      <footer className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2 font-mono">
        <div>Endpoint schema: Schema.org/ApplyAction · POST /api/v1/permits/deck</div>
        <NavLink to="/documents/fees" className="text-blue-700 hover:underline">
          Town of Maplewood Master Fee Schedule (§ By-law 2026-02)
        </NavLink>
      </footer>
    </article>
  );
}
