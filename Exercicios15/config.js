const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];
const homem = [];
const mulher = [];

salvar.addEventListener('click', () => {
    if(arrey.length <= 14) {

        const pessoa = Object.create({});
        pessoa.altura = document.getElementById('altura').value;
        pessoa.sexo = document.querySelector('input[name="sexo"]:checked').value;

        arrey.push(pessoa);

        arrey.sort(function(a, b) {
            return a.altura - b.altura;
        });

        document.getElementById('altura').value = "";

        if(pessoa.sexo == "masculino"){
            homem.push(pessoa);
        }else{
            mulher.push(pessoa);
        }

    }else{

        alert("Somente 15 pessoas podem ser verificadas!");
        document.getElementById('altura').value = "";

    }

});

limpar.addEventListener('click', () => {

    location.reload();

});
mostrar.addEventListener('click', () => {

    let soma = 0;
    let media = mulher.forEach( (item) => {
        soma = Number(item.altura) + soma;
    })

    media = soma / mulher.length;

    document.getElementsByClassName('resultado')[0].innerHTML = "Menor altura: "+arrey[0].altura+ " " +arrey[0].sexo;
    document.getElementsByClassName('resultado')[1].innerHTML = "Maior altura: "+arrey[arrey.length - 1].altura+ " " +arrey[arrey.length - 1].sexo;
    document.getElementsByClassName('resultado')[2].innerHTML = "Media das alturas Femininas: "+media.toFixed(1);
    document.getElementsByClassName('resultado')[3].innerHTML = "O numero de homens: "+homem.length;
    
});