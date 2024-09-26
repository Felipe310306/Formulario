// Seleciona o formulário e os campos de entrada pelo ID
const form = document.getElementById('form') 
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

// Adiciona um ouvinte de evento ao formulário para prevenir o envio padrão e chamar a função de verificação
form.addEventListener("submit", (e) => {
    e.preventDefault() // Impede o envio do formulário
    checkInputs(); // Chama a função para verificar os campos
})

// Função que verifica os valores dos inputs
function checkInputs() {
    const usernameValue = username.value // Obtém o valor do campo username
    const emailValue = email.value // Obtém o valor do campo email
    const passwordValue = password.value // Obtém o valor do campo password
    const passwordConfirmationValue = passwordConfirmation.value // Obtém o valor do campo de confirmação de senha

    // Verifica se o campo username está vazio
    if (usernameValue === "") {
        setErrorFor(username, 'O nome de usuário é obrigatório') // Mostra a mensagem de erro
    } else {
        setSuccessfor(username); // Define como sucesso se estiver preenchido
    }

    // Verifica se o campo email está vazio ou é inválido
    if (emailValue === "") {
        setErrorFor(email, 'O email é obrigatório') // Mostra a mensagem de erro
    } else if (!checkEmail(emailValue)) { // Usa a função checkEmail para verificar se o email é válido
        setErrorFor(email, 'Por favor, insira um email válido')
    } else {
        setSuccessfor(email); // Define como sucesso se o email for válido
    }

    // Verifica se a senha está preenchida
    if (passwordValue === "") {
        setErrorFor(password, 'A senha é obrigatória')
    } else {
        setSuccessfor(password)
    }  

    // Verifica se a confirmação da senha está preenchida e se as senhas coincidem
    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, 'Confirme sua senha')
    } else if (passwordValue !== passwordConfirmationValue) {
        setErrorFor(passwordConfirmation, 'As senhas não coincidem') // Verifica se as senhas são iguais
    } else {
        setSuccessfor(passwordConfirmation)
    }
}

// Função que aplica o estilo de erro e exibe a mensagem
function setErrorFor(input, message) {
    const formControl = input.parentElement; // Seleciona o elemento pai (form-control)
    const small = formControl.querySelector('small') // Seleciona o elemento <small> para exibir a mensagem

    small.innerText = message // Define o texto da mensagem de erro

    formControl.className = 'form-control error'; // Aplica a classe de erro
}

// Função que aplica o estilo de sucesso
function setSuccessfor(input) {
    const formControl = input.parentElement; // Seleciona o elemento pai (form-control)
    formControl.className = 'form-control success'; // Aplica a classe de sucesso
}

// Função para verificar se o email é válido com regex
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
