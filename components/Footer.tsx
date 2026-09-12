import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const WA_NUMBER = '9779842129384';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080c2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/images/logo.png"
                  alt="KB Tech Solution"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="text-white font-bold text-base" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Tech Solution
                </span>
              </Link>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Professional network services, IT infrastructure, CCTV installation, and tech support in Biratnagar, Nepal.
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Products', href: '/products' },
                { label: 'Projects', href: '/projects' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Network Installation',
                'CCTV Systems',
                'VPN & Server Setup',
                'Wireless Networks',
                'Hardware Repair',
                'IT Support',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#6c63ff] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Biratnagar, Morang<br />Province No. 1, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6c63ff] shrink-0" />
                <a href="tel:+9779842129384" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +977 9842129384, 9709125012
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#6c63ff] shrink-0" />
                <a href="mailto:kbtechsolution@outlook.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  kbtechsolution@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#6c63ff] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Sun–Fri: 9:00 AM – 7:00 PM<br />
                  Sat: 10:00 AM – 3:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            {year} KB Tech Solution, All rights reserved.
          </p>
          {/* credits */}
          <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: atob('RGVzaWduZWQgJmFtcDsgRGV2ZWxvcGVkIGJ5IDxhIGhyZWY9Imh0dHBzOi8vYmlzaGF3YXJhai5jb20ubnAiIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiIHN0eWxlPSJjb2xvcjojNmM2M2ZmO3RleHQtZGVjb3JhdGlvbjpub25lIj5CaXNoYXdhIFJhajwvYT4=') }} />
        </div>
      </div>
    </footer>
  );
}
