const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];
const homem = [];
const mulher = [];

salvar.addEventListener('click', () => {
    if(arrey.length <= 9) {

        const pessoa = Object.create({});
        pessoa.idade = document.getElementById('idade').value;
        pessoa.peso = document.getElementById('peso').value;
        pessoa.sexo = document.querySelector('input[name="sexo"]:checked').value;

        arrey.push(pessoa);

        document.getElementById('idade').value = "";
        document.getElementById('peso').value = "";

        if(pessoa.sexo == "masculino"){
            homem.push(pessoa);
        }else{
            mulher.push(pessoa);
        }

    }else{

        alert("Somente 10 pessoas podem ser verificadas!");
        document.getElementById('idade').value = "";
        document.getElementById('peso').value = "";

    }

});

limpar.addEventListener('click', () => {

    location.reload();

});

mostrar.addEventListener('click', () => {

    console.log(arrey);
    console.log(homem);
    console.log(mulher);

    let somah = 0;
    let mediah = homem.forEach( (item) => {
        somah = Number(item.idade) + somah;
    })

    mediah = somah / homem.length;

    let somaf = 0;
    let mediaf = mulher.forEach( (item) => {
        somaf = Number(item.peso) + somaf;
    })

    mediaf = somaf / homem.length;
    
    document.getElementsByClassName('resultado')[0].innerHTML = "total de homens: "+homem.length;
    document.getElementsByClassName('resultado')[1].innerHTML = "total de mulheres: "+mulher.length;
    document.getElementsByClassName('resultado')[2].innerHTML = "media de idade homens: "+mediah.toFixed(2);
    document.getElementsByClassName('resultado')[3].innerHTML = "media de idade mulheres: "+mediaf.toFixed(2);
    
});