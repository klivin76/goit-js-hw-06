const form = document.querySelector(`.login-form`);
form.addEventListener("submit", onBtnSubmit);

function onBtnSubmit(e) {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        return console.log(alert("Увага! Усі поля повинні бути заповнені, бо прийде воєнком!"));
    }
    console.log({ email: email.value, password: password.value });
    e.currentTarget.reset();
}


