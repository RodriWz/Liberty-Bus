import { Repository } from "./data/repository.js";
import { loadSiteData } from "./usecases/loadSiteData.js";

const App = {
  init: async () => {
    try {
      const { services, fleets, gallery, contact } = loadSiteData(Repository);

      // Load all sections in parallel
      const [
        { renderNavbar },
        { renderHero },
        { renderFooter },
        { renderServices },
        { renderFleets },
        { renderGallery },
        { renderCTA },
        { renderMap },
      ] = await Promise.all([
        import("./sections/navbar.js"),
        import("./sections/hero.js"),
        import("./sections/footer.js"),
        import("./sections/services.js"),
        import("./sections/fleets.js"),
        import("./sections/gallery.js"),
        import("./sections/cta.js"),
        import("./sections/map.js"),
      ]);

      // Render all sections
      renderNavbar(contact);
      renderHero(contact);
      renderServices(services);
      renderFleets(fleets);
      renderGallery(gallery, contact);
      renderCTA(contact);
      renderMap(contact);
      renderFooter(contact);
    } catch (error) {
      console.error("Error initializing app:", error);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
