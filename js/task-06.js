const inputRef = document.querySelector('input');
inputRef.addEventListener('blur', onInputValidetion);

function onInputValidetion(event) {
   if (event.currentTarget.value.trim().length === Number(inputRef.dataset.length)) {
      document.getElementById('validation-input').classList.add('valid');
      document.getElementById('validation-input').classList.remove('invalid');
   }
   else {
      document.getElementById('validation-input').classList.remove('valid');
      document.getElementById('validation-input').classList.add('invalid');
   }
};
console.log();
