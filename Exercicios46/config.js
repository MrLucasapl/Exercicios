
const arrey = [
    { name: 'Aegir', power: 10 },
    { name: 'Aud', power: 5 },
    { name: 'Balder', power: 7 },
    { name: 'Bragi', power: 4 },
    { name: 'Búri', power: 9 },
    { name: 'Dag', power: 10 },
    { name: 'Dellingr', power: 3 }
];

let index = arrey.length - 1;

function limparTela() {
    let divResultado = document.getElementById('resultado');
    divResultado.innerHTML = '';
    let input = document.querySelectorAll('input');

    input.forEach(input => {
        input.value = '';
    });

    index = 0;

}

function mostrarDados() {
    limparTela()
    let divResultado = document.getElementById('resultado');

    arrey.map((dados) => {
        let itemDiv = document.createElement('li');
        itemDiv.setAttribute('id', `${index}`);

        itemDiv.innerText = ' ID ' + index + ' Nome ' + dados.name + ' Força ' + dados.power;
        divResultado.appendChild(itemDiv);
        index++;
    });

}

function editar() {

    const nome = document.getElementsByName("name")[0].value;
    const forca = document.getElementsByName("power")[0].value;
    const id = document.getElementsByName("id")[0].value;

    if ((nome == "") || (forca == "")) {
        let nomeEditado = arrey[id].name
        let powerEditado = arrey[id].power
        console.log('nome vazio'+ nomeEditado +'  '+ powerEditado)
    } else {
        arrey[id].name = nome;
        arrey[id].power = forca;
        console.log('dados novos'+arrey[id].name +'  '+ arrey[id].power)
    }

    limparTela();

}

