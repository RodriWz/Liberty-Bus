/**
 * RENDERER: FLEETS SECTION (ARMADA)
 */

const FleetsRenderer = {
    render: (fleets) => {
        const fleetHtml = fleets.map(bus => `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition">
                <img src="${bus.imageUrl}" alt="${bus.name}" class="w-full h-56 object-cover">
                <div class="p-6">
                    <h4 class="text-xl font-bold mb-2">${bus.name}</h4>
                    <p class="text-gray-600 text-sm mb-3">${bus.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${bus.facilities.map(f => `
                            <span class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
                                <i class="fas ${Helpers.getFacilityIcon(f)} text-orange-500 text-xs"></i> ${f}
                            </span>
                        `).join('')}
                    </div>
                    <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                        <span class="text-red-600 font-bold text-lg">${bus.price}</span>
                        <a href="#kontak" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition hover-scale">
                            Sewa Sekarang
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('armada').innerHTML = `
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Armada Modern & Terawat</h2>
                    <div class="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                    <p class="text-gray-600 mt-4 max-w-2xl mx-auto">Kami memiliki berbagai pilihan armada untuk kebutuhan perjalanan Anda</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${fleetHtml}
                </div>
            </div>
        `;
    }
};