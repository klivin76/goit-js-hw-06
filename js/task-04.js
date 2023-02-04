const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const velueEl = document.querySelector(`#value`);
let counterValue = 0;

const onIncrementBtn = () => { velueEl.textContent = counterValue += 1 };
const onDecrementBtn = () => { velueEl.textContent = counterValue -= 1 };

incrementBtn.addEventListener("click", onIncrementBtn);
decrementBtn.addEventListener("click", onDecrementBtn);
