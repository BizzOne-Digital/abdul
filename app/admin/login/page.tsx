'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid credentials');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch (error) {
      setError('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-titan">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-titan-lg">
        <div className="text-center mb-8">
          <div className="text-3xl font-display font-bold text-titan-navy mb-2">TITAN</div>
          <div className="text-sm text-titan-steel mb-4">LOGISTICS LLC</div>
          <h1 className="text-2xl font-display font-bold text-titan-navy">Admin Portal</h1>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-titan-navy mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-titan-blue focus:border-transparent"
              placeholder="admin@titan-llc.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-titan-navy mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-titan-blue focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" variant="primary" fullWidth disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-titan-steel">
          <p>Default credentials:</p>
          <p className="font-mono text-xs mt-2">
            admin@titan-llc.com / TitanAdmin2026!
          </p>
          <p className="text-xs mt-2 text-titan-orange">
            (Visit /api/seed to initialize database)
          </p>
        </div>
      </div>
    </div>
  );
}
