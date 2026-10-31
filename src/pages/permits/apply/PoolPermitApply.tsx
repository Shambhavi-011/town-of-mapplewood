import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import townData from '../../../data/townData.json';

export default function PoolPermitApply() {
  const { poolPermits } = townData.permits;

  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    poolType: 'inground', // 'inground' | 'aboveground' | 'hottub' | 'temporary'
    maxDepthCm: 150,
    dimensions: '16 ft x 32 ft',
    fenceHeightM: 1.5,
    fenceType: 'chainlink', // 'chainlink' | 'wood' | 'ornamental' | 'composite'
    gateSelfClosing: true,
    gateLatchHeightM: 1.35,
    gateSwingsOutward: true,
    hasAstmCover: false,
    contractorName: '',
    digLocateNumber: '',
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');
  const [submittedAt, setSubmittedAt] = useState('');
  const [copiedEndpoint, setCopiedEndpoint] = useState(false);

  const isHotTubExempt =
    formData.poolType === 'hottub' && formData.hasAstmCover;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refNumber = `PERM-POOL-2026-${randomCode}`;
    setApplicationRef(refNumber);
    setSubmittedAt(new Date().toLocaleString());
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText('https://maplewood.fictionaltown.com/permits/apply/pool');
    setCopiedEndpoint(true);
    setTimeout(() => setCopiedEndpoint(false), 2000);
  };

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/ApplyAction"
      data-endpoint-url="https://maplewood.fictionaltown.com/permits/apply/pool"
      data-permit-type="Swimming Pool Enclosure Permit"
      data-bylaw-reference="Town of Maplewood By-law 2022-18"
      data-fee="150.00"
    >
      <SEOHead
        title="Apply for a Swimming Pool Enclosure Permit Online (By-law 2022-18)"
        description="Official online permit application for swimming pool enclosures and safety fences in Maplewood. Covers in-ground, above-ground, and hot tubs ($150 flat fee, By-law 2022-18)."
        category="Permit Application"
      />

      {/* ── Scraper & API Direct Endpoint Header ── */}
      <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs space-y-2 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
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
            URL: <code className="text-sky-300">https://maplewood.fictionaltown.com/permits/apply/pool</code>
          </div>
          <div>• Code: <span className="text-white">PERM-POOL</span></div>
          <div>• Fee: <span className="text-white">$150.00 flat</span></div>
          <div>• By-law: <span className="text-white">By-law 2022-18</span></div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Public Safety &amp; By-law Enforcement · By-law 2022-18
          </div>
          <NavLink
            to="/permits/pools"
            className="text-xs text-blue-700 hover:text-blue-900 font-semibold flex items-center gap-1"
          >
            ← View Pool Enclosure By-law Specifications
          </NavLink>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {poolPermits.title} Application Form
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed" itemProp="description">
          Under Municipal By-law 2022-18, no person shall commence excavation, construction, or introduce water into any private swimming pool, temporary pool, or hot tub capable of holding water deeper than 60 cm (24 in) without an approved Pool Enclosure Permit.
        </p>
      </header>

      {/* ── Submission Confirmation View ── */}
      {submitted ? (
        <section
          className="bg-blue-50 border-2 border-blue-500 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in"
          data-submission-status="success"
          data-reference-number={applicationRef}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              ✓
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Application Received · By-law 2022-18
              </span>
              <h2 className="text-2xl font-bold text-blue-950 font-serif">
                Pool Enclosure Permit Logged
              </h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-blue-200 space-y-3 text-sm text-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-100 font-mono text-xs">
              <div>
                <span className="text-slate-500 block">Tracking Reference Number:</span>
                <strong className="text-base text-blue-950">{applicationRef}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Filing Timestamp:</span>
                <strong>{submittedAt}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Site Address:</span>
                <strong>{formData.propertyAddress || '123 Main Street'}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Permit Classification:</span>
                <strong className="capitalize">{formData.poolType} Pool Enclosure</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Enclosure Fee</span>
                <strong className="text-slate-900">$150.00 CAD (Flat fee)</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Safety Fence Height</span>
                <strong className="text-slate-900">{formData.fenceHeightM} meters (min 1.5m)</strong>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Review SLA</span>
                <strong className="text-blue-700 font-semibold">5 business days</strong>
              </div>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-950 space-y-1.5">
              <strong>Mandatory Safety Inspection Protocol:</strong>
              <p>
                1. <strong>Pre-Excavation Inspection:</strong> A municipal building inspector must verify site setbacks and utility locates before digging commences.
              </p>
              <p>
                2. <strong>Enclosure Final Inspection:</strong> The fence (min 1.5m) and self-closing, self-latching gate (latch at ≥1.35m swinging outward) must be 100% complete and inspected BEFORE filling the pool with water.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              🖨️ Print Application Receipt
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
                  poolType: 'inground',
                  maxDepthCm: 150,
                  dimensions: '16 ft x 32 ft',
                  fenceHeightM: 1.5,
                  fenceType: 'chainlink',
                  gateSelfClosing: true,
                  gateLatchHeightM: 1.35,
                  gateSwingsOutward: true,
                  hasAstmCover: false,
                  contractorName: '',
                  digLocateNumber: '',
                  agreeToTerms: false,
                });
              }}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Submit Another Application
            </button>
            <NavLink
              to="/permits/pools"
              className="text-xs text-blue-800 hover:text-blue-950 font-semibold ml-auto"
            >
              Return to Pool By-law →
            </NavLink>
          </div>
        </section>
      ) : (
        /* ── The Application Form ── */
        <form onSubmit={handleSubmit} className="space-y-8" id="pool-permit-form">
          {/* Statutory By-law Callout */}
          <div className="p-4 bg-sky-50 border border-sky-300 rounded-xl flex items-start gap-3 text-xs text-sky-950">
            <span className="text-xl">🏊</span>
            <div>
              <strong className="block font-bold text-sm text-sky-900">
                Municipal By-law 2022-18 Enclosure Mandate
              </strong>
              <p className="mt-0.5 leading-relaxed text-sky-800">
                All outdoor swimming pools with water capacity exceeding <strong>60 cm (24 in)</strong> must be fully enclosed by a continuous fence at least <strong>1.5 meters (5.0 ft)</strong> in height with a self-closing and self-latching gate at minimum <strong>1.35 meters</strong> latch height. Flat application fee: <strong>$150.00</strong>.
              </p>
            </div>
          </div>

          {/* 1. Applicant & Installation Address */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              1. Property Owner &amp; Installation Location
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="applicantName" className="block text-xs font-semibold text-slate-700 mb-1">
                  Property Owner Full Name *
                </label>
                <input
                  type="text"
                  id="applicantName"
                  required
                  placeholder="e.g., Robert Vance"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="robert@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  Telephone Contact *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="(555) 345-6789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-xs font-semibold text-slate-700 mb-1">
                  Installation Address (Maplewood) *
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  required
                  placeholder="e.g., 88 Valley Road, Maplewood, ON"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>
            </div>
          </fieldset>

          {/* 2. Pool Structure Details */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              2. Pool Type &amp; Water Capacity
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="poolType" className="block text-xs font-semibold text-slate-700 mb-1">
                  Pool Classification *
                </label>
                <select
                  id="poolType"
                  value={formData.poolType}
                  onChange={(e) => setFormData({ ...formData, poolType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                >
                  <option value="inground">In-Ground Permanent Swimming Pool</option>
                  <option value="aboveground">Above-Ground Rigid Pool</option>
                  <option value="temporary">Temporary / Seasonal Storable Pool (&gt;60cm depth)</option>
                  <option value="hottub">Hot Tub / Whirlpool Spa</option>
                </select>
              </div>

              <div>
                <label htmlFor="maxDepthCm" className="block text-xs font-semibold text-slate-700 mb-1">
                  Maximum Operable Water Depth (cm) *
                </label>
                <input
                  type="number"
                  id="maxDepthCm"
                  required
                  min="30"
                  max="350"
                  value={formData.maxDepthCm}
                  onChange={(e) => setFormData({ ...formData, maxDepthCm: Number(e.target.value) })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
                <span className="text-[11px] text-slate-500">
                  {formData.maxDepthCm} cm = {(formData.maxDepthCm / 2.54).toFixed(1)} inches (Permit trigger threshold: 60 cm / 24 in).
                </span>
              </div>

              <div>
                <label htmlFor="dimensions" className="block text-xs font-semibold text-slate-700 mb-1">
                  Pool Surface Dimensions (Length x Width) *
                </label>
                <input
                  type="text"
                  id="dimensions"
                  required
                  placeholder="e.g., 18 ft x 36 ft or 24 ft round"
                  value={formData.dimensions}
                  onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              {formData.poolType === 'hottub' && (
                <div className="flex items-center gap-2 pt-5">
                  <input
                    type="checkbox"
                    id="hasAstmCover"
                    checked={formData.hasAstmCover}
                    onChange={(e) => setFormData({ ...formData, hasAstmCover: e.target.checked })}
                    className="h-4 w-4 text-blue-600 rounded border-slate-300"
                  />
                  <label htmlFor="hasAstmCover" className="text-xs text-slate-700 font-semibold cursor-pointer">
                    Equipped with rigid locking safety cover (ASTM F1346 certified)
                  </label>
                </div>
              )}
            </div>

            {isHotTubExempt && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                ✅ <strong>Hot Tub Safety Exemption:</strong> Certified locking rigid safety covers (ASTM F1346) exempt hot tubs from the exterior fence enclosure requirement, provided the cover is kept locked at all times when not in use.
              </div>
            )}
          </fieldset>

          {/* 3. Safety Enclosure & Gate By-law Specs */}
          {!isHotTubExempt && (
            <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
              <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
                3. Safety Enclosure &amp; Gate Specifications (By-law 2022-18)
              </legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fenceHeightM" className="block text-xs font-semibold text-slate-700 mb-1">
                    Planned Fence Height (meters above grade) *
                  </label>
                  <input
                    type="number"
                    id="fenceHeightM"
                    required
                    step="0.05"
                    min="1.0"
                    max="3.0"
                    value={formData.fenceHeightM}
                    onChange={(e) => setFormData({ ...formData, fenceHeightM: Number(e.target.value) })}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white ${
                      formData.fenceHeightM < 1.5 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  <span className={`text-[11px] block mt-1 ${formData.fenceHeightM < 1.5 ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
                    By-law requires a minimum of 1.5 meters (5.0 feet / 60 inches).
                    {formData.fenceHeightM < 1.5 && ' ⚠️ Non-compliant! Must be ≥1.5m.'}
                  </span>
                </div>

                <div>
                  <label htmlFor="fenceType" className="block text-xs font-semibold text-slate-700 mb-1">
                    Enclosure Material / Construction *
                  </label>
                  <select
                    id="fenceType"
                    value={formData.fenceType}
                    onChange={(e) => setFormData({ ...formData, fenceType: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                  >
                    <option value="chainlink">Chain-Link Mesh (Diamonds ≤ 38 mm / 1.5 in)</option>
                    <option value="wood">Vertical Board Wood (Gaps &lt; 10 cm, no climbable horizontal rails)</option>
                    <option value="ornamental">Ornamental Iron / Aluminum Spindles (&lt; 10 cm spacing)</option>
                    <option value="composite">Solid Composite Privacy Fence</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="gateLatchHeightM" className="block text-xs font-semibold text-slate-700 mb-1">
                    Gate Latch Height (meters above grade) *
                  </label>
                  <input
                    type="number"
                    id="gateLatchHeightM"
                    required
                    step="0.05"
                    min="0.8"
                    max="2.0"
                    value={formData.gateLatchHeightM}
                    onChange={(e) => setFormData({ ...formData, gateLatchHeightM: Number(e.target.value) })}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white ${
                      formData.gateLatchHeightM < 1.35 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                    }`}
                  />
                  <span className={`text-[11px] block mt-1 ${formData.gateLatchHeightM < 1.35 ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
                    By-law requires latch at least 1.35 meters (53 inches) high.
                    {formData.gateLatchHeightM < 1.35 && ' ⚠️ Non-compliant! Must be ≥1.35m.'}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="gateSelfClosing"
                      checked={formData.gateSelfClosing}
                      onChange={(e) => setFormData({ ...formData, gateSelfClosing: e.target.checked })}
                      className="h-4 w-4 text-blue-600 rounded border-slate-300"
                    />
                    <label htmlFor="gateSelfClosing" className="text-xs text-slate-700 font-semibold cursor-pointer">
                      Gate equipped with automatic self-closing spring device *
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="gateSwingsOutward"
                      checked={formData.gateSwingsOutward}
                      onChange={(e) => setFormData({ ...formData, gateSwingsOutward: e.target.checked })}
                      className="h-4 w-4 text-blue-600 rounded border-slate-300"
                    />
                    <label htmlFor="gateSwingsOutward" className="text-xs text-slate-700 font-semibold cursor-pointer">
                      Gate swings outward away from the swimming pool area *
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          )}

          {/* 4. Excavator & Site Plan */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              4. Contractor &amp; Utility Clearance
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contractorName" className="block text-xs font-semibold text-slate-700 mb-1">
                  Pool Installation Company / Contractor
                </label>
                <input
                  type="text"
                  id="contractorName"
                  placeholder="e.g., Maplewood Pools &amp; Spas Inc."
                  value={formData.contractorName}
                  onChange={(e) => setFormData({ ...formData, contractorName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="digLocateNumber" className="block text-xs font-semibold text-slate-700 mb-1">
                  Ontario One Call Utility Locate Ticket #
                </label>
                <input
                  type="text"
                  id="digLocateNumber"
                  placeholder="e.g., 2026-ON-982144"
                  value={formData.digLocateNumber}
                  onChange={(e) => setFormData({ ...formData, digLocateNumber: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-mono"
                />
                <span className="text-[11px] text-slate-500">Call 1-800-400-2255 before excavation.</span>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Upload Site Plan &amp; Fence Layout (Scaled Drawing)
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center bg-white hover:border-blue-400 transition-colors cursor-pointer">
                  <span className="text-2xl block mb-1">📐</span>
                  <span className="text-xs font-semibold text-slate-700 block">
                    Upload Property Survey &amp; Pool Boundary Diagram (PDF/Images)
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Must indicate property lines, pool location, setbacks, and proposed fence/gate location.
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
                I hereby declare that no excavation or installation will proceed without the pre-excavation inspection, and that <strong>NO WATER WILL BE PLACED IN THE POOL</strong> until the final enclosure inspection is completed and approved by the Town of Maplewood under By-law 2022-18. I agree to pay the standard <strong>$150.00 permit review fee</strong>.
              </span>
            </label>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200">
              <div className="text-xs text-slate-500">
                Permit Fee: <strong className="text-slate-900 text-sm">$150.00 CAD</strong> (Includes 2 inspections)
              </div>
              <button
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all hover:shadow-lg flex items-center gap-2"
              >
                <span>🏊</span> Submit Pool Enclosure Permit Application
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ── Scraper Technical Metadata Footer ── */}
      <footer className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2 font-mono">
        <div>Endpoint schema: Schema.org/ApplyAction · POST /api/v1/permits/pool</div>
        <NavLink to="/documents/by-laws" className="text-blue-700 hover:underline">
          Town of Maplewood Pool Enclosure By-law 2022-18
        </NavLink>
      </footer>
    </article>
  );
}
