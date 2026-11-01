import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SEOHead from '../../../components/SEOHead';
import townData from '../../../data/townData.json';

export default function BurnPermitApply() {
  const { burnPermits } = townData.permits;

  const [formData, setFormData] = useState({
    applicantName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    isRuralZone: true,
    supervisorName: '',
    supervisorPhone: '',
    isAdultSupervisor: true,
    pileLengthM: 2.0,
    pileWidthM: 2.0,
    pileHeightM: 1.0,
    clearanceM: 18,
    hasWaterSource: true,
    materialType: 'brush', // 'brush' | 'clean-wood' | 'crop-residue'
    understandsFireBan: true,
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');
  const [issuedDate, setIssuedDate] = useState('');
  const [copiedEndpoint, setCopiedEndpoint] = useState(false);

  // Address validation warning for urban subdivisions
  const isUrbanWarning = !formData.isRuralZone;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refNumber = `BURN-2026-${randomCode}`;
    setApplicationRef(refNumber);
    setIssuedDate(new Date().toLocaleDateString('en-CA'));
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText('https://mapplewood-fictional-town.onrender.com/permits/apply/burn');
    setCopiedEndpoint(true);
    setTimeout(() => setCopiedEndpoint(false), 2000);
  };

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/ApplyAction"
      data-endpoint-url="https://mapplewood-fictional-town.onrender.com/permits/apply/burn"
      data-permit-type="Open-Air Burn Permit"
      data-bylaw-reference="Town of Maplewood By-law 2021-09"
      data-fee="25.00"
    >
      <SEOHead
        title="Apply for an Open-Air Burn Permit Online (By-law 2021-09)"
        description="Instant online open-air burn permit application for rural properties & County Rd 8 in Maplewood. Max pile 2mx2mx1m, adult 18+ supervision, $25 season fee."
        category="Permit Application"
      />

      {/* ── Scraper & API Direct Endpoint Header ── */}
      <div className="bg-slate-900 text-slate-100 p-4 rounded-xl text-xs space-y-2 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse"></span>
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
            URL: <code className="text-orange-300">https://mapplewood-fictional-town.onrender.com/permits/apply/burn</code>
          </div>
          <div>• Code: <span className="text-white">PERM-BURN</span></div>
          <div>• Fee: <span className="text-white">$25.00 / season</span></div>
          <div>• Issuance: <span className="text-emerald-400">Instant Automated Approval</span></div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Maplewood Fire &amp; Rescue Services · By-law 2021-09
          </div>
          <NavLink
            to="/permits/burn"
            className="text-xs text-orange-800 hover:text-orange-950 font-semibold flex items-center gap-1"
          >
            ← View Burn Rules &amp; Fire Ban Status
          </NavLink>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemProp="name">
          {burnPermits.title} Application Form
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed" itemProp="description">
          Automated issuance of annual seasonal open-air burn permits for eligible rural agricultural properties, orchards, and County Road 8 corridors under Municipal By-law 2021-09.
        </p>
      </header>

      {/* ── Active Burn Permit Certificate / Confirmation Screen ── */}
      {submitted ? (
        <section
          className="bg-orange-50 border-2 border-orange-500 rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in"
          data-submission-status="approved"
          data-permit-id={applicationRef}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
              🔥
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-800">
                Official Municipal Authorization
              </span>
              <h2 className="text-2xl font-bold text-orange-950 font-serif">
                Open-Air Burn Permit ISSUED &amp; ACTIVE
              </h2>
            </div>
          </div>

          {/* Certificate Card */}
          <div className="bg-white p-6 rounded-xl border-2 border-orange-300 shadow-sm space-y-4">
            <div className="flex flex-wrap justify-between items-center border-b border-slate-200 pb-3 gap-2">
              <div>
                <div className="text-xs text-slate-500 font-mono">TOWN OF MAPLEWOOD FIRE &amp; RESCUE</div>
                <div className="text-lg font-bold font-serif text-slate-900">
                  Annual Open-Air Agricultural Burn License
                </div>
              </div>
              <div className="text-right">
                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded">
                  Status: ACTIVE (Season 2026)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-700">
              <div>
                <span className="text-slate-500 block">Permit Reference Number:</span>
                <strong className="text-base text-orange-800">{applicationRef}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Issue Date:</span>
                <strong>{issuedDate} (Valid through Dec 31, 2026)</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Authorized Property:</span>
                <strong className="text-slate-900">{formData.propertyAddress || 'County Road 8, Rural Zone'}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Designated Adult Supervisor:</span>
                <strong>{formData.supervisorName || formData.applicantName} (18+)</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Annual Permit Fee</span>
                <strong className="text-slate-900">$25.00 CAD (Billed to Tax Roll)</strong>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Max Pile Dimension</span>
                <strong className="text-slate-900">2.0m x 2.0m x 1.0m height</strong>
              </div>
              <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                <span className="text-slate-500 block">Permitted Hours</span>
                <strong className="text-slate-900">Sunrise to 30 min before sunset</strong>
              </div>
            </div>

            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-950 space-y-1">
              <strong>⚠️ Critical Fire Safety Rules:</strong>
              <p>
                • <strong>Daily Burn Check:</strong> Always verify that no municipal or county fire ban is active before lighting. Calling dispatch: (555) 123-7623.
              </p>
              <p>
                • <strong>Supervision:</strong> A responsible adult must remain with the fire until it is 100% extinguished and cool to the touch.
              </p>
              <p>
                • <strong>Water on Site:</strong> A charged pressurized hose or dedicated pump tank must be physically present at the burn perimeter.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              🖨️ Print Burn Permit Certificate
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
                  isRuralZone: true,
                  supervisorName: '',
                  supervisorPhone: '',
                  isAdultSupervisor: true,
                  pileLengthM: 2.0,
                  pileWidthM: 2.0,
                  pileHeightM: 1.0,
                  clearanceM: 18,
                  hasWaterSource: true,
                  materialType: 'brush',
                  understandsFireBan: true,
                  agreeToTerms: false,
                });
              }}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Submit Another Request
            </button>
            <NavLink
              to="/permits/burn"
              className="text-xs text-orange-800 hover:text-orange-950 font-semibold ml-auto"
            >
              Return to Burn By-law Information →
            </NavLink>
          </div>
        </section>
      ) : (
        /* ── The Application Form ── */
        <form onSubmit={handleSubmit} className="space-y-8" id="burn-permit-form">
          {/* Eligibility Notice */}
          <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl flex items-start gap-3 text-xs text-amber-950">
            <span className="text-xl">🌾</span>
            <div>
              <strong className="block font-bold text-sm text-amber-900">
                Zoning Eligibility Mandate: Rural &amp; Agricultural Lands Only
              </strong>
              <p className="mt-0.5 leading-relaxed text-amber-800">
                Open-air burning is strictly prohibited in urban residential subdivisions, townhome complexes, and commercial zones. Burning is allowed only on properties zoned <strong>Rural (A-1, A-2, RU)</strong> or properties along <strong>County Road 8</strong>. Flat fee: <strong>$25.00 per season</strong>.
              </p>
            </div>
          </div>

          {/* 1. Property Location & Zoning Verification */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              1. Property Location &amp; Rural Eligibility
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="applicantName" className="block text-xs font-semibold text-slate-700 mb-1">
                  Applicant / Property Owner Full Name *
                </label>
                <input
                  type="text"
                  id="applicantName"
                  required
                  placeholder="e.g., Samuel Miller"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Telephone Contact *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="(555) 765-4321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
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
                  placeholder="samuel@farmexample.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-xs font-semibold text-slate-700 mb-1">
                  Physical Property / Farm Address *
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  required
                  placeholder="e.g., 4200 County Road 8, Maplewood, ON"
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
                />
              </div>

              <div className="sm:col-span-2 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isRuralZone}
                    onChange={(e) => setFormData({ ...formData, isRuralZone: e.target.checked })}
                    className="h-4 w-4 text-orange-600 rounded border-slate-300"
                  />
                  <span className="text-xs font-semibold text-slate-800">
                    I confirm this property is situated in an eligible Rural Zone (A-1, A-2, RU) or along County Road 8.
                  </span>
                </label>
                {isUrbanWarning && (
                  <div className="mt-2 p-3 bg-red-50 border border-red-300 rounded-lg text-xs text-red-900 font-semibold">
                    ⚠️ Burning is prohibited on urban or suburban residential properties. Applications for non-rural addresses will be automatically rejected.
                  </div>
                )}
              </div>
            </div>
          </fieldset>

          {/* 2. Adult Fire Supervisor */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              2. Designated Adult Supervisor (18+ Mandatory)
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="supervisorName" className="block text-xs font-semibold text-slate-700 mb-1">
                  Responsible Adult Supervisor Name *
                </label>
                <input
                  type="text"
                  id="supervisorName"
                  required
                  placeholder="e.g., Samuel Miller"
                  value={formData.supervisorName}
                  onChange={(e) => setFormData({ ...formData, supervisorName: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
                />
              </div>

              <div>
                <label htmlFor="supervisorPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                  Supervisor 24/7 On-Site Mobile Phone *
                </label>
                <input
                  type="tel"
                  id="supervisorPhone"
                  required
                  placeholder="(555) 765-4321"
                  value={formData.supervisorPhone}
                  onChange={(e) => setFormData({ ...formData, supervisorPhone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.isAdultSupervisor}
                    onChange={(e) => setFormData({ ...formData, isAdultSupervisor: e.target.checked })}
                    className="h-4 w-4 text-orange-600 rounded border-slate-300"
                  />
                  <span className="text-xs text-slate-700 font-semibold">
                    Supervisor is at least 18 years of age and will remain within line of sight of the burn pile at all times until fully extinguished.
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          {/* 3. Pile Dimensions & Safety Clearances */}
          <fieldset className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50/50">
            <legend className="font-bold text-sm text-slate-800 px-2 font-serif uppercase tracking-wider">
              3. Pile Dimensions &amp; Safety Clearances (By-law 2021-09)
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="pileLengthM" className="block text-xs font-semibold text-slate-700 mb-1">
                  Pile Length (meters) *
                </label>
                <input
                  type="number"
                  id="pileLengthM"
                  required
                  step="0.1"
                  min="0.5"
                  max="3.0"
                  value={formData.pileLengthM}
                  onChange={(e) => setFormData({ ...formData, pileLengthM: Number(e.target.value) })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white ${
                    formData.pileLengthM > 2.0 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                <span className="text-[11px] text-slate-500">Max limit: 2.0 meters</span>
              </div>

              <div>
                <label htmlFor="pileWidthM" className="block text-xs font-semibold text-slate-700 mb-1">
                  Pile Width (meters) *
                </label>
                <input
                  type="number"
                  id="pileWidthM"
                  required
                  step="0.1"
                  min="0.5"
                  max="3.0"
                  value={formData.pileWidthM}
                  onChange={(e) => setFormData({ ...formData, pileWidthM: Number(e.target.value) })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white ${
                    formData.pileWidthM > 2.0 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                <span className="text-[11px] text-slate-500">Max limit: 2.0 meters</span>
              </div>

              <div>
                <label htmlFor="pileHeightM" className="block text-xs font-semibold text-slate-700 mb-1">
                  Pile Height (meters) *
                </label>
                <input
                  type="number"
                  id="pileHeightM"
                  required
                  step="0.1"
                  min="0.5"
                  max="2.0"
                  value={formData.pileHeightM}
                  onChange={(e) => setFormData({ ...formData, pileHeightM: Number(e.target.value) })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white ${
                    formData.pileHeightM > 1.0 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                <span className="text-[11px] text-slate-500">Max limit: 1.0 meter</span>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="clearanceM" className="block text-xs font-semibold text-slate-700 mb-1">
                  Distance to Nearest Structure / Boundary (meters) *
                </label>
                <input
                  type="number"
                  id="clearanceM"
                  required
                  min="5"
                  max="500"
                  value={formData.clearanceM}
                  onChange={(e) => setFormData({ ...formData, clearanceM: Number(e.target.value) })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white ${
                    formData.clearanceM < 15 ? 'border-red-400 bg-red-50/50' : 'border-slate-300'
                  }`}
                />
                <span className={`text-[11px] block mt-1 ${formData.clearanceM < 15 ? 'text-red-600 font-semibold' : 'text-slate-500'}`}>
                  By-law mandates at least 15 meters clearance from buildings, trees, and power lines.
                  {formData.clearanceM < 15 && ' ⚠️ Minimum 15 meters required!'}
                </span>
              </div>

              <div>
                <label htmlFor="materialType" className="block text-xs font-semibold text-slate-700 mb-1">
                  Material to be Burned *
                </label>
                <select
                  id="materialType"
                  value={formData.materialType}
                  onChange={(e) => setFormData({ ...formData, materialType: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:outline-none bg-white"
                >
                  <option value="brush">Dry Clean Brush &amp; Tree Branches</option>
                  <option value="crop-residue">Agricultural Crop Residue / Prunings</option>
                  <option value="clean-wood">Untreated Raw Wood / Logs</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* 4. Safety Acknowledgements & Fire Ban Clause */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                id="hasWaterSource"
                checked={formData.hasWaterSource}
                onChange={(e) => setFormData({ ...formData, hasWaterSource: e.target.checked })}
                className="mt-1 h-4 w-4 text-orange-600 rounded border-slate-300"
              />
              <label htmlFor="hasWaterSource" className="text-xs text-slate-700 cursor-pointer">
                I confirm that active extinguishing equipment (charged hose or pressurized water pump) will be on-site and operational at all times during the burn.
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                id="understandsFireBan"
                checked={formData.understandsFireBan}
                onChange={(e) => setFormData({ ...formData, understandsFireBan: e.target.checked })}
                className="mt-1 h-4 w-4 text-orange-600 rounded border-slate-300"
              />
              <label htmlFor="understandsFireBan" className="text-xs text-slate-700 cursor-pointer">
                I understand that this permit is <strong>automatically suspended without notice</strong> whenever the Maplewood Fire Chief issues a Municipal Fire Ban, and that burning during a ban incurs a minimum $500 fine plus $485/hr emergency response cost recovery.
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mt-1 h-4 w-4 text-orange-600 rounded border-slate-300"
              />
              <label htmlFor="agreeToTerms" className="text-xs text-slate-700 cursor-pointer">
                I agree to the <strong>$25.00 seasonal permit fee</strong> and agree to burn only between sunrise and 30 minutes before sunset.
              </label>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500">
                Seasonal Fee: <strong className="text-slate-900 text-sm">$25.00 CAD</strong> (Valid for 2026 calendar year)
              </div>
              <button
                type="submit"
                disabled={isUrbanWarning}
                className={`font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 ${
                  isUrbanWarning
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-orange-600 hover:bg-orange-700 text-white hover:shadow-lg'
                }`}
              >
                <span>🔥</span> Issue Instant Open-Air Burn Permit
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ── Scraper Technical Metadata Footer ── */}
      <footer className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2 font-mono">
        <div>Endpoint schema: Schema.org/ApplyAction · POST /api/v1/permits/burn</div>
        <NavLink to="/documents/by-laws" className="text-orange-800 hover:underline">
          Town of Maplewood Open-Air Burn By-law 2021-09
        </NavLink>
      </footer>
    </article>
  );
}
