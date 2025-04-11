import { addProduct } from "./create-jsonBin.js";

function createProduct() {
  let productName = document.getElementById("productName");
  let productDescription = document.getElementById("productDescription");
  let productCategory = document.getElementById("productCategory");
  let productPrice = document.getElementById("productPrice");

  let uploadImage = document.getElementById("upload-image");
  let img = uploadImage.querySelector("img");
  let p = uploadImage.querySelector("p");
  let submit = document.getElementById("add");

  let num = 1;
  submit.addEventListener("click", () => {
    let selectOption =
      productCategory.options[productCategory.selectedIndex].text;

    let product = {
      id: num,
      title: productName.value,
      img: img.getAttribute("src"),
      description: productDescription.value,
      price: +productPrice.value,
      category: selectOption
    };

    num++;
    addProduct(product);
  });
}

export { createProduct };
