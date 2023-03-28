const prompt = require('prompt-sync')();
const veiculo = prompt('Veiculo: ') //le os dados do veiculo
const preco = Number(prompt('Preco:R$  ')) // pega o preco
const entrada = preco * 0.50
const parcela = (preco * 0.50) / 12
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada: ${entrada.toFixed(2)}`)
console.log(`+12 X de R$: ${parcela.toFixed()}`)

