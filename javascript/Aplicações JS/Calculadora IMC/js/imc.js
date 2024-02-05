
let cx_nome = document.getElementById('nome')
let cx_idade = document.getElementById('idade')
let cx_peso = document.getElementById('peso')
let cx_altura = document.getElementById('altura')
let cx_imc = document.getElementById('imc')

let btn_enviar = document.getElementById('btnEnviar')

btn_enviar.addEventListener('click', function (e) {

    let nome = cx_nome.value
    let idade = Number(cx_idade.value)
    let peso = Number(cx_peso.value)

    let soma = (idade + peso)

    // VARIAVEIS DE RETORNO

    cx_imc.value = soma

    // PREVENIR O COMPORTAMENTO PADRÃO DO FORMULÁRIO DE ENVIAR DADOS
    e.preventDefault()
})