const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("ul");

const list = ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = item;
  ul.appendChild(li)
});
