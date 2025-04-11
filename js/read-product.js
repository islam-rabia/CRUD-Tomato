async function generateData() {
  let req = await fetch("https://api.jsonbin.io/v3/b/67f30b6d8a456b796683bfde");
  let res = await req.json();
  let products = res.record.products;

  handleData(products);
}

let app = document.querySelector("tbody");
function handleData(data) {
  app.innerHTML = data
    .map((item) => {
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
      </tr>
    `;
    })
    .join("");
}

export { generateData };
