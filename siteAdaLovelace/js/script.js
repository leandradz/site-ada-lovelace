let nome = document.getElementById('nomeUser')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let enviar = document.getElementById("botaoEnviar")

enviar.addEventListener("click", validarFormulario)

function validarFormulario() {
    if (nome.value != "" && email.value != "" && telefone.value != "") {
        alert('Prontinho! Você receberá as novidades por e-mail.')
    } else {
        alert('Por favor preencha todos os campos!')
    }
}
