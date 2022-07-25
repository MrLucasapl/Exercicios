const caixas = Array.from(document.querySelectorAll('.caixa'));
const caixaPai = document.getElementById('caixa-pai');

caixaPai.addEventListener('click', event => {
    
    const caixaClique = event.target;
    let name = caixaClique.getAttribute('name');
    
    if(name != 1) {

        caixaClique.innerHTML = 'Perdeu o Foco';
        
    }
    else{

        caixaClique.innerHTML = 'Esta com Foco';
        
    }
    
});


