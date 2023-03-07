const signInButton = document.querySelector(".open-modal");
const modalCloseButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

signInButton.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.add("show");
});

modalCloseButton.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});

overlay.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});
