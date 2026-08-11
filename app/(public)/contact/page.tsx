import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Button from '@/components/Button';

export const metadata = {
  title: 'Contact Us | Titan Logistics LLC',
  description: 'Get in touch with our dispatch team. Available 24/7 for your freight transportation needs.',
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-office bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-titan-midnight/95 via-titan-navy/90 to-titan-blue/80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-titan-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-titan-orange/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold">Get In Touch</h1>
            <p className="text-xl text-titan-off-white">
              Our dispatch team is available 24/7 to assist with your freight transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-display font-bold text-titan-navy mb-6">Contact Information</h2>
              <p className="text-titan-steel mb-8">
                Reach out to us for freight quotes, shipment inquiries, or general questions. Our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-titan-off-white rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Phone</h3>
                    <a href="tel:402-326-8820" className="text-titan-blue hover:underline text-lg font-semibold">
                      402-326-8820
                    </a>
                    <p className="text-sm text-titan-steel mt-1">Call us anytime</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-titan-off-white rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Email</h3>
                    <a href="mailto:dispatch@titan-llc.com" className="text-titan-blue hover:underline text-lg font-semibold">
                      dispatch@titan-llc.com
                    </a>
                    <p className="text-sm text-titan-steel mt-1">We'll respond promptly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-titan-off-white rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Hours</h3>
                    <p className="text-lg font-semibold text-titan-navy">24 hours a day</p>
                    <p className="text-sm text-titan-steel mt-1">7 days a week, 365 days a year</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-titan-off-white rounded-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-titan-blue rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Coverage</h3>
                    <p className="text-lg font-semibold text-titan-navy">Lower 48 States</p>
                    <p className="text-sm text-titan-steel mt-1">Contiguous United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-blue rounded-lg text-white">
                <h3 className="font-display font-bold text-xl mb-3">Need a Freight Quote?</h3>
                <p className="mb-4">Get a custom quote for your transportation needs in minutes.</p>
                <Button href="/quote" variant="primary">Request a Quote</Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-titan-lg p-8">
                <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-titan-navy mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-titan-navy mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" variant="primary" fullWidth>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
