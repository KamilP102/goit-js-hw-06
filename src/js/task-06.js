const inputEl = document.querySelector("#validation-input");

const makeChange = () => {
    if (inputEl.value.length === 6) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
};

inputEl.addEventListener("blur", makeChange);