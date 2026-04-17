const Helpers = {
    // Buat link WhatsApp
    makeWALink: (phone, message) => {
        const encodedMsg = encodeURIComponent(message);
        return `https://wa.me/${phone}?text=${encodedMsg}`;
    },

    // Pesan default WhatsApp
    getWAMessage: () => 'Halo, saya ingin info sewa bus untuk rombongan. Tolong dibantu jadwal dan harganya. Terima kasih!',

    // Buat bintang rating
    getStars: (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    },

    // Dapatkan icon untuk fasilitas
    getFacilityIcon: (facility) => {
        const icons = {
            'AC Dingin': 'fa-snowflake',
            'Charger USB': 'fa-battery-full',
            'TV 32 Inch': 'fa-tv',
            'Reclining Seat': 'fa-couch',
            'WiFi': 'fa-wifi',
            'Karaoke': 'fa-microphone-alt',
            'TV 2 unit': 'fa-tv',
            'Microphone': 'fa-microphone',
            'Bagasi besar': 'fa-suitcase',
            'Audio Premium': 'fa-music',
            'USB Charger': 'fa-plug',
            'Kursi Nyaman': 'fa-chair',
            'Mudah Parkir': 'fa-parking'
        };
        return icons[facility] || 'fa-check-circle';
    },

    // Warna untuk card layanan
    getServiceColors: (color) => {
        const colors = {
            red: 'bg-red-100 text-red-600',
            orange: 'bg-orange-100 text-orange-500'
        };
        return colors[color] || colors.red;
    }
};