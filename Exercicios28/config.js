const button = document.getElementById('button');

button.addEventListener('click', ()=>{
    let segundos = 0;

    function segundo(){
        segundos++;
        if(segundos == 2){
            umaRepeticao();
        }else if(segundos == 4){ 
            duasRepeticao();
        }else if(segundos == 6){
            vinteRepeticao();
        }else if(segundos == 8){
            forEachRepeticao();
        }else if(segundos == 10){
            whileRepeticao();
        }else if(segundos == 12){
            dowhileRepeticao();
        }else if(segundos == 13){
            clearInterval(repeticao);
            let div = document.getElementById('resultado');
            div.innerHTML = '';
        }

        console.log(segundos);
    }
    let repeticao = setInterval(function(){ segundo() },1000)

});

function umaRepeticao(){

    let div = document.getElementById('resultado');
    div.innerHTML = "<p>Repetição<p/>";

};

function duasRepeticao(){

    let div = document.getElementById('resultado');
    div.innerHTML = "<p>Repetição<p/>"+'<p>Repetição<p/>';

};