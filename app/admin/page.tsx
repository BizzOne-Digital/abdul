import Link from 'next/link';
import { 
  Truck, 
  FileCheck, 
  Users, 
  MessageSquare, 
  Image as ImageIcon, 
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';
import QuoteRequest from '@/models/QuoteRequest';
import DriverApplication from '@/models/DriverApplication';
import ContactMessage from '@/models/ContactMessage';
import GalleryCategory from '@/models/GalleryCategory';
import Testimonial from '@/models/Testimonial';
import FAQ from '@/models/FAQ';
import BlogPost from '@/models/BlogPost';
import { formatDateTime } from '@/lib/utils';

async function getDashboardData() {
  await dbConnect();

  const [
    totalServices,
    publishedServices,
    totalQuotes,
    newQuotes,
    quotesNeedingFollowup,
    totalApplications,
    newApplications,
    totalMessages,
    unreadMessages,
    totalGalleryImages,
    publishedTestimonials,
    publishedFAQs,
    totalBlogPosts,
    draftBlogPosts,
    recentQuotes,
    recentApplications,
    recentMessages,
  ] = await Promise.all([
    Service.countDocuments(),
    Service.countDocuments({ isPublished: true }),
    QuoteRequest.countDocuments(),
    QuoteRequest.countDocuments({ status: 'new' }),
    QuoteRequest.countDocuments({ status: { $in: ['reviewing', 'contacted'] } }),
    DriverApplication.countDocuments(),
    DriverApplication.countDocuments({ status: 'new' }),
    ContactMessage.countDocuments(),
    ContactMessage.countDocuments({ isRead: false }),
    GalleryCategory.aggregate([
      { $unwind: '$images' },
      { $match: { 'images.isPublished': true } },
      { $count: 'total' }
    ]).then(res => res[0]?.total || 0),
    Testimonial.countDocuments({ isPublished: true }),
    FAQ.countDocuments({ isPublished: true }),
    BlogPost.countDocuments(),
    BlogPost.countDocuments({ isDraft: true }),
    QuoteRequest.find().sort({ createdAt: -1 }).limit(5).lean(),
    DriverApplication.find().sort({ createdAt: -1 }).limit(5).lean(),
    ContactMessage.find().sort({ createdAt: -1 }).limit(5).lean(),
  ]);

  return {
    services: { total: totalServices, published: publishedServices },
    quotes: { total: totalQuotes, new: newQuotes, needingFollowup: quotesNeedingFollowup },
    applications: { total: totalApplications, new: newApplications },
    messages: { total: totalMessages, unread: unreadMessages },
    gallery: { totalImages: totalGalleryImages },
    testimonials: { published: publishedTestimonials },
    faqs: { published: publishedFAQs },
    blog: { total: totalBlogPosts, drafts: draftBlogPosts },
    recentQuotes: JSON.parse(JSON.stringify(recentQuotes)),
    recentApplications: JSON.parse(JSON.stringify(recentApplications)),
    recentMessages: JSON.parse(JSON.stringify(recentMessages)),
  };
}

export default async function AdminDashboard() {
  const data = await getDashboardData();

  const stats = [
    {
      label: 'Total Services',
      value: data.services.total,
      subtext: `${data.services.published} published`,
      icon: Truck,
      color: 'bg-blue-500',
      href: '/admin/services',
    },
    {
      label: 'Quote Requests',
      value: data.quotes.total,
      subtext: `${data.quotes.new} new`,
      icon: FileCheck,
      color: 'bg-green-500',
      href: '/admin/quotes',
      badge: data.quotes.new > 0 ? data.quotes.new : null,
    },
    {
      label: 'Driver Applications',
      value: data.applications.total,
      subtext: `${data.applications.new} new`,
      icon: Users,
      color: 'bg-purple-500',
      href: '/admin/drivers',
      badge: data.applications.new > 0 ? data.applications.new : null,
    },
    {
      label: 'Contact Messages',
      value: data.messages.total,
      subtext: `${data.messages.unread} unread`,
      icon: MessageSquare,
      color: 'bg-orange-500',
      href: '/admin/messages',
      badge: data.messages.unread > 0 ? data.messages.unread : null,
    },
    {
      label: 'Gallery Images',
      value: data.gallery.totalImages,
      subtext: 'published images',
      icon: ImageIcon,
      color: 'bg-pink-500',
      href: '/admin/gallery',
    },
    {
      label: 'Blog Posts',
      value: data.blog.total,
      subtext: `${data.blog.drafts} drafts`,
      icon: BookOpen,
      color: 'bg-indigo-500',
      href: '/admin/blog',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-titan-navy mb-2">Dashboard</h1>
        <p className="text-titan-steel">Welcome back! Here's what's happening with Titan Logistics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 relative"
            >
              {stat.badge && (
                <div className="absolute top-4 right-4 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {stat.badge}
                </div>
              )}
              <div className="flex items-start space-x-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-titan-steel mb-1">{stat.label}</p>
                  <p className="text-3xl font-display font-bold text-titan-navy mb-1">{stat.value}</p>
                  <p className="text-xs text-titan-steel">{stat.subtext}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <h3 className="font-display font-bold text-titan-navy">Active Quotes</h3>
          </div>
          <p className="text-3xl font-display font-bold text-titan-navy mb-2">
            {data.quotes.new + data.quotes.needingFollowup}
          </p>
          <p className="text-sm text-titan-steel">Requiring attention</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CheckCircle className="w-5 h-5 text-blue-500" />
            <h3 className="font-display font-bold text-titan-navy">Published Content</h3>
          </div>
          <p className="text-3xl font-display font-bold text-titan-navy mb-2">
            {data.testimonials.published + data.faqs.published}
          </p>
          <p className="text-sm text-titan-steel">Testimonials & FAQs</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-500" />
            <h3 className="font-display font-bold text-titan-navy">Pending Review</h3>
          </div>
          <p className="text-3xl font-display font-bold text-titan-navy mb-2">
            {data.applications.new + data.messages.unread}
          </p>
          <p className="text-sm text-titan-steel">Applications & messages</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Quotes */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-lg text-titan-navy">Recent Quote Requests</h3>
            <Link href="/admin/quotes" className="text-sm text-titan-blue hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {data.recentQuotes.length === 0 ? (
              <p className="text-sm text-titan-steel py-4 text-center">No quote requests yet</p>
            ) : (
              data.recentQuotes.map((quote: any) => (
                <Link
                  key={quote._id}
                  href={`/admin/quotes/${quote._id}`}
                  className="block p-3 border border-gray-200 rounded hover:border-titan-blue transition-colors"
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-semibold text-titan-navy">{quote.company}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      quote.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {quote.status}
                    </span>
                  </div>
                  <p className="text-sm text-titan-steel">{quote.serviceType} • {quote.pickupCity}, {quote.pickupState}</p>
                  <p className="text-xs text-titan-steel mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatDateTime(quote.createdAt)}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-lg text-titan-navy">Recent Driver Applications</h3>
            <Link href="/admin/drivers" className="text-sm text-titan-blue hover:underline">
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {data.recentApplications.length === 0 ? (
              <p className="text-sm text-titan-steel py-4 text-center">No applications yet</p>
            ) : (
              data.recentApplications.map((app: any) => (
                <Link
                  key={app._id}
                  href={`/admin/drivers/${app._id}`}
                  className="block p-3 border border-gray-200 rounded hover:border-titan-blue transition-colors"
                >
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-semibold text-titan-navy">{app.fullName}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      app.status === 'new' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  <p className="text-sm text-titan-steel">CDL {app.cdlClass} • {app.yearsExperience} years exp</p>
                  <p className="text-xs text-titan-steel mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatDateTime(app.createdAt)}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-gradient-titan rounded-lg p-6 text-white">
        <h3 className="font-display font-bold text-xl mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <Link
            href="/admin/services/new"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center transition-colors"
          >
            <Truck className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Add Service</p>
          </Link>
          <Link
            href="/admin/blog/new"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center transition-colors"
          >
            <BookOpen className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">New Blog Post</p>
          </Link>
          <Link
            href="/admin/gallery"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center transition-colors"
          >
            <ImageIcon className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Upload Images</p>
          </Link>
          <Link
            href="/admin/settings"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center transition-colors"
          >
            <CheckCircle className="w-8 h-8 mx-auto mb-2" />
            <p className="font-semibold">Site Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
