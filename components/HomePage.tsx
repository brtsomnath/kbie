'use client';
// HomePage — full redesign
// Design: DESIGN_VARIANCE=8, MOTION_INTENSITY=6, VISUAL_DENSITY=4
// Stack: Next.js 14, Tailwind v3, lucide-react, CSS-only animations
// Images: Next/Image with optimization enabled, lazy loading, proper sizes

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, useCallback } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Network,
  Camera,
  Wifi,
  Server,
  Wrench,
  Headphones,
  MapPin,
  Phone,
  MessageCircle,
  Shield,
  Zap,
  Users,
  Clock,
} from 'lucide-react';

const WA = '9779842129384';
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

// ─── Hero ────────────────────────────────────────────────────────────────────

const slides = [
  {
    id: 'network',
    eyebrow: 'LAN · WAN · L2/L3 Switching',
    title: 'Enterprise\nNetwork Setup',
    desc: 'Complete LAN/WAN design and deployment for offices, warehouses, and campuses. Cisco, MikroTik, and Sophos certified.',
    cta: 'Get Network Quote',
    service: 'Network Setup',
    img: '/home_img/1.jpg',
  },
  {
    id: 'cctv',
    eyebrow: 'IP Cameras · NVR · Remote Monitoring',
    title: 'CCTV Security\nInstallation',
    desc: 'Professional surveillance systems for businesses and homes. HD cameras, NVR setup, and 24/7 remote monitoring.',
    cta: 'Get CCTV Quote',
    service: 'CCTV Installation',
    img: '/home_img/1service-cctv-installation.jpg',
  },
  {
    id: 'wireless',
    eyebrow: 'P2P Links · Fiber Optic · WiFi 6',
    title: 'Wireless &\nFiber Networks',
    desc: 'High-speed wireless bridging and fiber optic backbone installation for businesses requiring reliable connectivity.',
    cta: 'Get Wireless Quote',
    service: 'Wireless & Fiber Network',
    img: '/home_img/wireless.jpg',
  },
  {
    id: 'Hardware',
    eyebrow: 'Laptop · Desktop · Printer Repair',
    title: 'Hardware & Software\nRepairing',
    desc: 'Repairing hardware and software means fixing device components and programs to restore proper functionality efficiently.',
    cta: 'Get Wireless Quote',
    service: 'Wireless & Fiber Network',
    img: '/home_img/Brown and Beige Aesthetic Modern Twitch Banner.jpg',
  },
  {
    id: 'vpn',
    eyebrow: 'Firewall · VPN · Server Setup',
    title: 'VPN & Server\nSolutions',
    desc: 'Secure VPN deployment, firewall configuration with Sophos, and server infrastructure for businesses of all sizes.',
    cta: 'Get VPN Quote',
    service: 'VPN & Server Setup',
    img: '/home_img/enterprise & server network setup.jpg',
  },
];

