const changeColor = document.querySelector(".change-color")
const background = document.querySelector("body")
const color = document.querySelector(".color")

const makeChange = (e) => {
  background.style.backgroundColor = getRandomHexColor();
  color.innerHTML = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


changeColor.addEventListener("click", makeChange)



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
