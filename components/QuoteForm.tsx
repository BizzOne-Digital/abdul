'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { US_STATES } from '@/lib/utils';

export default function QuoteForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Contact
    fullName: '',
    company: '',
    email: '',
    phone: '',
    preferredContactMethod: 'email' as 'email' | 'phone',
    customerType: 'shipper' as 'shipper' | 'broker' | 'other',
    
    // Shipment
    serviceType: '',
    commodity: '',
    freightClass: '',
    weight: '',
    palletCount: '',
    equipmentType: '',
    temperatureRequirements: '',
    specialHandling: '',
    
    // Pickup
    pickupCompany: '',
    pickupAddress: '',
    pickupCity: '',
    pickupState: '',
    pickupZip: '',
    pickupDate: '',
    pickupTimeWindow: '',
    
    // Delivery
    deliveryCompany: '',
    deliveryAddress: '',
    deliveryCity: '',
    deliveryState: '',
    deliveryZip: '',
    deliveryDate: '',
    deliveryTimeWindow: '',
    
    // Additional
    hasHazmat: false,
    needsTeamService: false,
    additionalStops: '0',
    notes: '',
  });

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      router.push(`/quote/success?requestNumber=${data.requestNumber}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-titan-navy">Step {step} of {totalSteps}</span>
          <span className="text-sm text-titan-steel">{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 bg-titan-off-white rounded-full overflow-hidden">
          <div
            className="h-full bg-titan-blue transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Step 1: Contact Information */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Company *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Preferred Contact Method *
              </label>
              <select
                required
                value={formData.preferredContactMethod}
                onChange={(e) => updateField('preferredContactMethod', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                I am a *
              </label>
              <select
                required
                value={formData.customerType}
                onChange={(e) => updateField('customerType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              >
                <option value="shipper">Shipper</option>
                <option value="broker">Broker</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Shipment Details */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Shipment Details</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Service Type *
              </label>
              <select
                required
                value={formData.serviceType}
                onChange={(e) => updateField('serviceType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              >
                <option value="">Select service</option>
                <option value="Dry Van">Dry Van</option>
                <option value="Refrigerated">Refrigerated</option>
                <option value="Flatbed">Flatbed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Equipment Type *
              </label>
              <input
                type="text"
                required
                value={formData.equipmentType}
                onChange={(e) => updateField('equipmentType', e.target.value)}
                placeholder="e.g., 53' Dry Van"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Commodity/Freight Description *
              </label>
              <input
                type="text"
                required
                value={formData.commodity}
                onChange={(e) => updateField('commodity', e.target.value)}
                placeholder="e.g., General Freight, Food Products"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Weight (lbs) *
              </label>
              <input
                type="number"
                required
                value={formData.weight}
                onChange={(e) => updateField('weight', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Number of Pallets/Pieces
              </label>
              <input
                type="number"
                value={formData.palletCount}
                onChange={(e) => updateField('palletCount', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Freight Class
              </label>
              <input
                type="text"
                value={formData.freightClass}
                onChange={(e) => updateField('freightClass', e.target.value)}
                placeholder="e.g., Class 50, 70"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Temperature Requirements
              </label>
              <input
                type="text"
                value={formData.temperatureRequirements}
                onChange={(e) => updateField('temperatureRequirements', e.target.value)}
                placeholder="e.g., 35-40°F"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Special Handling Requirements
              </label>
              <textarea
                value={formData.specialHandling}
                onChange={(e) => updateField('specialHandling', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="hazmat"
                checked={formData.hasHazmat}
                onChange={(e) => updateField('hasHazmat', e.target.checked)}
                className="w-5 h-5 text-titan-blue border-gray-300 rounded focus:ring-titan-blue"
              />
              <label htmlFor="hazmat" className="text-sm font-medium text-titan-navy">
                Hazmat materials
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="team"
                checked={formData.needsTeamService}
                onChange={(e) => updateField('needsTeamService', e.target.checked)}
                className="w-5 h-5 text-titan-blue border-gray-300 rounded focus:ring-titan-blue"
              />
              <label htmlFor="team" className="text-sm font-medium text-titan-navy">
                Team service needed
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Pickup & Delivery */}
      {step === 3 && (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Pickup Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-titan-navy mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.pickupCompany}
                  onChange={(e) => updateField('pickupCompany', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-titan-navy mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.pickupAddress}
                  onChange={(e) => updateField('pickupAddress', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">City *</label>
                <input
                  type="text"
                  required
                  value={formData.pickupCity}
                  onChange={(e) => updateField('pickupCity', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">State *</label>
                <select
                  required
                  value={formData.pickupState}
                  onChange={(e) => updateField('pickupState', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                >
                  <option value="">Select state</option>
                  {US_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">ZIP Code *</label>
                <input
                  type="text"
                  required
                  value={formData.pickupZip}
                  onChange={(e) => updateField('pickupZip', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">Pickup Date *</label>
                <input
                  type="date"
                  required
                  value={formData.pickupDate}
                  onChange={(e) => updateField('pickupDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-titan-navy mb-2">Pickup Time Window *</label>
                <input
                  type="text"
                  required
                  value={formData.pickupTimeWindow}
                  onChange={(e) => updateField('pickupTimeWindow', e.target.value)}
                  placeholder="e.g., 8:00 AM - 12:00 PM"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Delivery Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-titan-navy mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.deliveryCompany}
                  onChange={(e) => updateField('deliveryCompany', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-titan-navy mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.deliveryAddress}
                  onChange={(e) => updateField('deliveryAddress', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">City *</label>
                <input
                  type="text"
                  required
                  value={formData.deliveryCity}
                  onChange={(e) => updateField('deliveryCity', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">State *</label>
                <select
                  required
                  value={formData.deliveryState}
                  onChange={(e) => updateField('deliveryState', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                >
                  <option value="">Select state</option>
                  {US_STATES.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">ZIP Code *</label>
                <input
                  type="text"
                  required
                  value={formData.deliveryZip}
                  onChange={(e) => updateField('deliveryZip', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-titan-navy mb-2">Delivery Date *</label>
                <input
                  type="date"
                  required
                  value={formData.deliveryDate}
                  onChange={(e) => updateField('deliveryDate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-titan-navy mb-2">Delivery Time Window *</label>
                <input
                  type="text"
                  required
                  value={formData.deliveryTimeWindow}
                  onChange={(e) => updateField('deliveryTimeWindow', e.target.value)}
                  placeholder="e.g., 8:00 AM - 5:00 PM"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: Additional Information */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-display font-bold text-titan-navy mb-6">Additional Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-titan-navy mb-2">
                Additional Stops
              </label>
              <input
                type="number"
                min="0"
                value={formData.additionalStops}
                onChange={(e) => updateField('additionalStops', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-titan-navy mb-2">
              Additional Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              rows={5}
              placeholder="Any additional information about your shipment..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-titan-blue"
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
        {step > 1 && (
          <Button
            type="button"
            onClick={() => setStep(step - 1)}
            variant="outline"
          >
            Previous
          </Button>
        )}
        
        {step < totalSteps ? (
          <Button
            type="button"
            onClick={() => setStep(step + 1)}
            variant="primary"
            className="ml-auto"
          >
            Next Step
          </Button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="ml-auto"
          >
            {loading ? 'Submitting...' : 'Submit Quote Request'}
          </Button>
        )}
      </div>
    </form>
  );
}
