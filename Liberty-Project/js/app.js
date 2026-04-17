const App = {
    init: () => {
        const services = Repository.getServices();
        const fleets = Repository.getFleets();
        const testimonials = Repository.getTestimonials();
        const contact = Repository.getContact();

        console.log("Contact data:", contact); // Debugging

        NavbarRenderer.render(contact);
        HeroRenderer.render(contact);
        ServicesRenderer.render(services);
        FleetsRenderer.render(fleets);
        TestimonialsRenderer.render(testimonials);
        CTARenderer.render(contact);
        FooterRenderer.render(contact);
        
        if (typeof MapRenderer !== 'undefined') {
            MapRenderer.render(contact);
            console.log("MapRenderer ditemukan dan dijalankan");
        } else {
            console.error("MapRenderer tidak ditemukan! Cek file map.js");
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});