import { updateProduct } from "./update-product.js";

function handleDataUpdate(productId, products) {
  let productName = document.getElementById("name");
  let productDescription = document.getElementById("description");
  let productCategory = document.getElementById("category");
  let productPrice = document.getElementById("price");

  let sectionUpdate = document.getElementById("update-section");
  let uploadImage = sectionUpdate.querySelector("#upload-image");
  let img = uploadImage.querySelector("img");
  let p = uploadImage.querySelector("p");

  let product = products.find((ele) => (ele.id == productId ? ele : undefined));

  if (product) {
    productName.value = product.title;
    productDescription.value = product.description;
    productPrice.value = product.price;
    productCategory.selectedIndex = [...productCategory.options].findIndex(
      (option) => option.text === product.category
    );
    img.src = product.img;
  }

  img.style.display = "block";
  p.style.display = "none";
  img.style.cssText = `
    width: 100%;
    height: 100%
  `;

  updateProduct(productId, products);
}

export { handleDataUpdate };
