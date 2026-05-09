import { Helpers } from "../utils/helpers.js";

export function renderHero(contact) {
  const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());
  const heroLink = document.getElementById("hero-wa-link");

  if (heroLink) {
    heroLink.href = waLink;
    heroLink.target = "_blank";
  }
}
