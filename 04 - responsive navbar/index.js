const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", () => {
  document.querySelector(".links").classList.toggle("show-links");
});
