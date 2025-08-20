// assets/theme.js

document.addEventListener("DOMContentLoaded", () => {
  /* -------------------
     Mobile Menu Toggle
  ------------------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  /* -------------------
     Product Image Hover
  ------------------- */
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    const img = card.querySelector("img");
    const hoverImg = card.getAttribute("data-hover-img");

    if (img && hoverImg) {
      card.addEventListener("mouseenter", () => {
        img.dataset.original = img.src;
        img.src = hoverImg;
      });

      card.addEventListener("mouseleave", () => {
        img.src = img.dataset.original;
      });
    }
  });

  /* -------------------
     Add to Cart Button
  ------------------- */
  const cartCount = document.querySelector(".cart-count");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  if (cartCount) {
    let count = 0;

    addToCartButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;

        // Small feedback animation
        btn.classList.add("added");
        setTimeout(() => btn.classList.remove("added"), 600);
      });
    });
  }

  /* -------------------
     Scroll to Top Button
  ------------------- */
  const scrollBtn = document.querySelector(".scroll-top");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        scrollBtn.classList.add("visible");
      } else {
        scrollBtn.classList.remove("visible");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
