import townData from '../data/townData.json';
import SEOHead from '../components/SEOHead';

export default function Contact() {
  const { townInfo } = townData;

  const departments = [
    { name: 'Office of the CAO & Mayor', phone: '(555) 123-4567 ext. 101', email: 'mayor@maplewood.fictionaltown.com', hours: 'Mon–Fri 8:30 AM – 4:30 PM' },
    { name: 'Municipal Clerk & Licensing', phone: '(555) 123-4567 ext. 110', email: 'clerks@maplewood.fictionaltown.com', hours: 'Mon–Fri 8:30 AM – 4:30 PM' },
    { name: 'Revenue, Taxes & Water Billing', phone: '(555) 123-4567 ext. 210', email: 'taxes@maplewood.fictionaltown.com', hours: 'Mon–Fri 8:30 AM – 4:30 PM' },
    { name: 'Public Works & Roads Dispatch', phone: '(555) 123-4567 ext. 230', email: 'publicworks@maplewood.fictionaltown.com', hours: 'Mon–Fri 7:30 AM – 4:00 PM' },
    { name: 'Building & Planning Department', phone: '(555) 123-4567 ext. 250', email: 'building@maplewood.fictionaltown.com', hours: 'Mon–Fri 8:30 AM – 4:30 PM' },
    { name: 'By-law Enforcement & Animal Control', phone: '(555) 123-4567 ext. 300', email: 'bylaw@maplewood.fictionaltown.com', hours: '7 Days a Week: 8:00 AM – 8:00 PM' },
  ];

  return (
    <article
      className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm"
      itemScope
      itemType="https://schema.org/GovernmentOrganization"
      data-kb-topic="town-hall-contact"
    >
      <SEOHead
        title="Town Hall Directory & 24/7 Emergency Contacts"
        description="Official contact directory for the Town of Maplewood: Town Hall address 123 Main St, 311 citizen helpline, 24/7 dispatch lines for roads, snow, and water emergencies."
        category="Government Contacts"
      />

      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
            Town Hall &amp; Citizen Inquiries
          </div>
          <time dateTime="2026-10-30" className="text-xs text-slate-500 font-mono">
            Updated: October 30, 2026
          </time>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900" itemprop="name">
          Contact the Town of Maplewood
        </h1>
        <p className="text-base text-slate-600 leading-relaxed" itemprop="description">
          Reach our municipal administrative offices, citizen service center, departmental directors, and 24/7 emergency dispatch services.
        </p>
      </header>

      {/* ── Key Contact Info Cards ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-5 bg-blue-50 rounded-xl border border-blue-200 space-y-2" data-contact="physical-address">
          <div className="text-2xl">🏛️</div>
          <h2 className="font-bold text-blue-950 text-base">Town Hall Location</h2>
          <p className="text-xs text-blue-900 leading-relaxed" itemprop="address">
            {townInfo.address}
          </p>
          <div className="text-[11px] text-blue-800 pt-2 border-t border-blue-200 font-medium">
            Customer service counter on Main Floor
          </div>
        </div>

        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2" data-contact="phone-lines">
          <div className="text-2xl">📞</div>
          <h2 className="font-bold text-slate-900 text-base">Citizen Phone Lines</h2>
          <div className="text-xs text-slate-700 space-y-1">
            <div><strong>General:</strong> <span itemprop="telephone">{townInfo.phone}</span></div>
            <div><strong>311 Hotline:</strong> <span>{townInfo.serviceQueue311}</span></div>
          </div>
          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
            Automated &amp; staff-assisted 311 queues
          </div>
        </div>

        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2" data-contact="office-hours">
          <div className="text-2xl">🕒</div>
          <h2 className="font-bold text-slate-900 text-base">Municipal Hours</h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            {townInfo.hours}
          </p>
          <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
            24/7 Secure Drop Box at North Entrance
          </div>
        </div>
      </section>

      {/* ── Emergency Hotlines (24/7) ── */}
      <section id="emergency-hotlines" className="bg-red-50 border-l-4 border-red-600 p-5 rounded-r-xl space-y-3" data-contact="emergency-dispatch-247">
        <div className="flex items-center gap-2 text-red-950 font-bold text-base">
          <span>🚨</span> 24/7 Emergency &amp; Dispatch Hotlines
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-red-950">
          <div>
            <strong>Police / Fire / Ambulance:</strong> Dial <span className="font-bold font-mono text-red-700">911</span>
          </div>
          <div>
            <strong>Roads &amp; Snow Dispatch:</strong> <span className="font-mono">{townInfo.emergencyHotlines.roadsEmergency}</span>
          </div>
          <div>
            <strong>Water / Sewer Breaks:</strong> <span className="font-mono">{townInfo.emergencyHotlines.waterSewerEmergency}</span>
          </div>
          <div>
            <strong>Hydro / Downed Wires:</strong> <span className="font-mono">{townInfo.emergencyHotlines.hydroDownedWires}</span>
          </div>
        </div>
      </section>

      {/* ── Departmental Directory ── */}
      <section id="department-directory" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Departmental Directory &amp; Extensions
        </h2>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-slate-700 text-left font-semibold">
              <tr>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Direct Phone</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {departments.map((dept) => (
                <tr key={dept.name} className="hover:bg-slate-50/80">
                  <td className="py-3 px-4 font-bold text-slate-900">{dept.name}</td>
                  <td className="py-3 px-4 font-mono text-xs">{dept.phone}</td>
                  <td className="py-3 px-4 font-mono text-xs text-blue-900">{dept.email}</td>
                  <td className="py-3 px-4 text-xs text-slate-500">{dept.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
