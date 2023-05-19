function inverterString(str){
    return str.split("").reverse().join("")
}

const textoInverter = "Javascript"

const textoInvertido = inverterString(textoInverter)
console.log(`A string "${textoInverter} invertida é: ${textoInvertido}"`)