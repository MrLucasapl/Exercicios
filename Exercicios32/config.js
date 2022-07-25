const button = document.querySelector('button');

button.addEventListener('click', ()=>{
   const numeroSorteado = document.getElementById('numero').value;
   console.log(numeroSorteado);

   const numeroPremiado = Math.floor(Math.random() * 10);

   document.getElementsByClassName('resultado')[0].innerHTML = numeroSorteado;
   document.getElementsByClassName('resultado')[1].innerHTML = numeroPremiado;

   if(numeroSorteado == numeroPremiado){

      document.getElementsByClassName('resultado')[2].innerHTML = 'Parabens você ganhou :)';

   }else{

      document.getElementsByClassName('resultado')[2].innerHTML = 'Infelismente você perdeu :(';

   }

   document.getElementById('numero').value = ""
})