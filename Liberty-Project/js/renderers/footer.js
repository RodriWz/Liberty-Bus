/**
 * RENDERER: FOOTER
 * Design: Clean Modern - Icon horizontal lurus
 */

const FooterRenderer = {
    render: (contact) => {
        document.getElementById('footer').innerHTML = `
            <div class="bg-gray-900 text-gray-400">
                <div class="container mx-auto px-4 py-10">
                    <!-- Bagian Atas: 3 Kolom -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Kiri: Info Perusahaan -->
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-6 bg-red-500"></div>
                                <h4 class="text-white font-semibold">Liberty Trans</h4>
                            </div>
                            <p class="text-sm text-gray-500 leading-relaxed">
                                Melayani sewa bus pariwisata, antar kota, dan event di Makassar. 
                                Profesional & terpercaya.
                            </p>
                        </div>
                        
                        <!-- Tengah: Kontak -->
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-6 bg-red-500"></div>
                                <h4 class="text-white font-semibold">Kontak</h4>
                            </div>
                            <div class="space-y-2 text-sm">
                                <p><i class="fab fa-whatsapp text-green-500 w-5"></i> <a href="https://wa.me/${contact.wa}" class="hover:text-white">${contact.phone}</a></p>
                                <p><i class="far fa-envelope w-5"></i> ${contact.email}</p>
                                <p><i class="fas fa-map-marker-alt text-red-500 w-5"></i> ${contact.address}</p>
                            </div>
                        </div>
                        
                        <!-- Kanan: Sosial Media (LURUS HORIZONTAL) -->
                        <div>
                            <div class="flex items-center gap-2 mb-3">
                                <div class="w-1 h-6 bg-red-500"></div>
                                <h4 class="text-white font-semibold">Follow Us</h4>
                            </div>
                            <div class="flex gap-4">
                                <a href="${contact.ig}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition">
                                    <i class="fab fa-instagram text-lg"></i>
                                </a>
                                <a href="${contact.fb}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition">
                                    <i class="fab fa-facebook-f text-lg"></i>
                                </a>
                                <a href="${contact.yt}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition">
                                    <i class="fab fa-youtube text-lg"></i>
                                </a>
                                <a href="${contact.tt}" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-600 hover:text-white transition">
                                    <i class="fab fa-tiktok text-lg"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Bagian Bawah: Copyright -->
                    <div class="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
                        © 2025 Liberty Trans Wisata. All rights reserved.
                    </div>
                </div>
            </div>
        `;
    }
};