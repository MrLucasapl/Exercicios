const button = document.getElementById('button');

button.addEventListener('click', ()=>{

    let frase = document.getElementById('frase').value;
    
    let valor = frase.includes('assim');
    if(valor == true){
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "A frase possui a palafra 'assim'";
    }else{
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "A frase não possui a palafra 'assim'";
    }

});
