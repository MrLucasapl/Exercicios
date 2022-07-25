const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];
const otimo = [];
const regular = [];
const bom = [];

salvar.addEventListener('click', () => {
    if(arrey.length <= 14) {

        const pessoa = Object.create({});
        pessoa.idade = document.getElementById('idade').value;
        pessoa.opiniao = document.getElementById('opiniao').value;
        console.log(pessoa.opiniao);

        arrey.push(pessoa);

        if((pessoa.opiniao < 1) || (pessoa.opiniao > 3)){

            alert('opiniao so recebe 1, 2 ou 3');
            arrey.pop(); 

        }

        document.getElementById('idade').value = "";
        document.getElementById('opiniao').value = "";

    }else{

        alert("Somente 15 pessoas podem ser verificadas!");
        document.getElementById('idade').value = "";
        document.getElementById('opiniao').value = "";

    }

});

limpar.addEventListener('click', () => {

    location.reload();

});

mostrar.addEventListener('click', () => {

    arrey.map((pessoa) => {

        if(pessoa.opiniao == 3){

            otimo.push(pessoa);

        }else if(pessoa.opiniao == 2){

            bom.push(pessoa);

        }else if(pessoa.opiniao == 1){

            regular.push(pessoa);

        }
    })

    console.log(arrey);
    console.log(otimo);
    console.log(bom);
    console.log(regular);

    let soma = 0;
    let media = otimo.forEach( (item) => {
        soma = Number(item.idade) + soma;
    })

    media = soma / otimo.length;

    let porcentagem = (bom.length / 100)*arrey.length;


    document.getElementsByClassName('resultado')[0].innerHTML = "Media foi: "+media;
    document.getElementsByClassName('resultado')[1].innerHTML = "total de regulares: "+regular.length;
    document.getElementsByClassName('resultado')[2].innerHTML = "Procentagem Bom: "+porcentagem.toFixed(2);
    
});