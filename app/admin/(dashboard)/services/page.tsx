import Link from 'next/link';
import { Plus, Edit, Eye, EyeOff, Trash2, Truck } from 'lucide-react';
import dbConnect from '@/lib/mongodb';
import Service from '@/models/Service';

export default async function AdminServicesPage() {
  await dbConnect();
  
  const services = await Service.find()
    .sort({ displayOrder: 1 })
    .lean()
    .exec();

  const servicesData = JSON.parse(JSON.stringify(services));

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-titan-navy mb-2">Services Management</h1>
          <p className="text-titan-steel">Manage your transportation services and create dynamic service pages</p>
        </div>
        <Link
          href="/admin/services/new"
          className="flex items-center space-x-2 px-6 py-3 bg-titan-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold"
        >
          <Plus className="w-5 h-5" />
          <span>Add Service</span>
        </Link>
      </div>

      {/* Services List */}
      {servicesData.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <Truck className="w-16 h-16 text-titan-steel mx-auto mb-4 opacity-30" />
          <h3 className="text-xl font-display font-bold text-titan-navy mb-2">No Services Yet</h3>
          <p className="text-titan-steel mb-6">Get started by adding your first transportation service</p>
          <Link
            href="/admin/services/new"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-titan-blue text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold"
          >
            <Plus className="w-5 h-5" />
            <span>Add Your First Service</span>
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-titan-navy">Service</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-titan-navy">Slug</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-titan-navy">Order</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-titan-navy">Featured</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-titan-navy">Status</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-titan-navy">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {servicesData.map((service: any) => (
                <tr key={service._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {service.listingImage && (
                        <div
                          className="w-12 h-12 bg-cover bg-center rounded"
                          style={{ backgroundImage: `url(${service.listingImage})` }}
                        />
                      )}
                      <div>
                        <p className="font-semibold text-titan-navy">{service.title}</p>
                        <p className="text-sm text-titan-steel line-clamp-1">{service.shortDescription}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-sm bg-gray-100 px-2 py-1 rounded">/services/{service.slug}</code>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-titan-blue/10 text-titan-blue rounded-full font-semibold text-sm">
                      {service.displayOrder}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {service.isFeatured ? (
                      <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full" title="Featured" />
                    ) : (
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full" title="Not Featured" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {service.isPublished ? (
                      <span className="inline-flex items-center space-x-1 text-green-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">Published</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-gray-500">
                        <EyeOff className="w-4 h-4" />
                        <span className="text-sm font-medium">Draft</span>
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2">
                      <Link
                        href={`/services/${service.slug}`}
                        target="_blank"
                        className="p-2 text-titan-steel hover:text-titan-blue transition-colors"
                        title="View on site"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link
                        href={`/admin/services/${service._id}`}
                        className="p-2 text-titan-steel hover:text-titan-blue transition-colors"
                        title="Edit service"
                      >
                        <Edit className="w-5 h-5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-display font-bold text-titan-navy mb-2">How Service Routing Works</h3>
        <ul className="space-y-2 text-sm text-titan-steel">
          <li>✓ Each service automatically gets its own page at <code className="bg-white px-2 py-1 rounded">/services/[slug]</code></li>
          <li>✓ Edit the <strong>Listing Information</strong> to update what appears on the main Services page</li>
          <li>✓ Edit the <strong>Detail Page</strong> to customize the individual service page content</li>
          <li>✓ No code changes needed - new services are instantly available</li>
        </ul>
      </div>
    </div>
  );
}
