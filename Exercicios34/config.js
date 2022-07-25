const data = new Date();
console.log(data);

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'devembro'];

let dia = data.getDate();
let mes = (data.getMonth() == 11) ? 0 : data.getMonth()+1;
let ano = data.getFullYear();

const resultado = document.querySelector('.resultadodata');

resultado.innerText = 'Dia '+dia +' '+meses[mes]+' '+ano;