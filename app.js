document.addEventListener("DOMContentLoaded", function () {
  // Ensures the page starts at the top on reload
  window.scrollTo(0, 0);

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", () => {
    const isExpanded = navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isExpanded);
  });

  // Close menu when a link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});
