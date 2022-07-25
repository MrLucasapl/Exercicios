const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];
const adulto = [];

salvar.addEventListener('click', () => {
    arrey.push(document.getElementById('input').value);
    document.getElementById('input').value = "";
});

limpar.addEventListener('click', () => {
    document.getElementById('input').value = "";
    document.getElementsByClassName('resultado')[0].innerHTML = "";
    location.reload();
});

mostrar.addEventListener('click', () => {
    let resultado = arrey.map( function (item) {
        if(item >= 18){
            adulto.push(item);
            return true;
        }else{           
            return false;
        }
    })
    document.getElementsByClassName('resultado')[0].innerHTML = adulto;

});