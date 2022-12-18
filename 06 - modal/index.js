const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
