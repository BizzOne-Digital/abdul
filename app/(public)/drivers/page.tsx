import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { Truck, DollarSign, Award, Shield, Users, MapPin } from 'lucide-react';

export const metadata = {
  title: 'CDL A Driver Opportunities | Titan Logistics LLC',
  description: 'Join the Titan Logistics team. CDL Class A driver positions available across the lower 48 states.',
};

export default function DriversPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <PageHero
        badge="Now Hiring CDL A Drivers"
        title="Drive With Titan"
        subtitle="Join our team of professional drivers and experience opportunities in freight transportation"
        bgClass="hero-bg-highway"
      >
        <Button href="#apply" variant="primary" size="lg">
          Apply Now
        </Button>
      </PageHero>

      {/* Why Drive With Us */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-titan-navy mb-12 text-center">
            Why Choose Titan Logistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Modern Equipment</h3>
              <p className="text-titan-steel">
                Drive well-maintained trucks and trailers with modern amenities
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Supportive Team</h3>
              <p className="text-titan-steel">
                24/7 dispatch support and a team that values its drivers
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Lower 48 Routes</h3>
              <p className="text-titan-steel">
                Various route options throughout the contiguous United States
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Professional Operation</h3>
              <p className="text-titan-steel">
                Work with a company committed to safety and professionalism
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Growth Opportunities</h3>
              <p className="text-titan-steel">
                Opportunities to advance your career in the transportation industry
              </p>
            </div>

            <div className="card-bento p-8 text-center">
              <div className="w-16 h-16 bg-titan-mint/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-titan-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">Consistent Work</h3>
              <p className="text-titan-steel">
                Steady freight opportunities across multiple service types
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-12 text-center">
              Basic Requirements
            </h2>
            <div className="card-bento rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-titan-blue text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-titan-navy mb-1">Valid CDL Class A</h3>
                    <p className="text-sm text-titan-steel">Current commercial driver's license required</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-titan-blue text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-titan-navy mb-1">Clean Driving Record</h3>
                    <p className="text-sm text-titan-steel">Good safety record and compliance history</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-titan-blue text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-titan-navy mb-1">Professional Attitude</h3>
                    <p className="text-sm text-titan-steel">Commitment to safety and customer service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-titan-blue text-xl">✓</span>
                  <div>
                    <h3 className="font-semibold text-titan-navy mb-1">Reliable Communication</h3>
                    <p className="text-sm text-titan-steel">Able to stay in contact with dispatch</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-titan-mint/30 rounded-2xl">
                <p className="text-sm text-titan-steel">
                  Specific qualifications and requirements will be discussed during the application process. 
                  We welcome experienced drivers from across the United States.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto card-bento rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-display font-bold text-titan-navy mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 text-titan-steel">
              Submit your application and a member of our team will contact you to discuss opportunities
            </p>
            <div className="card-bento rounded-2xl p-6 mb-8">
              <p className="text-sm text-titan-steel mb-4">For immediate inquiries, contact our recruiting team:</p>
              <div className="space-y-2">
                <a href="tel:402-326-8820" className="block font-bold text-lg text-titan-navy hover:text-titan-blue">
                  📞 402-326-8820
                </a>
                <a href="mailto:info@titan-llc.com" className="block font-bold text-lg text-titan-navy hover:text-titan-blue">
                  📧 info@titan-llc.com
                </a>
              </div>
            </div>
            <p className="text-sm text-titan-steel">
              Titan Logistics LLC is an equal opportunity employer. We welcome applications from all qualified candidates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
