// Product List
const products = [
  { id: 1, name: "Wireless Earbuds", mrp: 2499, price: 1999, img: "https://images.unsplash.com/photo-1585386959984-a41552263e8b" },
  { id: 2, name: "Smartphone", mrp: 17999, price: 14999, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
  { id: 3, name: "Laptop", mrp: 69999, price: 59999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
  { id: 4, name: "Backpack", mrp: 1499, price: 999, img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d" },
  { id: 5, name: "Shoes", mrp: 2999, price: 2499, img: "https://images.unsplash.com/photo-1528701800489-20be9c1be993" }
];

// Cart array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render Products
function renderProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "col-md-4 mb-4";
    div.innerHTML = `
      <div class="card p-3 shadow-sm product-card h-100">
        <img src="${p.img}" class="product-img mb-3" alt="${p.name}">
        <h5 class="fw-bold">${p.name}</h5>
        <p>
          <span class="text-muted text-decoration-line-through">₹${p.mrp}</span>
          <span class="text-success fw-bold ms-2">₹${p.price}</span>
        </p>
        <button class="btn btn-sm btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    productList.appendChild(div);
  });
}

// Add product to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Search functionality
document.getElementById("searchBar").addEventListener("input", e => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
  renderProducts(filtered);
});

// Initial render
renderProducts(products);
