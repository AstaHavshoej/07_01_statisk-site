const productList = document.querySelector(".product_list_container");
const category_list = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category_list}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `<a href="product.html?productId=${product.id}" style="text-decoration: none; color: inherit">

          <div class="product_card ${product.discount ? "discount" : ""} ${product.soldout ? "sold_out" : ""}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="tøj" />
            ${product.soldout ? '<div class="sold_out_label">Sold Out</div>' : ""}
            <h3>${product.productdisplayname}</h3>
            <p class="brand">${product.articletype} | ${product.brandname}</p>
            <p class="price">
              ${product.discount ? `<span class="old_price">${product.price},-</span> <span class="new_price">${(product.price * 0.8).toFixed(2)},-</span>` : `${product.price},-`}
            </p>
          </div>
        </a>`
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
