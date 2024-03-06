
class Pessoa
{
    // atributos = variáveis ou características 

    _nome
    _idade
    _peso
    _altura
    _imc
    //métodos = funções ou comportamentos 

    //Método construtor

    constructor(nome, idade, peso, altura){
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
        this._imc = this._peso / (this._altura * this._altura)
    }

    calculaImc(){
        return ( this._peso / (this._altura * this._altura) ).toFixed(2)
    }
}

// criar novo objeto a partir da classe, instanciar

let pessoa1 = new Pessoa('Adrickson Pinheiro', 19, 70.5, 1.84)
let pessoa2 = new Pessoa('Paula', 19, 60.3, 1.61)
let pessoa3 = new Pessoa('Ana', 19, 65.3, 1.65)
let pessoa4 = new Pessoa('Roberta', 21, 58.3, 1.69)

//Atribuir valores para os atributos de um objeto

/*pessoa1._nome = 'Adrickson'
pessoa1._idade = 19
pessoa1._peso = 70.5
pessoa1._altura = 1.84

pessoa2._nome = 'Paula'
pessoa2._idade = 18
pessoa2._peso = 60.3
pessoa2._altura = 1.61*/

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

console.log(pessoa1.calculaImc())
console.log(pessoa2.calculaImc())
console.log(pessoa3.calculaImc())
console.log(pessoa4.calculaImc())