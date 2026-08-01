export const Models = {
  // Membuat object Service
  createService: (id, icon, title, description, color) => ({
    id,
    icon,
    title,
    description,
    color,
  }),

  // Membuat object Contact
  createContact: (wa, phone, email, address, ig, fb, yt, tt) => ({
    wa,
    phone,
    email,
    address,
    ig,
    fb,
    yt,
    tt,
  }),
};
