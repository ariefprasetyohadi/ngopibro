# Ngopi Bro - Next.js + Tailwind + Framer Motion

## Cara Menjalankan
1. Ekstrak zip.
2. Buka terminal pada folder `ngopi-bro`.
3. Jalankan:
   ```bash
   npm install
   npm run dev
   ```
4. Buka http://localhost:3000

## Tech
- Next.js (app router)
- Tailwind CSS (custom palette)
- Framer Motion

## Catatan
- Gambar masih dummy dari `picsum.photos`. Ganti dengan foto produk asli pada komponen.
- Warna palet: #BFB48F, #564E58, #904E55, #F2EFE9, #252627 diset di `tailwind.config.js`.


## Database (Prisma + SQLite)

### Setup Lokal
1. Copy `.env.example` menjadi `.env`
2. Jalankan:
   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```
3. Jalankan app:
   ```bash
   npm run dev
   ```

### Struktur Tabel (Prisma)
- Category, Product, Customer, Order, OrderItem
- Seed menambahkan: 4 kategori + 12 produk + 5 pelanggan + ~8 order dengan beberapa item (total > 25 baris).

## Checkout API
- Endpoint: `POST /api/checkout`
- Payload:
  ```json
  {
    "customer": { "nama": "User", "email": "user@mail.com", "telepon": "08...", "alamat": "Jalan ..." },
    "items": [{ "id": 1, "qty": 2, "price": 15000 }]
  }
  ```
- Hasil: `{ "id": <orderId>, "total": <int> }`

## Deploy ke Vercel
1. Push project ke GitHub.
2. Import repositori di Vercel.
3. Di **Environment Variables**, set:
   - **DATABASE_URL** → gunakan Vercel Postgres / Neon / PlanetScale (ganti provider di `prisma/schema.prisma` bila bukan SQLite).
4. Jalankan migration di Vercel (Build Command tetap, Prisma akan generate client saat build). Setelah deploy:
   - Jalankan seed secara manual dari lokal ke DB production **atau** buat route admin khusus seeding (opsional).
5. Setelah variabel env diset, klik **Redeploy**.

### Ganti ke Postgres (opsional)
- Ubah di `prisma/schema.prisma`:
  ```prisma
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  ```
- Jalankan kembali `npm run db:generate` dan `prisma migrate deploy` (atau `db:push` di dev).

## Catatan
- Keranjang tersimpan di `localStorage` (persist), dan di-submit saat checkout.
- Untuk produksi, tambahkan autentikasi & validasi tambahan (rate-limit, CSRF, dsb.).
