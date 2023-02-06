const btnEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
 document.body.style.backgroundColor = color;
  spanEl.textContent = color;
  });



