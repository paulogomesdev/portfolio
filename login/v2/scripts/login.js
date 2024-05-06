let username = 'Paulo'
let password = 'x45b150z'

function login() {
    let userV = document.getElementById('input-user')
    let passV = document.getElementById('input-pass')
    let msg = document.getElementById('msg-error')
    let img = document.getElementById('img-error')
    if (userV.value.length == 0 || passV.value.length == 0) {
        msg.innerHTML = `Preencha todos os campos!`
        img.style.color = '#ffbe4d'
    } else if (userV.value == username && passV.value == password) {
        msg.innerHTML = `Logado com sucesso!`
        img.style.color = ' '
    } else {
        msg.innerHTML = `Usuário ou senha incorretos!`
        img.style.color = '#ff4d53'
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