const submitBtn = document.querySelector(".submit-button");
const main = document.querySelector("main");
const thankYouPage = document.querySelector(".thankyou-container");
const allButtons = document.querySelectorAll(".button");
const selected = document.getElementById("selected");
let number = 0;

function activeButton(btns, index) {
  if (btns.classList.contains("active-buttons")) {
    if (index === 0) {
      number = 1;
    } else if (index === 1) {
      number = 2;
    } else if (index === 2) {
      number = 3;
    } else if (index === 3) {
      number = 4;
    } else if (index === 4) {
      number = 5;
    }
  }
}

allButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    removeActiveClasses();
    button.classList.toggle("active-buttons");
    activeButton(button, index);
  });
});

function removeActiveClasses() {
  allButtons.forEach((button) => {
    button.classList.remove("active-buttons");
  });
}

submitBtn.addEventListener("click", () => {
  if (number !== 0) {
    submitBtn.disabled = false;
    submitBtn.classList.toggle("active-submit");
    displayNextPage();
  } else {
    submitBtn.disabled = true;
  }
});

function displayNextPage() {
  main.style.display = "none";
  thankYouPage.style.display = "flex";
  selected.textContent = number;
}
