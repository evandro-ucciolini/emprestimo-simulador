const valorEmprestimo = 2385
const nParcelas = 12

if (valorEmprestimo >= 1000 && valorEmprestimo < 5001 && nParcelas <= 12) {

    // 16 % de Juros calculados no valor das parcelas, também, somados em cada uma delas.

    const parcelamento = valorEmprestimo / nParcelas
    const jurosParcelas = parcelamento * 16 / 100
    const parcJuros = (parcelamento + jurosParcelas).toFixed(2)
    const totalComjuros = (parcJuros * nParcelas).toFixed(2)

    console.log(`Você pagará ${nParcelas} parcelas no valor de R$ ${parcJuros}. Nessas condições, você pagará ao todo R$ ${totalComjuros}.`)

} else {

    console.log("Operação fora de limite!")

}