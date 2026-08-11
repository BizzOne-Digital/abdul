import mongoose, { Schema, Document, Model } from 'mongoose';

// Flexible content section for service detail pages
export interface IContentSection {
  type: 'text' | 'image' | 'list' | 'grid';
  heading?: string;
  content?: string;
  image?: string;
  imageAlt?: string;
  items?: string[];
  displayOrder: number;
  isVisible: boolean;
}

export interface IService extends Document {
  // Listing Information (for main Services page)
  title: string;
  slug: string;
  shortDescription: string;
  listingImage: string;
  listingImageAlt: string;
  icon?: string;
  keyHighlights: string[];
  ctaLabel: string;
  displayOrder: number;
  isFeatured: boolean;
  isPublished: boolean;

  // Detail Page Information
  detail: {
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    heroImageAlt: string;
    overview: string;
    suitableFreight: string[];
    equipmentInfo: string;
    benefits: string[];
    process: string[];
    coverageInfo: string;
    contentSections: IContentSection[];
    gallery: {
      image: string;
      alt: string;
      caption?: string;
    }[];
    faqs: {
      question: string;
      answer: string;
      displayOrder: number;
    }[];
    seoTitle: string;
    seoDescription: string;
    ogImage: string;
  };

  createdAt: Date;
  updatedAt: Date;
  createdBy?: string;
  updatedBy?: string;
}

const ContentSectionSchema = new Schema<IContentSection>({
  type: { type: String, enum: ['text', 'image', 'list', 'grid'], required: true },
  heading: { type: String },
  content: { type: String },
  image: { type: String },
  imageAlt: { type: String },
  items: [{ type: String }],
  displayOrder: { type: Number, required: true, default: 0 },
  isVisible: { type: Boolean, default: true },
});

const ServiceSchema = new Schema<IService>(
  {
    // Listing
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    shortDescription: { type: String, required: true },
    listingImage: { type: String, required: true },
    listingImageAlt: { type: String, required: true },
    icon: { type: String },
    keyHighlights: [{ type: String }],
    ctaLabel: { type: String, default: 'Learn More' },
    displayOrder: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    isPublished: { type: Boolean, default: true },

    // Detail
    detail: {
      heroEyebrow: { type: String, default: '' },
      heroTitle: { type: String, default: '' },
      heroDescription: { type: String, default: '' },
      heroImage: { type: String, default: '' },
      heroImageAlt: { type: String, default: '' },
      overview: { type: String, default: '' },
      suitableFreight: [{ type: String }],
      equipmentInfo: { type: String, default: '' },
      benefits: [{ type: String }],
      process: [{ type: String }],
      coverageInfo: { type: String, default: '' },
      contentSections: [ContentSectionSchema],
      gallery: [{
        image: { type: String },
        alt: { type: String },
        caption: { type: String },
      }],
      faqs: [{
        question: { type: String },
        answer: { type: String },
        displayOrder: { type: Number, default: 0 },
      }],
      seoTitle: { type: String, default: '' },
      seoDescription: { type: String, default: '' },
      ogImage: { type: String, default: '' },
    },

    createdBy: { type: String },
    updatedBy: { type: String },
  },
  {
    timestamps: true,
  }
);

// Indexes
ServiceSchema.index({ slug: 1 });
ServiceSchema.index({ isPublished: 1, displayOrder: 1 });
ServiceSchema.index({ isFeatured: 1 });

const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
