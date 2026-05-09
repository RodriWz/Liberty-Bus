import { Helpers } from "../utils/helpers.js";

export function renderNavbar(contact) {
  const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());
  const waAnchor = document.getElementById("navbar-wa-link");

  if (waAnchor) {
    waAnchor.href = waLink;
    waAnchor.target = "_blank";
  }
}
