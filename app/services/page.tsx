import type { Metadata } from 'next';
import { Network, Camera, Wifi, Server, Wrench, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import WebDevService from '@/components/sections/WebDevService';

export const metadata: Metadata = {
  title: 'Services | KB Tech Solution',
  description:
    'Professional IT services including network setup, CCTV, VPN, server configuration, hardware repair, and 24/7 IT support in Biratnagar, Nepal.',
};

const WA_NUMBER = '9779842129384';

const services = [
  {
    id: 'network',
    icon: Network,
    title: 'Network Setup & Installation',
    description:
      'We design and deploy structured cabling and network infrastructure for offices, campuses, hospitals, and industrial facilities. Our team handles everything from cable pulls to switch configuration and firewall deployment.',
    features: [
      'Structured cabling (Cat6/Cat6A/Fiber)',
      'LAN/WAN design and implementation',
      'L2/L3 switching with VLAN segmentation',
      'Router and firewall configuration (Cisco, MikroTik, Sophos)',
      'Network documentation and IP addressing',
      'Post-installation testing and certification',
    ],
    useCases: [
      'New office network setup',
      'Hospital and healthcare networks',
      'Campus-wide multi-floor deployments',
      'Factory and warehouse networks',
    ],
  },
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV & Surveillance Systems',
    description:
      'Complete surveillance system design and installation using enterprise-grade IP cameras and NVR systems. We support Hikvision, Dahua, and other leading brands.',
    features: [
      'IP camera selection and placement planning',
      'NVR/DVR configuration and storage setup',
      'Remote monitoring and mobile access',
      'PoE switch deployment for cameras',
      'Night vision and low-light camera installation',
      'Integration with access control systems',
    ],
    useCases: [
      'Office and retail surveillance',
      'Bank and financial institution security',
      'Government building monitoring',
      'School and campus security',
    ],
  },
  {
    id: 'wireless',
    icon: Wifi,
    title: 'Wireless & P2P Networks',
    description:
      'High-performance wireless networking using Ubiquiti UniFi, MikroTik, and TP-Link enterprise solutions. We design wireless coverage maps and deploy access points for seamless roaming.',
    features: [
      'Enterprise WiFi design (Ubiquiti UniFi)',
      'Point-to-point wireless bridging (PtP)',
      'Point-to-multipoint links (PtMP)',
      'Fiber optic backbone installation',
      'FTTH last-mile connectivity',
      'Wireless site survey and coverage mapping',
    ],
    useCases: [
      'Office and building wireless coverage',
      'ISP network expansion',
      'Remote site connectivity',
      'Campus-wide wireless deployment',
    ],
  },
  {
    id: 'vpn-server',
    icon: Server,
    title: 'VPN & Server Solutions',
    description:
      'Secure your business communications with VPN tunnels and manage your data with properly configured server infrastructure. We handle everything from initial setup to ongoing maintenance.',
    features: [
      'Site-to-site VPN configuration',
      'Remote access VPN for employees',
      'Windows Server and Active Directory setup',
      'Sophos firewall and UTM configuration',
      'File server and NAS deployment',
      'Backup and disaster recovery planning',
    ],
    useCases: [
      'Multi-branch office connectivity',
      'Remote workforce access',
      'Centralized data management',
      'Government and secure enterprise environments',
    ],
  },
  {
    id: 'hardware',
    icon: Wrench,
    title: 'Hardware Repair & Maintenance',
    description:
      'Certified hardware repair for laptops, desktops, and servers. We diagnose, repair, and maintain IT equipment for businesses to minimize downtime.',
    features: [
      'Laptop motherboard and component repair',
      'Desktop and server hardware diagnostics',
      'RAM, SSD, and storage upgrades',
      'Screen replacement and keyboard repair',
      'Cooling system cleaning and thermal paste',
      'BIOS recovery and OS reinstallation',
    ],
    useCases: [
      'Corporate device maintenance',
      'Server hardware repair',
      'Bulk laptop refurbishment',
      'Warranty and post-warranty service',
    ],
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'IT Support & Consulting',
    description:
      'Ongoing technical support through annual maintenance contracts (AMC), remote assistance, and emergency on-site visits. Our team keeps your infrastructure running smoothly.',
    features: [
      'Annual Maintenance Contracts (AMC)',
      'Remote monitoring and management',
      'On-site emergency support',
      'Network performance audits',
      'IT infrastructure consulting',
      'Staff training and knowledge transfer',
    ],
    useCases: [
      'Business IT support contracts',
      'Network troubleshooting',
      'IT infrastructure planning',
      'Technology upgrade consulting',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider border border-white/20">
            Our Services
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Professional IT Services
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Comprehensive network and IT infrastructure solutions for businesses across Biratnagar and Province No. 1, Nepal.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <WebDevService />

          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const waMessage = encodeURIComponent(
              `Hello, I would like to get a quote for ${service.title}.`
            );

            return (
              <div
                key={service.id}
                id={service.id}
                className={`section-fade grid lg:grid-cols-2 gap-10 items-start ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="w-12 h-12 bg-[#e8e7f8] rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#0e0973]" />
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0e0973] text-white font-semibold rounded-lg hover:bg-[#080659] transition-colors text-sm mb-6"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Details box */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <div className="mb-5">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                        What's Included
                      </h3>
                      <ul className="space-y-2.5">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-[#0e0973] mt-0.5 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                        Common Use Cases
                      </h3>
                      <ul className="space-y-1.5">
                        {service.useCases.map((u) => (
                          <li key={u} className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0e0973] shrink-0" />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center section-fade">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-500 mb-7">
            Describe your requirements and our team will recommend the right solution for your business.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              'Hello, I would like to discuss my IT requirements with your team.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0e0973] text-white font-bold rounded-lg hover:bg-[#080659] transition-colors"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
