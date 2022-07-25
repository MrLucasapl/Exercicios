const button = document.getElementById('button');

button.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    
    if((input < 0)||(input == "")){

        alert('não pode número menores que 0 e não é permitido enviar campo vazio');

    }
    else if((input >= 0)&&(input < 10)){

        document.getElementById('resultado').innerHTML = 'Insuficiente';
        document.getElementById('input').value = '';
    }
    else if((input >= 10)&&(input < 14)){

        document.getElementById('resultado').innerHTML = 'Bom';
        document.getElementById('input').value = '';

    }else if(input >= 14){
        
        document.getElementById('resultado').innerHTML = 'Muito Bom';
        document.getElementById('input').value = '';

    }
    
});


