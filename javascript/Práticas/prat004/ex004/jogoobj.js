
const dadosJ = {
    titulo: 'VALORANT',
    desenvolvedor: 'RIOT',
    ano: 2020,
}

tit = document.getElementById('titulo')
tit.innerHTML = `${dadosJ.titulo}`

desen = document.querySelector('#dev')
desen.innerHTML = `${dadosJ.desenvolvedor}`

lancamento = document.getElementById('ano')
lancamento.innerHTML = `${dadosJ.ano}`