

// COLETAR AS INFORMAÇÕES NECESSÁRIAS

let valorDigitado = document.querySelector('#valorEmReal')

//Selecionar os radios (criar um array deles)

let moedaSelecionada = document.getElementsByClassName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

//Selecionar os Botões

let btnConverter = document.querySelector('#btnConverter')
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

    aviso.innerHTML = `O valor ${valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} convertido em ${moedaEstrangeira} é ${moedaConvertida}`
}