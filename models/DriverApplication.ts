import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDriverApplication extends Document {
  applicationNumber: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  cdlClass: string;
  yearsExperience: number;
  endorsements: string[];
  preferredRouteType: string;
  accidentHistory?: string;
  violationHistory?: string;
  resume?: string;
  additionalNotes?: string;
  consentGiven: boolean;
  
  status: 'new' | 'reviewing' | 'contacted' | 'interview' | 'qualified' | 'hired' | 'rejected' | 'archived';
  internalNotes?: string;
  assignedTo?: string;
  
  createdAt: Date;
  updatedAt: Date;
}

const DriverApplicationSchema = new Schema<IDriverApplication>(
  {
    applicationNumber: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    cdlClass: { type: String, required: true },
    yearsExperience: { type: Number, required: true },
    endorsements: [{ type: String }],
    preferredRouteType: { type: String },
    accidentHistory: { type: String },
    violationHistory: { type: String },
    resume: { type: String },
    additionalNotes: { type: String },
    consentGiven: { type: Boolean, required: true, default: false },
    
    status: { 
      type: String, 
      enum: ['new', 'reviewing', 'contacted', 'interview', 'qualified', 'hired', 'rejected', 'archived'], 
      default: 'new' 
    },
    internalNotes: { type: String },
    assignedTo: { type: String },
  },
  { timestamps: true }
);

DriverApplicationSchema.index({ applicationNumber: 1 });
DriverApplicationSchema.index({ status: 1, createdAt: -1 });

const DriverApplication: Model<IDriverApplication> =
  mongoose.models.DriverApplication || mongoose.model<IDriverApplication>('DriverApplication', DriverApplicationSchema);

export default DriverApplication;
