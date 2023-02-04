const refs = {
    input: document.querySelector(`#name-input`),
    span: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
    refs.span.textContent = event.currentTarget.value.trim();
    if (!refs.span.textContent) {
        refs.span.textContent = "Anonymous";
    }
};


