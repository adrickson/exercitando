
let cx_nome = document.getElementById('nome')
let cx_idade = document.getElementById('idade')
let cx_peso = document.getElementById('peso')
let cx_altura = document.getElementById('altura')
let cx_imc = document.getElementById('imc')
let definicao = document.getElementById('definicao')

let btn_enviar = document.getElementById('btnEnviar')

btn_enviar.addEventListener('click', function (e) {

    //CALCULO IMC

    let nome = cx_nome.value
    let idade = Number(cx_idade.value)
    let peso = Number(cx_peso.value)
    let altura = Number(cx_altura.value)

    let soma_imc = (peso / (altura * altura)).toFixed(2)

    // SITUAÇÃO DA PESSOA ATRAVÉS DO RESULTADO DO IMC

    let sit = situacaoPeso(soma_imc)

    // VARIAVEIS DE RETORNO

    cx_imc.value = soma_imc
    definicao.innerHTML = sit

    // PREVENIR O COMPORTAMENTO PADRÃO DO FORMULÁRIO DE ENVIAR DADOS
    e.preventDefault()
})

function situacaoPeso(soma_imc) {
    let situacao = ''

    if (soma_imc < 18.5) {
        situacao = 'Baixo Peso'
    } else if (soma_imc >= 18.5 && soma_imc <= 24.9) {
        situacao = 'Peso Normal'
    } else if (soma_imc >= 25 && soma_imc <= 29.9){
        situacao = 'Acima do Peso'
    }

    return situacao

}