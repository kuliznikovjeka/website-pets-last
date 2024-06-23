import {
  iconMenu,
  headerCloseMenu,
  menuBody,
  headerLinks,
  headerTop,
} from "../constants.js";

function handleIconMenuClick() {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
  headerCloseMenu.classList.toggle("_active");
  headerTop.classList.toggle("_active");
}

function handleCloseMenu() {
  document.body.classList.remove("_lock");
  menuBody.classList.remove("_active");
  iconMenu.classList.remove("_active");
  headerTop.classList.remove("_active");
}

headerLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);

    const scrollTagret = document.getElementById(href);

    const topOffset = document.querySelector(".header").offsetHeight + 0;

    if (window.innerWidth < 480) {
      topOffset === 100;
    }

    const elementPosition = scrollTagret.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    if (iconMenu.classList.contains("_active")) {
      console.log("click");
      handleCloseMenu();
    }

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

export { handleIconMenuClick };
