const avanca = document.querySelectorAll('.btn-choice');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const nxt = 'passo-' + this.getAttribute('data-btn');

        atual.classList.remove('ativo');
        document.getElementById(nxt).classList.add('ativo');
    })
})

console.log("OLá Mundo")



