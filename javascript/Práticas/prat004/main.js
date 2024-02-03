

class Pessoa 
{
    _nome
    _idade
    _peso 
    _altura
    imc

    constructor (nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
    }
}

let pessoa1 = new Pessoa('Edson Maia', 32, 65.3, 1.74)
let pessoa2 = new Pessoa('Maria', 28, 58.7, 1.65)

/*pessoa1._nome = 'Edson'
pessoa1._idade = 32
pessoa1._peso = 65.3
pessoa1.altura = 1.74

pessoa2._nome = 'Maria'
pessoa2._idade = 28
pessoa2._peso = 58.7
pessoa2._altura = 1.65 */

console.log(pessoa1)
console.log(pessoa2)