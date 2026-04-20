const ServicesData = [
  Models.createService(
    1,
    "fas fa-users",
    "Sewa Bus Pariwisata",
    "Sewa bus pariwisata murah di Makassar untuk study tour, outing kantor, dan wisata keluarga dengan armada bersih, nyaman, kapasitas 31–59 seat.",
    "red",
  ),

  Models.createService(
    2,
    "fas fa-charging-station",
    "Premium Executive",
    "Bus VIP dengan layanan prima, dilengkapi kursi rebah, stop kontak, hiburan, dan fasilitas lengkap untuk perjalanan lebih nyaman dan eksklusif.",
    "orange",
  ),

  Models.createService(
    3,
    "fas fa-clock",
    "Antar Jemput Bandara",
    "Layanan antar jemput bandara yang nyaman, tepat waktu, dan aman untuk rombongan dengan armada ber-AC dan sopir berpengalaman.",
    "red",
  ),

  Models.createService(
    4,
    "fas fa-shield-alt",
    "Asuransi Perjalanan",
    "Setiap perjalanan dilengkapi asuransi penumpang dan standar keamanan tinggi untuk memastikan perjalanan lebih aman dan tenang.",
    "orange",
  ),
];

const FleetsData = [
  {
    id: 1,
    name: "Bus Parawisata 1",
    description:
      "Pengalaman perjalanan mewah dengan kursi reclining dan hiburan lengkap",
    facilities: [
      "AC Dingin",
      "Charger USB",
      "TV 1 Unit",
      "Reclining Seat",
      "WiFi",
    ],
    imageUrl: "img/bis1.png",
    price: "Mulai Rp 2.500.000",
  },
  {
    id: 2,
    name: "Bus Pariwisata 2",
    description:
      "Legroom luas, bagasi besar, perfect untuk perjalanan rombongan",
    facilities: [
      "AC Dingin",
      "Karaoke",
      "TV 1 Unit",
      "Microphone",
      "Bagasi besar",
    ],
    imageUrl: "img/bis2.jpeg",
    price: "Mulai Rp 2.000.000",
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

const Repository = {
  getServices: () => ServicesData,
  getFleets: () => FleetsData,
  getGallery: () => GalleryData,
  getContact: () => ContactData,
};
