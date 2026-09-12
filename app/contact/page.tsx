import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | KB Tech Solution',
  description:
    'Contact KB Tech Solution in Biratnagar, Nepal for network services, CCTV, IT support quotes. Call, WhatsApp, or fill out our form.',
};

const WA_NUMBER = '9779842129384';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Biratnagar, Morang\nProvince No. 1, Nepal',
    link: 'https://maps.google.com/?q=Biratnagar+Nepal',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977 9842129384',
    link: 'tel:+9779842129384',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@kbts.com.np',
    link: 'mailto:info@kbts.com.np',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sun – Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 3:00 PM',
    link: null,
  },
];

export default function ContactPage() {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    'Hello, I would like to get in touch with KB Tech Solution.'
  )}`;

  return (
    <div>
      {/* Page Header */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs font-semibold rounded-full mb-4 uppercase tracking-wider border border-white/20">
            Get In Touch
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Contact Us
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl">
            Reach out for a free consultation, project quote, or any technical inquiries. We respond within one business day.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 mb-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 section-fade">
              <h2
                className="text-xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Contact Information
              </h2>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#e8e7f8] rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#0e0973]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-700 font-medium whitespace-pre-line">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.link ? (
                    <a
                      key={item.label}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span
                    className="font-semibold text-green-800 text-sm"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Fastest Response via WhatsApp
                  </span>
                </div>
                <p className="text-xs text-green-700 mb-3">
                  For urgent inquiries or quick quotes, message us directly on WhatsApp for faster response.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-bold rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3 section-fade">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
                <h2
                  className="text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Send Us a Message
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Fill in the form below and we will prepare a tailored proposal for your requirements.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Full-width map */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm section-fade">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.1438253985384!2d87.27658167548626!3d26.451092479775888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7514bb2f1cb7%3A0x45467ea69ede0c4b!2sKB%20TECH%20SOLUTION!5e0!3m2!1sen!2snp!4v1774019016317!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KB Tech Solution Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ quick strip */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-fade">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                q: 'How fast do you respond to inquiries?',
                a: 'We respond to all form submissions and WhatsApp messages within 4 business hours during working days.',
              },
              {
                q: 'Do you provide free site assessments?',
                a: 'Yes, for projects within Biratnagar, we offer a complimentary site visit and network assessment before quoting.',
              },
              {
                q: 'Do you work outside Biratnagar?',
                a: 'Yes, we cover Itahari, Dharan, Inaruwa, and project-based visits to other areas in Province No. 1.',
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white border border-gray-100 rounded-xl p-5"
              >
                <h3
                  className="text-sm font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
