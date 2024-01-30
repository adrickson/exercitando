
let frase = {
    dia: new Date(),
    mes: new Date(),
    ano: new Date(),


    full_year: function() {

        const mes = this.mes.getMonth() + 1

        return `${this.dia.getDate()}/${mes}/${this.ano.getFullYear()}`
    },

    do_dia: 'Você é mais forte do que pensa e está mais preparado do que imagina',
}

let retorno = document.getElementById('demo')

retorno.innerHTML = `${frase.full_year()} <br> ${frase.do_dia} <br> <br> Pensador`
