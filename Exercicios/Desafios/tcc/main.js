function mostrarSenha(){
    var inputPass = document.gerElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password')
    {
        inputPass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bxs-lock-alt','bxs-lock-open-alt')
    }
    else
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bxs-lock-open-alt','bxs-lock-alt')
}