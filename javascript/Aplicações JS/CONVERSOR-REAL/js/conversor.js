

// COLETAR AS INFORMAÇÕES NECESSÁRIAS

let valorDigitado = document.querySelector('#valorEmReal')

//Selecionar os radios (criar um array deles)

let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

//Selecionar os Botões

let btnConverter = document.getElementById('btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

//COTAÇÕES DO DIA 14/02/2024

let valorDoDolar = 4.95
let valorDoEuro = 5.31
let valorDaLibra = 6.22
let valorEmReal = 0

let moedaEstrangeira = ''
let moedaConvertida = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETÁRIOS 

function mensagemFormatada(moedaConvertida){
    isNaN(valorEmReal) ? valorEmReal = 0 : valorEmReal = ''

    console.log('Moeda Convertida:' + moedaConvertida)

    aviso.innerHTML = `O valor ${valorEmReal} convertido em ${moedaEstrangeira} é igual a ${moedaConvertida}`
}

//VERIFICAR SE ALGUM VALOR FOI DIGITADO PARA PODER CONVERTER

function bloquearBotao(){
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null){
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.backgroundColor = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// REABILITAR BOTÃO

function ativarBotao(){
    if(valorDigitado.value > 0){
        btnConverter.removeAttribute('disabled')
        btnConverter.style.backgroundColor = '#daa520'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Botão não ativado')
    }
}

// CRIAR FUNÇÃO DE CLIQUE PARA EXECUTAR A CONVERSÃO

btnConverter.addEventListener('click', function(){


    valorEmReal = parseFloat(valorDigitado.value)

    for(let i = 0; i < moedaSelecionada.length; i++){

        if(moedaSelecionada[i].checked){

            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)

        }
    }

    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''

})

// CRIAR FUNÇÃO PARA LIMPAR OS DADOS

btnLimpar.addEventListener('click', function(){

    valorDigitado.focus()
    valorDigitado.value = ''

    moedaSelecionada[0].checked = ''
    moedaSelecionada[1].checked = ''
    moedaSelecionada[2].checked = ''

    aviso.innerHTML = 'Digite o valor, escolha a moeda e converter.'
    
})