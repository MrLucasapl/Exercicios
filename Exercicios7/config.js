const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

let data;

salvar.addEventListener('click', () => {

    data = document.getElementById('data').value + 'T00:00:00';
    document.getElementById('data').value = "";    
    
});

limpar.addEventListener('click', () => {

    document.getElementById('nomes').value = "";
    location.reload();

});

mostrar.addEventListener('click', () => {

    const NovaData = new Date(data);

    let dia = NovaData.getDate();
    let mes = NovaData.toLocaleString('default',{month:'long'});
    let ano = NovaData.getFullYear();

    const resultado = document.querySelectorAll('.resultadodata');
    console.log(resultado);
    resultado[0].innerText = 'Dia: '+dia;
    resultado[1].innerHTML = 'Mes: '+mes;
    resultado[2].innerHTML = 'Ano: '+ano;


});
    