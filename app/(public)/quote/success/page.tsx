import { CheckCircle } from 'lucide-react';
import Button from '@/components/Button';

export default function QuoteSuccessPage({
  searchParams,
}: {
  searchParams: { requestNumber?: string };
}) {
  const requestNumber = searchParams.requestNumber || 'PENDING';

  return (
    <div className="min-h-screen flex items-center justify-center bg-titan-off-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-titan-lg p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-display font-bold text-titan-navy mb-4">
            Quote Request Received!
          </h1>
          
          <p className="text-lg text-titan-steel mb-6">
            Thank you for your freight quote request. Our dispatch team will review your information and contact you shortly.
          </p>

          <div className="bg-titan-off-white rounded-lg p-6 mb-8">
            <p className="text-sm text-titan-steel mb-2">Your Request Number</p>
            <p className="text-3xl font-display font-bold text-titan-navy">{requestNumber}</p>
            <p className="text-sm text-titan-steel mt-2">
              Please reference this number in any communication regarding your quote
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="font-display font-bold text-xl text-titan-navy mb-4">
              What Happens Next?
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-titan-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-titan-steel">Our dispatch team reviews your shipment details</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-titan-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-titan-steel">We prepare a competitive quote for your freight</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-titan-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-titan-steel">A representative contacts you via your preferred method</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-titan-steel">
              Need immediate assistance? Call us at{' '}
              <a href="tel:402-326-8820" className="font-bold text-titan-blue hover:underline">
                402-326-8820
              </a>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/" variant="primary">
                Return to Homepage
              </Button>
              <Button href="/services" variant="outline">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
