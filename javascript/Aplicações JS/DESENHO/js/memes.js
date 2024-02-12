
let somJake = document.getElementById('somJake')
let somGorila = document.getElementById('somGorila')
let somJerry = document.getElementById('somJerry')

function memeAuAu(){ 
    somJake.play()

    if(somJake.play()){
        somGorila.pause()
        somGorila.currentTime = 0

        somJerry.pause()
        somJerry.currentTime = 0
    }
}

function memeGorila(){
    somGorila.play()

    if(somGorila.play()){
        somJake.pause()
        somJake.currentTime = 0

        somJerry.pause()
        somJerry.currentTime = 0
    }
}

function memeJerry(){
    somJerry.play()

    if(somJerry.play()){

        somJake.pause()
        somJake.currentTime = 0

        somGorila.pause()
        somGorila.currentTime = 0
    }
}

// PARAR MUSICAS REPRODUZIDAS COM CLIQUE DUPLO

function pararMusica(){
    somJake.pause()
    somJake.currentTime = 0

    somGorila.pause()
    somGorila.currentTime = 0

    somJerry.pause()
    somJerry.currentTime = 0
}