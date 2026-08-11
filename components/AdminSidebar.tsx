'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Truck, 
  FileCheck, 
  Users, 
  Image, 
  MessageSquare, 
  HelpCircle, 
  BookOpen, 
  Mail, 
  Settings, 
  LogOut,
  ExternalLink
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/pages', label: 'Pages', icon: FileText },
  { href: '/admin/services', label: 'Services', icon: Truck },
  { href: '/admin/quotes', label: 'Quote Requests', icon: FileCheck },
  { href: '/admin/drivers', label: 'Driver Applications', icon: Users },
  { href: '/admin/gallery', label: 'Gallery', icon: Image },
  { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquare },
  { href: '/admin/faqs', label: 'FAQs', icon: HelpCircle },
  { href: '/admin/blog', label: 'Blog', icon: BookOpen },
  { href: '/admin/messages', label: 'Messages', icon: Mail },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/admin/login' });
  };

  return (
    <aside className="w-64 bg-titan-midnight text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-titan-navy">
        <Link href="/admin" className="block">
          <div className="text-2xl font-display font-bold">TITAN</div>
          <div className="text-xs text-titan-steel">Admin Portal</div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname?.startsWith(item.href));
            const Icon = item.icon;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-titan-blue text-white'
                      : 'text-titan-off-white hover:bg-titan-navy hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-titan-navy space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center space-x-3 px-4 py-2 text-titan-off-white hover:text-white transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>View Website</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-2 text-titan-off-white hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
