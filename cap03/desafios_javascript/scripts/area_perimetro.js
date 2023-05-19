const comprimento = 10
const largura = 5

function calcularArea(comprimento, largura){
    return comprimento * largura
}

function calcularPerimetro(comprimento, largura){
    return (2 * comprimento)+ (2 * largura)

}

const area = calcularArea(comprimento, largura)
const perimetro = calcularPerimetro(comprimento, largura)

console.log(`A Area é ${area}, e o perimetro e: ${perimetro}`)

