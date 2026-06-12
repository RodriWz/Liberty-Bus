export function renderGallery(gallery, contact) {
  const testimoniCards = document.getElementById("testimoni-cards");
  if (!testimoniCards) return;

  testimoniCards.innerHTML = gallery
    .map((item, index) => {
      const colors = ["#FFF2F2", "#F2FFF2", "#FFF9E6", "#E6F3FF", "#F5E6FF"];
      const color = colors[index % colors.length];
      const rotate = [-1, 1, -2, 2, 0][index % 5];

      return `
        <div class="relative" style="transform: rotate(${rotate}deg);">
          <div style="background: ${color}; box-shadow: 2px 2px 10px rgba(0,0,0,0.05);" class="p-5 rounded-sm border border-gray-200">
            <div class="flex justify-between items-start">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
                  ${item.customer.charAt(0)}
                </div>
                <div>
                  <p class="font-medium text-gray-800 text-sm">${item.customer}</p>
                  <p class="text-gray-400 text-xs">${item.date}</p>
                </div>
              </div>
              <div class="flex text-yellow-400 text-xs">
                ${'<i class="fas fa-star"></i>'.repeat(5)}
              </div>
            </div>
            <p class="text-gray-600 text-sm mt-3 italic">"${item.description.substring(0, 100)}..."</p>
            <div class="flex items-center gap-2 mt-3">
              <span class="text-xs text-gray-500">🚍 ${item.busType}</span>
              <span class="text-xs text-gray-500">📍 ${item.destination}</span>
            </div>
            <div class="mt-3 pt-2 text-right">
              <a
                href="https://wa.me/${contact.wa}?text=Halo%20saya%20tertarik%20dengan%20layanan%20seperti%20${encodeURIComponent(item.customer)}"
                target="_blank"
                class="text-green-600 text-xs inline-flex items-center gap-1"
              >
                <i class="fab fa-whatsapp"></i> Sewa juga
              </a>
            </div>
          </div>
          <div class="absolute -top-2 left-1/2 w-6 h-6 rounded-full bg-gray-300 -translate-x-1/2"></div>
        </div>
      `;
    })
    .join("");
}
