const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 0) {
    header.classList.add("scrolled-header");
  } else {
    header.classList.remove("scrolled-header");
  }
});
