const caixas = Array.from(document.querySelectorAll('.caixa'));
const caixaPai = document.getElementById('caixa-pai');

caixaPai.addEventListener('click', event => {
    
    const caixaClique = event.target;
    
    if(caixas.includes(caixaClique)) {

        let name = caixaClique.getAttribute('name');
        caixaClique.innerHTML = 'caixa '+name+' ativada';
        
    }
    
});


