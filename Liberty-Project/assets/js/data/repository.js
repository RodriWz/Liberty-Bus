import { Models } from "../entities/models.js";

const ServicesData = [
  Models.createService(
    1,
    "fas fa-users",
    "Sewa Bus Pariwisata",
    "Layanan sewa bus nyaman untuk study tour, outing kantor, wisata keluarga, dan perjalanan rombongan dengan armada bersih dan kapasitas variatif.",
    "red",
  ),

  Models.createService(
    2,
    "fas fa-charging-station",
    "Premium Executive",
    "Bus VIP dengan kursi nyaman, stop kontak, WiFi, dan fasilitas lengkap untuk perjalanan keluarga, kantor, atau wisata yang lebih eksklusif.",
    "orange",
  ),

  Models.createService(
    3,
    "fas fa-clock",
    "Antar Jemput Bandara",
    "Pelayanan antar jemput bandara yang tepat waktu, aman, dan nyaman untuk rombongan maupun keluarga yang ingin langsung menuju tujuan.",
    "red",
  ),

  Models.createService(
    4,
    "fas fa-shield-alt",
    "Paket Hemat Rombongan",
    "Tersedia paket hemat untuk rombongan besar dengan harga kompetitif, armada terawat, dan layanan yang konsisten.",
    "orange",
  ),
];

const FleetsData = [
  {
    id: 1,
    name: "Bus Pariwisata Executive",
    description:
      "Pilihan terbaik untuk perjalanan keluarga, study tour, dan rombongan dengan fasilitas nyaman dan modern.",
    facilities: [
      "AC Dingin",
      "Charger USB",
      "TV 1 Unit",
      "Reclining Seat",
      "WiFi",
    ],
    imageUrl: "assets/img/bis1.webp",
    price: "Mulai Rp 1.700.000",
  },
  {
    id: 2,
    name: "Bus Pariwisata Premium",
    description:
      "Cocok untuk perjalanan jauh, rombongan besar, dan wisata santai dengan ruang bagasi luas.",
    facilities: [
      "AC Dingin",
      "Karaoke",
      "TV 1 Unit",
      "Microphone",
      "Bagasi besar",
    ],
    imageUrl: "assets/img/bis2.webp",
    price: "Mulai Rp 1.700.000",
  },
];

const GalleryData = [
  {
    id: 1,
    title: "Study Tour",
    customer: "SMA Negeri 1 Makassar",
    destination: "Makassar - Toraja",
    date: "15 Maret 2025",
    busType: "Bus Parawisata 2",
    description: "Perjalanan study tour 3 hari 2 malam bersama 40 siswa",
  },
  {
    id: 2,
    title: "Keluarga Besar",
    customer: "Keluarga dari toraja",
    destination: "Makassar - Manado",
    date: "10 April 2025",
    busType: "Bus Pariwisata 2",
    description:
      "Perjalanan Keluarga besar 60 orang untuk liburan akhir tahun ke Manado",
  },
  {
    id: 3,
    title: "Wisata Rohani",
    customer: "Rukun St Agustinus",
    destination: "Makassar - Pantai Bira",
    date: "5 April 2025",
    busType: "Bus Parawisata 1",
    description:
      "Perjalanan wisata rohani keluarga besar 30 orang ke Pantai Bira untuk liburan akhir pekan",
  },
];

const ContactData = Models.createContact(
  "6281285065866",
  "+62 812-8506-5866",
  "info@libertytrans.com",
  "Jl. Dg. Ramang, Sudiang Raya, Kec. Biringkanaya, Kota Makassar",
  "https://instagram.com/libertytrans",
  "https://facebook.com/libertytrans",
  "https://youtube.com/libertytrans",
  "https://tiktok.com/@libertytrans",
);

export const Repository = {
  getServices: () => ServicesData,
  getFleets: () => FleetsData,
  getGallery: () => GalleryData,
  getContact: () => ContactData,
};
