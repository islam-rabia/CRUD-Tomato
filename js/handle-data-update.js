function handleDataUpdate(productId, products) {
  let productName = document.getElementById("name");
  let productDescription = document.getElementById("description");
  let productCategory = document.getElementById("category");
  let productPrice = document.getElementById("price");

  let uploadImage = document.getElementById("upload-image");
  let img = uploadImage.querySelector("img");
  let p = uploadImage.querySelector("p");

  let product = products.find((ele) => (ele.id == productId ? ele : undefined));

  console.log(product);
}

export { handleDataUpdate };
