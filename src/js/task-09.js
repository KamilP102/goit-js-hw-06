const changeColor = document.querySelector(".change-color")
const body = document.querySelector("body")
const color = document.querySelector(".color")

const makeChange = () => {
  color.innerHTML = getRandomHexColor()
  body.style.backgroundColor = color.innerHTML;
}

changeColor.addEventListener("click", makeChange)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
