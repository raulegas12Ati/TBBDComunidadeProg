const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar cliente
app.post('/Cadastro_Programador', (req, res) => {
    const { nome, linguagemDeProgramacao, areaDeAtuacao, idade } = req.body;

    const codigoDoMySQL = 'INSERT INTO Cadastro_Programador (nome, linguagem_de_Programacao, areaDeAtuacao, idade) VALUES (?, ?, ?, ?)';

    acessaBancoNoServidor.query(codigoDoMySQL, [nome, linguagemDeProgramacao, areaDeAtuacao, idade], (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao cadastrar' });
        }
        res.json({ message: 'Cliente cadastrado!' });
    });
});

// Listar clientes
app.get('/Cadastro_Programador', (req, res) => {
    const codigoDoMySQL = 'SELECT id_programador, nome, linguagem_de_Programacao, areaDeAtuacao, idade FROM Cadastro_Programador';

    acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao buscar' });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

