'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const clients = [
  {
    name: 'Biratnagar Customs Office',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Model Hospital Biratnagar',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Province Hospital No.1',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Morang District Court',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Koshi Engineering College',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Sunrise Bank Ltd.',
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'NIC Asia Bank',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Laxmi Bank',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'National Life Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Nepal SBI Bank',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Biratnagar Municipality',
    image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Itahari Sub-Metropolitan',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Mechi Koshi Trading',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Eastern Star Pvt. Ltd.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Himalaya Traders',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Green Valley School',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=120&h=120&fit=crop&q=80',
  },
  {
    name: "Budhanilkantha School",
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=120&fit=crop&q=80',
  },
  {
    name: 'Biratnagar Int\'l Airport',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=120&h=120&fit=crop&q=80',
  },
];

// Duplicate for seamless infinite scroll
const track = [...clients, ...clients];

export default function TrustSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    // card width + gap = 176 + 20 = 196px
    const cardW = 196;
    const halfLen = clients.length * cardW;

    const tick = () => {
      posRef.current += 0.5;
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
    <section className="py-14 md:py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 section-fade">
          <div className="inline-block px-3 py-1 bg-[#e8e7f8] text-[#0e0973] text-xs font-semibold rounded-full mb-4 uppercase tracking-wider">
            Our Clients
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
            Trusted by 100+ Businesses
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            From government offices to private enterprises, we have delivered reliable IT solutions across Province No. 1.
          </p>
        </div>
      </div>

      {/* Slider — full bleed */}
      <div className="relative">
        {/* Cloud fade — left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)',
          }}
        />
        {/* Cloud fade — right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0) 100%)',
          }}
        />

        {/* Rail */}
        <div className="overflow-hidden py-4">
          <div
            ref={railRef}
            className="flex gap-5 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {track.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex flex-col items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#0e0973] hover:shadow-md transition-all duration-300 cursor-default"
                style={{ width: '176px', flexShrink: 0 }}
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center leading-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center section-fade">
        <p className="text-sm text-gray-400">
          Join 100+ businesses across Biratnagar and Province No. 1 who trust KB Tech Solution.
        </p>
      </div>
    </section>
  );
}
