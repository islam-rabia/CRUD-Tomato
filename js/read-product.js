import { eventDeleteButton } from "./event-delete-button.js";
import { eventUpdateButton } from "./event-update-button.js";

let wishList;
async function generateData() {
  let req = await fetch("https://api.jsonbin.io/v3/b/6843fec48a456b7966aa6e5b");
  let res = await req.json();

  let products = res.record.products;
  wishList = products;

  handleData(products);
}

let app = document.querySelector("tbody");
function handleData(data) {
  app.innerHTML = data
    .map((item, index) => {
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
          <button data-id="${id}" class="delete">Delete</button>
        </td>
      </tr>
    `;
    })
    .join("");

  eventUpdateButton(wishList);
  eventDeleteButton();
}

export { generateData, handleData };
