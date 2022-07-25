const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];
const pares = [];

salvar.addEventListener('click', () => {
    if(arrey.length <= 9) {

        let numero = document.getElementById('numero').value;
        arrey.push(numero);

        document.getElementById('numero').value = "";

    }else{

        alert("Somente 10 pessoas podem ser verificadas!");
        document.getElementById('numero').value = "";

    }

});

limpar.addEventListener('click', () => {

    location.reload();

});

mostrar.addEventListener('click', () => {

    console.log(arrey);
    let soma = 0;
    arrey.forEach((numero) => {

        if(numero % 2 == 0){
            pares.push(numero);
            soma = Number(soma) + Number(numero);
        }

    });
    console.log(pares);
    console.log(soma);
    document.getElementsByClassName('resultado')[0].innerHTML = "numeros digitados: "+arrey;
    document.getElementsByClassName('resultado')[1].innerHTML = "numeros pares: "+pares;
    document.getElementsByClassName('resultado')[2].innerHTML = "soma dos pares: "+soma;
    
});