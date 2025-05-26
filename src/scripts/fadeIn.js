document.addEventListener("DOMContentLoaded", () => {
  // Staggered animation for hero elements
  const heroElements = document.querySelectorAll(".hero-gradient > div > *");

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    // Apply staggered animations with delay
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        // Force a reflow to ensure the initial state is applied before transition
        element.offsetHeight;

        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 150);
    });

    // Add hover effect to nav links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.style.color = "var(--primary)";
      });

      link.addEventListener("mouseleave", () => {
        if (!link.classList.contains("active")) {
          link.style.color = "";
        }
      });
    });
  }

  // Make the navigation sticky on scroll
  const nav = document.querySelector(".sticky-nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      nav.classList.add("header-shadow");
    } else {
      nav.classList.remove("header-shadow");
    }

    lastScrollY = currentScrollY;
  });
});
