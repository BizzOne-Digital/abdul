import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-clip w-full max-w-full">
      <Header />
      <main className="overflow-x-clip w-full max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
