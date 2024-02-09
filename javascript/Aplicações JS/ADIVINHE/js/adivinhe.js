
let numeroSecreto = 0

let contador = 1

let min = 1
let max = 10

let situacao = ''

//SELECIONANDO ELEMENTOS

let numero = document.getElementById('numero')
let btnChutar = document.getElementById('btnchutar')
let aviso = document.getElementById('aviso')
let musica = document.getElementById('musica_de_fundo')

//FUNCOES PARA CONTROLAR O JOGO

//gerar número secreto

function gerarNumAleatorio(){
    numeroSecreto = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(numeroSecreto) //depois comentar essa linha
}

//Bloquear Botão de chutar

function bloquearBtnChutar(){
    btnChutar.setAttribute('disabled', 'disabled')
    btnChutar.style.backgroundColor = '#cccccc'
    btnChutar.style.cursor = 'not-allowed'
}

//Desbloquear Botão de chutar

function ativarBtnChutar(){
    btnChutar.removeAttribute('disabled')
    btnChutar.style.backgroundColor = 'rgb(220, 20, 53)'
    btnChutar.style.cursor = 'pointer'
}

//Validando Número digitado

function validarNum(numero){

    if(numero <= 0 || numero > 10 || isNaN(numero)) {

        console.log('Número Inválido')
        bloquearBtnChutar()
    } else {      
        console.log('Botão chutar ativado')
        ativarBtnChutar()
    }
}