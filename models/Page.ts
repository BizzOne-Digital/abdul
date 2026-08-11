import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPageSection {
  sectionId: string;
  internalName: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  bodyContent?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  image?: string;
  imageAlt?: string;
  backgroundImage?: string;
  mobileImage?: string;
  theme?: 'light' | 'dark' | 'gradient';
  alignment?: 'left' | 'center' | 'right';
  isVisible: boolean;
  displayOrder: number;
  customData?: Record<string, any>;
}

export interface IPage extends Document {
  pageKey: string;
  pageName: string;
  sections: IPageSection[];
  isPublished: boolean;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy?: string;
}

const PageSectionSchema = new Schema<IPageSection>({
  sectionId: { type: String, required: true },
  internalName: { type: String, required: true },
  eyebrow: { type: String },
  heading: { type: String },
  subheading: { type: String },
  bodyContent: { type: String },
  primaryCtaLabel: { type: String },
  primaryCtaUrl: { type: String },
  secondaryCtaLabel: { type: String },
  secondaryCtaUrl: { type: String },
  image: { type: String },
  imageAlt: { type: String },
  backgroundImage: { type: String },
  mobileImage: { type: String },
  theme: { type: String, enum: ['light', 'dark', 'gradient'], default: 'light' },
  alignment: { type: String, enum: ['left', 'center', 'right'], default: 'left' },
  isVisible: { type: Boolean, default: true },
  displayOrder: { type: Number, required: true },
  customData: { type: Schema.Types.Mixed },
});

const PageSchema = new Schema<IPage>(
  {
    pageKey: { type: String, required: true, unique: true },
    pageName: { type: String, required: true },
    sections: [PageSectionSchema],
    isPublished: { type: Boolean, default: true },
    seoTitle: { type: String },
    seoDescription: { type: String },
    ogImage: { type: String },
    updatedBy: { type: String },
  },
  { timestamps: true }
);

PageSchema.index({ pageKey: 1 });

const Page: Model<IPage> =
  mongoose.models.Page || mongoose.model<IPage>('Page', PageSchema);

export default Page;
