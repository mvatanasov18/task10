import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const element = document.querySelector(".image");
  element.addEventListener("click", function() {
    element.style.transform = "scale(2)";
  });
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
