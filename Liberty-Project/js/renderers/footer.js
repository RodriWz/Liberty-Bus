/**
 * RENDERER: FOOTER
 */

const FooterRenderer = {
    render: (contact) => {
        document.getElementById('footer').innerHTML = `
            <div class="bg-gray-900 text-gray-400 py-12">
                <div class="container mx-auto px-4 md:px-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h4 class="text-white text-xl font-bold mb-4">Bus Liberty Trans</h4>
                            <p class="text-sm">Melayani sewa bus pariwisata, antar kota, dan event di seluruh Indonesia. Profesional & terpercaya sejak 2012.</p>
                        </div>
                        <div>
                            <h4 class="text-white text-xl font-bold mb-4">Alamat Operasional</h4>
                            <p><i class="fas fa-map-marker-alt mr-2"></i> ${contact.address}</p>
                            <p class="mt-2"><i class="fas fa-clock mr-2"></i> 24 Jam Layanan Customer Care</p>
                        </div>
                        <div>
                            <h4 class="text-white text-xl font-bold mb-4">Ikuti Kami</h4>
                            <div class="flex gap-4">
                                <a href="${contact.ig}" target="_blank" class="hover:text-orange-500 transition text-2xl"><i class="fab fa-instagram"></i></a>
                                <a href="${contact.fb}" target="_blank" class="hover:text-orange-500 transition text-2xl"><i class="fab fa-facebook"></i></a>
                                <a href="${contact.yt}" target="_blank" class="hover:text-orange-500 transition text-2xl"><i class="fab fa-youtube"></i></a>
                                <a href="${contact.tt}" target="_blank" class="hover:text-orange-500 transition text-2xl"><i class="fab fa-tiktok"></i></a>
                            </div>
                            <p class="mt-4 text-sm"><i class="fas fa-certificate text-orange-500"></i> Berizin & Terdaftar Kemenhub</p>
                        </div>
                    </div>
                    <div class="text-center pt-8 border-t border-gray-800 text-sm">
                        © 2025 Bus Liberty Trans. All rights reserved.
                    </div>
                </div>
            </div>
        `;
    }
};