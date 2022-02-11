
const form = document.querySelector('.login-form');


form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === '' ||
        event.currentTarget.elements.password.value === '') 
        {
    alert('All fields are marked to be filled.');
    return;
    }
    else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
        console.log(name, value);
        form.reset();
    });
    }
}
 
