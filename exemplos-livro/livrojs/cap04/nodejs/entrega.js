const prompt = require("prompt-sync")() // adiciona pacote prompt-sync
const bairro = prompt("Bairro de entrega: ")

let taxaEntrega

switch (bairro){
    case "Centro":
        taxaEntrega = 5.00
        break
        case "Fragata":
            case "Tres Vendas":
                taxaEntrega = 7.00
                break
                case "Laranjal1":
                    taxaEntrega = 10.00
                    break
                    default:
                        taxaEntrega = 8.00

}
console.log(`Taxa R$: ${taxaEntrega.toFixed(2)}`)