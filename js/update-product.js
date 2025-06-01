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

    const BIN_ID = "67fd2e3e8561e97a50ff6005";
    const API_KEY =
      "$2a$10$79uMxe6J40e80gJnvCuwd.dju4hRjWJbnQTwMPgK1opYHjYWLLTLK";
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
