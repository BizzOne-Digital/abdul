import Logo from './Logo';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-titan-mint border-t-titan-blue animate-spin" />
          <Logo height={40} linked={false} />
        </div>
        <div className="text-sm text-titan-steel">Loading...</div>
      </div>
    </div>
  );
}
