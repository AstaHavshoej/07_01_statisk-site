let productList = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<a href="product.html" style="text-decoration: none; color: inherit">
          <div class="product_card">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tøj" />
            <h3>${product.productdisplayname}</h3>
            <p class="brand">${product.articletype} | ${product.brandname}</p>
            <p class="price">${product.price},-</p>
          </div>
        </a>`;
    })
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
