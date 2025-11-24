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

app.put('/updateProgramador/:id', (req, res) => {
    const id = req.params.id;
    const { nome, linguagemDeProgramacao, areaDeAtuacao, idade } = req.body;
    const idadeNumero = Number(idade);

    const codigoDoMySQL = 'UPDATE CadastroProgramador SET nome = ?, linguagemDeProgramacao = ?, areaDeAtuacao = ?, idade = ? WHERE id_programador = ?';

    acessaBancoNoServidor.query(codigoDoMySQL, [nome, linguagemDeProgramacao, areaDeAtuacao, idadeNumero, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar os dados do programador' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'programador não encontrado' });
        }

        res.json({ message: 'Dados do Programador atualizados com sucesso!' });
    });
});

app.delete('/deleteProgramador/:id', (req, res) => {
    const id = req.params.id;
    const codigoDoMySQL = 'DELETE FROM CadastroProgramador WHERE id_programador = ?';

    acessaBancoNoServidor.query(codigoDoMySQL, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao deletar programador' });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'programador não encontrado' });
        }

        res.json({ message: 'programador excluido com sucesso!' });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});