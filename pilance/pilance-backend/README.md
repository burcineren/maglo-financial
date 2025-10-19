# Pilates Backend Skeleton (NestJS + Prisma + JWT)

Bu repository NestJS + Prisma + JWT tabanlı bir backend iskeletidir. MVP geliştirmeye hızlı başlamak için minimal modüller (auth, users, studios, classes, schedules, bookings, payments) içerir.

## İçindekiler
- NestJS app skeleton (src/)
- Prisma schema (prisma/schema.prisma)
- Örnek .env.example

## Kurulum (lokal)
1. Node.js 18+ yükle.
2. Proje dizininde:
   ```bash
   npm install
   ```
3. Prisma'ya generate ve migrate uygula:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
4. Seed (opsiyonel):
   ```bash
   npm run seed
   ```
5. Geliştirme:
   ```bash
   npm run start:dev
   ```

## Notlar
- Bu iskelet, gerçek ödeme entegrasyonu veya prod-ready güvenlik ayarları içermez. .env içindeki secret değerlerini üretim ortamında güvenli şekilde sakla.
- Daha fazla özellik eklemek için `src/*` altına modüller oluştur.
