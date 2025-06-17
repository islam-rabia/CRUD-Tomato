async function generateData() {
  let req = await fetch("https://api.jsonbin.io/v3/b/6843fec48a456b7966aa6e5b");
  let res = await req.json();

  let products = res.record.products;
  wishList = products;

  handleData(products);
}

let app = document.querySelector(".products-list");

function handleData(data) {
  app.innerHTML = data
    .map((item) => {
      let { id, img, title, description, price } = item;

      return `
      <li>
        <figure>
          <img src="${img}" alit="" />
        </figure>

        <div class="product-info">
          <h3>${title}</h3>
          <p>${description}</p>
          <span>$${price}</span>
        </div>
      </li>
    `;
    })
    .join("");
}

generateData();
