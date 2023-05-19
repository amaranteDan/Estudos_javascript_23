
//Exercicio de Fibonacci

const z = 625

function finonacciAteN(n){
    let a = 0
    let b = 1

    let sequencia = []

    while (a <= n){
        sequencia.push(a)
        const temp = a;
        a = b;
        b = temp + a
    }
    return sequencia

}

const sequenciaFinonacci = finonacciAteN(z)
console.log(`A sequencia é ${z}`, sequenciaFinonacci)