let username = 'Paulo'
let email = 'jaccoller@gmail.com'
let password = 'x45b150z'

function register() {
    let newuser = document.getElementById('input-user')
    let newemail = document.getElementById('input-email')
    let newpass = document.getElementById('input-pass')
    let msg = document.getElementById('msg-error')
    let img = document.getElementById('img-error')
    if (newuser.value.length, newemail.value.length, newpass.value.length == 0) {
        msg.innerHTML = `Preencha todos os campos!`
        img.style.color = '#ffbe4d'
    } else if (newuser.value == username || newemail.value == email || newpass == password) {
        msg.innerHTML = `Conta existente!`
        img.style.color = '#ff4d53'
    } else {
        msg.innerHTML = `Cadastrado com sucesso!`
        img.style.color = '#39d47c'
    }
}

function color1() {
    let button = document.getElementById('button-access')
    button.style.backgroundColor = '#39d47c'
}

function color2() {
    let button = document.getElementById('button-access')
    button.style.backgroundColor = '#1e996a'
}