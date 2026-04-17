const ServicesData = [
    Models.createService(1, 'fas fa-users', 'Sewa Bus Pariwisata', 'Cocok untuk study tour, outing kantor, wisata keluarga. Kapasitas 31 - 59 seat.', 'red'),
    Models.createService(2, 'fas fa-charging-station', 'Premium Executive', 'Bus VIP dengan kursi rebah, stop kontak, hiburan, dan toilet.', 'orange'),
    Models.createService(3, 'fas fa-clock', 'Antar Jemput Bandara', 'Layanan eksklusif antar jemput rombongan bandara dengan bus berpendingin.', 'red'),
    Models.createService(4, 'fas fa-shield-alt', 'Asuransi Perjalanan', 'Setiap perjalanan dilengkapi asuransi penumpang & armada standar keselamatan.', 'orange')
];


const FleetsData = [
    {
        id: 1,
        name: 'Bus Executive 44 Seat',
        description: 'Pengalaman perjalanan mewah dengan kursi reclining dan hiburan lengkap',
        facilities: ['AC Dingin', 'Charger USB', 'TV 32 Inch', 'Reclining Seat', 'WiFi'],
        imageUrl: 'https://images.unsplash.com/photo-1570125909232-6d264b2dfc5c?w=600&auto=format',
        price: 'Mulai Rp 2.500.000'
    },
    {
        id: 2,
        name: 'Bus Pariwisata 31 Seat',
        description: 'Legroom luas, bagasi besar, perfect untuk perjalanan rombongan',
        facilities: ['AC Dingin', 'Karaoke', 'TV 2 unit', 'Microphone', 'Bagasi besar'],
        imageUrl: 'https://images.unsplash.com/photo-1588339210737-fa3c9b7a82f3?w=600&auto=format',
        price: 'Mulai Rp 2.000.000'
    },
    {
        id: 3,
        name: 'Minibus Premium 19 Seat',
        description: 'Flexibel untuk group kecil, family trip, atau corporate event',
        facilities: ['AC Dingin', 'Audio Premium', 'USB Charger', 'Kursi Nyaman', 'Mudah Parkir'],
        imageUrl: 'https://images.unsplash.com/photo-1599913993726-586e5882c0c0?w=600&auto=format',
        price: 'Mulai Rp 1.500.000'
    }
];

const TestimonialsData = [
    {
        id: 1,
        quote: 'Bus bersih, supir ramah dan mengemudi dengan aman. Perusahaan kami puas menggunakan Bus Prima untuk outing Jakarta - Bandung.',
        author: 'Ibu Ratna',
        role: 'HRD Perkasa Group',
        rating: 5
    },
    {
        id: 2,
        quote: 'Fasilitas mewah banget! Kursi nyaman kayak pesawat, AC dingin, on time. Anak-anak sekolah happy study tour.',
        author: 'Pak Dodi',
        role: 'Guru SMK Negeri 2',
        rating: 5
    },
    {
        id: 3,
        quote: 'Pelayanan cepat via WhatsApp, harga transparan. Sewa bus untuk pernikahan, semua tamu terkesan dengan armadanya.',
        author: 'Keluarga H. Slamet',
        role: 'Customer Setia',
        rating: 4
    }
];

const ContactData = Models.createContact(
    '6281234567890',  
    '+62 812-3456-7890',
    'info@busprima.com',
    'Jl. Raya Transportasi No.88, Jakarta Timur',
    'https://instagram.com/busprima',
    'https://facebook.com/busprima',
    'https://youtube.com/busprima',
    'https://tiktok.com/@busprima'
);

const Repository = {
    getServices: () => ServicesData,
    getFleets: () => FleetsData,
    getTestimonials: () => TestimonialsData,
    getContact: () => ContactData
};