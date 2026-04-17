const MapRenderer = {
    render: (contact) => {
        const mapSrc = "https://www.google.com/maps/search/Wisma%20Liberty/@-5.100029945373535,119.52474975585938,17z?hl=en";
        
        let mapSection = document.getElementById('lokasi');
        if (!mapSection) {
            const testimoniSection = document.getElementById('testimoni');
            mapSection = document.createElement('section');
            mapSection.id = 'lokasi';
            mapSection.className = 'py-20 bg-white';
            testimoniSection.insertAdjacentElement('afterend', mapSection);
        }
        
        mapSection.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Lokasi Kami</h2>
                    <div class="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                    <p class="text-gray-600 mt-4">Kunjungi kantor kami untuk konsultasi langsung</p>
                </div>
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 class="text-2xl font-bold mb-4">Alamat Kantor</h3>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-map-marker-alt text-red-600 mr-2"></i> ${contact.address}
                        </p>
                        <p class="text-gray-600 mb-2">
                            <i class="fas fa-phone-alt text-red-600 mr-2"></i> ${contact.phone}
                        </p>
                        <p class="text-gray-600 mb-4">
                            <i class="fas fa-envelope text-red-600 mr-2"></i> ${contact.email}
                        </p>
                        <div class="flex gap-4 mt-6">
                            <a href="https://maps.google.com/?q=${encodeURIComponent(contact.address)}" 
                               target="_blank" 
                               class="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-red-700 transition hover-scale">
                                <i class="fab fa-google"></i> Buka di Google Maps
                            </a>
                        </div>
                    </div>
                    <div class="h-96 rounded-2xl overflow-hidden shadow-lg">
                        <iframe 
                            src="${mapSrc}"
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        `;
    }
};