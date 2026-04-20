const FleetsRenderer = {
    render: (fleets) => {
        const fleetHtml = fleets
            .map(
                (bus) => `
                <a href="#kontak" class="block group">
                    <div class="aspect-square bg-gray-100 overflow-hidden">
                        <img
                            src="${bus.imageUrl}"
                            alt="${bus.name} - Liberty Trans Makassar"
                            width="800"
                            height="800"
                            loading="lazy"
                            decoding="async"
                            class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        >
                    </div>
                    <div class="mt-3">
                        <h3 class="font-medium text-gray-800 group-hover:text-red-500 transition">${bus.name}</h3>
                        <p class="text-red-600 font-bold text-sm mt-1">${bus.price}</p>
                        <p class="text-gray-400 text-xs mt-1">${bus.facilities.length} fasilitas tersedia</p>
                    </div>
                </a>
            `,
            )
            .join("");

        document.getElementById("armada").innerHTML = `
            <div class="bg-white">
                <div class="container mx-auto px-4 py-16">
                    <div class="flex justify-between items-end mb-8">
                        <div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-800">Armada</h2>
                            <div class="w-12 h-px bg-red-500 mt-2"></div>
                        </div>
                        <a href="#kontak" class="text-sm text-gray-500 hover:text-gray-700" aria-label="Lihat semua armada">Lihat semua →</a>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                        ${fleetHtml}
                    </div>
                </div>
            </div>
        `;
    },
};