
 const inputEl = document.querySelector(`#font-size-control`),
 spanText = document.querySelector(`#text`);

inputEl.addEventListener("input", (event) => {    
    spanText.style.fontSize = (`${event.currentTarget.value}px`); 
});

