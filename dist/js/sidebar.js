let toggleBtn = document.querySelector(".menu-toggle");
let sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
