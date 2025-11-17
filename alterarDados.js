async function alterarDados(){
    const area = document.getElementById('area').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const linguagem = document.getElementById('linguagem').value;
    const password = document.getElementById('password').value;

    if(password === ""){
        alert("A senha é obrigatoria")
        return
    }

    const response = await fetch('http://localhost:3000/CadastroProgramador', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, linguagem, area, age, password })
    });

    // if(area !== ""){
    //     const codifoMySQl_area = `UPDATE CadastroProgramador
    //     SET areaDeAtuacao = ${area}
    //     WHERE senha = ${senha};`
    // }

    // if(name !== ""){
    //     const name = `UPDATE CadastroProgramador
    //     SET nome = ${name}
    //     WHERE senha = ${senha};`
    // }

    // if(age !== ""){
    //     const age = `UPDATE CadastroProgramador
    //     SET idade = ${age}
    //     WHERE senha = ${senha};`
    // }

    // if(linguagem !== ""){
    //     const codifoMySQl_linguagem = `UPDATE CadastroProgramador
    //     SET linguagemDeProgramacao = ${linguagem}
    //     WHERE senha = ${senha};`
    // }
}