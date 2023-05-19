
function elementoMaisFrequente(arr){
    const contador = {}

    let elemento = arr[0]
    let maxContagem = 1;
    //Acessando o array sem percorrer (of arr)
    for(const valor of arr){
        if(!contador[valor]){
            contador[valor] = 1 ;
        }else{
            contador[valor]++ 
        }
        if(contador[valor] > maxContagem){
            maxContagem = contador[valor];
            elemento = valor
        }
    }
    return elemento
}

const numeros = [2,3,4,5,6,7,7,7,9,9,0,1,2,5,8]

const resultadoFrequencia = elementoMaisFrequente(numeros)
console.log(`O elemento mais frequente é: ${resultadoFrequencia}`)