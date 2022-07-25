const button = document.getElementById('button');

button.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    let arrey = [];  
    let index = Number(input);

    for (let i = 1; i <= index; i++) {
        arrey.push(i);    
    }
    console.log(arrey);
    let resultado = arrey.map( function (item) {
        return item;
    })
    document.getElementById('resultado').innerHTML = resultado;
    
});


