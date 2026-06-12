# 🔧 SEO QUICK WINS - Implementation Guide
## Langkah-langkah Praktis Meningkatkan Ranking Google

---

## ✨ PRIORITY #1: Fix On-Page SEO (Do This Now - 1-2 Hours)

### 1. Update Meta Description
**Why:** Current description terlalu pendek, kurang keyword-rich

**Current (BAD):**
```html
<meta name="description" content="Liberty Trans menyediakan layanan sewa bus pariwisata dan transportasi di Makassar. Armada bersih, sopir profesional, harga bersaing." />
```

**Better (160 chars, keyword optimized):**
```html
<meta name="description" content="Sewa bus pariwisata di Makassar mulai Rp 2jt/hari - Liberty Trans menyediakan armada modern dengan AC, WiFi, sopir profesional. Study tour, outing kantor, wisata keluarga." />
```

**Update location:** `index.html` line 10-12

---

### 2. Add H1 to Hero Section
**Why:** Each page needs one H1 with main keyword

**Current (NOT GOOD):**
```html
<div class="container mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
  <div>
    <h1 class="text-2xl md:text-3xl font-extrabold">Liberty Trans</h1>
    <span class="text-sm text-gray-500">Perjalanan Aman & Premium</span>
  </div>
```

**Fix (Add proper H1 in hero section):**
```html
<!-- In hero section, add this after navbar -->
<section id="hero" class="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">
      Sewa Bus Pariwisata di Makassar - Armada Terpercaya
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-red-100">
      Layanan transportasi profesional untuk study tour, outing kantor, dan wisata keluarga
    </p>
    <div class="flex flex-col md:flex-row gap-4 justify-center">
      <button class="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50">
        Cek Harga & Ketersediaan
      </button>
      <button class="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-red-700">
        Hubungi Kami
      </button>
    </div>
  </div>
</section>
```

---

### 3. Add Alt Text to All Images
**Why:** Google can't "see" images, alt text helps with SEO + accessibility

**File:** `js/sections/fleets.js` and `sections/gallery.js`

**Current (BAD):**
```html
<img src="img/bis1.webp" />
```

**Better:**
```html
<img 
  src="img/bis1.webp"
  alt="Bus Pariwisata Premium Liberty Trans 50 Penumpang - AC, WiFi, Kursi Reclining"
  width="800"
  height="600"
  loading="lazy"
/>
```

**Alt Text Formula:**
```
[Product/Service] [Brand] [Key Features] - [Location/Benefit]

Examples:
- "Bus Pariwisata Premium Liberty Trans - AC Dingin, WiFi, Kursi Nyaman"
- "Interior Bus Luxury Liberty Trans - Kursi Reclining, Plugs, Hiburan Lengkap"
- "Bus Antar Jemput Bandara Makassar - Aman, Tepat Waktu, Sopir Profesional"
- "Armada Bus Liberty Trans 2024 - 50 Unit, Berbagai Kapasitas, Berlisensi"
```

---

### 4. Add FAQ Schema Markup
**Why:** Enable Google rich snippets (FAQ appears in search results)

