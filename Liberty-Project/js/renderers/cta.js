/**
 * RENDERER: CTA SECTION (CALL TO ACTION)
 */

const CTARenderer = {
    render: (contact) => {
        const waLink = Helpers.makeWALink(contact.wa, contact.waMessage);
        
        document.getElementById('kontak').innerHTML = `
            <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">  <!-- ← kurangi padding bottom -->
                <div class="container mx-auto px-4 text-center">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Siap untuk Perjalanan Terbaik?</h2>
                    <p class="text-gray-300 max-w-2xl mx-auto mb-8">
                        Hubungi kami sekarang untuk konsultasi jadwal & harga sewa bus.
                    </p>
                    <a href="${waLink}" target="_blank" class="inline-flex bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg items-center gap-3 transition hover-scale shadow-xl">
                        <i class="fab fa-whatsapp text-2xl"></i> Chat via WhatsApp
                    </a>
                    <div class="mt-8 text-gray-400">
                        <i class="fas fa-phone-alt"></i> Call Center: ${contact.phone} &nbsp;|&nbsp; 
                        <i class="fas fa-envelope"></i> ${contact.email}
                    </div>
                </div>
            </div>
        `;
    }
};