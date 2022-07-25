const button = document.getElementById('button');
const arrey = [];

let div = document.createElement('div');
let ul = document.createElement('ul');
div.appendChild(ul);
document.body.appendChild(div);

button.addEventListener('click',()=>{

    let input = document.getElementById('input').value;
    arrey.push(input);
    mostrar(arrey);
    document.getElementById('input').value = '';
    
})

function mostrar(){

    let li = document.createElement('li');
    ul.appendChild(li);
    arrey.map( (item)=> {

        let valor = item;
        li.innerHTML = valor;

    })

}
