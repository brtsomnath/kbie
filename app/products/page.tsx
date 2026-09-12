import type { Metadata } from 'next';
import { ArrowRight, Check, Laptop, Camera, Network, Activity, Wrench } from 'lucide-react';
import SoftwareShowcase from '@/components/sections/SoftwareShowcase';

export const metadata: Metadata = {
  title: 'Products | KB Tech Solution',
  description:
    'Laptops, CCTV systems, medical equipment, network gear, and accessories available in Biratnagar, Nepal. Order via WhatsApp.',
};

const WA_NUMBER = '9779842129384';

const products = [
  {
    category: 'Laptops & Computers',
    Icon: Laptop,
    items: [
      {
        name: 'Business Laptops',
        description: 'Dell, HP, Lenovo ThinkPad laptops for enterprise and office use.',
        priceRange: 'NPR 45,000 – 1,50,000',
        features: ['Intel Core i5/i7/i9', 'SSD Storage', 'Windows 11 Pro', '1-Year Warranty'],
      },
      {
        name: 'Desktop Workstations',
        description: 'Custom-built desktops for CAD, accounting, and general business use.',
        priceRange: 'NPR 35,000 – 1,20,000',
        features: ['Intel / AMD Processors', 'Upgradeable RAM & Storage', 'UPS Compatible', 'Windows or Linux'],
      },
    ],
  },
  {
    category: 'CCTV Surveillance Security',
    Icon: Camera,
    items: [
      {
        name: 'IP Camera Kits',
        description: 'Hikvision and Dahua HD IP cameras with NVR for complete surveillance packages.',
        priceRange: 'NPR 15,000 – 2,00,000',
        features: ['2MP / 4MP / 8MP Resolution', 'Night Vision', 'Remote Viewing App', 'PoE Support'],
      },
      {
        name: 'PTZ & Dome Cameras',
        description: 'Pan-tilt-zoom and dome cameras for wide-area coverage and indoor monitoring.',
        priceRange: 'NPR 12,000 – 80,000',
        features: ['360° Coverage', 'Auto-Tracking', 'IR Night Vision', 'Weatherproof (IP67)'],
      },
    ],
  },
  {
    category: 'Network Equipment',
    Icon: Network,
    items: [
      {
        name: 'MikroTik Routers & Switches',
        description: 'RouterOS-based routers and managed switches for enterprise networking.',
        priceRange: 'NPR 5,000 – 80,000',
        features: ['RouterOS Licensed', 'VLAN Support', 'BGP / OSPF Ready', 'PoE Models Available'],
      },
      {
        name: 'Cisco Switches',
        description: 'Cisco Catalyst and Meraki managed switches for reliable enterprise LAN.',
        priceRange: 'NPR 20,000 – 3,00,000',
        features: ['24/48 Port Options', 'PoE+ Support', 'VLAN & QoS', 'Lifetime Warranty (select models)'],
      },
      {
        name: 'Sophos Firewalls',
        description: 'Next-generation firewalls with UTM for comprehensive network security.',
        priceRange: 'NPR 30,000 – 5,00,000',
        features: ['IPS / IDS', 'SSL VPN', 'Web Filtering', 'Centralized Management'],
      },
      {
        name: 'Ubiquiti Access Points',
        description: 'UniFi enterprise wireless access points for seamless indoor and outdoor WiFi.',
        priceRange: 'NPR 8,000 – 60,000',
        features: ['WiFi 6 Support', 'Centralized Controller', 'PoE Powered', 'Multi-SSID Support'],
      },
    ],
  },
  {
    category: 'Medical Equipment',
    Icon: Activity,
    items: [
      {
        name: 'Patient Monitoring Systems',
        description: 'Bedside patient monitors with ECG, SpO2, and vital sign tracking for clinics and hospitals.',
        priceRange: 'NPR 80,000 – 5,00,000',
        features: ['ECG Monitoring', 'SpO2 & NIBP', 'Touch Display', 'Nurse Call Integration'],
      },
      {
        name: 'Hospital Networking Equipment',
        description: 'Medical-grade network switches and wireless systems for healthcare environments.',
        priceRange: 'NPR 25,000 – 2,00,000',
        features: ['Medical Grade EMI Shielding', 'HIPAA Compliant Setup', 'Redundant Power', '24/7 Uptime'],
      },
    ],
  },
  {
    category: 'Accessories & Cables',
    Icon: Wrench,
    items: [
      {
        name: 'Structured Cabling Supplies',
        description: 'Cat6 / Cat6A cables, patch panels, keystones, and cable management accessories.',
        priceRange: 'NPR 500 – 50,000',
        features: ['Cat6 / Cat6A / Fiber', 'Bulk Rolls & Cut Lengths', 'Keystone Jacks', 'Cable Trays'],
      },
      {
        name: 'UPS & Power Equipment',
        description: 'APC and Luminous UPS systems for servers, workstations, and network equipment.',
        priceRange: 'NPR 5,000 – 1,50,000',
        features: ['600VA – 10KVA Range', 'Pure Sine Wave Output', 'AVR Technology', 'LCD Display'],
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider border border-white/20">
            Products
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            IT Products & Equipment
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Genuine hardware from trusted brands — available for supply and installation in Biratnagar and surrounding areas.
          </p>
        </div>
      </section>

      {/* Software section */}
      <SoftwareShowcase />

      {/* Hardware Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {products.map((category) => {
            const Icon = category.Icon;
            return (
            <div key={category.category} className="section-fade">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7 border-b border-gray-100 pb-4">
                <div className="w-9 h-9 bg-[#e8e7f8] rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#0e0973]" />
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold text-gray-900"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {category.category}
                </h2>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((product) => {
                  const waMessage = encodeURIComponent(
                    `Hello, I would like to order / get a quote for ${product.name}.`
                  );
                  return (
                    <div
                      key={product.name}
                      className="bg-white border border-gray-100 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-[#0e0973] transition-all duration-300 flex flex-col"
                    >
                      <h3
                        className="text-base font-semibold text-gray-900 mb-2"
                        style={{ fontFamily: 'Sora, sans-serif' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3 flex-1">{product.description}</p>

                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                          Price Range
                        </span>
                        <p className="text-sm font-bold text-[#0e0973] mt-0.5">{product.priceRange}</p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1.5 mb-5">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                            <Check className="w-3.5 h-3.5 text-[#0e0973] shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      {/* Buttons */}
                      <div className="flex flex-col gap-2">
                        <a
                          href={`https://wa.me/${WA_NUMBER}?text=${waMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0e0973] text-white text-sm font-semibold rounded-lg hover:bg-[#080659] transition-colors"
                        >
                          Order Now
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                            `Hello, I need more details about ${product.name}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:border-[#0e0973] hover:text-[#0e0973] transition-colors"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* Note */}
      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center section-fade">
          <p className="text-sm text-gray-500">
            Prices shown are indicative ranges and may vary based on specifications, quantity, and availability.{' '}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                'Hello, I would like a product price quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0e0973] font-semibold hover:underline"
            >
              Contact us on WhatsApp
            </a>{' '}
            for accurate pricing and bulk discounts.
          </p>
        </div>
      </section>
    </div>
  );
}
