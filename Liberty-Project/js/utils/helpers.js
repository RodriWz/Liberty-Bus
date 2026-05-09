export const Helpers = {
  // Buat link WhatsApp
  makeWALink: (phone, message) => {
    const encodedMsg = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMsg}`;
  },

  // Pesan default WhatsApp
  getWAMessage: () =>
    "Halo, saya ingin info sewa bus untuk rombongan. Tolong dibantu jadwal dan harganya. Terima kasih!",
};
