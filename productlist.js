const productList = document.querySelector(".product_list_container");
const category_list = new URLSearchParams(window.location.search).get("category");

console.log("Hej");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category_list}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<a href="product.html" style="text-                                                                                                                                                                                                        decoration: none; color: inherit">
          <div class="product_card">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tøj" />
            <h3>${product.productdisplayname}</h3>
            <p class="brand">${product.articletype} | ${product.brandname}</p>
            <p class="price">${product.price},-</p>
          </div>
        </a>`
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
