const valorEmprestimo = 5000
const nParcelas = 1

if (valorEmprestimo >= 1000 && valorEmprestimo < 5001) {

    // 5 % de Juros calculados no valor das parcelas, também, somados em cada uma delas.

    const parcelamento = valorEmprestimo / nParcelas
    const jurosParcelas = parcelamento * 5 / 100
    const parcJuros = parcelamento + jurosParcelas

    console.log(`Você pagará ${nParcelas} parcelas no valor de R$ ${parcJuros}.`)

} else {

    console.log("Operação fora de limite!")

}