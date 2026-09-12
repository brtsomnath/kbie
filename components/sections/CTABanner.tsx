import { Phone, MessageCircle } from 'lucide-react';

const WA_NUMBER = '9779842129384';

export default function CTABanner() {
  const waMessage = encodeURIComponent(
    'Hello, I would like to get a service quote from KB Tech Solution.'
  );

  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed image */}
      <img
        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Strong brand overlay */}
      <div className="absolute inset-0 bg-[#0e0973]/88" />

      <div className="relative py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center section-fade">
          <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-6 uppercase tracking-wider border border-white/20">
            Free Consultation
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-white/65 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Get a free site assessment and quote for your network, CCTV, or IT infrastructure project. Available Mon–Fri, 9AM–6PM.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0e0973] font-bold rounded-xl hover:bg-gray-50 transition-colors duration-150 text-sm w-full sm:w-auto justify-center active:scale-[0.97]"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background-color 150ms ease' }}
            >
              <MessageCircle className="w-4 h-4" />
              Get a Free Quote
            </a>
            <a
              href="tel:+9779842129384"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/35 text-white font-semibold rounded-xl hover:border-white/70 hover:bg-white/10 transition-colors duration-150 text-sm w-full sm:w-auto justify-center active:scale-[0.97]"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), border-color 150ms ease, background-color 150ms ease' }}
            >
              <Phone className="w-4 h-4" />
              +977 9842129384
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
