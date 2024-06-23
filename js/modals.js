import {
  buttonsPopap,
  buttonPopapClose,
  modalOverlay,
  modals,
} from "./constants.js";

function openModal() {
  buttonsPopap.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const button = event.target.closest(".button-main");
      const path = button.getAttribute("data-popap-path");

      const popap = document
        .querySelector(`[data-popap-target="${path}"]`)
        .classList.add("modal__visible");

      modalOverlay.classList.add("modal-overlay__visible");
    });
  });
}

openModal();

export function closeModal() {
  modalOverlay.addEventListener("click", (e) => {
    const closeBtn = e.target.closest(".button-popap-close");

    if (e.target === modalOverlay || closeBtn) {
      modalOverlay.classList.remove("modal-overlay__visible");
      modals.forEach((modal) => {
        modal.classList.remove("modal__visible");
      });
    }
  });
}

closeModal();
