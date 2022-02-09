const inputrRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

console.log(inputrRef.style.fontSize);
console.log(spanRef.style);


inputrRef.addEventListener('change', onInputChangeValue);

function onInputChangeValue(event) {
   spanRef.style.fontSize = `${event.currentTarget.value}px`


}
