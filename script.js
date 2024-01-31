// const buttons = {
//   one: document.querySelector(".one"),
//   two: document.querySelector(".two"),
//   three: document.querySelector(".three"),
//   four: document.querySelector(".four"),
//   five: document.querySelector(".five"),
// };
const submitBtn = document.querySelector(".submit-button");
const main = document.querySelector("main");
const thankYouPage = document.querySelector(".thankyou-container");
const allButtons = document.querySelectorAll(".button");
// const { one, two, three, four, five } = buttons;
let number = 0;

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeActiveClasses();
    button.classList.toggle("active-buttons");
  });
});

function removeActiveClasses() {
  allButtons.forEach((button) => {
    button.classList.remove("active-buttons");
  });
}

submitBtn.addEventListener("click", () => {
  submitBtn.classList.toggle("active-submit");
  displayNextPage();
});

function displayNextPage() {
  main.style.display = "none";
  thankYouPage.style.display = "flex";
}
