const iconMenu = document.querySelector(".icon-menu");

const menuBody = document.getElementById("menu-body");
const menuButton = document.getElementById("menu-button");

const header = document.querySelector(".header");
const headerLinks = document.querySelectorAll('a[href*="#"]');
const headerCloseMenu = document.querySelector(".header__close-menu");
const headerBox1 = document.getElementById("header-box-work-1");
const headerBox2 = document.getElementById("header-box-work-2");
const headerTop = document.querySelector(".header__top")

const tabs = document.querySelector(".scroll-block-doctors__tabs");
const tabsBtn = document.querySelectorAll(".scroll-block-doctors__tab-btn");
const tabsContent = document.querySelectorAll(".doctors__item");

const modalOverlay = document.querySelector(".modal-overlay");
const modals = document.querySelectorAll(".modal");
const buttonsPopap = document.querySelectorAll(".button-main");
const buttonPopapClose = document.querySelectorAll("button-popap-close");

export {
  iconMenu,
  headerCloseMenu,
  menuBody,
  header,
  headerLinks,
  menuButton,
  headerBox1,
  headerBox2,
  headerTop,
  tabs,
  tabsBtn,
  tabsContent,
  modalOverlay,
  buttonsPopap,
  buttonPopapClose,
  modals,
};
