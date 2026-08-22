'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSuccess(true);
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-bento rounded-3xl p-8">
      <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Send Us a Message</h2>

      {success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl text-sm">
          Thank you! Your message was sent. Our team will get back to you soon.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-titan-navy mb-2">Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-titan-navy mb-2">Company</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => update('company', e.target.value)}
              className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
              placeholder="Company name"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-titan-navy mb-2">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-titan-navy mb-2">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-titan-navy mb-2">Subject *</label>
          <input
            type="text"
            required
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
            className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
            placeholder="How can we help?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-titan-navy mb-2">Message *</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className="w-full px-4 py-3 border border-stone-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-titan-blue"
            placeholder="Tell us about your needs..."
          />
        </div>

        <Button type="submit" variant="primary" fullWidth disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
}
