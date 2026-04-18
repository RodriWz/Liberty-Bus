/**
 * RENDERER: SERVICES SECTION (LAYANAN)
 */

const ServicesRenderer = {
    render: (services) => {
        const cardsHtml = services.map(s => {
            const iconColor = s.color === 'red' ? 'text-red-600' : 'text-orange-500';
            const bgColor = s.color === 'red' ? 'bg-red-100' : 'bg-orange-100';
            
            return `
                <div class="bg-white rounded-3xl p-8 text-center transition-all duration-300 hover-lift border border-gray-100 group">
                    <div class="w-20 h-20 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                        <i class="${s.icon} text-3xl ${iconColor}"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">${s.title}</h3>
                    <p class="text-gray-600">${s.description}</p>
                </div>
            `;
        }).join('');
        
        document.getElementById('layanan').innerHTML = `
            <div class="container mx-auto px-4 md:px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Layanan Kami</h2>
                    <div class="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${cardsHtml}
                </div>
            </div>
        `;
    }
};