const av = document.querySelectorAll('.btn-choice');

av.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const nxt = 'passo-' + this.getAttribute('data-btn');

        atual.classList.remove('ativo');
        document.getElementById(nxt).classList.add('ativo')
    })
})