const botaoCalcular = document.getElementById('calcular');

botaoCalcular.addEventListener('click', ()=>{
    
    const preco = document.getElementById('preco').value;
    const desconto = document.getElementById('desconto').value;
    calcular(preco, desconto);

});

function calcular(preco, desconto){

    let valorDesconto = ((desconto / 100) * preco);
    document.getElementById('resultado').innerHTML = valorDesconto +' R$';

}