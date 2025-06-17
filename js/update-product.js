import { handleData } from "./read-product.js";

function updateProduct(productId, products) {
  let productName = document.getElementById("name");
  let productDescription = document.getElementById("description");
  let productCategory = document.getElementById("category");
  let productPrice = document.getElementById("price");

  let sectionUpdate = document.getElementById("update-section");
  let uploadImage = sectionUpdate.querySelector("#upload-image");
  let img = uploadImage.querySelector("img");
  let p = uploadImage.querySelector("p");

  let btn = sectionUpdate.querySelector(".update");

  let cloneBtn = btn.cloneNode(true);
  btn.replaceWith(cloneBtn);

  cloneBtn.addEventListener("click", () => {
    let selectOption =
      productCategory.options[productCategory.selectedIndex].text;

    let product = {
      id: +productId,
      title: productName.value,
      img: img.getAttribute("src"),
      description: productDescription.value,
      price: +productPrice.value,
      category: selectOption
    };

    let productIndex = products.findIndex((ele) => ele.id === +productId);
    products[productIndex] = product;

    const BIN_ID = "6843fec48a456b7966aa6e5b";
    const API_KEY =
      "$2a$10$HPOtPgen1KsngRnZCyzwxe8rjeTsxkbkZVxeK10nA6jWvTiTT/O.W";
    const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

    fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify({ products: products })
    });

    handleData(products);
    sectionUpdate.classList.remove("active");
  });
}

export { updateProduct };
