const sidebar = document.querySelector(".sidebar");
const toggleSidebarBtn = document.querySelector(".sidebar-toggle-btn");
const closeSidebarBtn = document.querySelector(".close-sidebar-btn");

toggleSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
