const inputEl = document.querySelector("#validation-input");

const makeChange = () => {
    if (inputEl.value.length <= 6) {
        inputEl.classList.add("invalid")
        inputEl.classList.remove("valid")
    } else {
        inputEl.classList.remove("invalid")
        inputEl.classList.add("valid")
    }
};

inputEl.addEventListener("blur", makeChange);