function HeroSection() {
  const [cur, setCur] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((i: number) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => { setCur(i); setFading(false); }, 280);
  }, [fading]);

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo]);
  const prev = () => goTo((cur - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const s = slides[cur];

  return (
    <section className="relative overflow-hidden bg-zinc-950" style={{ minHeight: '88vh' }}>
      {/* Background image — lazy after first */}
      <Image
        src={s.img}
        alt=""
        fill
        priority={cur === 0}
        loading={cur === 0 ? 'eager' : 'lazy'}
        sizes="100vw"
        className="object-cover object-center"
        style={{
          opacity: fading ? 0 : 0.38,
          transition: 'opacity 280ms cubic-bezier(0.23,1,0.32,1)',
        }}
      />

      {/* Brand gradient overlay — left-heavy for asymmetric layout */}
      <div
        className="absolute inset-0"
        // style={{
        //   background: 'linear-gradient(105deg, rgba(14,9,115,0.97) 0%, rgba(14,9,115,0.82) 45%, rgba(14,9,115,0.35) 75%, rgba(14,9,115,0.1) 100%)',
        // }}
      />

      {/* Content — left-aligned, asymmetric */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ minHeight: '88vh' }}>
        <div className="max-w-xl py-24">
          {/* Eyebrow */}
          <div
            className="mb-5"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'opacity 240ms cubic-bezier(0.23,1,0.32,1), transform 240ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-white/60 border border-white/15 rounded-full">
              {s.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-bold text-white leading-none mb-6"
            style={{
              fontFamily: 'Sora, sans-serif',
              fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
              whiteSpace: 'pre-line',
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(12px)' : 'translateY(0)',
              transition: 'opacity 260ms 30ms cubic-bezier(0.23,1,0.32,1), transform 260ms 30ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            {s.title}
          </h1>

          {/* Desc */}
          <p
            className="text-white/65 text-base leading-relaxed mb-9 max-w-[52ch]"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(12px)' : 'translateY(0)',
              transition: 'opacity 260ms 60ms cubic-bezier(0.23,1,0.32,1), transform 260ms 60ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            {s.desc}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(12px)' : 'translateY(0)',
              transition: 'opacity 260ms 90ms cubic-bezier(0.23,1,0.32,1), transform 260ms 90ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            <a
              href={waLink(`Hello, I would like to get a quote for ${s.service}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0e0973] font-bold rounded-xl text-sm hover:bg-gray-50"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background-color 120ms ease' }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
              onMouseUp={e => (e.currentTarget.style.transform = '')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              {s.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white font-semibold rounded-xl text-sm hover:bg-white/8 hover:border-white/40"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), border-color 120ms ease, background-color 120ms ease' }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
              onMouseUp={e => (e.currentTarget.style.transform = '')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls — bottom */}
      <div className="absolute bottom-7 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full"
                style={{
                  width: i === cur ? 28 : 7,
                  height: 7,
                  background: i === cur ? '#fff' : 'rgba(255,255,255,0.3)',
                  transition: 'width 300ms cubic-bezier(0.23,1,0.32,1), background 200ms ease',
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10" style={{ transition: 'background 150ms ease' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10" style={{ transition: 'background 150ms ease' }}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────

const stats = [
  { value: '21+', label: 'Years in Business' },
  { value: '100+', label: 'Active Clients' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Support Available' },
];

function StatsBar() {
  return (
    <div className="bg-[#080659] border-b border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-5 px-6 flex flex-col gap-0.5 ${i < stats.length - 1 ? 'border-r border-white/8' : ''}`}
            >
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                {s.value}
              </span>
              <span className="text-xs text-white/45 font-medium tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About / Company Intro ───────────────────────────────────────────────────

const brands = ['Cisco', 'MikroTik', 'Sophos', 'Hikvision', 'Dahua', 'Ubiquiti', 'TP-Link', 'Dell'];

function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric: text left, image right */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">
          <div className="section-fade">
            <span className="inline-block px-3 py-1 bg-[#e8e7f8] text-[#0e0973] text-[11px] font-semibold rounded-full uppercase tracking-widest mb-6">
              Est. 2004 · Biratnagar, Nepal
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
            >
              Province No. 1's Most Trusted IT Infrastructure Partner
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-4 max-w-[60ch]">
              KB Tech Solution is a leading IT service provider committed to delivering reliable, scalable, and secure technology solutions across Province No. 1 (Koshi Province), Nepal. With a strong focus on innovation and customer satisfaction, we aim to be recognized as “Province No. 1’s Most Trusted IT Infrastructure Partner.”

We specialize in designing, deploying, and managing robust IT infrastructure that empowers businesses, institutions, and organizations to operate efficiently in today’s digital world.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-[58ch]">
              At KB Tech Solution, we provide complete IT infrastructure services including network design and deployment (LAN, WAN, fiber, wireless), server setup, cloud computing, virtualization, and data storage solutions. We also deliver cybersecurity services such as firewall systems, CCTV, and access control. Additionally, we offer system integration, hardware supply, IT consulting, and ongoing maintenance, ensuring secure, scalable, and reliable IT environments for business operations.
            </p>

            <div className="mb-8">
              <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest mb-3">Authorized Partners</p>
              <div className="flex flex-wrap gap-2">
                {brands.map(b => (
                  <span key={b} className="px-3 py-1.5 bg-zinc-50 text-zinc-600 text-xs font-semibold rounded-lg border border-zinc-200">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0e0973] font-semibold text-sm hover:gap-3"
              style={{ transition: 'gap 150ms cubic-bezier(0.23,1,0.32,1)' }}
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: stacked images */}
          <div className="section-fade relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/home_img/experience.jpg"
                alt="KB Tech Solution team at work"
                fill
                loading="lazy"
                sizes="480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0973]/60 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(14,9,115,0.15)] p-5 border border-zinc-100">
              <div className="text-3xl font-bold text-[#0e0973] mb-0.5" style={{ fontFamily: 'Sora, sans-serif' }}>21+</div>
              <div className="text-xs text-zinc-500 font-medium">Certified Engineers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Network,
    title: 'Network Installation',
    desc: 'LAN/WAN design, structured cabling, L2/L3 switching, VLAN segmentation, and firewall deployment.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70&auto=format&fit=crop',
    href: '/services#network',
  },
  {
    icon: Camera,
    title: 'CCTV Systems',
    desc: 'IP camera selection, NVR configuration, remote monitoring, and PoE switch deployment.',
    img: '/home_img/cctv.jpg',
    href: '/services#cctv',
  },
  {
    icon: Wifi,
    title: 'Wireless & Fiber',
    desc: 'Enterprise WiFi, point-to-point wireless bridging, fiber optic installation and splicing.',
    img: '/home_img/fiber.jpg',
    href: '/services#wireless',
  },
  {
    icon: Server,
    title: 'VPN & Servers',
    desc: 'Site-to-site VPN, Sophos firewall configuration, Windows Server, Active Directory setup.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=70&auto=format&fit=crop',
    href: '/services#vpn-server',
  },
  {
    icon: Wrench,
    title: 'Hardware Repair',
    desc: 'Certified diagnostics and repair for laptops, desktops, and servers. Fast turnaround.',
    img: '/home_img/hardware.jpg',
    href: '/services#hardware',
  },
  {
    icon: Headphones,
    title: 'IT Support & AMC',
    desc: 'Annual maintenance contracts, remote monitoring, on-site emergency support.',
    img: '/home_img/computer amc.jpg',
    href: '/services#support',
  },
];

function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#0e0973]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 section-fade">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 text-white/80 text-[11px] font-semibold rounded-full uppercase tracking-widest border border-white/10 mb-5">
              What We Do
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
            >
              Core Services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white hover:text-white font-semibold text-sm shrink-0"
            style={{ transition: 'color 150ms ease, gap 150ms cubic-bezier(0.23,1,0.32,1)' }}
          >
            All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric grid: 2-col on md, 3-col on lg — NOT equal 3-col slop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-md overflow-hidden section-fade">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.title}
                href={svc.href}
                className="group relative bg-white p-7 flex flex-col gap-4 hover:bg-gray-200"
                style={{ transition: 'background-color 180ms ease' }}
              >
                {/* Image thumbnail */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    style={{ transition: 'transform 400ms cubic-bezier(0.23,1,0.32,1)' }}
                  />
                  <div className="absolute inset-0 bg-[#0e0973]/50 group-hover:bg-[#0e0973]/30" style={{ transition: 'background-color 200ms ease' }} />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="text-black font-bold text-base mb-1.5" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {svc.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>

                <div className="flex items-center gap-1.5 text-[#0e0973] text-xs font-semibold mt-auto group-hover:gap-2.5" style={{ transition: 'gap 150ms cubic-bezier(0.23,1,0.32,1)' }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Projects Preview ────────────────────────────────────────────────────────

const projects = [
  {
    title: 'Full-ISP Setup & Corporate  Data Server & Firewall network installation',
    location: 'Worldlink Maxnet, Biratnagar',
    year: '2024',
    scope: 'Professional level work in corporate',
    desc: 'We provide professional IT and networking services in Biratnagar, delivering secure & reliable solutions for businesses of all sizes. Our expertise includes Cisco and Sophos firewall installation, MikroTik router configuration, Layer 2 and Layer 3 switching, VLAN setup, VPN, P2P connectivity. We also offer expert troubleshooting and ongoing support to ensure optimal performance, scalability, and network security, helping your business stay connected and efficient at all times..',
    tags: ['Sophos Firewall', 'Cisco', 'Fortinet', 'MikroTik Router','Edgecore','Ruijie','Checkpoint',],
    img: '/home_img/enterprise & server network setup.jpg',
    service: 'Full-Campus Network at Model Hospital',
  },
  {
    title: 'Corporate office & Factory Lan Wan L2 L3 VPN P2P Network Installation',
    location: 'Atal Pharmacy,sunbarshi nagarpalika,Etc',
    year: '2023',
    scope: 'Professional Knowledge & Experience in IT',
    desc: 'Successfully completed the “Corporate Office & Factory LAN/WAN VPN P2P Network Installation” project with secure and reliable connectivity between corporate office and factory locations. The work included LAN/WAN setup, VPN and point-to-point network configuration, firewall security, structured cabling, and network integration. The solution enhanced communication, remote access, data security, and overall operational efficiency.',
    tags: ['Layer 2', 'Layer 3', 'VPN', 'Point-to-Point', 'VLAN', 'WiFi 6', 'Fiber Optic', 'Switching'],
    img: '/home_img/windows-2022-vpn-server.jpeg',
    service: 'Government Office LAN & VPN',
  },
  {
    title: 'Office Factory Collage & Home Surveillance Security Installation',
    location: 'Atal Pharmacy,sunbarshi nagarpalika,Etc',
    year: '2024',
    scope: 'CCTV Surveillance SecurSity',
    desc: 'Successfully completed the “Office, Factory, College & Home Surveillance Security Installation” project, including CCTV camera setup, DVR/NVR configuration, remote monitoring, and network integration. The security system enhanced surveillance coverage, real-time monitoring, safety, and reliable protection for office, factory, educational, and residential environments.',
    tags: ['Hikvision', 'Nightvision', 'Dahua', 'IMOU', 'UNV', 'Tendyn', 'NVR', 'XVR', 'IP Camera'],
    img: '/recent_work/cctv1.jpg',
    service: '64-Channel CCTV System',
  },
  {
    title: 'Computer Hardware, Software & Printer Repair and Maintenance',
    location: 'Itahari – Biratnagar Corridor',
    year: '2023',
    scope: 'ISP / Telecom',
    desc: 'Computer Hardware, Software & Printer Repair and Maintenance provides troubleshooting, installation, upgrading, and maintenance services for computers and printers. It includes fixing hardware issues, software errors, virus removal, system optimization, printer setup, and regular maintenance to ensure smooth, reliable, and efficient performance for personal and business use.',
    tags: ['Laptop', 'Desktop', 'printer', 'EPABX', 'IP Phone', 'Fire Alarm', 'Projector'],
    img: '/home_img/hardware_repair.jpg',
    service: 'ISP Fiber Backbone Installation',
  },
];

function ProjectsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 section-fade">
          <div>
            <span className="inline-block px-3 py-1 bg-[#e8e7f8] text-[#0e0973] text-[11px] font-semibold rounded-full uppercase tracking-widest mb-5">
              Recent Work
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
            >
              Recently Completed Projects
            </h2>
            <p className="text-zinc-500 mt-3 text-base max-w-[50ch]">
              Real installations across Province No. 1, Nepal.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#0e0973] font-semibold text-sm shrink-0 hover:gap-3"
            style={{ transition: 'gap 150ms cubic-bezier(0.23,1,0.32,1)' }}
          >
            All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Zig-zag layout — NOT equal 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 section-fade">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-2xl overflow-hidden border border-zinc-100 hover:border-[#0e0973]/20 hover:shadow-[0_20px_40px_-15px_rgba(14,9,115,0.12)]"
              style={{ transition: 'border-color 200ms ease, box-shadow 200ms ease' }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ transition: 'transform 500ms cubic-bezier(0.23,1,0.32,1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full border border-white/20">
                    {p.scope}
                  </span>
                  <span className="px-2.5 py-1 bg-black/30 backdrop-blur-sm text-white/80 text-[11px] font-medium rounded-full">
                    {p.year}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-white/70 shrink-0" />
                  <span className="text-xs text-white/70 font-medium">{p.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-zinc-900 text-base mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 bg-[#e8e7f8] text-[#0e0973] text-[11px] font-semibold rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-4 py-2 bg-[#0e0973] text-white text-xs font-bold rounded-lg hover:bg-[#080659]"
                    style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background-color 120ms ease' }}
                    onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                    onMouseUp={e => (e.currentTarget.style.transform = '')}
                    onMouseLeave={e => (e.currentTarget.style.transform = '')}
                  >
                    View Details
                  </Link>
                  <a
                    href={waLink(`Hello, I am interested in a similar project: ${p.service}. Please provide a quote.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-zinc-200 text-zinc-600 text-xs font-semibold rounded-lg hover:border-[#0e0973] hover:text-[#0e0973]"
                    style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), border-color 120ms ease, color 120ms ease' }}
                    onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                    onMouseUp={e => (e.currentTarget.style.transform = '')}
                    onMouseLeave={e => (e.currentTarget.style.transform = '')}
                  >
                    Get Similar Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Trust / Clients Marquee ─────────────────────────────────────────────────

const clients = [
  { name: 'Model Hospital Biratnagar', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Morang District Court', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Koshi Engineering College', img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'NIC Asia Bank', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Biratnagar Customs Office', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Province Hospital No.1', img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Sunrise Bank Ltd.', img: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Biratnagar Municipality', img: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Nepal SBI Bank', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&h=120&q=60&auto=format&fit=crop' },
  { name: 'Laxmi Bank', img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=120&h=120&q=60&auto=format&fit=crop' },
];

function TrustMarquee() {
  const railRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const track = [...clients, ...clients];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const cardW = 192; // 172px card + 20px gap
    const halfLen = clients.length * cardW;
    const tick = () => {
      posRef.current += 0.45;
      if (posRef.current >= halfLen) posRef.current = 0;
      rail.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    const pause = () => cancelAnimationFrame(animRef.current);
    const resume = () => { animRef.current = requestAnimationFrame(tick); };
    rail.addEventListener('mouseenter', pause);
    rail.addEventListener('mouseleave', resume);
    return () => {
      cancelAnimationFrame(animRef.current);
      rail.removeEventListener('mouseenter', pause);
      rail.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <section className="py-16 bg-white border-y border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 section-fade">
        <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-widest text-center">
          Trusted by 100+ businesses across Province No. 1
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #f9fafb 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #f9fafb 0%, transparent 100%)' }} />
        <div className="overflow-hidden py-2">
          <div ref={railRef} className="flex gap-5 will-change-transform" style={{ width: 'max-content' }}>
            {track.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center gap-3 bg-white border border-zinc-100 rounded-xl px-4 py-3 hover:border-[#0e0973]/20 hover:shadow-sm cursor-default"
                style={{ width: 172, flexShrink: 0, transition: 'border-color 150ms ease, box-shadow 150ms ease' }}
              >
                <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-zinc-100 shrink-0">
                  <Image src={c.img} alt={c.name} fill sizes="36px" loading="lazy" className="object-cover" />
                </div>
                <span className="text-[11px] font-semibold text-zinc-600 leading-tight">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner — NO background image, pure brand color ──────────────────────

function CTASection() {
  const msg = encodeURIComponent('Hello, I would like to get a service quote from KB Tech Solution.');
  return (
    <section className="py-20 md:py-28 bg-[#0e0973]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="section-fade">
            <span className="inline-block px-3 py-1 bg-white/10 text-white/60 text-[11px] font-semibold rounded-full uppercase tracking-widest border border-white/15 mb-6">
              Free Consultation
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
            >
              Ready to Upgrade Your Network?
            </h2>
            <p className="text-white/55 text-base leading-relaxed max-w-[52ch]">
              Get a free site assessment and project quote. Our certified team covers Biratnagar, Itahari, Dharan, and surrounding areas of Province No. 1.
            </p>
          </div>

          <div className="flex flex-col gap-3 section-fade shrink-0">
            <a
              href={`https://wa.me/${WA}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#0e0973] font-bold rounded-xl text-sm hover:bg-zinc-50 whitespace-nowrap"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background-color 120ms ease' }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
              onMouseUp={e => (e.currentTarget.style.transform = '')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
            >
              <MessageCircle className="w-4 h-4" />
              Get a Free Quote
            </a>
            <a
              href="tel:+9779842129384"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white font-semibold rounded-xl text-sm hover:bg-white/8 hover:border-white/35 whitespace-nowrap"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), border-color 120ms ease, background-color 120ms ease' }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
              onMouseUp={e => (e.currentTarget.style.transform = '')}
              onMouseLeave={e => (e.currentTarget.style.transform = '')}
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

// ─── Root export ─────────────────────────────────────────────────────────────

export default function HomePage() {
  // Section fade-in on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.section-fade');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <StatsBar />
      <TrustMarquee />

      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      <CTASection />
    </>
  );
}
