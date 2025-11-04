document.getElementById('formCliente').addEventListener('submit', async function (e) {
    e.preventDefault();

    const areaDeAtuacao = document.getElementById('area_de_atuacao').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const linguagemDeProgramacao = document.getElementById('linguagem_de_programacao').value;

    const response = await fetch('http://localhost:3000/cliente', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ areaDeAtuacao, nome, linguagemDeProgramacao, idade })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('message').textContent = 'Cliente cadastrado!';
        document.getElementById('formCliente').reset();
    } else {
        document.getElementById('message').textContent = 'Erro: ' + data.error;
    }
});



