const botaoCalcular = document.getElementById('calcular');

botaoCalcular.addEventListener('click', ()=>{
    
    const fator1 = document.getElementById('fator1').value;
    const fator2 = document.getElementById('fator2').value;
    calcular(fator1, fator2);

});

function calcular(fator1, fator2){

    let multiplicar = fator1 * fator2;
    document.getElementById('resultado').innerHTML = multiplicar;

}