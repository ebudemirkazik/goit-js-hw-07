const changeColorButton = document.querySelector(".change-color");

const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  document.querySelector(".color").textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
