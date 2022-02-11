function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bobyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');


buttonRef.addEventListener('click', onChangeColor);

function onChangeColor(event){
  const newColor = getRandomHexColor();
  bobyRef.style.backgroundColor = newColor;
  spanRef.textContent = bobyRef.style.backgroundColor;
}