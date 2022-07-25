var deuses = ['Aegir', 'Aud', 'Balder'];

deuses.push('Loki');
deuses.push('Odin');
deuses.push('Frey');

console.log(deuses);
document.getElementsByClassName('resultado')[0].innerHTML = deuses[3];
document.getElementsByClassName('resultado')[1].innerHTML = deuses[4];
document.getElementsByClassName('resultado')[2].innerHTML = deuses[5];
