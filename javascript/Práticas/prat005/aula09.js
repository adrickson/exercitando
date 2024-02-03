
let texto = document.querySelector('h1')

let imagem = document.querySelector('#foto')

imagem.setAttribute('src', 'valoras.jpg')
imagem.setAttribute('width', '280px')

texto.style.color = 'orange'

let box = document.querySelectorAll('.box')

box[0].setAttribute('class', 'azul')

let tela = document.querySelector('main')

let btnlight = document.querySelector('#btlight')
let btndark = document.querySelector('#btdark')


let siteTodo = document.querySelector('body')

function modoLight() {
    siteTodo.classList.add('light')
    siteTodo.classList.remove('dark')
}

function modoDark() {
    siteTodo.classList.add('dark')
    siteTodo.classList.remove('light')
}