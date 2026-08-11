import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IQuoteRequest extends Document {
  requestNumber: string;
  
  // Contact
  fullName: string;
  company: string;
  email: string;
  phone: string;
  preferredContactMethod: 'email' | 'phone';
  customerType: 'shipper' | 'broker' | 'other';

  // Shipment
  serviceType: string;
  commodity: string;
  freightClass?: string;
  weight: number;
  palletCount?: number;
  equipmentType: string;
  temperatureRequirements?: string;
  specialHandling?: string;

  // Pickup
  pickupCompany: string;
  pickupAddress: string;
  pickupCity: string;
  pickupState: string;
  pickupZip: string;
  pickupDate: Date;
  pickupTimeWindow: string;

  // Delivery
  deliveryCompany: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryState: string;
  deliveryZip: string;
  deliveryDate: Date;
  deliveryTimeWindow: string;

  // Additional
  hasHazmat: boolean;
  needsTeamService: boolean;
  additionalStops: number;
  notes?: string;
  documents: string[];

  // Admin
  status: 'new' | 'reviewing' | 'contacted' | 'quoted' | 'won' | 'lost' | 'archived';
  internalNotes?: string;
  followUpDate?: Date;
  assignedTo?: string;

  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema = new Schema<IQuoteRequest>(
  {
    requestNumber: { type: String, required: true, unique: true },
    
    fullName: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    preferredContactMethod: { type: String, enum: ['email', 'phone'], default: 'email' },
    customerType: { type: String, enum: ['shipper', 'broker', 'other'], required: true },

    serviceType: { type: String, required: true },
    commodity: { type: String, required: true },
    freightClass: { type: String },
    weight: { type: Number, required: true },
    palletCount: { type: Number },
    equipmentType: { type: String, required: true },
    temperatureRequirements: { type: String },
    specialHandling: { type: String },

    pickupCompany: { type: String, required: true },
    pickupAddress: { type: String, required: true },
    pickupCity: { type: String, required: true },
    pickupState: { type: String, required: true },
    pickupZip: { type: String, required: true },
    pickupDate: { type: Date, required: true },
    pickupTimeWindow: { type: String, required: true },

    deliveryCompany: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    deliveryCity: { type: String, required: true },
    deliveryState: { type: String, required: true },
    deliveryZip: { type: String, required: true },
    deliveryDate: { type: Date, required: true },
    deliveryTimeWindow: { type: String, required: true },

    hasHazmat: { type: Boolean, default: false },
    needsTeamService: { type: Boolean, default: false },
    additionalStops: { type: Number, default: 0 },
    notes: { type: String },
    documents: [{ type: String }],

    status: { 
      type: String, 
      enum: ['new', 'reviewing', 'contacted', 'quoted', 'won', 'lost', 'archived'], 
      default: 'new' 
    },
    internalNotes: { type: String },
    followUpDate: { type: Date },
    assignedTo: { type: String },
  },
  {
    timestamps: true,
  }
);

QuoteRequestSchema.index({ requestNumber: 1 });
QuoteRequestSchema.index({ status: 1, createdAt: -1 });
QuoteRequestSchema.index({ email: 1 });

const QuoteRequest: Model<IQuoteRequest> =
  mongoose.models.QuoteRequest || mongoose.model<IQuoteRequest>('QuoteRequest', QuoteRequestSchema);

export default QuoteRequest;
