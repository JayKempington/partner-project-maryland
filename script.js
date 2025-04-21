const hamburger = document.querySelector("button");
const nav = document.querySelector("nav");
let displayed = false;

hamburger.addEventListener("click", () => {
  if (!displayed) {
    nav.style.display = "block";
    nav.style.left = "80%";
    displayed = true;
  } else {
    nav.style.display = "none";
    nav.style.left = "150%";
    displayed = false;
  }
});
