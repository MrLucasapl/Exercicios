const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    let segundos = 0;

    function segundo(){
        segundos++;

        if(segundos == 1){
            primeiraRepeticao();
        }else if(segundos == 8){ 
            duasRepeticao();
        }else if(segundos == 15){
            clearInterval(repeticao);
            let div = document.getElementById('resultado');
            div.innerHTML = '';
        }

        console.log(segundos);
    }
    let repeticao = setInterval(function(){ segundo() },1000)

});

function primeiraRepeticao(){

    let div = document.getElementById('resultado');

    for(let i = 0; i < 11; i++){
        div.innerHTML += " "+i ;
            
    }

};

function duasRepeticao(){

    let div = document.getElementById('resultado');
    div.innerHTML = '';

    for(let i = 0; i < 21; i++){
        if(i % 2 == 0){
            div.innerHTML += " "+i ;
        }
            
    }
    

};