import type { Metadata } from 'next';
import { CheckCircle2, MapPin, Award, Users, Clock, Shield } from 'lucide-react';
import AboutHero from '@/components/sections/AboutHero';

export const metadata: Metadata = {
  title: 'About Us | KB Tech Solution',
  description:
    'Learn about KB Tech Solution — 20+ years of professional IT and network services in Biratnagar, Province No. 1, Nepal.',
};

const WA_NUMBER = '9779842129384';

const reasons = [
  {
    icon: Clock,
    title: '20+ Years of Experience',
    description:
      'Two decades of hands-on expertise in network design, CCTV, server administration, and IT support across Nepal.',
  },
  {
    icon: Users,
    title: 'Certified Technical Team',
    description:
      'Our engineers hold certifications from Cisco, MikroTik, and Sophos, ensuring every project meets industry standards.',
  },
  {
    icon: Shield,
    title: 'Quality Components Only',
    description:
      'We source equipment directly from authorized distributors — no counterfeit or grey-market hardware, ever.',
  },
  {
    icon: Award,
    title: 'Post-Installation Support',
    description:
      'Every project includes warranty support, and we offer AMC contracts for ongoing network health and uptime.',
  },
];

const certifications = [
  'MikroTik Certified Network Associate (MTCNA)',
  'MikroTik Certified Routing Engineer (MTCRE)',
  'Sophos Certified Engineer (XG / XGS)',
  'Cisco Certified Network Associate (CCNA)',
  'Hikvision Certified Security Professional (HCSP)',
  'Ubiquiti Enterprise Wireless Admin (UEWA)',
  'CompTIA Network+',
  'CompTIA A+',
];

const serviceAreas = [
  { city: 'Biratnagar', note: 'Primary office and service hub' },
  { city: 'Itahari', note: 'Full coverage' },
  { city: 'Dharan', note: 'Full coverage' },
  { city: 'Inaruwa', note: 'Full coverage' },
  { city: 'Rajbiraj', note: 'Project-based visits' },
  { city: 'Urlabari', note: 'Full coverage' },
  { city: 'Damak', note: 'Project-based visits' },
  { city: 'Birtamod', note: 'Project-based visits' },
];

const timeline = [
  { year: '2004', event: 'Founded in Biratnagar with focus on hardware repair and basic networking.' },
  { year: '2008', event: 'Expanded to structured cabling and enterprise LAN installations.' },
  { year: '2012', event: 'Added CCTV and surveillance system services. First hospital project completed.' },
  { year: '2016', event: 'Became authorized MikroTik and Sophos partner in Province No. 1.' },
  { year: '2019', event: 'Launched fiber optic division. 100+ client milestone reached.' },
  { year: '2022', event: 'Added medical equipment supply and hospital IT infrastructure division.' },
  { year: '2024', event: '145+ active clients. Team of 15 certified engineers.' },
];

export default function AboutPage() {
  return (
    <div>
      <AboutHero />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start section-fade">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-5"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>
                  KB Tech Solution is a professional IT infrastructure company headquartered in Biratnagar, Nepal. Since 2004, we have been delivering reliable network design, CCTV installations, server setups, and IT support services to businesses, government offices, hospitals, schools, and industrial facilities.
                </p>
                <p>
                  Our work is grounded in technical accuracy and honest client relationships. We do not overpromise — we assess requirements carefully, recommend the right solution, and execute with precision. Every installation is documented and tested before handover.
                </p>
                <p>
                  We are an authorized partner for MikroTik, Sophos, Hikvision, and Ubiquiti in Province No. 1. This means our team receives direct technical training and product support — advantages we pass on to every client project.
                </p>
              </div>
            </div>

            <div>
              {/* Timeline */}
              <h3
                className="text-lg font-bold text-gray-900 mb-5"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Our Journey
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
                <div className="space-y-5">
                  {timeline.map((item) => (
                    <div key={item.year} className="flex gap-5 pl-10 relative">
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-[#e8e7f8] border-2 border-[#0e0973] flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-bold text-[#0e0973]">{item.year.slice(2)}</span>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#0e0973]">{item.year}</span>
                        <p className="text-sm text-gray-500 mt-0.5">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 section-fade">
            <h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Why Businesses Choose Us
            </h2>
            <p className="text-gray-500 text-base">
              We focus on doing the job right — not the fastest quote, but the best outcome.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 section-fade">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-[#0e0973] transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-[#e8e7f8] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#0e0973]" />
                  </div>
                  <h3
                    className="text-sm font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications + Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 section-fade">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-[#0e0973]" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Certifications & Partnerships
                </h2>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0e0973] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-[#0e0973]" />
                <h2
                  className="text-xl font-bold text-gray-900"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Service Areas
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area.city}
                    className="bg-gray-50 border border-gray-100 rounded-lg p-4 hover:border-[#0e0973] transition-colors"
                  >
                    <div
                      className="font-semibold text-gray-900 text-sm mb-0.5"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {area.city}
                    </div>
                    <div className="text-xs text-gray-400">{area.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                * Outstation travel charges may apply for locations outside Biratnagar–Dharan corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#0e0973]">
        <div className="max-w-3xl mx-auto px-4 text-center section-fade">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-3"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 mb-7">
            Reach out for a free site assessment and project proposal. We are based in Biratnagar and available for on-site visits across Province No. 1.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              'Hello, I would like to get in touch with KB Tech Solution for a project assessment.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0e0973] font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
