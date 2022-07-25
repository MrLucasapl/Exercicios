let segundos = 0;
let minutos = 0;

function segundo(){

    segundos++;
    if(segundos==60){

        minutos++;

        segundos=0;

        document.getElementById('minuto').innerHTML=minutos
    }

    document.getElementById('segundo').innerHTML=segundos
    
}
setInterval(function(){ segundo() },1000)