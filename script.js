const hamburger = document.querySelector("button");
const nav = document.querySelector("nav");
let displayed = false;

hamburger.addEventListener("click", () => {
  if (!displayed) {
    nav.classList.add("display-nav");
    displayed = true;
  } else {
    nav.classList.remove("display-nav");
    displayed = false;
  }
});
