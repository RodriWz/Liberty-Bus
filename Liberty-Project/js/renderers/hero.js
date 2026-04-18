const HeroRenderer = {
    render: (contact) => {
        const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());
        
        document.getElementById('home').innerHTML = `
            <div class="relative bg-gray-900 min-h-[80vh] flex items-center">
                <!-- Gambar background dengan opacity rendah -->
                <div class="absolute inset-0 opacity-30">
                    <img src="img/bis1.png" class="w-full h-full object-cover">
                </div>
                
                <!-- Konten di atas gambar -->
                <div class="relative container mx-auto px-4 py-20 z-10">
                    <div class="max-w-2xl">
                        <p class="text-orange-400 text-sm uppercase tracking-wider mb-4">Liberty Trans Wisata</p>
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Sewa Bus<br>
                            di <span class="text-orange-400">Makassar</span>
                        </h1>
                        <p class="text-gray-300 text-lg mt-6 mb-8 leading-relaxed">
                            Armada bersih, sopir profesional, harga bersaing. 
                            Perjalanan aman dan nyaman untuk rombongan Anda.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="${waLink}" target="_blank" class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-medium transition flex items-center justify-center gap-2">
                                <i class="fab fa-whatsapp"></i> Pesan Sekarang
                            </a>
                            <a href="#armada" class="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 font-medium transition">
                                Lihat Armada
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};