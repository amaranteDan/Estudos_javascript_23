//Quantidade e de consumo ração do Gato.

const prompt = require("prompt-sync")()
const pesoKg = Number(prompt("Peso da Ração (KG): ")) //pega a quantidade de ração
const consumo = Number(prompt("Consumo Diario(gr): ")) // pega quanto consume diariamente
const pesoGr = pesoKg * 1000 // variavel auxiliar pesoGR 
const duracao = Math.floor(pesoGr / consumo) //Math.floor arredonda pra baixo.
const sobra = pesoGr % consumo
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)

