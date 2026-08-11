import { seedDatabase } from './seed';

async function main() {
  console.log('Starting database seed...\n');
  
  try {
    await seedDatabase();
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

main();
