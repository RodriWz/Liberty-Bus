/**
 * seo/schema.js
 * Schema.org Structured Data — Liberty Trans
 *
 * Data diambil langsung dari js/data/repository.js
 * Jika ContactData di repository berubah, update file ini juga.
 *
 * Cek hasil di: https://search.google.com/test/rich-results
 */

(function () {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    // --- Identitas Bisnis ---
    "name": "Liberty Trans",
    "description": "Layanan sewa bus pariwisata dan transportasi di Makassar. Armada bersih, sopir profesional, harga bersaing untuk study tour, outing kantor, dan wisata keluarga.",
    "url": "https://libertytrans.id",
    "logo": "https://libertytrans.id/images/logo.png",
    "image": "https://libertytrans.id/images/og-image.jpg",

    // --- Kontak (dari ContactData di repository.js) ---
    "telephone": "+62-812-8506-5866",
    "email": "info@libertytrans.com",

    // --- Alamat (dari ContactData di repository.js) ---
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Dg. Ramang, Sudiang Raya",
      "addressLocality": "Makassar",
      "addressSubLocality": "Kec. Biringkanaya",
      "addressRegion": "Sulawesi Selatan",
      "addressCountry": "ID"
    },

    // --- Koordinat GPS Kec. Biringkanaya Makassar ---
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -5.0731,
      "longitude": 119.5143
    },

    // --- Jam Operasional ---
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday","Tuesday","Wednesday",
          "Thursday","Friday","Saturday","Sunday"
        ],
        "opens": "07:00",
        "closes": "21:00"
      }
    ],

    // --- Harga (dari FleetsData di repository.js) ---
    "priceRange": "Rp 2.000.000 - Rp 2.500.000",

    // --- Layanan (dari ServicesData di repository.js) ---
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Liberty Trans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sewa Bus Pariwisata",
            "description": "Sewa bus pariwisata murah di Makassar untuk study tour, outing kantor, dan wisata keluarga."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Executive",
            "description": "Bus VIP dengan layanan prima, kursi rebah, stop kontak, dan hiburan lengkap."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Antar Jemput Bandara",
            "description": "Layanan antar jemput bandara yang nyaman, tepat waktu, dan aman untuk rombongan."
          }
        }
      ]
    },

    // --- Media Sosial (dari ContactData di repository.js) ---
    "sameAs": [
      "https://wa.me/6281285065866",
      "https://instagram.com/libertytrans",
      "https://facebook.com/libertytrans",
      "https://youtube.com/libertytrans",
      "https://tiktok.com/@libertytrans"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
})();