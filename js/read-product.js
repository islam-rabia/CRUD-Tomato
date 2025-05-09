import { handleDataUpdate } from "./handle-data-update.js";
import { showSectionUpdate } from "./show-section-update.js";

let wishList;
async function generateData() {
  let req = await fetch("https://api.jsonbin.io/v3/b/67fd2e3e8561e97a50ff6005");
  let res = await req.json();

  let products = res.record.products;
  wishList = products;

  handleData(products);
}

let app = document.querySelector("tbody");
function handleData(data) {
  app.innerHTML = data
    .map((item) => {
      let { id, title, img, category, price } = item;

      return `
      <tr>
        <td>${id}</td>
        <td>
          <img src="${img}" alt="" />
        </td>
        <td>${title}</td>
        <td>${category}</td>
        <td>${price}</td>
        <td class="btns">
          <button data-id="${id}" class="update">Update</button>
          <button class="delete">Delete</button>
        </td>
      </tr>
    `;
    })
    .join("");

  app.addEventListener("click", (event) => {
    let btn = event.target.closest(".update");

    if (btn) {
      let id = btn.dataset.id;

      handleDataUpdate(id, wishList);
      showSectionUpdate();
    }
  });
}

export { generateData, handleData };
