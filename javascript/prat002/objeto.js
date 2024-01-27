const pessoa = {
    pNome: 'Portgas',
    sNome: 'D. Ace',
    idade: 30,
    fullName: function () {
        return this.pNome + " " + this.sNome
    }
}

// Acessando Propriedades do Objeto

// Você pode acessar as propriedades do objeto de 2 maneiras:

/*

    objectName.propertyName

    ou

    objectName["propertyName"]

    EXEMPLOS:

*/

console.log(pessoa.pNome) 

console.log(pessoa['sNome'])

console.log(pessoa.fullName())
