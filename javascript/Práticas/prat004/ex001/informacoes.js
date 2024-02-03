
const dados = {

    lutador: 'Popó',
    nacionalidade: 'Brasileiro',
    idade: 44,
    peso: 106,
    altura: 1.83,

}

let result = document.getElementById('demo')

result.innerHTML = `Lutador: ${dados.lutador} <br> Nacionalidade: ${dados.nacionalidade} <br> Idade: ${dados.idade} anos<br> Peso: ${dados.peso} KG <br> Altura: ${dados.altura} M`