const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];

salvar.addEventListener('click', () => {
    if(arrey.length <= 4) {

        const pessoa = Object.create({});
        pessoa.altura = document.getElementById('altura').value;
        pessoa.sexo = document.querySelector('input[name="sexo"]:checked').value;
        arrey.push(pessoa);
        document.getElementById('altura').value = "";

    }else{

        alert("Somente 5 pessoas podem ser verificadas!");
        document.getElementById('altura').value = "";

    }
});

limpar.addEventListener('click', () => {

    document.getElementById('altura').value = "";
    document.getElementsByClassName('resultado')[0].innerHTML = "";
    location.reload();

});

mostrar.addEventListener('click', () => {

    let maior = 0;
    let altura, sexo;
    let masculino = 0, feminino = 0;

    for(let i = 0; i <arrey.length; i++) {

        if(arrey[i].altura > maior) {
            maior = arrey[i].altura;
            altura = arrey[i].altura;
            sexo = arrey[i].sexo;
        }

    }
    for(let i = 0; i <arrey.length; i++) {

        if(arrey[i].sexo == "masculino") {
            masculino++;
        }else{
            feminino++;
        }

    }

    document.getElementsByClassName('resultado')[0].innerHTML = "São "+masculino+" Masculinos e "+feminino+" Femininos" ;
    document.getElementsByClassName('resultado')[1].innerHTML = "Altura: "+altura+"; "+ " Genero: " + sexo;
});