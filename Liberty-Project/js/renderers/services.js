const ServicesRenderer = {
    render: (services) => {
        const cardsHtml = services.map(s => {
            const iconBg = s.color === 'red' ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-orange-500 to-orange-600';
            return `
                <div class="flex-shrink-0 w-72 bg-white rounded-2xl p-6 text-left hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl border border-gray-100">
                    <div class="${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                        <i class="${s.icon} text-white text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-gray-800">${s.title}</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">${s.description}</p>
                    <div class="mt-4 flex items-center gap-1 text-red-500 text-sm">
                        <span>Selengkapnya</span>
                        <i class="fas fa-arrow-right text-xs"></i>
                    </div>
                </div>
            `;
        }).join('');
        
        document.getElementById('layanan').innerHTML = `
            <div class="bg-gradient-to-b from-white to-gray-50">
                <div class="container mx-auto px-4 md:px-6 py-16">
                    <div class="text-center mb-10">
                        <span class="text-red-500 font-semibold text-sm uppercase tracking-wider">LAYANAN KAMI</span>
                        <h2 class="text-3xl md:text-4xl font-extrabold mt-2 mb-4">Kenapa Pilih <span class="text-red-600">Liberty Trans?</span></h2>
                        <div class="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
                        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">Kami hadir dengan layanan terbaik untuk perjalanan Anda</p>
                    </div>
                    
                    <!-- Horizontal Scroll -->
                    <div class="overflow-x-auto pb-6 scrollbar-thin">
                        <div class="flex gap-6 md:gap-8" style="min-width: max-content;">
                            ${cardsHtml}
                        </div>
                    </div>
                    
                    <!-- Indikator Scroll (opsional) -->
                    <div class="flex justify-center gap-2 mt-8">
                        <div class="w-2 h-2 rounded-full bg-red-500"></div>
                        <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </div>
        `;
    }
};