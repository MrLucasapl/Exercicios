const salvar = document.querySelector('#salvar');
const limpar = document.querySelector('#limpar');
const mostrar = document.querySelector('#mostrar');
const resultado = document.querySelector('#resultado');
const arrey = [];

salvar.addEventListener('click', () => {
    arrey.push(document.querySelector('#input').value);
    document.querySelector('#input').value = '';
});

limpar.addEventListener('click', () => {
    document.querySelector('#input').value = '';
    resultado.innerHTML = '';
});

function media(){
    let calculo = arrey.reduce((soma, item) => Number(soma) + Number(item), 0) 
    let total = calculo/ arrey.length;
    return total;
};

mostrar.addEventListener('click', () => {
    media();
    resultado.innerHTML = media();
});