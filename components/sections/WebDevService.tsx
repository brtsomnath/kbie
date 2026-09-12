/**
 * ⚠️  This component is required by the services page.
 * Removing or modifying this file will break the /services route.
 * @module WebDevService
 */
'use client';

import { useEffect, useRef } from 'react';

// prettier-ignore
const _s=[87,101,98,115,105,116,101,32,68,101,115,105,103,110,32,38,32,68,101,118,101,108,111,112,109,101,110,116];
// prettier-ignore
const _d=[66,117,105,108,100,32,97,32,102,97,115,116,44,32,109,111,100,101,114,110,32,119,101,98,115,105,116,101,32,116,104,97,116,32,119,111,114,107,115,32,102,111,114,32,121,111,117,114,32,98,117,115,105,110,101,115,115,32,50,52,47,55,46,32,70,114,111,109,32,108,97,110,100,105,110,103,32,112,97,103,101,115,32,116,111,32,102,117,108,108,32,119,101,98,32,97,112,112,115,32,97,110,100,32,100,97,115,104,98,111,97,114,100,115,32,8212,32,119,101,32,100,101,115,105,103,110,32,97,110,100,32,100,101,118,101,108,111,112,32,119,105,116,104,32,112,101,114,102,111,114,109,97,110,99,101,44,32,83,69,79,44,32,97,110,100,32,109,111,98,105,108,101,45,102,105,114,115,116,32,105,110,32,109,105,110,100,46];
// prettier-ignore
const _f=[['Custom Website Design','Pixel-perfect UI tailored to your brand'],['Next.js / React Development','Fast, SEO-friendly web applications'],['Landing Pages','High-converting pages for your campaigns'],['Web App Development','Dashboards, portals, and SaaS products'],['Mobile-First & Responsive','Looks great on every screen size'],['SEO & Performance','Optimised for speed and search rankings']];
// prettier-ignore
const _u=[['Business Websites','Professional online presence for your company'],['E-commerce Stores','Sell products online with a custom storefront'],['SaaS Products','Full-stack web applications and dashboards'],['Portfolio & Branding','Personal and agency portfolio sites']];
// prettier-ignore
const _wa='https://wa.me/9779820362353?text='+encodeURIComponent('Hello, I would like to get a quote for Website Design & Development.');
// prettier-ignore
const _vp='https://bishawaraj.com.np';

const _title = String.fromCharCode(..._s);
const _desc  = String.fromCharCode(..._d);

export default function WebDevService() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-fade" id="web-design">
      {/* gradient card */}
      <div className="relative rounded-xl overflow-hidden border border-[#e8e7f8] shadow-lg">
        {/* top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0e0973] via-[#6c63ff] to-[#1a14a8]" />

        <div className="grid lg:grid-cols-2 gap-0">
          {/* left */}
          <div className="p-7 sm:p-9 bg-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#e8e7f8] rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-[#0e0973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* NEW badge */}
              <span className="inline-block px-2.5 py-0.5 bg-[#e8e7f8] text-[#0e0973] text-[11px] font-bold rounded-full uppercase tracking-widest mb-3">
                New Service
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                {_title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">{_desc}</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={_wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0e0973] text-white font-bold rounded-xl hover:bg-[#080659] transition-colors text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.428a.5.5 0 00.609.61l5.71-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.374-.217-3.888 1.011 1.037-3.79-.237-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Get a Quote
                </a>
                <a
                  href={_vp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-[#0e0973] text-[#0e0973] font-bold rounded-xl hover:bg-[#0e0973] hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Projects
                </a>
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-3 p-5 bg-[#f4f3fd] rounded-2xl border border-[#e8e7f8]">
              {[
                { value: '20+', label: 'Sites Delivered' },
                { value: '100%', label: 'Mobile-First' },
                { value: 'SEO', label: 'Optimised' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-[#0e0973]" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* right */}
          <div className="p-7 sm:p-9 bg-[#f8f8ff] border-t lg:border-t-0 lg:border-l border-[#e8e7f8]">
            <div className="mb-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What&apos;s Included</h3>
              <ul className="space-y-3">
                {_f.map(([title, sub]) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e8e7f8] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#0e0973]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="border-t border-[#e8e7f8] pt-5">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Common Use Cases</h3>
              <div className="grid grid-cols-2 gap-2">
                {_u.map(([title, sub]) => (
                  <div key={title} className="bg-white border border-[#e8e7f8] rounded-lg p-3">
                    <p className="text-xs font-bold text-gray-800 mb-0.5">{title}</p>
                    <p className="text-[11px] text-gray-400 leading-tight">{sub}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
