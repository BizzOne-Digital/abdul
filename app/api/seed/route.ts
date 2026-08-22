import { NextRequest, NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/seed';

export async function GET(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get('secret');

    if (process.env.NODE_ENV !== 'development') {
      if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
        return NextResponse.json({ error: 'Seeding not allowed' }, { status: 403 });
      }
    }

    await seedDatabase();
    return NextResponse.json({ success: true, message: 'Database seeded successfully' });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: 'Seeding failed', details: String(error) }, { status: 500 });
  }
}
