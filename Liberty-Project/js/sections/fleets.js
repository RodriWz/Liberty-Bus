export function renderFleets(fleets) {
  const armadaGrid = document.getElementById("armada-grid");
  if (!armadaGrid) return;

  armadaGrid.innerHTML = fleets
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
          />
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
}
