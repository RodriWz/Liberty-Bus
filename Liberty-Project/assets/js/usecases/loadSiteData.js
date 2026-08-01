export function loadSiteData(repository) {
  return {
    services: repository.getServices(),
    fleets: repository.getFleets(),
    gallery: repository.getGallery(),
    contact: repository.getContact(),
  };
}