**Add this to `index.html` in `<head>` section, after existing schema:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Berapa biaya sewa bus pariwisata di Makassar per hari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya sewa bus pariwisata Liberty Trans berkisar Rp 2.000.000 - Rp 2.500.000 per hari, tergantung kapasitas bus (31-59 penumpang) dan destinasi. Harga sudah termasuk driver profesional, asuransi perjalanan, dan konsumsi supir. Untuk penawaran grup atau paket jarak jauh, hubungi tim kami untuk diskon khusus."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah sopir sudah termasuk dalam paket sewa bus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, setiap paket sewa bus Liberty Trans sudah termasuk sopir profesional berpengalaman dengan standar keselamatan tinggi. Sopir kami telah terlatih, berlisensi, dan memiliki pengalaman berkendara jarak jauh lebih dari 5 tahun."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja fasilitas yang tersedia di bus Liberty Trans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fasilitas di bus Liberty Trans meliputi: AC dingin, kursi reclining empuk, WiFi gratis, USB charger, TV untuk hiburan, kamar mandi (di bus luxury), selimut, dan bantal. Semua bus kami dilengkapi dengan GPS tracking, alat keselamatan lengkap, dan asuransi perjalanan."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa jam sopir boleh berkendara maksimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sesuai peraturan keselamatan jalan, sopir kami berkendara maksimal 8 jam per hari dengan istirahat minimal 30 menit setiap 4 jam berkendara. Untuk perjalanan lebih dari 8 jam, kami menyediakan 2 sopir untuk memastikan keselamatan maksimal."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah ada biaya tambahan untuk pengendara malam hari?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Untuk perjalanan malam atau keberangkatan setelah jam 19:00, ada biaya tambahan sebesar 15-20% dari harga normal. Ini adalah standar industri untuk menambah imbalan sopir yang bekerja shift malam."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana jika ada kerusakan di dalam bus selama sewa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Liberty Trans memiliki polis asuransi komprehensif untuk kerusakan selama perjalanan. Kerusakan kecil akibat penggunaan normal ditanggung oleh asuransi kami. Untuk kerusakan berat atau kesengajaan, ada klausul dalam perjanjian sewa."
      }
    },
    {
      "@type": "Question",
      "name": "Boleh berhenti di tengah perjalanan untuk istirahat atau makan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tentu boleh! Kami menyarankan istirahat setiap 2-3 jam perjalanan untuk kenyamanan penumpang. Tim kami sudah mengetahui rest area terbaik di sekitar Makassar dan sekitarnya dengan fasilitas lengkap dan higienis."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah ada paket hemat untuk rombongan besar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya! Untuk pemesanan 2 bus atau lebih, kami memberikan diskon khusus hingga 20%. Juga tersedia paket group untuk study tour, outing kantor, dan wisata keluarga dengan harga lebih terjangkau. Hubungi kami untuk penawaran custom."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara melakukan pemesanan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anda bisa menghubungi kami melalui WhatsApp di +62-812-8506-5866, telepon, atau email info@libertytrans.com. Kami juga memiliki form booking online di website. Tim kami akan merespon dalam 1 jam dan membantu merencanakan perjalanan Anda."
      }
    },
    {
      "@type": "Question",
      "name": "Apa kebijakan pembatalan atau penundaan pemesanan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pembatalan 14 hari sebelumnya: refund 100%. Pembatalan 7-14 hari: refund 80%. Pembatalan 7 hari atau kurang: refund 50%. Penundaan dapat dilakukan maksimal 2 kali dalam 30 hari. Untuk detail lengkap, lihat syarat & ketentuan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bus bisa disewa untuk jarak jauh seperti ke Sulawesi Utara atau Kalimantan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kami melayani sewa bus untuk perjalanan jarak jauh lintas Sulawesi dengan crew profesional. Untuk destinasi ke luar Sulawesi via laut, kami bisa memfasilitasi pengiriman bus via kapal. Hubungi kami untuk konsultasi dan penawaran spesial."
      }
    }
  ]
}
</script>
```

---

## ✨ PRIORITY #2: Add Internal Linking (30 minutes)

**Why:** Help Google crawl your site & distribute page authority

**Add links between related pages:**

```html
<!-- In Hero Section, add CTA with links -->
<div class="mt-8 grid grid-cols-3 gap-4">
  <a href="#layanan" class="text-center p-4 bg-red-50 rounded-lg hover:bg-red-100">
    <h3 class="font-bold">📋 Lihat Semua Layanan</h3>
  </a>
  <a href="#armada" class="text-center p-4 bg-red-50 rounded-lg hover:bg-red-100">
    <h3 class="font-bold">🚌 Pilih Bus Anda</h3>
  </a>
  <a href="#contact" class="text-center p-4 bg-red-50 rounded-lg hover:bg-red-100">
    <h3 class="font-bold">📞 Hubungi Kami</h3>
  </a>
</div>

<!-- In each service description, link to relevant blog post -->
<p>Sewa bus pariwisata murah di Makassar untuk study tour, outing kantor, dan wisata keluarga dengan armada bersih, nyaman, kapasitas 31–59 seat.</p>
<a href="/blog/panduan-memilih-bus-pariwisata" class="text-red-600 hover:underline">
  → Baca panduan memilih bus pariwisata yang tepat
