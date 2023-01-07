const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
 
const defaultFont = textEl.style.fontSize = `${fontSizeControl.value}px`;

const changeFont = (e) => {
    textEl.style.fontSize = `${fontSizeControl.value}px`
};


fontSizeControl.addEventListener("input",changeFont);
