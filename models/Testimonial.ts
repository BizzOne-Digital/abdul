import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITestimonial extends Document {
  personName: string;
  companyOrRole: string;
  audienceType: 'shipper' | 'broker' | 'driver' | 'other';
  quote: string;
  image?: string;
  imageAlt?: string;
  isFeatured: boolean;
  displayOrder: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    personName: { type: String, required: true },
    companyOrRole: { type: String, required: true },
    audienceType: { type: String, enum: ['shipper', 'broker', 'driver', 'other'], default: 'other' },
    quote: { type: String, required: true },
    image: { type: String },
    imageAlt: { type: String },
    isFeatured: { type: Boolean, default: false },
    displayOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

TestimonialSchema.index({ isPublished: 1, displayOrder: 1 });
TestimonialSchema.index({ isFeatured: 1 });

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
