function carregou() {
    console.log('página carregada com sucesso.')
}

function focou() {
    console.log ('foco no título')
}

function focoNoCampo() {
    console.log('Foco no campo de Texto')
}



function avisarQueTeclou() {
    let letras = document.querySelector('input[type=text]')
    let numLetras = 1
    console.log('Está telcando ' + (letras.value.length + numLetras) )
}