const data = new Date();
console.log(data);

let dia = data.getDate();
let mes = data.toLocaleString('default',{month:'long'});
let ano = data.getFullYear();

const resultado = document.querySelectorAll('.resultadodata');

resultado[0].innerText = 'Dia '+dia +' '+mes+' '+ano;