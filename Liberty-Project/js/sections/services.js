export function renderServices(services) {
  const layananCards = document.getElementById("layanan-cards");
  if (!layananCards) return;

  layananCards.innerHTML = services
    .map((s) => {
      const iconBg =
        s.color === "red"
          ? "bg-gradient-to-br from-red-500 to-red-600"
          : "bg-gradient-to-br from-orange-500 to-orange-600";

      return `
        <div class="flex-shrink-0 w-72 bg-white rounded-2xl p-6 text-left hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl border border-gray-100">
          <div class="${iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
            <i class="${s.icon} text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold mb-2 text-gray-800">${s.title}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">${s.description}</p>
          <div class="mt-4 flex items-center gap-1 text-red-500 text-sm">
            <span>Selengkapnya</span>
            <i class="fas fa-arrow-right text-xs"></i>
          </div>
        </div>
      `;
    })
    .join("");
}
