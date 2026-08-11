import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function requireAdmin() {
  const session = await auth();

  if (!session || !session.user) {
    redirect('/admin/login');
  }

  return session;
}

export async function getAdminSession() {
  const session = await auth();
  return session;
}
