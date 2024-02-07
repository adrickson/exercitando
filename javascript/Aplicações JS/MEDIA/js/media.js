let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')

let cxMedia = document.querySelector('#media')
let cxSit = document.querySelector('#situacao')
let aviso = document.querySelector('#aviso')

let btnCalcular = document.querySelector('#btn_calcular')
let btnLimpar = document.querySelector('#btn_limpar')


//CALCULAR MÉDIA
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
}

//DEFINIR SITUAÇÃO FINAL COM BASE NA MÉDIA

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''

    if(mediaFinal >= 6 && mediaFinal <= 10){
        situacaoFinal = 'Aprovado(a)'
    }else if (mediaFinal >= 4 && mediaFinal <= 5.9){
        situacaoFinal = 'Recuperação'
    } else {
        situacaoFinal = 'Reprovado(a)'
    }

    return situacaoFinal
}

//FORMATAR A CAIXA DE SITUAÇÃO FINAL

function formatarSituacao(situacaoFinal) {

    switch(situacaoFinal) {
        case 'Aprovado(a)' :

            cxSit.classList.remove('reprovado')
            cxSit.classList.remove('recuparecao')

            cxSit.classList.add('aprovado')

        break

        case 'Recuperação' :

        cxSit.classList.remove('aprovado')
        cxSit.classList.remove('reprovado')

        cxSit.classList.add('recuperacao')

        break

        case 'Reprovado(a)' :

        cxSit.classList.remove('aprovado')
        cxSit.classList.remove('recuperacao')

        cxSit.classList.add('reprovado')

        break
    }

}

// VALIDAR NÚMERO

function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value

    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {

        cxNota1.value = ''
        cxNota2.value = ''

        aviso.innerHTML = `INFORME NÚMEROS ENTRE 0.0 E 10.0 PARA DAR PROSSEGUIMENTO!`
        aviso.classList.add('aviso')

        setTimeout(function (){
            aviso.innerHTML = ''
            aviso.classList.remove('aviso')
        }, 2500)
    }
}

// CALCULAR MÉDIA APÓS O CLICK DO BOTÃO
btnCalcular.addEventListener('click', function (e) {

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)

    let media = calcularMedia(nota1, nota2)

    if(isNaN(media) || media < 0) {
        cxSit.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSit.value = situacaoFinal(media)

        formatarSituacao(situacaoFinal(media))
    }

    e.preventDefault()
})

// REMOVER CLASSES DA SITUAÇÃO FINAL QUANDO CLICAR NO BOTÃO LIMPAR

btnLimpar.addEventListener('click', function() {

    cxSit.classList.remove('aprovado')
    cxSit.classList.remove('recuperacao')
    cxSit.classList.remove('reprovado')

})