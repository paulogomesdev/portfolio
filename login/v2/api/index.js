const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

app.use(express.json());

// Defina suas rotas aqui

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


const jwt = require('jsonwebtoken');


const users = [
    { id: 1, username: 'paulo', password: '123456', email: 'jaccoller@gmai' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Verifica se o usuário e a senha correspondem
        if (user.username === username && user.password === password) {
            const token = jwt.sign({ id: user.id }, 'secreto', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas' });
        }
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

app.post('/register', (req, res) => {
    const { username, password, email } = req.body;

    // Verifica se já existe um usuário com o mesmo nome de usuário ou email
    const existingUser = users.find(user => user.username === username || user.email === email);

    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já cadastrado com esse nome de usuário ou email.' });
    }

    const newUser = { id: users.length + 1, username, password, email };
    users.push(newUser);

    res.status(201).json({ message: 'Usuário criado com sucesso!', user: newUser });
});

app.post('/logout', (req, res) => {
    // Implemente a lógica de logout aqui
});

