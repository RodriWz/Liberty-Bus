    const HeroRenderer = {
    render: (contact) => {
        const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());
        
        document.getElementById('home').innerHTML = `
            <div class="bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-[85vh] flex items-center">
                <div class="container mx-auto px-4 md:px-6 py-16 md:py-20">
                    <div class="flex flex-col lg:flex-row items-center gap-12">
                        <div class="flex-1 text-center lg:text-left animate-fade-in">
                            <div class="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                                <i class="fas fa-bus"></i> Armada Terbaru 2025
                            </div>
                            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                                Perjalanan Bisnis & Liburan
                                <i class="fas fa-route text-orange-500"></i><br>
                                Lebih Nyaman dengan 
                                <span class="gradient-text">Liberty</span>
                            </h1>
                            <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:mx-0 mx-auto">
                                Liberty Trans Wisata menyediakan layanan sewa bus pariwisata murah di Makassar dengan kualitas terbaik. Kami menghadirkan armada bus yang bersih, nyaman, dan terawat, serta didukung oleh sopir berpengalaman dan profesional untuk memastikan perjalanan Anda aman dan menyenangkan.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="${waLink}" target="_blank" class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-3 transition hover-scale shadow-lg">
                                    <i class="fab fa-whatsapp text-xl"></i> Hubungi via WA
                                </a>
                                <a href="#armada" class="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-full font-bold transition text-center">
                                    Lihat Bis →
                                </a>
                            </div>
                        </div>
                        <img src="img/bis1.png" class="rounded-3xl shadow-custom w-full max-w-md mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};