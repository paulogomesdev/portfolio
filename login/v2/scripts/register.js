document.getElementById('loginButton').addEventListener('click', async () => {
    // Pegando os valores dos inputs
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    const email = document.getElementById('emailInput').value;
    let img = document.getElementById('imgKey')
    let msg = document.getElementById('msgReturn');

    if (!username || !email || !password) {
        msg.innerHTML = `Preencha todos os campos!`
        img.style.color = '#ffbe4d'
        return; // Retorna para evitar o envio da requisição
    }

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            console.log('Token:', token);
            msg.innerHTML = `Cadastrado com sucesso!`
            img.style.color = '#39d47c'
            // Faça algo com o token, como armazená-lo localmente
        } else {
            const errorMessage = await response.text();
            console.error('Erro:', errorMessage);
            msg.innerHTML = `Conta existente!`
            img.style.color = '#ff4d53'
        }
    } catch (error) {
        console.error('Ocorreu um erro ao chamar a API:', error);
    }
});