</a>
```

---

## ✨ PRIORITY #3: Claim Google Business Profile (10 minutes)

**Why:** Local SEO is CRITICAL for "sewa bus makassar" queries

**Steps:**
1. Go to https://business.google.com
2. Click "Manage your business" 
3. Search for "Liberty Trans" or "Makassar"
4. Click "Claim this business"
5. Verify your business (via postcard or phone)

**Important:** Once claimed, fill out EVERYTHING:
- ✅ Add 20-30 photos (bus interior, exterior, driver, customers)
- ✅ Add all services offered
- ✅ Set business hours
- ✅ Add complete address
- ✅ Add WhatsApp/messaging option
- ✅ Post weekly updates

---

## ✨ PRIORITY #4: Create robots.txt (5 minutes)

**Create file:** `/robots.txt` in root directory

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://libertytrans.id/sitemap.xml
```

---

## ✨ PRIORITY #5: Update sitemap.xml

**Current:** Single page sitemap
**Update with:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://libertytrans.id/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Posts (add as you create them) -->
  <url>
    <loc>https://libertytrans.id/blog/daftar-sewa-bus-makassar</loc>
    <lastmod>2024-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Services Pages -->
  <url>
    <loc>https://libertytrans.id/layanan/sewa-pariwisata</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 📝 NEXT: Create First Blog Post

### Blog Post Template

**Filename:** `/blog/daftar-sewa-bus-makassar/index.html`

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Daftar Lengkap Sewa Bus Pariwisata di Makassar - Harga & Fasilitas 2024</title>
  
  <meta name="description" content="Panduan lengkap sewa bus pariwisata di Makassar 2024. Bandingkan harga, fasilitas, dan pilih bus terbaik untuk study tour, outing, atau wisata keluarga. Dari Rp 2 juta.">
  
  <meta name="keywords" content="sewa bus makassar, rental bus pariwisata makassar, harga sewa bus makassar, bus wisata makassar">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://libertytrans.id/blog/daftar-sewa-bus-makassar">
  
  <!-- Schema: BlogPosting -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Daftar Lengkap Sewa Bus Pariwisata di Makassar - Harga & Fasilitas 2024",
    "description": "Panduan lengkap sewa bus pariwisata di Makassar dengan perbandingan harga, fasilitas, dan rekomendasi terbaik.",
    "image": "https://libertytrans.id/img/blog-sewa-bus-makassar.webp",
    "datePublished": "2024-01-20",
    "dateModified": "2024-01-20",
    "author": {
      "@type": "Organization",
      "name": "Liberty Trans",
      "logo": "https://libertytrans.id/img/logo.png"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Liberty Trans",
      "logo": "https://libertytrans.id/img/logo.png"
    },
    "mainEntity": {
      "@type": "Article",
      "articleBody": "..."
    }
  }
  </script>
  
  <link rel="stylesheet" href="../../css/output.css">
