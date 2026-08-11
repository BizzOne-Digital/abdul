export const metadata = {
  title: 'Blog | Titan Logistics LLC',
  description: 'News and insights from Titan Logistics.',
};

export default function BlogPage() {
  return (
    <div className="overflow-x-hidden w-full max-w-full">
      <section className="relative py-32 md:py-40 bg-gradient-titan text-white overflow-hidden">
        <div className="absolute inset-0 hero-bg-laptop bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-titan-midnight/95 via-titan-navy/90 to-titan-blue/70"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-titan-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-titan-blue/15 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold">Blog</h1>
            <p className="text-xl text-titan-off-white">
              News and insights from Titan Logistics
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-titan-steel">
            Blog posts are managed through the admin portal and will appear here once published.
          </p>
        </div>
      </section>
    </div>
  );
}
