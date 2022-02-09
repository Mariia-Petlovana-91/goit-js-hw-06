const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

console.log(inputRef);
console.log(spanRef);

inputRef.addEventListener('input', () => {
    return event.currentTarget.value === "" ?
        spanRef.textContent = "Anonymous" :
        spanRef.textContent = event.currentTarget.value;
})

