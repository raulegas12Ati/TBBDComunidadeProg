async function carregarDados() {
    const response = await fetch('http://localhost:3000/CadastroProgramador');
    const dadosProgramador = await response.json();

    let html = '<table><tr><th>id</th><th>Nome</th><th>Linguagem de pogramação</th><th>área de atuação</th><th>idade</th></tr>';

    dadosProgramador.forEach(dados => {
        html += `<tr id="dados-${dados.id_programador}">
        <td>${dados.id_programador}</td>
        <td id="c-${dados.id_programador}-0">${dados.nome}</td>
        <td id="c-${dados.id_programador}-1">${dados.linguagemDeProgramacao}</td>
        <td id="c-${dados.id_programador}-2">${dados.areaDeAtuacao}</td>
        <td id="c-${dados.id_programador}-3" data-val="${dados.idade}">${dados.idade}</td>
        <td><button class="btn-deletar" onclick="deletarProgramador(${dados.id_programador})">🗑️</button></td>
        </tr>`;
    });

    document.getElementById('tabelaProgramador').innerHTML = html + '</table>';
}

async function deletarProgramador(id) {
    if (!confirm(`Excluir programador ID ${id}?`)) return;

    await fetch(`http://localhost:3000/deleteProgramador/${id}`, { method: 'DELETE' });
    document.getElementById(`dados-${id}`).remove();
}

window.onload = carregarDados;

//deletarVenda 