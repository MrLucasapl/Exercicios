const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];

salvar.addEventListener('click', () => {
    if(arrey.length <= 4){
        if(document.getElementById('input').value == ""){
            alert('o campor esta vazio!')
        }else{
            arrey.push(document.getElementById('input').value);
            document.getElementById('input').value = "";
        }
    }else{
        alert('Somente 5 numeros');
        document.getElementById('input').value = "";
    }
});

limpar.addEventListener('click', () => {
    document.getElementById('input').value = "";
    document.getElementsByClassName('resultado')[0].innerHTML = "";
    location.reload();
});

mostrar.addEventListener('click', () => {
    let resultado = arrey.map( function (item) {
        return item;
    })
    
    document.getElementsByClassName('resultado')[0].innerHTML = resultado;
    document.getElementsByClassName('resultado')[1].innerHTML = resultado.sort(function(a, b) {
        return a - b;
    });
});