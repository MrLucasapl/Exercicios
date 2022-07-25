const input = document.querySelector('input');
const resultado = document.getElementById('resultado');

input.addEventListener('keyup', () => {
    
    let cpf = document.getElementById('cpfPoint').value;
    resultado.innerHTML = cpf.replace(/\D+/g, "");

});

