import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ISiteSettings extends Document {
  // General
  siteName: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  favicon: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  defaultSocialImage: string;

  // Contact
  dispatchEmail: string;
  phone: string;
  hours: string;
  address: string;
  
  // Social
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  twitter: string;
  otherLinks: string[];

  // Coverage
  coverageHeadline: string;
  coverageDescription: string;
  enabledStates: string[];

  // Quote Configuration
  equipmentOptions: string[];
  serviceOptions: string[];
  commodityOptions: string[];
  notificationEmail: string;
  confirmationMessage: string;
  allowDocumentUpload: boolean;

  // Tracking
  trackingEnabled: boolean;
  externalTrackingUrl: string;
  trackingButtonLabel: string;
  dispatchUpdateMessage: string;

  // Driver Recruitment
  applicationsEnabled: boolean;
  driverRecipientEmail: string;
  driverQualifications: string;
  equalOpportunityStatement: string;
  driverConfirmationMessage: string;

  // Footer
  footerDescription: string;
  copyright: string;
  footerCtaContent: string;

  createdAt: Date;
  updatedAt: Date;
}

const SiteSettingsSchema = new Schema<ISiteSettings>(
  {
    // General
    siteName: { type: String, required: true, default: 'Titan Logistics LLC' },
    tagline: { type: String, default: 'Secure, Efficient, and Trackable Transport Services' },
    logo: { type: String, default: '/uploads/settings/logo.png' },
    logoAlt: { type: String, default: 'Titan Logistics LLC Logo' },
    favicon: { type: String, default: '/favicon.ico' },
    defaultSeoTitle: { type: String, default: 'Titan Logistics LLC - Freight Transportation Services' },
    defaultSeoDescription: { type: String, default: 'General freight transportation across the lower 48 states.' },
    defaultSocialImage: { type: String, default: '/uploads/settings/og-image.jpg' },

    // Contact
    dispatchEmail: { type: String, required: true, default: 'info@titan-llc.com' },
    phone: { type: String, required: true, default: '402-326-8820' },
    hours: { type: String, default: '24 hours a day, 7 days a week' },
    address: { type: String, default: '' },

    // Social
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    youtube: { type: String, default: '' },
    twitter: { type: String, default: '' },
    otherLinks: [{ type: String }],

    // Coverage
    coverageHeadline: { type: String, default: 'Covering the Lower 48' },
    coverageDescription: { type: String, default: 'Reliable freight transportation throughout the contiguous United States.' },
    enabledStates: [{ type: String }],

    // Quote Configuration
    equipmentOptions: [{ type: String }],
    serviceOptions: [{ type: String }],
    commodityOptions: [{ type: String }],
    notificationEmail: { type: String, default: '' },
    confirmationMessage: { type: String, default: 'Thank you for your quote request. We will contact you shortly.' },
    allowDocumentUpload: { type: Boolean, default: true },

    // Tracking
    trackingEnabled: { type: Boolean, default: false },
    externalTrackingUrl: { type: String, default: '' },
    trackingButtonLabel: { type: String, default: 'Track Shipment' },
    dispatchUpdateMessage: { type: String, default: 'Contact dispatch for shipment updates.' },

    // Driver Recruitment
    applicationsEnabled: { type: Boolean, default: true },
    driverRecipientEmail: { type: String, default: '' },
    driverQualifications: { type: String, default: '' },
    equalOpportunityStatement: { type: String, default: '' },
    driverConfirmationMessage: { type: String, default: 'Thank you for your application. We will review and contact you.' },

    // Footer
    footerDescription: { type: String, default: 'Titan Logistics LLC provides secure and efficient freight transportation throughout the lower 48 states.' },
    copyright: { type: String, default: '© 2026 Titan Logistics LLC. All rights reserved.' },
    footerCtaContent: { type: String, default: 'Ready to ship your freight?' },
  },
  {
    timestamps: true,
  }
);

const SiteSettings: Model<ISiteSettings> =
  mongoose.models.SiteSettings || mongoose.model<ISiteSettings>('SiteSettings', SiteSettingsSchema);

export default SiteSettings;
