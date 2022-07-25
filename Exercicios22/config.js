const cpf = document.getElementById('cpf');
const resultado = document.getElementById('resultado');

cpf.addEventListener('keyup', () => {
    resultado.innerHTML = cpf.value;
});