import { Helpers } from "../utils/helpers.js";

export function renderCTA(contact) {
  const kontakCta = document.getElementById("kontak-cta");
  if (!kontakCta) return;

  const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());
  kontakCta.innerHTML = `
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 rounded-3xl shadow-2xl">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold mb-4">Siap Berangkat dengan Liberty Trans?</h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-8">
          Konsultasikan kebutuhan rombongan Anda sekarang untuk mendapatkan paket sewa bus yang nyaman, aman, dan sesuai budget.
        </p>
        <a href="${waLink}" target="_blank" class="inline-flex bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg items-center gap-3 transition shadow-xl">
          <i class="fab fa-whatsapp text-2xl"></i> Chat via WhatsApp
        </a>
        <div class="mt-8 text-gray-400 text-sm">
          <p><i class="fas fa-phone-alt"></i> Call Center: ${contact.phone}</p>
          <p><i class="fas fa-envelope"></i> ${contact.email}</p>
        </div>
      </div>
    </div>
  `;
}
