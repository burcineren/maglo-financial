import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const studio = await prisma.studio.create({
    data: { name: 'Pilot Pilates Studio', address: 'Istanbul', phone: '555-0000' }
  });

  const instructor = await prisma.instructor.create({
    data: { name: 'Ayse K', bio: 'Reformer specialist', studioId: studio.id }
  });

  const klass = await prisma.class.create({
    data: { name: 'Reformer Pilates', price: 250, capacity: 6, studioId: studio.id }
  });

  const schedule = await prisma.schedule.create({
    data: {
      classId: klass.id,
      instructorId: instructor.id,
      startTime: new Date(Date.now() + 1000*60*60*24),
      endTime: new Date(Date.now() + 1000*60*60*25)
    }
  });

  await prisma.user.create({
    data: { name: 'Test User', email: 'test@example.com', password: 'password' }
  });

  console.log('Seed finished');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
