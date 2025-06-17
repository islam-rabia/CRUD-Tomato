import { handleData } from "./read-product.js";

const BIN_ID = "6843fec48a456b7966aa6e5b";
const API_KEY = "$2a$10$HPOtPgen1KsngRnZCyzwxe8rjeTsxkbkZVxeK10nA6jWvTiTT/O.W";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function addProduct() {
  let req = await fetch(BIN_URL, {
    method: "GET",
    headers: { "X-Master-Key": API_KEY }
  });
  let res = await req.json();
  let products = res.record.products;

  createProduct(products);
}

function createProduct(products) {
  let productName = document.getElementById("productName");
  let productDescription = document.getElementById("productDescription");
  let productCategory = document.getElementById("productCategory");
  let productPrice = document.getElementById("productPrice");

  let uploadImage = document.getElementById("upload-image");
  let img = uploadImage.querySelector("img");
  let p = uploadImage.querySelector("p");
  let submit = document.getElementById("add");

  submit.addEventListener("click", () => {
    if (
      productName.value === "" ||
      productPrice.value === "" ||
      productCategory.value === 0 ||
      img.getAttribute("src") == null ||
      productDescription.value === ""
    ) {
      let errorSection = document.getElementById("error");
      errorSection.classList.add("active");

      setTimeout(() => {
        errorSection.classList.remove("active");
      }, 1500);
    } else {
      let selectOption =
        productCategory.options[productCategory.selectedIndex].text;

      let product = {
        id: products.length + 1,
        title: productName.value,
        img: img.getAttribute("src"),
        description: productDescription.value,
        price: +productPrice.value,
        category: selectOption
      };

      products.push(product);
      fetch(BIN_URL, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "X-Master-Key": API_KEY
        },
        body: JSON.stringify({ products: products })
      });

      handleData(products);

      productName.value = "";
      productPrice.value = "";
      productCategory.selectedIndex = 0;
      img.style.display = "none";
      p.style.display = "block";
    }
  });
}

export { addProduct };
