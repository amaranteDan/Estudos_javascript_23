const numero1 = 37
const numero2 = 3

function verificaDivisibilidade(n1, n2){
    return n1 % n2 === 0
}

const divisivel = verificaDivisibilidade(numero1, numero2)

console.log(`O numero ${numero1} é divisivel por ${numero2}? ${divisivel ? "Sim" : "Não"}`)