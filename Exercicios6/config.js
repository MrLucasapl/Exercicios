const salvar = document.getElementById('salvar');
const limpar = document.getElementById('limpar');
const mostrar = document.getElementById('mostrar');

const arrey = [];

salvar.addEventListener('click', () => {

    arrey.push(document.getElementById('nomes').value);
    document.getElementById('nomes').value = "";    
    
});

limpar.addEventListener('click', () => {

    document.getElementById('nomes').value = "";
    location.reload();

});

mostrar.addEventListener('click', () => {

    arrey.reverse();
    arrey.map( function (item) {

        let li = document.createElement('li');
        li.innerHTML = item;
        document.getElementById('lista').appendChild(li);

    });

});
    