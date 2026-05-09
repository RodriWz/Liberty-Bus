const App = {
  loadScript: (src) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(script);
    }),

  init: async () => {
    const services = Repository.getServices();
    const fleets = Repository.getFleets();
    const gallery = Repository.getGallery();
    const contact = Repository.getContact();

    NavbarRenderer.render(contact);
    HeroRenderer.render(contact);
    FooterRenderer.render(contact);

    const loadDeferredRenderers = async () => {
      try {
        await App.loadScript("js/renderers/services.js");
        await App.loadScript("js/renderers/fleets.js");
        await App.loadScript("js/renderers/gallery.js");
        await App.loadScript("js/renderers/cta.js");

        if (typeof MapRenderer === "undefined") {
          await App.loadScript("js/renderers/map.js");
        }

        ServicesRenderer.render(services);
        FleetsRenderer.render(fleets);
        GalleryRenderer.render(gallery);
        CTARenderer.render(contact);

        if (typeof MapRenderer !== "undefined") {
          MapRenderer.render(contact);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => loadDeferredRenderers(), { timeout: 2000 });
    } else {
      setTimeout(() => loadDeferredRenderers(), 1000);
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  App.init().catch((error) => console.error(error));
});
