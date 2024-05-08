const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Defina suas rotas aqui

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const jwt = require('jsonwebtoken');


const users = [
    { id: 1, username: 'paulo', password: '123456' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ id: user.id }, 'secreto', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;

    users.push({username, password});
    res.send('Usuario criado!');
});

app.post('/logout', (req, res) => {
    // Implemente a lógica de logout aqui
});

