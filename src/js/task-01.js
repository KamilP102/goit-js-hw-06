const liItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItem.length}`);

const headers = document.querySelectorAll("h2");
const uls = document.querySelectorAll(".item > ul");


const animals = console.log(`Category: ${headers[0].textContent} \nElements: ${uls[0].children.length}`);
const products = console.log(`Category: ${headers[1].textContent}\nElements: ${uls[1].children.length}`);
const technologies = console.log(`Category: ${headers[2].textContent}\nElements: ${uls[2].children.length}`);

