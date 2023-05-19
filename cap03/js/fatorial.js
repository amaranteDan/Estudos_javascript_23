function fatorial(n){
    if(n === 0 || n ===1){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}

const n = 5
const resultadoFatorial = fatorial(n)

console.log(`o Fatorial de ${n} é ${resultadoFatorial}`)

