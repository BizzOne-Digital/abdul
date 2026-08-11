import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGalleryImage {
  imageId: string;
  image: string;
  alt: string;
  caption?: string;
  isFeatured: boolean;
  isPublished: boolean;
  displayOrder: number;
  uploadedAt: Date;
}

export interface IGalleryCategory extends Document {
  name: string;
  slug: string;
  description?: string;
  images: IGalleryImage[];
  displayOrder: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryImageSchema = new Schema<IGalleryImage>({
  imageId: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String },
  isFeatured: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 },
  uploadedAt: { type: Date, default: Date.now },
});

const GalleryCategorySchema = new Schema<IGalleryCategory>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    images: [GalleryImageSchema],
    displayOrder: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

GalleryCategorySchema.index({ slug: 1 });
GalleryCategorySchema.index({ isPublished: 1, displayOrder: 1 });

const GalleryCategory: Model<IGalleryCategory> =
  mongoose.models.GalleryCategory || mongoose.model<IGalleryCategory>('GalleryCategory', GalleryCategorySchema);

export default GalleryCategory;
