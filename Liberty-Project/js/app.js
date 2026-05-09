import { Repository } from "./data/repository.js";
import { loadSiteData } from "./usecases/loadSiteData.js";

const App = {
  init: async () => {
    const { services, fleets, gallery, contact } = loadSiteData(Repository);

    const [{ renderNavbar }, { renderHero }, { renderFooter }] =
      await Promise.all([
        import("./sections/navbar.js"),
        import("./sections/hero.js"),
        import("./sections/footer.js"),
      ]);

    renderNavbar(contact);
    renderHero(contact);
    renderFooter(contact);

    const loadDeferredSections = async () => {
      try {
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

        renderServices(services);
        renderFleets(fleets);
        renderGallery(gallery, contact);
        renderCTA(contact);
        renderMap(contact);
      } catch (error) {
        console.error(error);
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadDeferredSections, { timeout: 2000 });
    } else {
      setTimeout(loadDeferredSections, 1000);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  App.init().catch((error) => console.error(error));
});
