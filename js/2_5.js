const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Criando o Listener.

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inMinuto.value)
    const tempo = Number(frm.inUso.value)

    //Calcula o valor a pagar(arredonda para cima)

    const pagar = Math.ceil(tempo / 15) * valor

    resp.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`
    e.preventDefault() //evita o envio do form
})