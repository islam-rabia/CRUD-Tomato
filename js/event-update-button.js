import { handleDataUpdate } from "./handle-data-update.js";
import { showSectionUpdate } from "./show-section-update.js";

function eventUpdateButton(wishList) {
  let btns = document.querySelectorAll(".update");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = +btn.getAttribute("data-id");

      handleDataUpdate(id, wishList);
      showSectionUpdate();
    });
  });
}

export { eventUpdateButton };
