import { Repository } from "./data/repository.js";
import { loadSiteData } from "./usecases/loadSiteData.js";

const App = {
  init: async () => {
    try {
      const { services, fleets, gallery, contact } = loadSiteData(Repository);

      // Load critical sections (navbar, hero) first for immediate rendering
      const [
        { renderNavbar },
        { renderHero },
        { renderFooter },
      ] = await Promise.all([
        import("./sections/navbar.js"),
        import("./sections/hero.js"),
        import("./sections/footer.js"),
      ]);

      // Render critical sections immediately
      renderNavbar(contact);
      renderHero(contact);
      renderFooter(contact);

      // Load and render non-critical sections
      const [
        { renderServices },
        { renderFleets },
        { renderGallery },
        { renderCTA },
        { renderMap },
      ] = await Promise.all([
        import("./sections/services.js"),
        import("./sections/fleets.js"),
        import("./sections/gallery.js"),
        import("./sections/cta.js"),
        import("./sections/map.js"),
      ]);

      // Render non-critical sections
      renderServices(services);
      renderFleets(fleets);
      renderGallery(gallery, contact);
      renderCTA(contact);
      renderMap(contact);
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
