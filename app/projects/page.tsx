import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | KB Tech Solution',
  description:
    'Explore completed network, CCTV, server, and fiber optic projects by KB Tech Solution in Biratnagar and Province No. 1, Nepal.',
};

const WA_NUMBER = '9779842129384';

const projects = [
  {
    title: 'Full-Campus Network — Model Hospital',
    location: 'Biratnagar, Morang',
    year: '2024',
    description:
      'Designed and deployed a complete hospital network infrastructure covering 5 floors and 3 buildings. Included structured Cat6A cabling, fiber backbone, Cisco L3 switches, Sophos XG firewall, and VLAN segmentation for clinical, admin, and guest networks.',
    tags: ['Sophos XG', 'Cisco Catalyst', 'Cat6A', 'Fiber Backbone', 'VLAN', 'Structured Cabling'],
    scope: 'Large Enterprise',
    service: 'Full-Campus Network at Model Hospital',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
  },
  {
    title: 'Government Office LAN & VPN',
    location: 'Morang District Court, Biratnagar',
    year: '2023',
    description:
      'Structured cabling and managed switch deployment across 3 floors. VPN tunnels configured for secure access between district offices. MikroTik RouterOS for routing and bandwidth management.',
    tags: ['MikroTik', 'VPN', 'Managed Switch', 'Structured Cabling'],
    scope: 'Government',
    service: 'Government Office LAN & VPN',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
  },
  {
    title: '64-Channel IP CCTV System',
    location: 'Biratnagar Customs Office',
    year: '2024',
    description:
      'Installed 64 Hikvision IP cameras across the customs compound with 90-day storage NVR. Remote monitoring enabled for supervisors via mobile app. PoE switches deployed for camera power.',
    tags: ['Hikvision', 'NVR', '64-Channel', 'PoE Switch', 'Remote Monitoring'],
    scope: 'Security',
    service: '64-Channel CCTV System',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&q=80',
  },
  {
    title: 'ISP Fiber Backbone Expansion',
    location: 'Itahari – Biratnagar Corridor',
    year: '2023',
    description:
      'Laid 12km of single-mode fiber optic cable for a local ISP network expansion. Included OFC splicing at 14 splice points, OTDR testing, and underground conduit routing.',
    tags: ['Single-Mode Fiber', 'OTDR', 'OFC Splicing', 'Underground Cabling'],
    scope: 'ISP / Telecom',
    service: 'ISP Fiber Backbone Installation',
    image: 'https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=700&q=80',
  },
  {
    title: 'Bank Branch IT Infrastructure',
    location: 'NIC Asia Bank — Biratnagar Branch',
    year: '2022',
    description:
      'Complete IT setup for a new bank branch: structured cabling, firewall, managed switches, IP phones, CCTV, and server room setup with APC UPS and proper grounding.',
    tags: ['Sophos Firewall', 'CCTV', 'Server Room', 'UPS', 'IP Phone', 'Structured Cabling'],
    scope: 'Financial',
    service: 'Bank Branch IT Infrastructure',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
  },
  {
    title: 'College Campus WiFi Deployment',
    location: 'Koshi Engineering College, Biratnagar',
    year: '2022',
    description:
      'Deployed 40 Ubiquiti UniFi access points across 4 buildings for seamless student and staff WiFi. UniFi controller configured for centralized management, captive portal, and bandwidth control.',
    tags: ['Ubiquiti UniFi', 'WiFi 6', 'Captive Portal', 'Bandwidth Management'],
    scope: 'Education',
    service: 'College Campus WiFi Deployment',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80',
  },
  {
    title: 'Factory Wireless Bridge Network',
    location: 'Industrial Area, Biratnagar',
    year: '2023',
    description:
      'Point-to-multipoint wireless bridge connecting the main factory building to 4 remote warehouses across a 2km radius using MikroTik LHG antennas and Wireless Wire for backhaul.',
    tags: ['MikroTik LHG', 'P2MP Link', 'Wireless Bridge', 'Outdoor AP'],
    scope: 'Industrial',
    service: 'Factory Wireless Bridge Network',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
  },
  {
    title: 'Municipality Network Upgrade',
    location: 'Biratnagar Metropolitan Office',
    year: '2024',
    description:
      'Network upgrade for the city municipality office: replaced aging switches with managed Cisco gear, upgraded to Cat6A cabling, implemented VLAN policy, and deployed a new Sophos XGS firewall.',
    tags: ['Cisco Catalyst', 'Sophos XGS', 'Cat6A Upgrade', 'VLAN Policy'],
    scope: 'Government',
    service: 'Municipality Network Upgrade',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=700&q=80',
  },
  {
    title: 'Hospital CCTV & Access Control',
    location: 'Province Hospital No. 1',
    year: '2023',
    description:
      'Installed 128-channel Dahua IP camera system integrated with biometric access control at main entrances, ICU, pharmacy, and emergency ward. 180-day storage with redundant NVR.',
    tags: ['Dahua', '128-Channel', 'Access Control', 'Biometric', 'NVR'],
    scope: 'Healthcare Security',
    service: 'Hospital CCTV & Access Control',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&q=80',
  },
];

const scopeColors: Record<string, string> = {
  'Large Enterprise': 'bg-purple-50 text-purple-700',
  'Government': 'bg-blue-50 text-blue-700',
  'Security': 'bg-red-50 text-red-700',
  'ISP / Telecom': 'bg-orange-50 text-orange-700',
  'Financial': 'bg-green-50 text-green-700',
  'Education': 'bg-yellow-50 text-yellow-700',
  'Industrial': 'bg-gray-100 text-gray-700',
  'Healthcare Security': 'bg-teal-50 text-teal-700',
};

export default function ProjectsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider border border-white/20">
            Our Work
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Completed Projects
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            A selection of network, CCTV, fiber, and IT infrastructure projects delivered across Province No. 1, Nepal.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { value: '100+', label: 'Projects Done' },
              { value: '145+', label: 'Active Clients' },
              { value: '20+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {s.value}
                </div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 section-fade">
            {projects.map((project) => {
              const waMessage = encodeURIComponent(
                `Hello, I am interested in a similar project: ${project.service}. Please provide a quote.`
              );
              const colorClass = scopeColors[project.scope] || 'bg-gray-100 text-gray-600';

              return (
                <div
                  key={project.title}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#0e0973] transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {/* Scope + year overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full backdrop-blur-sm ${colorClass}`}>
                        {project.scope}
                      </span>
                      <span className="text-xs text-white/90 font-medium bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-white/90 shrink-0" />
                      <span className="text-xs text-white/90 font-medium">{project.location}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-base font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#e8e7f8] text-[#0e0973] text-[11px] font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-[#0e0973] text-white text-xs font-semibold rounded-lg hover:bg-[#080659] transition-colors"
                    >
                      Get Similar Quote
                    </a>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                        `Hello, I want to know more details about the project: ${project.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-200 text-gray-600 text-xs font-semibold rounded-lg hover:border-[#0e0973] hover:text-[#0e0973] transition-colors"
                    >
                      View Details
                    </a>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center section-fade">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Have a Similar Project in Mind?
          </h2>
          <p className="text-gray-500 mb-7">
            Share your requirements and we will prepare a detailed proposal and cost estimate for your project.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              'Hello, I have a project I would like to discuss with KB Tech Solution.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0e0973] text-white font-bold rounded-lg hover:bg-[#080659] transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
}
