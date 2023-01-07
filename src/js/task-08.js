const form = document.querySelector(".login-form");

function handelSubmit(event) {
    event.preventDefault();
    const {
        elements: { email,password }
    } = event.currentTarget;

    if (email.value === " " || password.value === " ") {
    return alert("All fields should be filled!!!");
    }
    console.log(`Login: ${email.value}\nPassword: ${password.value}`);
    event.currentTarget.reset();
}

form.addEventListener("submit", handelSubmit);