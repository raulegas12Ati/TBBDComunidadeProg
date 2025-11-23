let editandoId = null;

async function carregarDados() {
    const response = await fetch('http://localhost:3000/CadastroProgramador');
    const dadosProgramador = await response.json();

    let html = '<table><tr><th>id</th><th>Nome</th><th>Linguagem de pogramação</th><th>área de atuação</th><th>idade</th></tr>';

    dadosProgramador.forEach(dados => {
        const data = dados;
        html += `<tr id="dados-${dados.id_programador}">
        <td>${dados.id_programador}</td>
        <td id="c-${dados.id_programador}-0">${dados.nome}</td>
        <td id="c-${dados.id_programador}-1">${dados.linguagemDeProgramacao}</td>
        <td id="c-${dados.id_programador}-2">${dados.areaDeAtuacao}</td>
        <td id="c-${dados.id_programador}-3" data-val="${dados.idade}">${dados.idade}</td>
        <td><button class="btn-editar" onclick="editarProgramador(${dados.id_programador})">✏️</button></td>
        </tr>`;
    });

    document.getElementById('dadosUsuario').innerHTML = html + '</table>';
}

function editarProgramador(id) {
    if (editandoId) return alert('Salve ou cancele a edição atual primeiro!');

    editandoId = id;
    document.getElementById(`c-${id}-0`).innerHTML = `<input id="i-${id}-0" value="${document.getElementById(`c-${id}-0`).textContent}">`;
    document.getElementById(`c-${id}-1`).innerHTML = `<input type="text" id="i-${id}-1" value="${document.getElementById(`c-${id}-1`).textContent}">`;
    document.getElementById(`c-${id}-2`).innerHTML = `<input type="text" id="i-${id}-2" value="${document.getElementById(`c-${id}-2`).textContent}">`;
    document.getElementById(`c-${id}-3`).innerHTML = `<input type="number" id="i-${id}-3" value="${document.getElementById(`c-${id}-3`).getAttribute('data-val')}">`;

    document.querySelector(`#dados-${id} td:last-child`).innerHTML = `
        <button class="btn-salvar" onclick="salvarProgramador(${id})">💾</button>
        <button class="btn-cancelar" onclick="cancelarEdicao()">❌</button>`;
}

async function salvarProgramador(id) {
    const response = await fetch(`http://localhost:3000/updateProgramador/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            nome: document.getElementById(`i-${id}-0`).value,
            linguagemDeProgramacao: document.getElementById(`i-${id}-1`).value,
            areaDeAtuacao: document.getElementById(`i-${id}-2`).value,
            idade: document.getElementById(`i-${id}-3`).value
        })
    });

    if (response.ok) {
        editandoId = null;
        carregarDados();
    } else {
        alert('Erro ao atualizar!');
    }
}

function cancelarEdicao() {
    editandoId = null;
    carregarDados();
}

window.onload = carregarDados;