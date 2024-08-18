function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'Password')
    {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bxs-lock-alt','bxs-lock-open-alt')
    }
    else
        inputPass.setAttribute('type','Password')
        btnShowPass.classList.replace('bxs-lock-open-alt','bxs-lock-alt')
}