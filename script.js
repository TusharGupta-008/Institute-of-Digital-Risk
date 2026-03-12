const navbar = document.getElementById("navbar");
const mobileToggle = document.getElementById("mobile-toggle");
const navLinks = document.getElementById("nav-links");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

mobileToggle.addEventListener("click", () => {
  mobileToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  document.body.style.overflow = navLinks.classList.contains("active")
    ? "hidden"
    : "";
});

document.querySelectorAll(".nav-link, .nav-cta").forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      mobileToggle.classList.remove("active");
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button");
    const text = btn.textContent;

    btn.textContent = "Sending...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    setTimeout(() => {
      btn.textContent = "Sent!";
      btn.style.background = "#10B981";
      btn.style.borderColor = "#10B981";
      form.reset();

      setTimeout(() => {
        btn.textContent = text;
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.background = "";
        btn.style.borderColor = "";
      }, 3000);
    }, 1000);
  });
}
