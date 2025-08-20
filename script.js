let ingredients_button = document.querySelector('.ingredients-button');
let ingredients_list = document.querySelector('.ingredients-list');
let instructions_button = document.querySelector('.instructions-button');
let instructions_list = document.querySelector('.instructions-list');

// Toggle Ingredients
ingredients_button.addEventListener("click", function() {
  ingredients_list.classList.toggle("show");
});

// Toggle Instructions
instructions_button.addEventListener("click", function() {
  instructions_list.classList.toggle("show");
});

// Cooking steps
let startBtn = document.querySelector(".start");
let nextBtn = document.querySelector(".next");
let steps = document.querySelectorAll(".instructions-list li");
let currentStep = 0;

function updateProgress() {
  let percent = ((currentStep + 1) / steps.length) * 100;
  document.querySelector(".progress-bar").style.width = percent + "%";
}

startBtn.addEventListener("click", function() {
  steps.forEach(step => step.style.background = "");
  currentStep = 0;
  steps[currentStep].style.background = "#c8e6c9";
  updateProgress();
});

nextBtn.addEventListener("click", function() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].style.background = "";
    currentStep++;
    steps[currentStep].style.background = "#c8e6c9";
    updateProgress();
  }
});
let restartBtn = document.querySelector(".restart");

restartBtn.addEventListener("click", function() {
  steps.forEach(step => step.style.background = "");

  currentStep = 0;
  document.querySelector(".progress-bar").style.width = "0%";

  ingredients_list.classList.remove("show");
  instructions_list.classList.remove("show");
  

  ingredients_button.textContent = "Show Ingredients";
  instructions_button.textContent = "Show Instructions";
});
