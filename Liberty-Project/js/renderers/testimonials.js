/**
 * RENDERER: TESTIMONIALS SECTION
 */

const TestimonialsRenderer = {
    render: (testimonials) => {
        const testiHtml = testimonials.map(t => `
            <div class="bg-white rounded-2xl p-6 shadow-md hover-lift transition">
                <i class="fas fa-quote-left text-red-300 text-3xl mb-4 opacity-50"></i>
                <p class="text-gray-700 italic mb-4">"${t.quote}"</p>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                            ${t.author.charAt(0)}
                        </div>
                        <div>
                            <p class="font-bold text-gray-800">${t.author}</p>
                            <p class="text-sm text-gray-500">${t.role}</p>
                        </div>
                    </div>
                    <div class="text-yellow-500 text-sm">
                        ${Helpers.getStars(t.rating)}
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('testimoni').innerHTML = `
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Apa Kata Pelanggan?</h2>
                    <div class="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                    <p class="text-gray-600 mt-4">Kepercayaan pelanggan adalah prioritas utama kami</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${testiHtml}
                </div>
            </div>
        `;
    }
};