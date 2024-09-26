const form = document.getElementById('form')
// username, email, password, password-confirmation variaveis no html no ID
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value

    if (usernameValue === "" ){
        setErrorFor(username, 'O nome de usuario é obrigatorio')
    }
}

function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')

        small.innerText = message

        formControl.className = 'form-control error';

} 


function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}



