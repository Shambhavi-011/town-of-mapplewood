import townData from '../../data/townData.json';

export default function CouncilMinutes() {
  const { councilMinutes } = townData.documents;

  return (
    <article className="space-y-8 max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
      <header className="border-b border-slate-200 pb-6 space-y-3">
        <div className="inline-block bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
          Mayor &amp; Council Proceedings
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
          Council Minutes &amp; Meeting Agendas
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Official records, voting resolutions, and recorded minutes of Maplewood Town Council and Standing Committee meetings.
        </p>
      </header>

      {/* ── Minutes Directory ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 font-serif">
          Recent Council Records
        </h2>

        <div className="space-y-4">
          {councilMinutes.map((meeting) => (
            <div
              key={meeting.meetingDate}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-base">{meeting.type}</span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {meeting.status}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-600">
                  {meeting.meetingDate}
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {meeting.highlights}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Delegation & Public Participation ── */}
      <section className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="font-bold text-slate-900 text-sm">Addressing Council (Public Delegations)</div>
        <p>
          Residents wishing to address Town Council as a formal delegation must submit a written request and presentation materials to the Clerk's Office by 12:00 PM on the Wednesday prior to the scheduled meeting date.
        </p>
      </section>
    </article>
  );
}
