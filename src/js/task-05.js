const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultInput = output.value;
const changeInput = (e) => {
    if (e.currentTarget.value.length > 0) {
        output.textContent = e.currentTarget.value
    }
    else {
        output.textContent = "Anonymous";
    }
}
input.addEventListener("input", (changeInput))

