import { iconMenu } from "./constants.js";
import { handleIconMenuClick } from "./header/burger-menu.js";
import { toggleShadowHeader } from "./header/dynamic-shadow.js";

const burgerMenuEvent = iconMenu.addEventListener("click", handleIconMenuClick);
const shadowOnScrollEvent = window.addEventListener(
  "scroll",
  toggleShadowHeader
);

export { burgerMenuEvent };
