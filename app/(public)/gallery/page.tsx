export const metadata = {
  title: 'Gallery | Titan Logistics LLC',
  description: 'View our fleet and operations.',
};

export default function GalleryPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-fleet bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-titan-midnight/95 via-titan-navy/90 to-titan-blue/75"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/3 w-80 h-80 bg-titan-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-titan-orange/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold">Gallery</h1>
            <p className="text-xl text-titan-off-white">
              Our fleet and operations
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-titan-steel">
            Gallery images are managed through the admin portal and will appear here once uploaded.
          </p>
        </div>
      </section>
    </div>
  );
}
