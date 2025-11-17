const express = require('express');
const cors = require('cors');
const acessaBancoNoServidor = require('./acessaBancoNoServidor.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Criar cliente
app.post('/CadastroProgramador', (req, res) => {
    const { nome, linguagemDeProgramacao, areaDeAtuacao, idade, senha } = req.body;

    const codigoDoMySQL = 'INSERT INTO CadastroProgramador (nome, linguagemDeProgramacao, areaDeAtuacao, idade, senha) VALUES (?, ?, ?, ?, ?)';

    acessaBancoNoServidor.query(codigoDoMySQL, [nome, linguagemDeProgramacao, areaDeAtuacao, idade, senha], (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao cadastrar' });
        }
        res.json({ message: 'Programador cadastrado!' });
    });
});

// Listar clientes
app.get('/CadastroProgramador', (req, res) => {
    const codigoDoMySQL = 'SELECT id_programador, nome, linguagemDeProgramacao, areaDeAtuacao, idade FROM CadastroProgramador';

    acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
        if (err) {
            return res.json({ error: 'Erro ao buscar' });
        }
        res.json(results);
    });
});

//alterar cliente
app.get('/CadastroProgramador', (req, res) => {
    const { name, linguagem, area, age } = req.body;
    for (const i = 1; i < 5; i++){
        if (area !== "") {
            const codigoDoMySQL = `UPDATE CadastroProgramador
              SET areaDeAtuacao = ${area}
              WHERE senha = ${senha};
              `
            acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
                if (err) {
                    return res.json({ error: 'Erro ao buscar' });
                }
                res.json(results);
            });
        }
        if (name !== "") {
            const codigoDoMySQL = `UPDATE CadastroProgramador
              SET nome = ${name}
              WHERE senha = ${senha};
              `
            acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
                if (err) {
                    return res.json({ error: 'Erro ao buscar' });
                }
                res.json(results);
            });
        }
        if (age !== "") {
            const codigoDoMySQL = `UPDATE CadastroProgramador
              SET idade = ${age}
              WHERE senha = ${senha};
              `
            acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
                if (err) {
                    return res.json({ error: 'Erro ao buscar' });
                }
                res.json(results);
            });
        }
        if (linguagem !== "") {
            const codigoDoMySQL = `UPDATE CadastroProgramador
              SET linguagemDeProgramacao = ${linguagem}
              WHERE senha = ${senha};
              `
            acessaBancoNoServidor.query(codigoDoMySQL, (err, results) => {
                if (err) {
                    return res.json({ error: 'Erro ao buscar' });
                }
                res.json(results);
            });
        }
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

