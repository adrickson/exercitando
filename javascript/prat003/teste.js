
const person = {
    idade: 50,
    nome: 'Ace',
}

//document.getElementById('demo').innerHTML = `${person.idade} ${person.nome}`

let mystring = JSON.stringify(person)

document.getElementById('demo').innerHTML = `${mystring}`

