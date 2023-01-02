const increase = document.querySelector(`button[data-action="increment"]`);
const decrease = document.querySelector(`button[data-action=decrement]`);
const value = document.querySelector("#value");
let counterValue = 0;

const add = () => {
    counterValue += 1;
    value.innerHTML = counterValue;
};
const subtract = () => {
    counterValue -= 1
    value.innerHTML = counterValue;
};

increase.addEventListener("click", (add))

decrease.addEventListener("click", (subtract))