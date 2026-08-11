import Button from '@/components/Button';
import { Truck, Thermometer, Package, Shield, Clock, MapPin, Phone, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-truck bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-titan-midnight/90 via-titan-navy/85 to-titan-blue/70"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-titan-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-titan-orange/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-titan-blue/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Hexagonal Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0l25.98 15v30L30 60 4.02 45V15z\' fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'1\'/%3E%3C/svg%3E")' }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-1 bg-titan-blue/20 border border-titan-blue/40 rounded-full text-sm font-semibold mb-4">
              Available 24/7 • Lower 48 Coverage
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight break-words">
              Secure, Efficient, and Trackable Transport Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-titan-off-white max-w-2xl mx-auto break-words">
              General freight transportation across the lower 48 states, specializing in dry van, refrigerated, and flatbed solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button href="/quote" variant="primary" size="lg">
                Request a Freight Quote
              </Button>
              <Button href="/services" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-titan-navy">
                Explore Our Services
              </Button>
            </div>
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm">
              <div>
                <div className="font-display text-2xl font-bold">24/7</div>
                <div className="text-titan-off-white">Dispatch Available</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div>
                <div className="font-display text-2xl font-bold">48</div>
                <div className="text-titan-off-white">States Covered</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div>
                <div className="font-display text-2xl font-bold">3</div>
                <div className="text-titan-off-white">Service Types</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-titan-navy mb-4">
              Your Freight Solution Starts Here
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Whether you're shipping, brokering, or driving, we have the right solution for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-titan text-center hover:shadow-titan-lg hover-lift transition-all duration-300 animate-fade-up stagger-1">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:bg-titan-blue/20">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">I Need to Ship Freight</h3>
              <p className="text-titan-steel mb-4">Get a custom quote for your transportation needs</p>
              <Button href="/quote" variant="primary">Request Quote</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-titan text-center hover:shadow-titan-lg hover-lift transition-all duration-300 animate-fade-up stagger-2">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:bg-titan-blue/20">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">I'm a Broker</h3>
              <p className="text-titan-steel mb-4">Partner with us for reliable capacity</p>
              <Button href="/quote" variant="primary">Get Started</Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-titan text-center hover:shadow-titan-lg hover-lift transition-all duration-300 animate-fade-up stagger-3">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:bg-titan-blue/20">
                <span className="text-3xl">🚛</span>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">I'm a CDL A Driver</h3>
              <p className="text-titan-steel mb-4">Join our team of professional drivers</p>
              <Button href="/drivers" variant="primary">View Opportunities</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mb-4">
              Transportation Solutions
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Professional freight services across the lower 48 states with 24/7 dispatch support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dry Van */}
            <div className="group bg-white rounded-lg shadow-titan hover:shadow-titan-lg transition-all duration-500 overflow-hidden hover-lift animate-fade-up stagger-1">
              <div className="h-64 bg-gradient-titan relative overflow-hidden">
                <div className="absolute inset-0 bg-cargo bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Truck className="w-20 h-20 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-titan-navy mb-3">
                  Dry Van Transportation
                </h3>
                <p className="text-titan-steel mb-6">
                  Secure enclosed trailer transportation for general freight and temperature-sensitive goods. Perfect for palletized freight with weather protection.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Protected from elements
                  </li>
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Palletized freight ideal
                  </li>
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    53' standard trailers
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-titan-blue hover:text-titan-navy font-semibold inline-flex items-center group/link"
                >
                  Learn More
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Refrigerated */}
            <div className="group bg-white rounded-lg shadow-titan hover:shadow-titan-lg transition-all duration-500 overflow-hidden hover-lift animate-fade-up stagger-2">
              <div className="h-64 bg-gradient-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-shipping-containers bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Thermometer className="w-20 h-20 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-titan-navy mb-3">
                  Refrigerated Transport
                </h3>
                <p className="text-titan-steel mb-6">
                  Temperature-controlled transportation for perishables requiring precise climate management. Food, pharmaceuticals, and sensitive goods.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Temperature monitoring
                  </li>
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Food-grade compliance
                  </li>
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Perishable goods safe
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-titan-blue hover:text-titan-navy font-semibold inline-flex items-center group/link"
                >
                  Learn More
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>

            {/* Flatbed */}
            <div className="group bg-white rounded-lg shadow-titan hover:shadow-titan-lg transition-all duration-500 overflow-hidden hover-lift animate-fade-up stagger-3">
              <div className="h-64 bg-gradient-titan relative overflow-hidden">
                <div className="absolute inset-0 bg-loading-dock bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Package className="w-20 h-20 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-titan-navy mb-3">
                  Flatbed Solutions
                </h3>
                <p className="text-titan-steel mb-6">
                  Open-deck transportation for oversized, heavy, or uniquely shaped freight. Construction equipment, steel, machinery, and large components.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Oversized loads
                  </li>
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Heavy equipment
                  </li>
                  <li className="flex items-center text-sm text-titan-steel">
                    <CheckCircle className="w-5 h-5 text-titan-blue mr-2 flex-shrink-0" />
                    Professional securement
                  </li>
                </ul>
                <Link
                  href="/services"
                  className="text-titan-blue hover:text-titan-navy font-semibold inline-flex items-center group/link"
                >
                  Learn More
                  <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mb-4">
              Why Choose Titan Logistics
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Professional freight transportation with reliability and service excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-1">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-titan-blue/20">
                <Shield className="w-8 h-8 text-titan-blue transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">
                Secure Transportation
              </h3>
              <p className="text-titan-steel">
                Professional handling and secure transport of your freight from pickup to delivery with full cargo insurance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-2">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-titan-blue/20">
                <Clock className="w-8 h-8 text-titan-blue transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">
                24/7 Dispatch Support
              </h3>
              <p className="text-titan-steel">
                Round-the-clock availability with responsive dispatch team ready to support your transportation needs anytime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-3">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-titan-blue/20">
                <MapPin className="w-8 h-8 text-titan-blue transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">
                Lower 48 Coverage
              </h3>
              <p className="text-titan-steel">
                Comprehensive service throughout all contiguous United States with reliable pickup and delivery schedules.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-4">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-titan-blue/20">
                <Truck className="w-8 h-8 text-titan-blue transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">
                Modern Equipment
              </h3>
              <p className="text-titan-steel">
                Well-maintained trucks and trailers with GPS tracking for reliable transportation and real-time visibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-5">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-titan-blue/20">
                <CheckCircle className="w-8 h-8 text-titan-blue transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">
                Professional Drivers
              </h3>
              <p className="text-titan-steel">
                Experienced CDL-A drivers with clean safety records and commitment to on-time, damage-free deliveries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover-lift hover-glow transition-all duration-300 animate-fade-up stagger-6">
              <div className="w-16 h-16 bg-titan-blue/10 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-titan-blue/20">
                <Phone className="w-8 h-8 text-titan-blue transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-display font-bold text-titan-navy mb-3">
                Responsive Communication
              </h3>
              <p className="text-titan-steel">
                Clear, timely updates throughout the shipping process with dedicated support for questions and concerns.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/about" variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-map bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mb-6">
                  Coast to Coast Coverage
                </h2>
                <p className="text-lg text-titan-steel mb-8">
                  Titan Logistics provides professional freight transportation throughout the lower 48 states. From the East Coast to the West Coast, from the Gulf to the Great Lakes, we deliver your freight safely and on time.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-titan-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-titan-navy mb-1">All Contiguous States</h4>
                      <p className="text-titan-steel">Complete coverage across the lower 48 United States</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-titan-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-titan-navy mb-1">Major Routes & Lanes</h4>
                      <p className="text-titan-steel">Efficient routing on primary interstate highways and regional routes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-titan-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-display font-bold text-titan-navy mb-1">Flexible Scheduling</h4>
                      <p className="text-titan-steel">Pickup and delivery scheduled to meet your business needs</p>
                    </div>
                  </div>
                </div>
                <Button href="/coverage" variant="primary" size="lg">
                  View Coverage Details
                </Button>
              </div>

              <div className="bg-gradient-titan p-8 rounded-lg text-white">
                <div className="text-center">
                  <div className="text-7xl font-display font-bold mb-4">48</div>
                  <p className="text-2xl font-display mb-8">States Covered</p>
                  
                  <div className="grid grid-cols-2 gap-6 text-left">
                    <div>
                      <div className="text-3xl font-display font-bold mb-2">24/7</div>
                      <p className="text-titan-off-white text-sm">Dispatch Available</p>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold mb-2">3</div>
                      <p className="text-titan-off-white text-sm">Service Types</p>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold mb-2">100%</div>
                      <p className="text-titan-off-white text-sm">Lower 48 Coverage</p>
                    </div>
                    <div>
                      <div className="text-3xl font-display font-bold mb-2">∞</div>
                      <p className="text-titan-off-white text-sm">Routes Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 bg-titan-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mb-4">
              Simple Shipping Process
            </h2>
            <p className="text-lg text-titan-steel max-w-2xl mx-auto">
              Get your freight moving in four easy steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover-lift transition-all duration-300 animate-fade-up stagger-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-titan text-white rounded-lg flex items-center justify-center font-display font-bold text-xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-titan-navy mb-2">
                      Request a Quote
                    </h3>
                    <p className="text-titan-steel">
                      Fill out our simple quote form with your freight details, pickup location, and delivery destination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover-lift transition-all duration-300 animate-fade-up stagger-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-titan text-white rounded-lg flex items-center justify-center font-display font-bold text-xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-titan-navy mb-2">
                      Get Competitive Pricing
                    </h3>
                    <p className="text-titan-steel">
                      Our dispatch team reviews your needs and provides a competitive quote with transparent pricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover-lift transition-all duration-300 animate-fade-up stagger-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-titan text-white rounded-lg flex items-center justify-center font-display font-bold text-xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-titan-navy mb-2">
                      Schedule Pickup
                    </h3>
                    <p className="text-titan-steel">
                      Once approved, we schedule pickup at your convenience and assign a professional driver to your load.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover-lift transition-all duration-300 animate-fade-up stagger-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-titan text-white rounded-lg flex items-center justify-center font-display font-bold text-xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-titan-navy mb-2">
                      Track & Deliver
                    </h3>
                    <p className="text-titan-steel">
                      Monitor your shipment with real-time updates and receive confirmation upon safe delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button href="/quote" variant="primary" size="lg">
              Start Your Shipment Now
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-titan text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Ship Your Freight?
          </h2>
          <p className="text-xl mb-8 text-titan-off-white">
            Contact our dispatch team 24/7 at <a href="tel:402-326-8820" className="font-bold hover:underline">402-326-8820</a>
          </p>
          <Button href="/quote" variant="primary" size="lg">
            Request a Quote Now
          </Button>
        </div>
      </section>
    </div>
  );
}
