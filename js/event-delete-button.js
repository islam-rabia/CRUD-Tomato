import { deleteProduct } from "./delete-product.js";

function eventDeleteButton() {
  let btns = document.querySelectorAll(".delete");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let id = +btn.getAttribute("data-id");

      deleteProduct(id);
    });
  });
}

export { eventDeleteButton };
