/**
 * RENDERER: GALLERY SECTION (Dokumentasi Pelanggan)
 */

const GalleryRenderer = {
    render: (gallery) => {
        const galleryHtml = gallery.map(item => `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift transition group">
                <div class="relative overflow-hidden h-56">
                    <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                    <div class="absolute top-3 left-3">
                        <span class="bg-red-600 text-white text-xs px-2 py-1 rounded-full">${item.busType}</span>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="text-lg font-bold mb-2 hover:text-red-600 transition">${item.title}</h3>
                    <div class="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <i class="fas fa-user-circle text-red-500"></i>
                        <span>${item.customer}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <i class="fas fa-map-marker-alt text-red-500"></i>
                        <span>${item.destination}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-400 text-xs mb-3">
                        <i class="far fa-calendar-alt"></i>
                        <span>${item.date}</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4 border-t pt-3 mt-2">${item.description}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-1 text-yellow-500 text-sm">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="text-gray-500 ml-1">(5.0)</span>
                        </div>
                        <a href="https://wa.me/${Repository.getContact().wa}?text=Halo%20saya%20tertarik%20dengan%20layanan%20seperti%20${encodeURIComponent(item.customer)}" 
                           target="_blank" 
                           class="text-green-600 hover:text-green-700 font-semibold text-sm inline-flex items-center gap-1">
                            Sewa Juga <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('testimoni').innerHTML = `
            <div class="bg-orange-50">  <!-- ← background oranye, sama seperti sebelumnya -->
                <div class="container mx-auto px-4 md:px-6 py-16">  <!-- ← py-16, bukan py-20 -->
                    <div class="text-center mb-12">
                        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">📸 Dokumentasi Pelanggan</h2>
                        <div class="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                        <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Lebih dari 50+ pelanggan telah mempercayakan perjalanannya kepada kami. 
                            Berikut beberapa dokumentasi kebahagiaan mereka.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        ${galleryHtml}
                    </div>
                    
                    <div class="text-center mt-12 pb-0 mb-0">  <!-- ← tambah pb-0 mb-0 -->
                        <div class="inline-block bg-gradient-to-r from-red-500 to-orange-500 p-0.5 rounded-full">
                            <a href="https://wa.me/${Repository.getContact().wa}?text=Halo%20saya%20tertarik%20untuk%20sewa%20bus" 
                               target="_blank" 
                               class="inline-flex bg-white hover:bg-gray-50 text-red-600 px-8 py-3 rounded-full font-bold items-center gap-2 transition">
                                <i class="fab fa-whatsapp text-green-500"></i> 
                                Mau Seperti Mereka? Hubungi Kami
                                <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};