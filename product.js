const URLParams = new URLSearchParams(window.location.search);
let productId = URLSearchParams.get("productId");
let product_container = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    product_container.innerHTML = `
        <div class="product-image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Sahara Team India Jersey" />
      </div>
      <div class="product-info">
        <h2>${data.productdisplayname}</h2>
        <p><strong>Mærke:</strong> ${data.brandname}</p>
        <p><strong>Farve:</strong> ${data.basecolour} </p>
        <p><strong>Varenummer:</strong> ${data.id} </p></p>
        <p class="price">${data.price},-</p>
        <label for="size">Vælg en størrelse:</label>
        <select id="size">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button id="add-to-basket" disabled>Læg i kurv</button>
      </div>
    
    `;
  });
