
function ehPalindromo(str){
    const strInvertida = str.split("").reverse().join("");

    return str.toLowerCase() === strInvertida.toLowerCase();
}

const textoParaTeste = "Roma é amor"

const resultadoPalindromo =  ehPalindromo(textoParaTeste)

console.log(`A string "${textoParaTeste}" é um palíndromo? ${resultadoPalindromo ? "Sim" : "Não"}`)