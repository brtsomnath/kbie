import Link from 'next/link';
import { Network, Monitor, Code, Camera, Wifi, Headphones, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Network Installation',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    points: [
      'LAN/WAN design and structured cabling',
      'L2/L3 switching with VLAN configuration',
      'Firewall and router setup (Cisco, MikroTik)',
    ],
  },
  {
    icon: Monitor,
    title: 'Hardware Installation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    points: [
      'Server rack setup and configuration',
      'Workstation deployment and imaging',
      'UPS and power management systems',
    ],
  },
  {
    icon: Code,
    title: 'Software Solutions',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    points: [
      'Windows Server and Active Directory',
      'Network management software',
      'Backup and recovery systems',
    ],
  },
  {
    icon: Camera,
    title: 'CCTV Systems',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&q=80',
    points: [
      'IP camera and NVR installation',
      'Remote monitoring and access setup',
      'Hikvision and Dahua certified installs',
    ],
  },
  {
    icon: Wifi,
    title: 'Wireless Networks',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    points: [
      'Enterprise WiFi deployment (Ubiquiti)',
      'Point-to-point wireless bridging',
      'Fiber optic and FTTH installation',
    ],
  },
  {
    icon: Headphones,
    title: 'Tech Support',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
    points: [
      'On-site and remote troubleshooting',
      'Annual maintenance contracts (AMC)',
      '24/7 emergency response available',
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 section-fade">
          <div className="inline-block px-3 py-1 bg-[#e8e7f8] text-[#0e0973] text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            What We Do
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Our Core Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            End-to-end IT infrastructure services tailored for businesses across Nepal.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 section-fade">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:border-[#0e0973]/30 hover:shadow-xl transition-shadow duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0973]/90 via-[#0e0973]/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 bg-white">
                  <ul className="space-y-2 mb-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0e0973] mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#0e0973] group-hover:gap-2 transition-all duration-150"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 section-fade">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0e0973] text-white font-semibold rounded-xl hover:bg-[#080659] transition-colors duration-150 text-sm active:scale-[0.97] transition-transform"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
