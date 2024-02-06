
let cx_nome = document.getElementById('nome')
let cx_idade = document.getElementById('idade')
let cx_peso = document.getElementById('peso')
let cx_altura = document.getElementById('altura')
let cx_imc = document.getElementById('imc')

let definicao = document.getElementById('definicao')
let dadosP = document.querySelectorAll('.pessoa')

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

    // CRIANDO OBJ PESSOA

    let pessoa = {
        nome : nome,
        idade : idade,
        peso : peso,
        altura: altura,
        imc: soma_imc,
        sit: sit,
    }

    // VARIAVEIS DE RETORNO

    cx_imc.value = soma_imc
    definicao.innerHTML = sit
    dadosP[0].innerHTML = `Nome: <strong>${pessoa.nome}</strong>`
    dadosP[1].innerHTML = `Idade: <strong>${pessoa.idade}</strong>`
    dadosP[2].innerHTML = `Peso: <strong>${pessoa.peso}Kg</strong>`
    dadosP[3].innerHTML = `Altura: <strong>${pessoa.altura}m</strong>`
    dadosP[4].innerHTML = `IMC: <strong>${pessoa.imc}</strong>`
    dadosP[5].innerHTML = `Situação Atual: <strong>${pessoa.sit}</strong>`

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
    } else if (soma_imc >= 30 && soma_imc <= 34.9) {
        situacao = 'Obesidade Grau 1'
    } else if (soma_imc >= 35 && soma_imc <= 40) {
        situacao = 'Obesidade Grau 2'
    } else if(soma_imc >= 40) {
        situacao = 'Obesidade Grau 3'
    } else {
        situacao = 'Informe seu peso corretamente'
    }

    return situacao

}