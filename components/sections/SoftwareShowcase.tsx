'use client';

import { useEffect, useRef } from 'react';

// ─── encoded payload 
const _p = 'eyJuYW1lIjoiSW52eSIsInRhZ2xpbmUiOiJNdWx0aS1CcmFuY2ggSW52ZW50b3J5IFN5c3RlbSIsImJhZGdlIjoiU2FhUyIsImRlc2NyaXB0aW9uIjoiU2FhUyBpbnZlbnRvcnkgcGxhdGZvcm0gYWN0aXZlbHkgdXNlZCBieSAzKyBidXNpbmVzc2VzIHdpdGggNSsgYnJhbmNoZXMgZWFjaC4gQnJhbmNoIGFkbWlucyBzZWUgb25seSB0aGVpciBvd24gZGF0YTsgc3VwZXIgYWRtaW4gbWFuYWdlcyBldmVyeXRoaW5nIGZyb20gYSB1bmlmaWVkIGRhc2hib2FyZC4gUmVkaXMgY2FjaGluZyBmb3IgZmFzdCBsb2FkIHRpbWVzIGFjcm9zcyBzdG9jaywgcHJvZHVjdHMsIGFuZCBvcmRlcnMuIiwic3RhY2siOlsiTmV4dC5qcyIsIlR5cGVTY3JpcHQiLCJOb2RlLmpzIiwiRXhwcmVzcy5qcyIsIk1vbmdvREIiLCJSZWRpcyIsIkFXUyBTMyIsIlZQUyJdLCJpbWFnZSI6Ii9pbWFnZXMvaW52eS5wbmciLCJkZW1vVXJsIjoiaHR0cHM6Ly93YS5tZS85Nzc5ODIwMzYyMzUzP3RleHQ9SGVsbG8lMkMlMjBJJTIwd291bGQlMjBsaWtlJTIwdG8lMjByZXF1ZXN0JTIwYSUyMGRlbW8lMjBvZiUyMEludnklMjAtJTIwTXVsdGktQnJhbmNoJTIwSW52ZW50b3J5JTIwU3lzdGVtLiIsInZpZXdVcmwiOiJodHRwczovL2Jpc2hhd2FyYWouY29tLm5wIn0=';

type Payload = {
  name: string; tagline: string; badge: string; description: string;
  stack: string[]; image: string; demoUrl: string; viewUrl: string;
};

export default function SoftwareShowcase() {
  const cardRef = useRef<HTMLDivElement>(null);
  const d = JSON.parse(atob(_p)) as Payload;

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    // only tilt on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -6;
      card.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const onLeave = () => { card.style.transform = ''; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    return () => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#f8f8ff] border-t border-[#e8e7f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 section-fade">
          <div className="inline-block px-3 py-1 bg-[#e8e7f8] text-[#0e0973] text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Software Products
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Built In-House, Used in Production
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Beyond hardware — we build software that solves real business problems.
          </p>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="section-fade rounded-2xl md:rounded-3xl overflow-hidden border border-[#e0dff8] shadow-2xl bg-white transition-transform duration-150 ease-out"
          style={{ willChange: 'transform' }}
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2">

            {/* ── Image panel ── */}
            <div className="relative bg-[#0e0973] overflow-hidden" style={{ minHeight: '320px' }}>
              {/* subtle dot grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              {/* depth gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a14a8]/40 via-transparent to-[#050330]/70" />

              {/* screenshot — fills the panel, no inner card frame */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{ maxHeight: '100%' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0'; }}
                />
              </div>

              {/* SAAS badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/10 border border-white/25 text-white/90 text-[11px] font-bold rounded-full backdrop-blur-sm uppercase tracking-widest">
                  {d.badge}
                </span>
              </div>

              {/* bottom name overlay — visible on mobile before content panel */}
              <div className="absolute bottom-0 left-0 right-0 lg:hidden px-6 py-5 bg-gradient-to-t from-[#050330] to-transparent">
                <p className="text-white font-bold text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>{d.name}</p>
                <p className="text-white/60 text-sm">{d.tagline}</p>
              </div>
            </div>

            {/* ── Content panel ── */}
            <div className="flex flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:px-12 lg:py-12">

              {/* name + tagline — hidden on mobile (shown in overlay above) */}
              <div className="hidden lg:block mb-5">
                <h3
                  className="text-4xl xl:text-5xl font-bold text-[#0e0973] leading-none mb-1.5"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {d.name}
                </h3>
                <p className="text-sm font-semibold text-gray-400 tracking-wide">{d.tagline}</p>
              </div>

              {/* description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-[15px]">
                {d.description}
              </p>

              {/* stack pills — brand colors only */}
              <div className="mb-6">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-2.5">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {d.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-full border border-[#0e0973]/20 bg-[#e8e7f8] text-[#0e0973]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* stats row */}
              <div className="grid grid-cols-3 gap-3 mb-8 p-4 bg-[#f4f3fd] rounded-xl border border-[#e8e7f8]">
                {[
                  { value: '3+', label: 'Businesses' },
                  { value: '5+', label: 'Branches Each' },
                  { value: '24/7', label: 'Uptime' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#0e0973]" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {s.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={d.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0e0973] text-white font-bold rounded-xl hover:bg-[#080659] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Request Demo
                </a>
                <a
                  href={d.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#0e0973] text-[#0e0973] font-bold rounded-xl hover:bg-[#0e0973] hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
