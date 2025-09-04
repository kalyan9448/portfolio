 const hero = document.getElementById("hero");
  const images = ["banner1.jpg", "banner2.jpg", "banner3.jpg"]; // your images
  let i = 0;

  setInterval(() => {
    hero.style.backgroundImage = `url(${images[i]})`;
    i = (i + 1) % images.length;
  }, 3000); // change every 3s

  function toggleDetails(element) {
  const details = element.querySelector(".details");
  if (details.style.display === "block") {
    details.style.display = "none";
  } else {
    details.style.display = "block";
  }
}
// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// === Mobile Navbar Toggle ===
function toggleMenu() {
  const nav = document.querySelector(".navbar ul");
  nav.classList.toggle("show");
}

// === Optional: Close menu when clicking a link ===
document.querySelectorAll(".navbar ul li a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".navbar ul").classList.remove("show");
  });
});
