async function listarTodos() {
    const buscaNoBancoDeDados = await fetch('http://localhost:3000/CadastroProgramador');
    const respostaObtida = await buscaNoBancoDeDados.json();
    console.log(respostaObtida);
    let html = '<table border="1"><tr><th>id_programador</th><th>nome</th><th>linguagemDeProgramacao</th><th>areaDeAtuacao</th><th>idade</th></tr>';

    respostaObtida.forEach(CadastroProgramador => {
        html += `<tr><td>${CadastroProgramador.id_programador}</td><td>${CadastroProgramador.nome}</td><td>${CadastroProgramador.linguagemDeProgramacao}</td><td>${CadastroProgramador.areaDeAtuacao}</td><td>${CadastroProgramador.idade}</td></tr>`;
    });

    html += '</table>';
    document.getElementById('resultado').innerHTML = html;
}