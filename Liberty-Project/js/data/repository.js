const ServicesData = [
    Models.createService(
  1,
  'fas fa-users',
  'Sewa Bus Pariwisata',
  'Sewa bus pariwisata murah di Makassar untuk study tour, outing kantor, dan wisata keluarga dengan armada bersih, nyaman, kapasitas 31–59 seat.',
  'red'
),

Models.createService(
  2,
  'fas fa-charging-station',
  'Premium Executive',
  'Bus VIP dengan layanan prima, dilengkapi kursi rebah, stop kontak, hiburan, dan fasilitas lengkap untuk perjalanan lebih nyaman dan eksklusif.',
  'orange'
),

Models.createService(
  3,
  'fas fa-clock',
  'Antar Jemput Bandara',
  'Layanan antar jemput bandara yang nyaman, tepat waktu, dan aman untuk rombongan dengan armada ber-AC dan sopir berpengalaman.',
  'red'
),

Models.createService(
  4,
  'fas fa-shield-alt',
  'Asuransi Perjalanan',
  'Setiap perjalanan dilengkapi asuransi penumpang dan standar keamanan tinggi untuk memastikan perjalanan lebih aman dan tenang.',
  'orange'
)
];


const FleetsData = [
    {
        id: 1,
        name: 'Bus Parawisata 1',
        description: 'Pengalaman perjalanan mewah dengan kursi reclining dan hiburan lengkap',
        facilities: ['AC Dingin', 'Charger USB', 'TV 1 Unit', 'Reclining Seat', 'WiFi'],
        imageUrl: 'img/bis1.png',
        price: 'Mulai Rp 2.500.000'
    },
    {
        id: 2,
        name: 'Bus Pariwisata 2',
        description: 'Legroom luas, bagasi besar, perfect untuk perjalanan rombongan',
        facilities: ['AC Dingin', 'Karaoke', 'TV 1 Unit', 'Microphone', 'Bagasi besar'],
        imageUrl: 'img/bis2.jpeg',
        price: 'Mulai Rp 2.000.000'
    },
];

const GalleryData = [
    {
        id: 1,
        imageUrl: 'img/doc1.png',
        title: 'Study Tour SMK Negeri 2',
        customer: 'SMK Negeri 2 Jakarta',
        destination: 'Makassar - Toraja',
        date: '15 Maret 2025',
        busType: 'Bus Parawisata 2',
        description: 'Perjalanan study tour 3 hari 2 malam bersama 40 siswa'
    },
    {
        id: 2,
        imageUrl: 'images/outing-kantor.jpg',
        title: 'Outing Kantor PT Maju Jaya',
        customer: 'PT Maju Jaya Group',
        destination: 'Jakarta - Pangandaran',
        date: '10 April 2025',
        busType: 'Bus Pariwisata 31 Seat',
        description: 'Acara outing 2 hari bersama 28 karyawan'
    },
    {
        id: 3,
        imageUrl: 'images/wedding-trip.jpg',
        title: 'Wedding Trip Keluarga H. Slamet',
        customer: 'Keluarga H. Slamet',
        destination: 'Jakarta - Yogyakarta',
        date: '5 April 2025',
        busType: 'Bus Executive 44 Seat',
        description: 'Perjalanan rombongan walimatul ursy 50 orang'
    },
];

const ContactData = Models.createContact(
    '6281285065866',  
    '+62 812-8506-5866',
    'info@libertytrans.com',
    'Jl. Dg. Ramang, Sudiang Raya, Kec. Biringkanaya, Kota Makassar',
    'https://instagram.com/libertytrans',
    'https://facebook.com/libertytrans',
    'https://youtube.com/libertytrans',
    'https://tiktok.com/@libertytrans'
);

const Repository = {
    getServices: () => ServicesData,
    getFleets: () => FleetsData,
    getGallery: () => GalleryData,
    getContact: () => ContactData
};