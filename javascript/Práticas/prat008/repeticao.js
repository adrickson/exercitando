
// USANDO FOREACH

let frutas = ['maçã', 'pêra', 'uva']

let recebe = document.querySelector('#res')

frutas.forEach(function(fruta, i) {
    
    recebe.innerHTML = `${frutas}`
})

