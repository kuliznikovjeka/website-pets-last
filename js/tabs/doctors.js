import { tabs, tabsBtn, tabsContent } from "../constants.js";

tabs.addEventListener("click", (e) => {
  const button = e.target.closest(".scroll-block-doctors__tab-btn");

  if (button) {
    const tabsPath = button.getAttribute("data-tabs-path");
    console.log(tabsPath);
    tabsHandler(tabsPath);
  }
});

function tabsHandler(path) {
  tabsBtn.forEach((el) => {
    el.classList.remove("scroll-block-doctors__tab-btn_active");
  });

  document
    .querySelector(`[data-tabs-path="${path}"]`)
    .classList.add("scroll-block-doctors__tab-btn_active");

  tabsContent.forEach((el) => {
    el.classList.remove("doctors__item_active");
  });

  document
    .querySelector(`[data-tabs-target="${path}"]`)
    .classList.add("doctors__item_active");
}

export { tabsHandler };