</head>
<body>
  <!-- Navbar (reuse from index.html) -->
  
  <article class="max-w-3xl mx-auto px-4 py-12">
    <header class="mb-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Daftar Lengkap Sewa Bus Pariwisata di Makassar - Harga & Fasilitas 2024
      </h1>
      <p class="text-gray-600 mb-4">
        Panduan komprehensif untuk memilih bus pariwisata terbaik di Makassar dengan harga transparan dan fasilitas terjamin.
      </p>
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <span>📅 15 Januari 2024</span>
        <span>👤 Liberty Trans</span>
        <span>⏱️ 15 min read</span>
      </div>
    </header>

    <img 
      src="../../img/blog-sewa-bus.webp" 
      alt="Bus Pariwisata Makassar - Armada Modern Liberty Trans"
      class="w-full h-96 object-cover rounded-lg mb-8"
    >

    <!-- Table of Contents -->
    <nav class="bg-gray-100 p-6 rounded-lg mb-8">
      <h2 class="font-bold mb-4">📋 Daftar Isi</h2>
      <ul class="list-disc ml-5 space-y-2">
        <li><a href="#pendahuluan" class="text-red-600 hover:underline">Pendahuluan</a></li>
        <li><a href="#harga" class="text-red-600 hover:underline">Harga Sewa Bus Makassar</a></li>
        <li><a href="#fasilitas" class="text-red-600 hover:underline">Fasilitas Bus</a></li>
        <li><a href="#perbandingan" class="text-red-600 hover:underline">Perbandingan Perusahaan</a></li>
        <li><a href="#tips" class="text-red-600 hover:underline">Tips Memilih Bus</a></li>
        <li><a href="#kesimpulan" class="text-red-600 hover:underline">Kesimpulan</a></li>
      </ul>
    </nav>

    <!-- Content Sections -->
    <section id="pendahuluan" class="mb-8">
      <h2 class="text-3xl font-bold mb-4">Pendahuluan</h2>
      <p class="mb-4">
        Sewa bus pariwisata di Makassar adalah solusi transportasi terbaik untuk berbagai kebutuhan, mulai dari study tour siswa, outing kantor, hingga wisata keluarga. Dengan armada yang beragam dan harga kompetitif, Anda bisa menemukan bus yang sesuai dengan budget dan kebutuhan.
      </p>
      <p class="mb-4">
        Dalam panduan ini, kami akan memberikan informasi lengkap tentang harga sewa bus, fasilitas yang tersedia, serta tips memilih bus yang tepat untuk perjalanan Anda.
      </p>
    </section>

    <section id="harga" class="mb-8">
      <h2 class="text-3xl font-bold mb-4">💰 Harga Sewa Bus Makassar 2024</h2>
      
      <h3 class="text-xl font-bold mb-3">Standar Harga Industri</h3>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead class="bg-red-600 text-white">
          <tr>
            <th class="border border-gray-300 px-4 py-2">Tipe Bus</th>
            <th class="border border-gray-300 px-4 py-2">Kapasitas</th>
            <th class="border border-gray-300 px-4 py-2">Harga/Hari</th>
            <th class="border border-gray-300 px-4 py-2">Fasilitas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Standard</td>
            <td class="border border-gray-300 px-4 py-2">31 - 39 seat</td>
            <td class="border border-gray-300 px-4 py-2 font-bold">Rp 2.000.000</td>
            <td class="border border-gray-300 px-4 py-2">AC, TV</td>
          </tr>
          <tr class="bg-gray-50">
            <td class="border border-gray-300 px-4 py-2">Executive</td>
            <td class="border border-gray-300 px-4 py-2">40 - 50 seat</td>
            <td class="border border-gray-300 px-4 py-2 font-bold">Rp 2.200.000</td>
            <td class="border border-gray-300 px-4 py-2">AC, TV, WiFi</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Luxury</td>
            <td class="border border-gray-300 px-4 py-2">50 - 59 seat</td>
            <td class="border border-gray-300 px-4 py-2 font-bold">Rp 2.500.000</td>
            <td class="border border-gray-300 px-4 py-2">AC, WiFi, Reclining</td>
          </tr>
        </tbody>
      </table>

      <p class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <strong>💡 Note:</strong> Harga sudah termasuk driver, asuransi perjalanan, dan bahan bakar. Untuk perjalanan malam (19:00 - 05:00) ada biaya tambahan 15-20%.
      </p>
    </section>

    <section id="fasilitas" class="mb-8">
      <h2 class="text-3xl font-bold mb-4">🎉 Fasilitas Bus Pariwisata</h2>
      <p class="mb-4">Setiap bus Liberty Trans dilengkapi dengan fasilitas standar untuk kenyamanan maksimal:</p>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-red-50 p-4 rounded-lg">
          <div class="text-2xl mb-2">❄️</div>
          <h4 class="font-bold">AC Dingin</h4>
          <p class="text-sm text-gray-600">Pendingin udara otomatis</p>
        </div>
        
        <div class="bg-red-50 p-4 rounded-lg">
          <div class="text-2xl mb-2">📺</div>
          <h4 class="font-bold">TV & DVD</h4>
          <p class="text-sm text-gray-600">Hiburan di perjalanan</p>
        </div>

        <div class="bg-red-50 p-4 rounded-lg">
          <div class="text-2xl mb-2">📶</div>
          <h4 class="font-bold">WiFi Gratis</h4>
          <p class="text-sm text-gray-600">Internet berkecepatan tinggi</p>
        </div>

        <div class="bg-red-50 p-4 rounded-lg">
          <div class="text-2xl mb-2">🔌</div>
          <h4 class="font-bold">Charger USB</h4>
          <p class="text-sm text-gray-600">Isi daya gadget Anda</p>
        </div>

        <div class="bg-red-50 p-4 rounded-lg">
          <div class="text-2xl mb-2">🛏️</div>
          <h4 class="font-bold">Kursi Reclining</h4>
          <p class="text-sm text-gray-600">(Tipe Luxury)</p>
        </div>

        <div class="bg-red-50 p-4 rounded-lg">
          <div class="text-2xl mb-2">🚽</div>
          <h4 class="font-bold">Kamar Mandi</h4>
          <p class="text-sm text-gray-600">(Tipe Luxury)</p>
        </div>
      </div>
    </section>

    <section id="tips" class="mb-8">
      <h2 class="text-3xl font-bold mb-4">💡 Tips Memilih Bus Pariwisata</h2>
      
      <div class="space-y-4">
        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h4 class="font-bold mb-2">1. Tentukan Budget Anda</h4>
          <p>Sesuaikan jenis bus dengan anggaran. Bus standard sudah cukup untuk perjalanan singkat, sedangkan luxury lebih cocok untuk perjalanan jarak jauh.</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h4 class="font-bold mb-2">2. Cek Jadwal Ketersediaan</h4>
          <p>Pesan bus minimal 1-2 minggu sebelumnya untuk memastikan ketersediaan di tanggal yang Anda inginkan.</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h4 class="font-bold mb-2">3. Verifikasi Lisensi & Asuransi</h4>
          <p>Pastikan bus memiliki surat izin operasional lengkap dan asuransi perjalanan yang valid.</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h4 class="font-bold mb-2">4. Baca Review & Testimoni</h4>
          <p>Cek rating dan ulasan dari pelanggan sebelumnya di Google Maps atau media sosial.</p>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4">
          <h4 class="font-bold mb-2">5. Negosiasikan Harga untuk Grup</h4>
          <p>Untuk pemesanan 2 bus atau lebih, minta diskon khusus hingga 20%.</p>
        </div>
      </div>
    </section>

    <section id="kesimpulan" class="mb-8">
      <h2 class="text-3xl font-bold mb-4">Kesimpulan</h2>
      <p class="mb-4">
        Memilih bus pariwisata yang tepat adalah kunci untuk perjalanan yang nyaman dan aman. Liberty Trans menawarkan berbagai pilihan bus dengan harga kompetitif dan fasilitas lengkap untuk segala kebutuhan perjalanan Anda.
      </p>
      
      <div class="bg-red-600 text-white p-6 rounded-lg text-center">
        <h3 class="text-2xl font-bold mb-4">Siap untuk Memesan Bus?</h3>
        <p class="mb-4">Hubungi Liberty Trans sekarang untuk konsultasi gratis dan penawaran terbaik!</p>
        <a href="https://wa.me/6281285065866" class="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
          📞 Hubungi via WhatsApp
        </a>
      </div>
    </section>

    <!-- Related Posts -->
    <section class="mt-12 border-t pt-8">
      <h3 class="text-2xl font-bold mb-6">📚 Baca Juga</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/blog/panduan-memilih-bus-pariwisata" class="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition">
          <h4 class="font-bold mb-2">Panduan Memilih Bus Pariwisata yang Tepat</h4>
          <p class="text-sm text-gray-600">Pelajari kriteria penting dalam memilih bus untuk berbagai kebutuhan perjalanan.</p>
        </a>

        <a href="/blog/harga-sewa-bus-makassar" class="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition">
          <h4 class="font-bold mb-2">Harga Sewa Bus Makassar - Bandingkan Sekarang</h4>
          <p class="text-sm text-gray-600">Tabel perbandingan lengkap harga sewa bus dari berbagai perusahaan di Makassar.</p>
        </a>
      </div>
    </section>
  </article>

  <!-- Footer (reuse from index.html) -->
</body>
</html>
```

---

## 📊 Progress Tracking

Create a file: `/SEO_CHECKLIST.md`

```markdown
# SEO Implementation Checklist

## Week 1 - Quick Wins
- [ ] Update meta description in index.html
- [ ] Add H1 to hero section  
- [ ] Add alt text to 10 images
- [ ] Add FAQ schema
- [ ] Create robots.txt
- [ ] Claim Google Business Profile
- [ ] Update sitemap.xml

## Week 2-3 - Content
- [ ] Write blog post #1: "Daftar Sewa Bus Makassar"
- [ ] Write blog post #2: "Panduan Memilih Bus"  
- [ ] Write blog post #3: "Harga Sewa Bus"
- [ ] Create blog listing page
- [ ] Add internal linking

## Week 4-6 - Authority
- [ ] Create location pages (Kota, Gowa, Sungguminasa)
- [ ] Build 20 backlinks
- [ ] Get 10+ Google reviews
- [ ] Add testimonial section

## Month 2+ - Advanced
- [ ] Add pricing calculator
- [ ] Create 360° tour
- [ ] Implement booking system
- [ ] Launch YouTube channel
```

---

**Start implementing today! These quick wins will boost your ranking in 2-4 weeks. 🚀**

