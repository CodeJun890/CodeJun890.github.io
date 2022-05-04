const parallax = document.querySelector(".box-1");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});
