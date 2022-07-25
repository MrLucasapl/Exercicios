const botaoSalvar = document.getElementById('salvar');
const dataAtual = new Date();
let diaAtual = dataAtual.getDate();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();

console.log(diaAtual, mesAtual, anoAtual);

botaoSalvar.addEventListener('click', () => {
    const dataUsuario = document.getElementById('data').value + 'T00:00:00';

    const conveteDataUsuario = new Date(dataUsuario)

    let diaUsuario = conveteDataUsuario.getDate();
    let mesUsuario = conveteDataUsuario.getMonth();
    let anoUsuario = conveteDataUsuario.getFullYear();

    console.log(diaUsuario, mesUsuario, anoUsuario);
    console.log(anoAtual - anoUsuario >= 18);
    console.log(anoAtual-anoUsuario == 18);
    

    if(anoAtual-anoUsuario < 18){
        
        document.getElementById('resultado').innerHTML = 'usuario menor de idade'
        
    }else if(anoAtual-anoUsuario == 18){

        if(mesAtual < mesUsuario){

            document.getElementById('resultado').innerHTML = 'usuario menor de idade'

        }else if(mesAtual == mesUsuario){

            if(diaAtual < diaUsuario){

                document.getElementById('resultado').innerHTML = 'usuario menor de idade'
        
            }else if(diaAtual == diaUsuario){
             
               document.getElementById('resultado').innerHTML = 'Você é maior de idade'

            }else{
        
                document.getElementById('resultado').innerHTML = 'Você é maior de idade'
        
            }

        }else{

            document.getElementById('resultado').innerHTML = 'Você é maior de idade'

        }

    }else{

        document.getElementById('resultado').innerHTML = 'Você é maior de idade'

    }

});