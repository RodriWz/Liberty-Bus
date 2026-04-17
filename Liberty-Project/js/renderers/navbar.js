/**
 * RENDERER: NAVBAR
 */

const NavbarRenderer = {
    render: (contact) => {
        const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());
        
        document.getElementById('navbar').innerHTML = `
            <div class="bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div class="container mx-auto px-4 md:px-6 py-4">
                    <div class="flex justify-between items-center flex-wrap gap-4">
                        <div>
                            <h1 class="text-2xl md:text-3xl font-extrabold gradient-text">Bus Prima Nusantara</h1>
                            <span class="text-sm text-gray-500">⭐ Perjalanan Aman & Premium</span>
                        </div>
                        <div class="flex items-center gap-4 md:gap-6 flex-wrap">
                            <a href="#home" class="text-gray-700 hover:text-red-600 font-semibold transition">Beranda</a>
                            <a href="#layanan" class="text-gray-700 hover:text-red-600 font-semibold transition">Layanan</a>
                            <a href="#armada" class="text-gray-700 hover:text-red-600 font-semibold transition">Armada</a>
                            <a href="#testimoni" class="text-gray-700 hover:text-red-600 font-semibold transition">Testimoni</a>
                            <a href="${waLink}" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 transition hover-scale">
                                <i class="fab fa-whatsapp"></i> WA Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};