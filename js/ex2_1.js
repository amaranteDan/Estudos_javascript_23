const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// Cria um ouvinte de evento

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value  //pega o nome digitado
    resp.innerText = `Ola ${nome}` //exibe resposta do programa
    e.preventDefault() //evit envio do form.
})