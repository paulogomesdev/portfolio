let username = 'Paulo'
let password = '123456'

function login() {
    let user = document.getElementById('input-user')
    let pass = document.getElementById('input-pass')
    let msg = document.getElementById('msg-error')
    let img = document.getElementById('img-error')
    if (user.value.length == 0 || pass.value.length == 0) {
        msg.innerHTML = `Preencha todos os campos!`
        img.style.color = '#ffbe4d'
    } else if (user.value == username && pass.value == password) {
        msg.innerHTML = `Logado com sucesso!`
        img.style.color = '#39d47c'
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