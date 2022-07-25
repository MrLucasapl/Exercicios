
const arrey = [
    { name: 'Aegir', power: 10 },
    { name: 'Aud', power: 5 },
    { name: 'Balder', power: 7 },
    { name: 'Bragi', power: 4 },
    { name: 'Búri', power: 9 },
    { name: 'Dag', power: 10 },
    { name: 'Dellingr', power: 3 }
];

let index = arrey.length-1;

function Pesquisar() {
    const nome = document.getElementById('input-name-pesquisar').value.toLowerCase();
    limparTela();
    filtrar(nome);
}

function Cadastrar() {

    const nome = document.getElementsByName("name")[0].value;
    const forca = document.getElementsByName("power")[0].value;
    let novoPersonagem = {
        name: nome, power: forca
    }
    arrey.push(novoPersonagem);
    limparTela();

}

function limparTela() {
    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = '';
    let input = document.querySelectorAll('input');

    input.forEach(input => {
        input.value = '';
    });

    index = 0;

}

function filtrar(nomeDigitado) {

    const nomesFiltrados = arrey.filter((nomeBuscar) => {
        let nome = nomeBuscar.name.toLowerCase();

        let nomeSemAcento = retirarAcentos(nomeDigitado);
        nome = retirarAcentos(nome);

        nome = nome.includes(nomeSemAcento);

        return nome;
    })

    let inputOpcao = document.querySelectorAll(".menu")[0].value;
    let valor = {};

    switch (inputOpcao) {
        case "0":
            valor = nomesFiltrados.sort(function (a, b) { return a.power > b.power ? -1 : a.power < b.power ? 1 : 0; });
            break;

        case "1":
            valor = nomesFiltrados.sort(function (a, b) { return a.power < b.power ? -1 : a.power > b.power ? 1 : 0; });
            break;
    }

    mostrarDados(valor);

}

function retirarAcentos(nome) {
    let nomeSemAcento;

    nomeSemAcento = nome.replace(/[àáâãäå]/g, "a");
    nomeSemAcento = nomeSemAcento.replace(/[ùúûü]/g, "u");
    nomeSemAcento = nomeSemAcento.replace(/[èéêë]/g, "e");
    nomeSemAcento = nomeSemAcento.replace(/[óòôõö]/g, "o");
    nomeSemAcento = nomeSemAcento.replace(/[ç]/g, "c");

    return nomeSemAcento;
}

function mostrarDados(nomesFiltrados) {

    let divResultado = document.getElementById('resultado');

    nomesFiltrados.map((dados) => {
        let itemDiv = document.createElement('li');
        itemDiv.setAttribute('id', `${index}`);

        let button = document.createElement('button');
        button.setAttribute('id', `${index}`);
        button.setAttribute('onclick', 'deletar(event)');
        button.innerText = 'Deletar';

        itemDiv.innerText = index + ' Nome ' + dados.name + ' Força ' + dados.power;
        itemDiv.appendChild(button);
        divResultado.appendChild(itemDiv);
        index++;
    });

}

function deletar(event) {
    let idDelete = event.target.id;
    console.log(idDelete);
    let personagemDeletar = document.querySelector(`[id="${idDelete}"]`);
    personagemDeletar.remove();
}

