const Models = {
    // Membuat object Service
    createService: (id, icon, title, description, color) => ({
        id, icon, title, description, color
    }),

    // Membuat object Fleet (Armada)
    createFleet: (id, name, description, facilities, imageUrl, price) => ({
        id, name, description, facilities, imageUrl, price
    }),

    // Membuat object Testimonial
    createTestimonial: (id, quote, author, role, rating) => ({
        id, quote, author, role, rating
    }),

    // Membuat object Contact
    createContact: (wa, phone, email, address, ig, fb, yt, tt) => ({
        wa, phone, email, address, ig, fb, yt, tt
    })
};