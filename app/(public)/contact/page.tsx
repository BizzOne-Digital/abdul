import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Contact Us | Titan Logistics LLC',
  description: 'Get in touch with our dispatch team. Available 24/7 for your freight transportation needs.',
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        title="Get In Touch"
        subtitle="Our dispatch team is available 24/7 to assist with your freight transportation needs"
        bgClass="hero-bg-office"
      />

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
                <div className="flex items-start space-x-4 p-6 card-bento">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
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

                <div className="flex items-start space-x-4 p-6 card-bento">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Email</h3>
                    <a href="mailto:info@titan-llc.com" className="text-titan-blue hover:underline text-lg font-semibold">
                      info@titan-llc.com
                    </a>
                    <p className="text-sm text-titan-steel mt-1">We'll respond promptly</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 card-bento">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Hours</h3>
                    <p className="text-lg font-semibold text-titan-navy">24 hours a day</p>
                    <p className="text-sm text-titan-steel mt-1">7 days a week, 365 days a year</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 card-bento">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-warm rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-titan-navy mb-1">Coverage</h3>
                    <p className="text-lg font-semibold text-titan-navy">Lower 48 States</p>
                    <p className="text-sm text-titan-steel mt-1">Contiguous United States</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 card-bento">
                <h3 className="font-display font-bold text-xl text-titan-navy mb-3">Need a Freight Quote?</h3>
                <p className="text-titan-steel mb-4">Get a custom quote for your transportation needs in minutes.</p>
                <Button href="/quote" variant="primary">Request a Quote</Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-bento rounded-3xl p-8">
                <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
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
                        className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-titan-navy mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-titan-navy mb-2">Subject *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-titan-navy mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
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
