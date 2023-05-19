const nome = "Daniel"
const idade = 42
const cidade = "Sao Paulo"


function criarMensagem(nome, idade, cidade){
    return `O seu nome é ${nome}, sua idade: ${idade}, cidade: ${cidade}`
}

const mensagem = criarMensagem(nome, idade, cidade)

console.log(mensagem)