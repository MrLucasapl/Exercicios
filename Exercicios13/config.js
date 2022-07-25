const button = document.getElementById('button');

button.addEventListener('click', () => {
    const input = document.getElementById('input').value;

    if((input < 0)||(input == "")){

        alert('não pode número menores que 0 e não é permitido enviar campo vazio');

    }else{

        document.getElementById('resultado').innerHTML = 'AIA '+input;
        document.getElementById('input').value = '';
    }
    
});


