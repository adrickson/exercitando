
function somaSimples(){

class Soma{

    pNum
    sNum

    constructor(pNum, sNum){

        this.pNum = pNum
        this.sNum = sNum
    }

    somador(){
        return ((this.pNum + this.sNum))
    }

}
var num1 = Number(document.getElementById('num1').value)
var num2 = Number(document.getElementById('num2').value)
var retornoVisual = document.getElementById('saida_resultado')

var calc = new Soma(num1, num2)
console.log(`O resultado da soma é ${calc.somador()}`)

retornoVisual.innerHTML = `${num1} + ${num2} = <strong>${calc.somador()}</strong>`

// FAZER ÁREA DE LIMPAR

var limpar = document.getElementById('btn_limpar')

limpar.addEventListener('click', () => {

    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    retornoVisual.innerHTML = ''
})

}




