import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

const WA_NUMBER = '9779842129384';

const projects = [
  {
    title: 'Enterprise Network Deployment',
    location: 'Model Hospital, Biratnagar',
    description:
      'Full-campus LAN with 200+ endpoints, fiber backbone, L3 switching, and centralized Sophos XG firewall management.',
    tags: ['Sophos XG', 'Cisco Catalyst', 'Fiber Optic', 'VLAN'],
    service: 'Enterprise Network Deployment at Model Hospital',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    title: 'Government Office Network',
    location: 'Morang District Court',
    description:
      'Structured cabling, managed switches, and VPN setup for secure inter-department communication across three floors.',
    tags: ['MikroTik', 'Structured Cabling', 'VPN', 'Managed Switch'],
    service: 'Government Office Network Setup',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    title: '64-Channel CCTV System',
    location: 'Biratnagar Customs Office',
    description:
      '64 Hikvision IP cameras with NVR, remote monitoring, and 90-day storage for a high-security government facility.',
    tags: ['Hikvision', 'NVR', 'IP Camera', 'Remote Monitoring'],
    service: 'CCTV System Installation',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
  },
  {
    title: 'ISP Fiber Backbone',
    location: 'Itahari, Province No. 1',
    description:
      '12km of single-mode fiber optic cable with OFC splicing and OTDR testing for a local ISP network expansion.',
    tags: ['Single-Mode Fiber', 'OTDR', 'Splicing', 'P2P Link'],
    service: 'ISP Fiber Backbone Installation',
    image: 'https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=800&q=80',
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-16 md:py-24 bg-[#0e0973] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 section-fade">
          <div>
            <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider border border-white/20">
              Recent Work
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Featured Projects
            </h2>
            <p className="text-white/60 mt-2 text-base">
              Real installations, real results — across Province No. 1, Nepal.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors duration-150 shrink-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 section-fade">
          {projects.map((project, i) => {
            const waMessage = encodeURIComponent(
              `Hello, I am interested in getting a quote similar to your ${project.service} project.`
            );
            return (
              <div
                key={project.title}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/25 transition-colors duration-200 flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/80 shrink-0" />
                    <span className="text-xs text-white/80 font-medium">{project.location}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-white text-[#0e0973] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors duration-150 active:scale-[0.97]"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-4 py-2 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors duration-150 active:scale-[0.97]"
                    >
                      Get Similar Quote
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
