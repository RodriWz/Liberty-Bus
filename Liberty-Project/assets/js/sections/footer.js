import { Helpers } from "../utils/helpers.js";

export function renderFooter(contact) {
  const waAnchor = document.getElementById("footer-wa-link");
  const emailSpan = document.getElementById("footer-email");
  const addressSpan = document.getElementById("footer-address");
  const igLink = document.getElementById("footer-ig-link");
  const fbLink = document.getElementById("footer-fb-link");
  const ytLink = document.getElementById("footer-yt-link");
  const ttLink = document.getElementById("footer-tt-link");

  const waLink = Helpers.makeWALink(contact.wa, Helpers.getWAMessage());

  if (waAnchor) {
    waAnchor.href = waLink;
    waAnchor.textContent = contact.phone;
    waAnchor.target = "_blank";
  }
  if (emailSpan) {
    emailSpan.textContent = contact.email;
  }
  if (addressSpan) {
    addressSpan.textContent = contact.address;
  }
  if (igLink) {
    igLink.href = contact.ig;
  }
  if (fbLink) {
    fbLink.href = contact.fb;
  }
  if (ytLink) {
    ytLink.href = contact.yt;
  }
  if (ttLink) {
    ttLink.href = contact.tt;
  }
}
