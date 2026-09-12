import { Shield, Zap, Users, Clock } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Clients Served', icon: Users },
  { value: '21+', label: 'Years Experience', icon: Clock },
  { value: '24/7', label: 'Support Available', icon: Zap },
  { value: '150+', label: 'Projects Completed', icon: Shield },
];

const brands = ['Cisco', 'MikroTik', 'Sophos', 'Hikvision', 'Dahua', 'TP-Link', 'Ubiquiti', 'Dell'];

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-[#0e0973]">
      {/* Real image bg with overlay */}
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-10"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <div className="section-fade">
            <div className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold rounded-full mb-5 uppercase tracking-wider border border-white/20">
              About KB Tech Solution
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Province No. 1's Most Trusted IT Partner
            </h2>
            <p className="text-white/70 leading-relaxed mb-4 text-base">
              KB Tech Solution is a professional IT infrastructure company based in Biratnagar, Nepal. Since 2004, we've designed and deployed enterprise-grade networks, CCTV systems, VPN setups, and server infrastructure for 145+ businesses.
            </p>
            <p className="text-white/60 leading-relaxed mb-8 text-sm">
              From small office setups to large-scale hospital and government deployments — our certified team delivers reliable solutions using Sophos, Cisco, MikroTik, Hikvision, and Ubiquiti.
            </p>

            {/* Brands */}
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                Authorized Partners
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 bg-white/10 text-white/80 text-xs font-semibold rounded-md border border-white/15"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="section-fade">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white/10 border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200 group"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div
                      className="text-4xl font-bold text-white mb-1"
                      style={{ fontFamily: 'Sora, sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-white/60">
                <span className="font-semibold text-white/90">Service Areas:</span>{' '}
                Biratnagar, Itahari, Dharan, Inaruwa, Rajbiraj, and surrounding districts of Province No. 1, Nepal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
