import { header } from "../constants.js";

function toggleShadowHeader() {
  if (window.pageYOffset > 60) {
    header.classList.add("_active");
  } else {
    header.classList.remove("_active");
  }
}

export { toggleShadowHeader };
