const BIN_ID = "67f30b6d8a456b796683bfde";
const API_KEY = "$2a$10$NaT1r2Rdq6yKCRp5Qf.CLuPZLZEMqdBsGZ6pl3LgtF6ro6xf2ESqO";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function addProduct(product) {
  let req = await fetch(BIN_URL, {
    method: "GET",
    headers: { "X-Master-Key": API_KEY }
  });
  let res = await req.json();
  let products = res.record.products;
  products.push(product);

  await fetch(BIN_URL, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify({ products: products })
  });

  console.log(products);
}

export { addProduct };
