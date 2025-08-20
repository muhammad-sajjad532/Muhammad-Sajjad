// Simple Add to Cart Alert
document.querySelectorAll(".product-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Product added to cart!");
  });
});

