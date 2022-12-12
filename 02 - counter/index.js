const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const increaseButton = document.getElementById("increaseButton");
const counterNumber = document.getElementById("counterNumber");
let counter = Number(counterNumber.textContent);

decreaseButton.addEventListener("click", () => {
  counter -= 1;
  counterNumber.textContent = counter;
  changeTextColor();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  counterNumber.textContent = counter;
  changeTextColor();
});

increaseButton.addEventListener("click", () => {
  counter += 1;
  counterNumber.textContent = counter;
  changeTextColor();
});

function changeTextColor() {
  if (counter < 0) {
    counterNumber.style.color = "#e80000";
  } else if (counter === 0) {
    counterNumber.style.color = "#102b42";
  } else {
    counterNumber.style.color = "#007f00";
  }
}
