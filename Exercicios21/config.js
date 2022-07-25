const button = document.querySelector('button');

button.addEventListener('click',() => {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    alert('Ola '+nome+" "+sobrenome);
});