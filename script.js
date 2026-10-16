// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after tapping a link
mobileMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
