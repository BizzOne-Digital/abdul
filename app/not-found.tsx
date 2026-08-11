import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-titan-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-9xl font-display font-bold text-titan-navy opacity-20 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-titan-navy mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-titan-steel mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Return Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
