function sistema() {
    var cerveja = document.getElementById('cerveja')
    var refri = document.querySelector('input#refri')
    var cliente = document.getElementById('cliente')
    var res_valor = document.getElementById('res_valor')
    var res_troco = document.getElementById('res_troco')

    var num_cerveja = Number(cerveja.value)
    var num_refri = Number(refri.value)
    var num_clien = Number(cliente.value)


    if(num_cerveja < 0 || num_refri < 0){
        window.alert('ERRO')
    } else {
        var valor_cerveja = 12 * num_cerveja
        var valor_refri = 10 * num_refri

        var dinheiro_tot = valor_cerveja + valor_refri
        var troco = num_clien - dinheiro_tot

        res_valor.innerHTML = `${dinheiro_tot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        res_troco.innerHTML = `${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
        
    } if (dinheiro_tot > num_clien) {
        res_troco.style.color ='#fa4444'
        res_troco.innerHTML = `Devendo ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    }
}