const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const med = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const desconto = preco * 0.20
    const compra = preco -desconto 
    resp.innerText = `Promoção - Leve 2 por apenas R$: ${compra.toFixed(2)}`
    e.preventDefault()
})