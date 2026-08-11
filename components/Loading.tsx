export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-titan">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-titan-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white">
          <div className="text-2xl font-display font-bold mb-2">TITAN</div>
          <div className="text-sm text-titan-off-white">Loading...</div>
        </div>
      </div>
    </div>
  );
}
