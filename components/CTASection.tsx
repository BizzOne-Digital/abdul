import Button from './Button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CTASection({
  title,
  description,
  primaryHref = '/quote',
  primaryLabel = 'Request a Quote',
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-sunset bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/85 to-titan-navy/70" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{title}</h2>
        <p className="text-xl mb-10 text-white/70 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryHref} variant="primary" size="lg">{primaryLabel}</Button>
          {secondaryHref && secondaryLabel && (
            <Button href={secondaryHref} variant="hero-ghost" size="lg">{secondaryLabel}</Button>
          )}
        </div>
      </div>
    </section>
  );
}
