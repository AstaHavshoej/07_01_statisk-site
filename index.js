const categories = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (category) =>
        ` <a href="productlist.html?category=${category.category}" class="category_card">
          <p>${category.category}</p>
        </a>
    `
    )
    .join("");
  console.log(markup);
  categories.innerHTML = markup;
}
