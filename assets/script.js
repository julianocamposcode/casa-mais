const dropdowns = document.querySelectorAll(".dropdown-btn");
dropdowns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const content = btn.nextElementSibling;
    content.classList.toggle("show");
  });
});