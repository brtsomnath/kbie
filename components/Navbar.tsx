'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, X, Menu } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const WA_NUMBER = '9779842129384';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // GSAP mobile menu animation
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      if (!overlayRef.current) return;

      if (menuOpen) {
        document.body.style.overflow = 'hidden';
        gsap.fromTo(
          overlayRef.current,
          { y: '-100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.45, ease: 'power3.out' }
        );
        gsap.fromTo(
          '.mobile-nav-item',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.07, delay: 0.2, duration: 0.4, ease: 'power2.out' }
        );
      } else {
        document.body.style.overflow = '';
        gsap.to(overlayRef.current, {
          y: '-100%',
          opacity: 0,
          duration: 0.35,
          ease: 'power3.in',
        });
      }
    };
    loadGSAP();
  }, [menuOpen]);

  const callNowHref = `https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/images/logo.png"
                alt="KB Tech Solution"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
              <span
                className="text-[#0e0973] font-bold text-base leading-tight hidden sm:block"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                TECH SOLUTION
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === link.href
                      ? 'text-[#0e0973] bg-[#e8e7f8]'
                      : 'text-gray-600 hover:text-[#0e0973] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={callNowHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#0e0973] text-white text-sm font-semibold rounded-lg hover:bg-[#080659] transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#0e0973] transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-[#0e0973] flex flex-col lg:hidden"
        style={{ transform: 'translateY(-100%)', opacity: 0 }}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="KB Tech Solution"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-white font-bold text-base" style={{ fontFamily: 'Sora, sans-serif' }}>
              KB Tech Solution
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav-item text-white/90 hover:text-white text-2xl font-semibold py-3 border-b border-white/10 transition-colors"
              style={{ fontFamily: 'Sora, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={callNowHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-item mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0e0973] font-bold rounded-lg text-base w-fit"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        <div className="px-8 pb-10 text-white/40 text-sm">
          © 2026 KB Tech Solution
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
