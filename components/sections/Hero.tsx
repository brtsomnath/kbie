'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const WA_NUMBER = '9779842129384';

const slides = [
  {
    id: 'network',
    title: 'Enterprise Network Setup',
    subtitle: 'LAN · WAN · L2/L3 Switching',
    description:
      'Complete LAN/WAN design and deployment for offices, warehouses, and campuses. Cisco, MikroTik, and Sophos certified installations.',
    cta: 'Get Network Quote',
    service: 'Network Setup',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
  },
  {
    id: 'cctv',
    title: 'CCTV Installation',
    subtitle: 'IP Cameras · NVR · Remote Monitoring',
    description:
      'Professional surveillance systems for businesses and homes. HD cameras, NVR setup, and 24/7 remote monitoring capabilities.',
    cta: 'Get CCTV Quote',
    service: 'CCTV Installation',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80',
  },
  {
    id: 'hardware',
    title: 'Hardware Repair & Maintenance',
    subtitle: 'Laptops · Desktops · Servers',
    description:
      'Certified hardware diagnostics and repair for laptops, desktops, and servers. Fast turnaround with quality components.',
    cta: 'Get Repair Quote',
    service: 'Hardware Repair',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
  },
  {
    id: 'wireless',
    title: 'Wireless & Fiber Networks',
    subtitle: 'P2P Links · Fiber Optic · WiFi 6',
    description:
      'High-speed wireless bridging and fiber optic backbone installation for businesses requiring reliable, fast connectivity.',
    cta: 'Get Wireless Quote',
    service: 'Wireless & Fiber Network',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80',
  },
  {
    id: 'vpn',
    title: 'VPN & Server Solutions',
    subtitle: 'Firewall · VPN · Server Setup',
    description:
      'Secure VPN deployment, firewall configuration with Sophos, and server infrastructure setup for businesses of all sizes.',
    cta: 'Get VPN Quote',
    service: 'VPN & Server Setup',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
  },
  {
    id: 'fiber',
    title: 'Optical Fiber Cabling',
    subtitle: 'Single-mode · Multi-mode · FTTH',
    description:
      'End-to-end fiber optic installation and splicing for high-bandwidth enterprise networks and last-mile connectivity.',
    cta: 'Get Fiber Quote',
    service: 'Optical Fiber Installation',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&q=80',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 300);
    },
    [transitioning]
  );

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];
  const waMessage = encodeURIComponent(
    `Hello, I would like to get a quote for ${slide.service}.`
  );

  return (
    <section className="relative overflow-hidden" style={{ height: '80vh', minHeight: '520px' }}>
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${transitioning ? 'opacity-80' : 'opacity-100'}`}
      >
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl py-16">
          {/* Service badge */}
          <div
            className={`inline-block mb-4`}
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'opacity 250ms cubic-bezier(0.23,1,0.32,1), transform 250ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            <span className="px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold rounded-full tracking-wider uppercase border border-white/20">
              {slide.subtitle}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{
              fontFamily: 'Sora, sans-serif',
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 250ms cubic-bezier(0.23,1,0.32,1), transform 250ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            className="text-base md:text-lg text-white/75 mb-8 leading-relaxed max-w-xl"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 250ms 40ms cubic-bezier(0.23,1,0.32,1), transform 250ms 40ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            {slide.description}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3"
            style={{
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'opacity 250ms 80ms cubic-bezier(0.23,1,0.32,1), transform 250ms 80ms cubic-bezier(0.23,1,0.32,1)',
            }}
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0e0973] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-150 text-sm active:scale-[0.97]"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), background-color 150ms ease' }}
            >
              {slide.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white/80 hover:bg-white/10 transition-colors duration-150 text-sm active:scale-[0.97]"
              style={{ transition: 'transform 160ms cubic-bezier(0.23,1,0.32,1), border-color 150ms ease, background-color 150ms ease' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
