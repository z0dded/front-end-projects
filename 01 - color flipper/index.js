const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

document.getElementById("random-color-button").addEventListener("click", () => {
  // Creates a string with a random hex color
  let randomColor = "#";
  for (let i = 0; randomColor.length <= 6; i++) {
    randomColor += colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  // Changes the background color to the random color
  document.body.style.backgroundColor = randomColor;

  // Changes the text saying the color name
  document.getElementById("color-name").textContent = randomColor;
});
