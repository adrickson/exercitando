
// CHAMAR A FUNÇÃO 

function calculo() {

    // RECEBENDO VALORES EM STRING

    let txt_itaipava = document.getElementById('itaipava')
    let txt_brahma = document.getElementById('brahma')
    let txt_devassa = document.getElementById('devassa')
    let txt_heineken = document.getElementById('heineken')

    let txt_coca = document.getElementById('coca')
    let txt_guarana = document.getElementById('guarana')
    let txt_pepsi = document.getElementById('pepsi')
    let txt_kuat = document.getElementById('kuat')

    
    // CONVERSÃO DE STRING PARA NUMBER

    let itaipava_p = Number(txt_itaipava.value)
    let brahma_p = Number(txt_brahma.value)
    let devassa_p = Number(txt_devassa.value)
    let heineken_p = Number(txt_heineken.value)

    let coca_1l = Number(txt_coca.value)
    let guarana_1l = Number(txt_guarana.value)
    let pepsi_1l = Number(txt_pepsi.value)
    let kuat_1l = Number(txt_kuat.value)

    // COLETANDO VALOR RECEBIDO

    let txt_dinheiro = document.getElementById('dinheiro')

    //Conversão em Número do dinheiro do cliente.
    let dinheiro = Number(txt_dinheiro.value) 

    //COLETANDO TROCO

    let txt_troco = document.getElementById('troco')

    if(dinheiro === 0) {
        window.alert('[ERRO] Informe o Valor Recebido')
    } else {

        // CALCULO SOMA TOTAL

        let cervejas_p = (itaipava_p * 26) + (brahma_p * 38) + (devassa_p * 28) + (heineken_p * 50)

        let refri_1l = (coca_1l * 7) + (guarana_1l * 5) + (pepsi_1l * 5) + (kuat_1l * 4)

        let soma_tot = cervejas_p + refri_1l

        // CALCULO DE TROCO

        let calc_troco = dinheiro - soma_tot

        // Variáveis de Retorno

        let valor_tot = document.getElementById('valor_tot')

        valor_tot.innerHTML = soma_tot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        txt_troco.innerHTML = calc_troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    

}