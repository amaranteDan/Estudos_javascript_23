const altura = 1.73
const peso = 72

function calcularImc(altura, peso){
    return (peso / (altura * altura)).toFixed(2)


}
const imc = calcularImc(altura, peso)

console.log(`O seu imc e: ${imc}`)