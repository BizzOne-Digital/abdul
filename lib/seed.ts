import dbConnect from './mongodb';
import AdminUser from '@/models/AdminUser';
import SiteSettings from '@/models/SiteSettings';
import Service from '@/models/Service';
import Page from '@/models/Page';
import GalleryCategory from '@/models/GalleryCategory';
import FAQ from '@/models/FAQ';
import bcrypt from 'bcrypt';

export async function seedDatabase(reset: boolean = false) {
  try {
    await dbConnect();
    console.log('Connected to MongoDB');

    // Create initial admin user
    const adminEmail = process.env.INITIAL_ADMIN_EMAIL || 'admin@titan-llc.com';
    const adminPassword = process.env.INITIAL_ADMIN_PASSWORD || 'TitanAdmin2026!';
    
    const existingAdmin = await AdminUser.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await AdminUser.create({
        email: adminEmail,
        password: hashedPassword,
        name: 'Admin User',
        role: 'super_admin',
        isActive: true,
      });
      console.log('✓ Admin user created');
    } else {
      console.log('✓ Admin user already exists');
    }

    // Create or update site settings
    const existingSettings = await SiteSettings.findOne();
    if (!existingSettings) {
      await SiteSettings.create({
        siteName: 'Titan Logistics LLC',
        tagline: 'Secure, Efficient, and Trackable Transport Services',
        dispatchEmail: 'dispatch@titan-llc.com',
        phone: '402-326-8820',
        hours: '24 hours a day, 7 days a week',
        coverageHeadline: 'Covering the Lower 48',
        coverageDescription: 'Reliable freight transportation throughout the contiguous United States.',
        equipmentOptions: ['Dry Van', 'Refrigerated', 'Flatbed'],
        serviceOptions: ['Dry Van', 'Refrigerated', 'Flatbed'],
        commodityOptions: ['General Freight', 'Food & Beverage', 'Building Materials', 'Machinery', 'Other'],
        footerDescription: 'Titan Logistics LLC provides secure and efficient freight transportation throughout the lower 48 states.',
        copyright: '© 2026 Titan Logistics LLC. All rights reserved.',
      });
      console.log('✓ Site settings created');
    }

    // Create initial services
    const existingServices = await Service.countDocuments();
    if (existingServices === 0) {
      await Service.create([
        {
          title: 'Dry Van Transportation',
          slug: 'dry-van',
          shortDescription: 'Secure enclosed trailer transportation for general freight and temperature-sensitive goods that don\'t require refrigeration.',
          listingImage: '/uploads/services/dry-van.jpg',
          listingImageAlt: 'Dry van semi-truck trailer',
          keyHighlights: [
            'Standard 53\' enclosed trailers',
            'Protection from weather and road elements',
            'Ideal for palletized freight',
            'Lower 48 coverage'
          ],
          ctaLabel: 'Learn More',
          displayOrder: 1,
          isFeatured: true,
          isPublished: true,
          detail: {
            heroEyebrow: 'Dry Van Services',
            heroTitle: 'Reliable Dry Van Transportation',
            heroDescription: 'Professional enclosed trailer transportation for your general freight needs.',
            heroImage: '/uploads/services/dry-van-hero.jpg',
            heroImageAlt: 'Dry van transportation services',
            overview: 'Our dry van service provides secure, weather-protected transportation for a wide variety of freight types across the lower 48 states.',
            suitableFreight: ['General merchandise', 'Packaged goods', 'Non-perishable food items', 'Building materials', 'Furniture', 'Electronics'],
            equipmentInfo: 'We utilize standard 53-foot enclosed trailers with swing or roll-up doors, providing maximum protection for your cargo.',
            benefits: [
              'Weather and road debris protection',
              '24/7 dispatch availability',
              'Flexible scheduling',
              'Experienced drivers',
              'Lower 48 state coverage'
            ],
            process: [
              'Submit your shipment details',
              'Receive a custom quote',
              'Schedule pickup',
              'Stay informed throughout transport',
              'Confirm delivery'
            ],
            coverageInfo: 'Available throughout the contiguous United States.',
            contentSections: [],
            gallery: [],
            faqs: [
              {
                question: 'What types of freight work best for dry van?',
                answer: 'Dry van is ideal for general packaged freight, palletized goods, and items that need protection from weather but don\'t require temperature control.',
                displayOrder: 1
              },
              {
                question: 'What are your trailer dimensions?',
                answer: 'We use standard 53-foot trailers with interior dimensions suitable for most palletized freight configurations.',
                displayOrder: 2
              }
            ],
            seoTitle: 'Dry Van Transportation Services | Titan Logistics LLC',
            seoDescription: 'Professional dry van freight transportation across the lower 48 states.',
            ogImage: '/uploads/services/dry-van-og.jpg',
          }
        },
        {
          title: 'Refrigerated Transportation',
          slug: 'refrigerated',
          shortDescription: 'Temperature-controlled transportation for perishable goods requiring precise climate management throughout transit.',
          listingImage: '/uploads/services/refrigerated.jpg',
          listingImageAlt: 'Refrigerated reefer trailer',
          keyHighlights: [
            'Precise temperature control',
            'Food-grade certified trailers',
            'Real-time temperature monitoring',
            'Perishable freight expertise'
          ],
          ctaLabel: 'Learn More',
          displayOrder: 2,
          isFeatured: true,
          isPublished: true,
          detail: {
            heroEyebrow: 'Refrigerated Services',
            heroTitle: 'Temperature-Controlled Freight Solutions',
            heroDescription: 'Reliable refrigerated transportation for your perishable cargo.',
            heroImage: '/uploads/services/refrigerated-hero.jpg',
            heroImageAlt: 'Refrigerated transportation services',
            overview: 'Our refrigerated service maintains precise temperature control for perishable goods, ensuring your products arrive in optimal condition.',
            suitableFreight: ['Fresh produce', 'Frozen foods', 'Dairy products', 'Meat and poultry', 'Pharmaceuticals', 'Temperature-sensitive chemicals'],
            equipmentInfo: 'Temperature-controlled trailers with multi-zone capability and continuous monitoring systems.',
            benefits: [
              'Precise temperature management',
              'Food-safety compliant equipment',
              'Experienced in perishable handling',
              '24/7 dispatch support',
              'Lower 48 coverage'
            ],
            process: [
              'Specify temperature requirements',
              'Receive competitive quote',
              'Schedule temperature-verified pickup',
              'Monitor transit conditions',
              'Confirm on-time delivery'
            ],
            coverageInfo: 'Refrigerated service available across the lower 48 states.',
            contentSections: [],
            gallery: [],
            faqs: [
              {
                question: 'What temperature ranges can you maintain?',
                answer: 'Our refrigerated units can maintain a wide range of temperatures suitable for frozen, chilled, and climate-controlled freight.',
                displayOrder: 1
              }
            ],
            seoTitle: 'Refrigerated Transportation Services | Titan Logistics LLC',
            seoDescription: 'Professional temperature-controlled freight transportation for perishable goods.',
            ogImage: '/uploads/services/refrigerated-og.jpg',
          }
        },
        {
          title: 'Flatbed Transportation',
          slug: 'flatbed',
          shortDescription: 'Open-deck transportation for oversized, heavy, or uniquely shaped freight that requires specialized loading and securement.',
          listingImage: '/uploads/services/flatbed.jpg',
          listingImageAlt: 'Flatbed semi-truck trailer',
          keyHighlights: [
            'Oversized load capability',
            'Heavy equipment transport',
            'Specialized securement',
            'Construction and industrial freight'
          ],
          ctaLabel: 'Learn More',
          displayOrder: 3,
          isFeatured: true,
          isPublished: true,
          detail: {
            heroEyebrow: 'Flatbed Services',
            heroTitle: 'Specialized Flatbed Transportation',
            heroDescription: 'Professional flatbed solutions for oversized and heavy freight.',
            heroImage: '/uploads/services/flatbed-hero.jpg',
            heroImageAlt: 'Flatbed transportation services',
            overview: 'Our flatbed service handles oversized, heavy, and irregularly shaped freight with professional loading, securement, and transport.',
            suitableFreight: ['Construction equipment', 'Steel and metal products', 'Lumber and building materials', 'Machinery', 'Vehicles', 'Large industrial components'],
            equipmentInfo: 'Standard flatbed trailers with professional tie-down and securement equipment.',
            benefits: [
              'Experienced in oversized freight',
              'Professional load securement',
              'Flexible loading options',
              '24/7 dispatch',
              'Lower 48 coverage'
            ],
            process: [
              'Provide freight dimensions and weight',
              'Receive specialized quote',
              'Coordinate loading requirements',
              'Professional securement and transport',
              'Confirm safe delivery'
            ],
            coverageInfo: 'Flatbed service available throughout the contiguous United States.',
            contentSections: [],
            gallery: [],
            faqs: [
              {
                question: 'What size loads can you handle?',
                answer: 'We handle standard flatbed dimensions and can discuss specialized requirements for your oversized freight needs.',
                displayOrder: 1
              }
            ],
            seoTitle: 'Flatbed Transportation Services | Titan Logistics LLC',
            seoDescription: 'Professional flatbed freight transportation for oversized and heavy loads.',
            ogImage: '/uploads/services/flatbed-og.jpg',
          }
        }
      ]);
      console.log('✓ Initial services created');
    }

    // Create initial FAQ categories and questions
    const existingFAQs = await FAQ.countDocuments();
    if (existingFAQs === 0) {
      await FAQ.create([
        {
          question: 'What areas do you serve?',
          answer: 'Titan Logistics provides freight transportation throughout the lower 48 states of the United States.',
          category: 'Coverage',
          displayOrder: 1,
          isPublished: true,
        },
        {
          question: 'How do I request a freight quote?',
          answer: 'You can request a quote by filling out our online quote form, calling our dispatch team at 402-326-8820, or emailing dispatch@titan-llc.com.',
          category: 'Quotes',
          displayOrder: 1,
          isPublished: true,
        },
        {
          question: 'What types of equipment do you offer?',
          answer: 'We offer dry van, refrigerated, and flatbed transportation services to meet various freight requirements.',
          category: 'Equipment',
          displayOrder: 1,
          isPublished: true,
        },
        {
          question: 'Are you available 24/7?',
          answer: 'Yes, our dispatch team is available 24 hours a day, 7 days a week to assist with your transportation needs.',
          category: 'Communication',
          displayOrder: 1,
          isPublished: true,
        },
        {
          question: 'Do you have openings for CDL A drivers?',
          answer: 'We regularly seek qualified CDL Class A drivers. Please visit our Drivers page to learn more and submit an application.',
          category: 'Drivers',
          displayOrder: 1,
          isPublished: true,
        }
      ]);
      console.log('✓ Initial FAQs created');
    }

    // Create initial gallery categories
    const existingCategories = await GalleryCategory.countDocuments();
    if (existingCategories === 0) {
      await GalleryCategory.create([
        {
          name: 'Trucks',
          slug: 'trucks',
          description: 'Our fleet of professional trucks',
          images: [],
          displayOrder: 1,
          isPublished: true,
        },
        {
          name: 'Trailers',
          slug: 'trailers',
          description: 'Dry van, refrigerated, and flatbed trailers',
          images: [],
          displayOrder: 2,
          isPublished: true,
        },
        {
          name: 'On the Road',
          slug: 'on-the-road',
          description: 'Transportation in action',
          images: [],
          displayOrder: 3,
          isPublished: true,
        },
        {
          name: 'Loading and Delivery',
          slug: 'loading-delivery',
          description: 'Professional freight handling',
          images: [],
          displayOrder: 4,
          isPublished: true,
        }
      ]);
      console.log('✓ Initial gallery categories created');
    }

    // Create homepage sections
    const existingHomePage = await Page.findOne({ pageKey: 'home' });
    if (!existingHomePage) {
      await Page.create({
        pageKey: 'home',
        pageName: 'Home',
        isPublished: true,
        sections: [
          {
            sectionId: 'hero',
            internalName: 'Hero Section',
            eyebrow: '',
            heading: 'Secure, Efficient, and Trackable Transport Services',
            subheading: 'General freight transportation across the lower 48 states, specializing in dry van, refrigerated, and flatbed solutions.',
            primaryCtaLabel: 'Request a Freight Quote',
            primaryCtaUrl: '/quote',
            secondaryCtaLabel: 'Explore Our Services',
            secondaryCtaUrl: '/services',
            backgroundImage: '/uploads/pages/hero-bg.jpg',
            theme: 'dark',
            alignment: 'center',
            isVisible: true,
            displayOrder: 1,
            customData: {
              showAvailability: true,
              showCoverage: true,
              showThirdCta: true,
              thirdCtaLabel: 'Drive With Titan',
              thirdCtaUrl: '/drivers'
            }
          },
          {
            sectionId: 'audience-pathways',
            internalName: 'Audience Pathways',
            heading: 'Your Freight Solution Starts Here',
            isVisible: true,
            displayOrder: 2,
            theme: 'light',
            alignment: 'center',
            customData: {
              pathways: [
                { title: 'I Need to Ship Freight', url: '/quote', icon: 'truck' },
                { title: 'I\'m a Broker', url: '/quote', icon: 'handshake' },
                { title: 'I\'m a CDL A Driver', url: '/drivers', icon: 'user' }
              ]
            }
          },
          {
            sectionId: 'services-preview',
            internalName: 'Services Preview',
            eyebrow: 'Our Services',
            heading: 'Transportation Solutions for Every Need',
            subheading: 'Professional freight services across the lower 48 states',
            isVisible: true,
            displayOrder: 3,
            theme: 'light',
            alignment: 'center',
          },
          {
            sectionId: 'why-titan',
            internalName: 'Why Titan',
            eyebrow: 'Why Choose Titan',
            heading: 'Reliable Transportation You Can Count On',
            bodyContent: 'Responsive 24/7 communication, flexible transport solutions, and coverage across the lower 48 states.',
            isVisible: true,
            displayOrder: 4,
            theme: 'dark',
            alignment: 'left',
            backgroundImage: '/uploads/pages/why-titan-bg.jpg',
          },
          {
            sectionId: 'coverage',
            internalName: 'Coverage Section',
            eyebrow: 'Coverage',
            heading: 'Covering the Lower 48',
            subheading: 'Professional freight transportation throughout the contiguous United States',
            primaryCtaLabel: 'View Coverage Details',
            primaryCtaUrl: '/coverage',
            isVisible: true,
            displayOrder: 5,
            theme: 'gradient',
            alignment: 'center',
          },
          {
            sectionId: 'quote-cta',
            internalName: 'Quote CTA',
            heading: 'Ready to Ship Your Freight?',
            subheading: 'Get a custom quote for your transportation needs',
            primaryCtaLabel: 'Request a Quote',
            primaryCtaUrl: '/quote',
            isVisible: true,
            displayOrder: 6,
            theme: 'gradient',
            alignment: 'center',
          }
        ]
      });
      console.log('✓ Homepage created');
    }

    console.log('\n✅ Database seeded successfully!');
    console.log(`\nAdmin Login:`);
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log(`\nAdmin Portal: http://localhost:3000/admin/login\n`);

    return { success: true };
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}
