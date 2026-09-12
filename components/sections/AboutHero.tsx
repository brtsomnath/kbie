'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'story',
    eyebrow: 'Est. 2004',
    title: 'Two Decades of\nBuilding Networks',
    description:
      'From a small hardware repair shop in Biratnagar to Province No. 1\'s most trusted IT infrastructure company — our story is built on honest work and technical precision.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
    stat: { value: '21+', label: 'Years in Business' },
  },
  {
    id: 'team',
    eyebrow: 'Our People',
    title: 'Certified Engineers,\nReal Expertise',
    description:
      'Our team holds certifications from Cisco, MikroTik, Sophos, Hikvision, and Ubiquiti. Every project is handled by engineers who know the equipment inside out.',
    image: '/abouthero/service-cctv-installation.jpg',
    stat: { value: '15+', label: 'Certified Engineers' },
  },
  {
    id: 'clients',
    eyebrow: 'Our Impact',
    title: '145+ Businesses\nTrust Our Work',
    description:
      'Hospitals, government offices, banks, colleges, and factories across Province No. 1 rely on the networks we designed and maintain.',
    image: '/abouthero/service.jpg',
    stat: { value: '145+', label: 'Active Clients' },
  },
  {
    id: 'projects',
    eyebrow: 'Track Record',
    title: '100+ Projects\nDelivered On Time',
    description:
      'From 12km fiber backbone runs to 128-channel CCTV systems — every project is documented, tested, and handed over with full support.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1600&q=80',
    stat: { value: '100+', label: 'Projects Completed' },
  },
];

export default function AboutHero() {
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
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '80vh', minHeight: '520px' }}
    >
      {/* Background Image */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${transitioning ? 'opacity-80' : 'opacity-100'}`}>
        <img
          src={slide.image}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-300 mb-4 ${
              transitioning ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold rounded-full tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 inline-block" />
              {slide.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight transition-all duration-300 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
            style={{ fontFamily: 'Sora, sans-serif', whiteSpace: 'pre-line' }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            className={`text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-8 transition-all duration-300 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {slide.description}
          </p>

          {/* Stat pill */}
          <div
            className={`inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 backdrop-blur-sm transition-all duration-300 ${
              transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {slide.stat.value}
            </span>
            <span className="text-white/60 text-sm">{slide.stat.label}</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
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
