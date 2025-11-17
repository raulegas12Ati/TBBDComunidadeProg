document.getElementById('formProgramador').addEventListener('submit', async function (e) {
    e.preventDefault();

    const areaDeAtuacao = document.getElementById('areaDeAtuacao').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const linguagemDeProgramacao = document.getElementById('linguagemDeProgramacao').value;
    const senha = document.getElementById('senha').value;


    const response = await fetch('http://localhost:3000/CadastroProgramador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ areaDeAtuacao, nome, linguagemDeProgramacao, idade, senha })
    });

    const data = await response.json();

    if (response.ok) {
        document.getElementById('message').textContent = 'Programador cadastrado!';
        document.getElementById('formProgramador').reset();
    } else {
        document.getElementById('message').textContent = 'Erro: ' + data.error;
    }
});

/*Me diga se existe algum erro{e qual é esse erro se tiver)
 no código javaScript que vou te enviar, se não houver erro me exlique o código linha por linha */



