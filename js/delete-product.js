import { handleData } from "./read-product.js";

async function deleteProduct(productId) {
  const BIN_ID = "6843fec48a456b7966aa6e5b";
  const API_KEY =
    "$2a$10$HPOtPgen1KsngRnZCyzwxe8rjeTsxkbkZVxeK10nA6jWvTiTT/O.W";
  const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  let req = await fetch(BIN_URL, {
    method: "GET",
    headers: { "X-Master-Key": API_KEY }
  });
  let res = await req.json();
  let products = res.record.products;

  // products.splice(index, 1);
  let deletedProduct = products.filter((ele) =>
    ele.id !== productId ? ele : undefined
  );
  console.log(deletedProduct);

  await fetch(BIN_URL, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify({ products: deletedProduct })
  });

  handleData(deletedProduct);
}

export { deleteProduct };
