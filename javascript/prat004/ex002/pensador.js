
let frase = {
    dia: new Date(),
    mes: new Date(),
    ano: new Date(),


    full_year: function() {
        return `${this.dia.getDate()}/${this.mes.getDay()}/${this.ano.getFullYear()}`
    },

    do_dia: 'Você é mais valente do que acredita, mais forte do que parece e está mais preparado do que imagina.',
}

let retorno = document.getElementById('demo')

retorno.innerHTML = `${frase.full_year()} <br> ${frase.do_dia} <br> <br> Pensador`
